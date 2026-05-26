import type { VercelRequest, VercelResponse } from "@vercel/node";

const RESEND_API_KEY = process.env.RESEND_API_KEY!;
const GMAIL_ADDRESS = process.env.GMAIL_ADDRESS!;
const FROM_ADDRESS = process.env.FROM_ADDRESS!;

function validate(
	body: any,
): { name: string; email: string; message: string } | null {
	if (!body || typeof body !== "object") return null;
	const { name, email, message } = body;
	if (typeof name !== "string" || name.trim().length === 0) return null;
	if (typeof email !== "string" || !email.includes("@")) return null;
	if (typeof message !== "string" || message.trim().length === 0) return null;
	return { name: name.trim(), email: email.trim(), message: message.trim() };
}

async function sendEmail(
	subject: string,
	html: string,
	text: string,
): Promise<boolean> {
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
			html,
			text,
		}),
	});
	return res.ok;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
	if (req.method !== "POST") {
		return res.status(405).json({ error: "Method not allowed" });
	}

	const data = validate(req.body);
	if (!data) {
		return res
			.status(400)
			.json({ error: "Name, email, and message are required." });
	}

	const subject = `[Portfolio] Message from ${data.name}`;
	const text = [
		`Name: ${data.name}`,
		`Email: ${data.email}`,
		"",
		data.message,
	].join("\n");
	const html = [
		`<p><strong>Name:</strong> ${escapeHtml(data.name)}</p>`,
		`<p><strong>Email:</strong> ${escapeHtml(data.email)}</p>`,
		"<p><strong>Message:</strong></p>",
		`<p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>`,
	].join("\n");

	try {
		const ok = await sendEmail(subject, html, text);
		if (!ok) {
			return res.status(500).json({ error: "Failed to send message." });
		}
	} catch {
		return res.status(500).json({ error: "Failed to send message." });
	}

	return res.status(200).json({ ok: true });
}

function escapeHtml(text: string): string {
	return text
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
}
