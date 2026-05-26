import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock global fetch before importing the handler
const mockFetch = vi.fn();
vi.stubGlobal("fetch", mockFetch);

// We need to mock process.env before the module loads
vi.stubEnv("RESEND_API_KEY", "re_test_key");
vi.stubEnv("GMAIL_ADDRESS", "decalorodrigo@gmail.com");
vi.stubEnv("FROM_ADDRESS", "contact@rodrigolopes.xyz");

// Dynamic import so env stubs take effect
const { default: handler } = await import("../../api/contact");

function mockReq(method: string, body: unknown) {
	return {
		method,
		body,
	} as any;
}

function mockRes() {
	const res: any = {
		statusCode: 200,
		body: null,
		status(code: number) {
			this.statusCode = code;
			return this;
		},
		json(data: unknown) {
			this.body = data;
			return this;
		},
	};
	return res;
}

beforeEach(() => {
	mockFetch.mockReset();
});

describe("api/contact", () => {
	it("rejects non-POST methods", async () => {
		const res = mockRes();
		await handler(mockReq("GET", null), res);
		expect(res.statusCode).toBe(405);
		expect(res.body).toEqual({ error: "Method not allowed" });
	});

	it("rejects empty body", async () => {
		const res = mockRes();
		await handler(mockReq("POST", null), res);
		expect(res.statusCode).toBe(400);
	});

	it("rejects missing name", async () => {
		const res = mockRes();
		await handler(mockReq("POST", { email: "a@b.com", message: "hi" }), res);
		expect(res.statusCode).toBe(400);
	});

	it("rejects invalid email", async () => {
		const res = mockRes();
		await handler(
			mockReq("POST", { name: "Alice", email: "not-an-email", message: "hi" }),
			res,
		);
		expect(res.statusCode).toBe(400);
	});

	it("rejects empty message", async () => {
		const res = mockRes();
		await handler(
			mockReq("POST", { name: "Alice", email: "a@b.com", message: "  " }),
			res,
		);
		expect(res.statusCode).toBe(400);
	});

	it("sends email via Resend on valid submission", async () => {
		mockFetch.mockResolvedValueOnce({ ok: true });

		const res = mockRes();
		await handler(
			mockReq("POST", {
				name: "Alice",
				email: "alice@example.com",
				message: "Hello, I'd like to connect.",
			}),
			res,
		);

		expect(res.statusCode).toBe(200);
		expect(res.body).toEqual({ ok: true });

		expect(mockFetch).toHaveBeenCalledOnce();
		const [url, init] = mockFetch.mock.calls[0];
		expect(url).toBe("https://api.resend.com/emails");

		const payload = JSON.parse(init.body);
		expect(payload.from).toBe("contact@rodrigolopes.xyz");
		expect(payload.to).toEqual(["decalorodrigo@gmail.com"]);
		expect(payload.subject).toContain("Alice");
		expect(payload.html).toContain("alice@example.com");
		expect(payload.html).toContain("Hello, I&#039;d like to connect.");
		expect(payload.text).toContain("Name: Alice");
		expect(payload.text).toContain("Email: alice@example.com");
		expect(payload.text).toContain("Hello, I'd like to connect.");
	});

	it("returns 500 when Resend fails", async () => {
		mockFetch.mockResolvedValueOnce({ ok: false });

		const res = mockRes();
		await handler(
			mockReq("POST", {
				name: "Bob",
				email: "bob@example.com",
				message: "Test",
			}),
			res,
		);

		expect(res.statusCode).toBe(500);
		expect(res.body).toEqual({ error: "Failed to send message." });
	});

	it("escapes HTML in name and message", async () => {
		mockFetch.mockResolvedValueOnce({ ok: true });

		const res = mockRes();
		await handler(
			mockReq("POST", {
				name: '<script>alert("xss")</script>',
				email: "x@y.com",
				message: '<b>bold</b> & "quoted"',
			}),
			res,
		);

		const payload = JSON.parse(mockFetch.mock.calls[0][1].body);
		expect(payload.html).not.toContain("<script>");
		expect(payload.html).toContain("&lt;script&gt;");
		expect(payload.html).toContain("&lt;b&gt;bold&lt;/b&gt;");
		expect(payload.html).toContain("&amp;");
		expect(payload.html).toContain("&quot;quoted&quot;");
	});

	it("returns 500 when Resend fetch throws", async () => {
		mockFetch.mockRejectedValueOnce(new Error("Network error"));

		const res = mockRes();
		await handler(
			mockReq("POST", {
				name: "Alice",
				email: "alice@example.com",
				message: "Hello",
			}),
			res,
		);

		expect(res.statusCode).toBe(500);
		expect(res.body).toEqual({ error: "Failed to send message." });
	});

	it("trims whitespace from inputs", async () => {
		mockFetch.mockResolvedValueOnce({ ok: true });

		const res = mockRes();
		await handler(
			mockReq("POST", {
				name: "  Alice  ",
				email: "  alice@example.com  ",
				message: "  Hello  ",
			}),
			res,
		);

		const payload = JSON.parse(mockFetch.mock.calls[0][1].body);
		expect(payload.subject).toContain("Alice");
		expect(payload.html).toContain("alice@example.com");
	});
});
