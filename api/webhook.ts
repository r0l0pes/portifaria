import type { VercelRequest, VercelResponse } from "@vercel/node";

const RESEND_API_KEY = process.env.RESEND_API_KEY!;
const TAVILY_API_KEY = process.env.TAVILY_API_KEY!;
const GMAIL_ADDRESS = process.env.GMAIL_ADDRESS!; // decalorodrigo@gmail.com
const FROM_ADDRESS = process.env.FROM_ADDRESS!; // contact@rodrigolopes.xyz

// ─── Keyword Classification ────────────────────────────────────────────

const REJECTION_KEYWORDS = [
	"not able to advance",
	"not moving forward",
	"will not be moving forward",
	"decided not to",
	"not been shortlisted",
	"not to proceed",
	"unsuccessful",
	"other candidates",
	"another candidate",
	"position has been filled",
	"we are unable to offer",
	"not the right fit",
	"leider müssen wir",
	"leider keine positive",
	"absage",
	"nicht in die engere",
	"no podemos continuar",
	"no hemos seleccionado",
];

const INTERVIEW_KEYWORDS = [
	"excited to move forward",
	"next step",
	"schedule an interview",
	"book an interview",
	"pick a time",
	"scheduling link",
	"interview invitation",
	"invite you to interview",
	"would like to interview",
	"calendar link",
	"ashbyhq.com/meeting",
	"einladung zum vorstellungsgespräch",
	"entrevista",
];

function classifyEmail(
	subject: string,
	body: string,
): "rejection" | "interview" | "other" {
	const text = (subject + " " + body).toLowerCase();

	for (const kw of INTERVIEW_KEYWORDS) {
		if (text.includes(kw.toLowerCase())) return "interview";
	}

	for (const kw of REJECTION_KEYWORDS) {
		if (text.includes(kw.toLowerCase())) return "rejection";
	}

	return "other";
}

// ─── DPO Email Search ──────────────────────────────────────────────────

async function searchDPOEmail(companyName: string): Promise<string | null> {
	if (!TAVILY_API_KEY) return null;

	const queries = [
		`${companyName} privacy email address`,
		`${companyName} DPO email address`,
		`${companyName} data protection officer email`,
	];

	for (const query of queries) {
		try {
			const res = await fetch("https://api.tavily.com/search", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					api_key: TAVILY_API_KEY,
					query,
					search_depth: "basic",
					max_results: 5,
				}),
			});

			const data = (await res.json()) as {
				results?: Array<{ content: string; url: string }>;
			};

			for (const r of data.results ?? []) {
				// Extract email from content
				const emailMatch = r.content.match(
					/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
				);
				if (emailMatch) {
					const email = emailMatch[0].toLowerCase();
					// Filter out common non-DPO addresses
					if (
						!email.includes("noreply") &&
						!email.includes("no-reply") &&
						!email.includes("donotreply") &&
						!email.includes("support@") &&
						!email.includes("info@") &&
						!email.includes("hello@") &&
						!email.includes("careers@") &&
						!email.includes("jobs@") &&
						!email.includes("recruiting@")
					) {
						return email;
					}
				}
			}
		} catch (_) {
			// Tavily query failed, try next query
		}
	}

	return null;
}

// ─── Fetch Email Body from Resend API ───────────────────────────────

async function fetchEmailBody(emailId: string): Promise<string> {
	try {
		const res = await fetch(
			`https://api.resend.com/emails/receiving/${emailId}`,
			{
				headers: {
					Authorization: `Bearer ${RESEND_API_KEY}`,
				},
			},
		);
		if (!res.ok) return "";
		const data = await res.json();
		return data.html || data.text || "";
	} catch {
		return "";
	}
}

// ─── Email Forwarding ──────────────────────────────────────────────────

async function forwardEmail(subject: string, body: string, fromName: string) {
	const res = await fetch("https://api.resend.com/emails", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${RESEND_API_KEY}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			from: FROM_ADDRESS,
			to: [GMAIL_ADDRESS],
			subject,
			html: `<p><strong>From:</strong> ${fromName}</p><hr/><pre style="white-space:pre-wrap;font-family:inherit;">${body}</pre>`,
			text: `From: ${fromName}\n---\n${body}`,
		}),
	});

	return res.ok;
}

// ─── Main Handler ──────────────────────────────────────────────────────

export default async function handler(req: VercelRequest, res: VercelResponse) {
	if (req.method !== "POST") {
		return res.status(405).json({ error: "Method not allowed" });
	}

	let event: { type: string; data: any };
	try {
		event = req.body;
	} catch {
		return res.status(400).json({ error: "Invalid JSON" });
	}

	if (event.type !== "email.received") {
		return res.status(200).json({ ok: true });
	}

	const { from, subject } = event.data;
	const senderEmail =
		typeof from === "string"
			? from.match(/<([^>]+)>/)?.[1] || from
			: from || "";
	const senderDomain = senderEmail.split("@")[1] || "";
	// Fetch email body from Resend API using the email_id
	const body = await fetchEmailBody(event.data.email_id);
	const forwardingBody = body || JSON.stringify(event.data, null, 2);

	const classification = classifyEmail(subject || "", body);
	let taggedSubject = subject || "(no subject)";

	switch (classification) {
		case "interview": {
			taggedSubject = `[INTERVIEW] ${taggedSubject}`;

			await forwardEmail(taggedSubject, forwardingBody, from);

			console.log(`[INTERVIEW] ${subject} from ${senderEmail}`);
			break;
		}

		case "rejection": {
			taggedSubject = `[REJECTED] ${taggedSubject}`;

			const companyName =
				(senderDomain && senderDomain.split(".").slice(-2, -1)[0]) ||
				senderDomain;
			const dpoEmail = await searchDPOEmail(companyName);

			let dpoNote = "";
			if (dpoEmail) {
				dpoNote = `\n\n———\nGDPR: DPO contact found at ${dpoEmail}. Send a deletion request to have your data removed.`;
			}

			// Re-forward with DPO note appended
			await forwardEmail(taggedSubject, forwardingBody + dpoNote, from);
			break;
		}

		default: {
			taggedSubject = `[APPLIED] ${taggedSubject}`;

			await forwardEmail(taggedSubject, forwardingBody, from);

			console.log(`[APPLIED] ${subject} from ${senderEmail}`);
			break;
		}
	}

	return res.status(200).json({ ok: true, classification });
}
