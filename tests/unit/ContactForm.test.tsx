import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactForm } from "../../src/components/sections/Contact";

// Mock analytics
vi.mock("../../src/components/Analytics", () => ({
	logEvent: vi.fn(),
}));

// Mock framer-motion to avoid animation issues in tests
vi.mock("framer-motion", () => ({
	motion: {
		div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
		button: ({ children, ...props }: any) => (
			<button {...props}>{children}</button>
		),
		a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
	},
	AnimatePresence: ({ children }: any) => <>{children}</>,
}));

// Mock ShinyButton to render as a plain button
vi.mock("../ui/ShinyButton", () => ({
	ShinyButton: ({ children, type, disabled, className, ...props }: any) => (
		<button type={type} disabled={disabled} className={className} {...props}>
			{children}
		</button>
	),
}));

beforeEach(() => {
	// @ts-expect-error
	globalThis.fetch = vi.fn();
});

describe("ContactForm", () => {
	it("renders the form with all fields", () => {
		render(<ContactForm />);

		expect(screen.getByLabelText("Name")).toBeInTheDocument();
		expect(screen.getByLabelText("Email")).toBeInTheDocument();
		expect(screen.getByLabelText("Message")).toBeInTheDocument();
		expect(
			screen.getByRole("button", { name: "Send Message & Connect" }),
		).toBeInTheDocument();
	});

	it("shows submitting state while sending", async () => {
		// Delay the response so we can observe the submitting state
		(globalThis.fetch as any).mockImplementation(
			() =>
				new Promise((resolve) => setTimeout(() => resolve({ ok: true }), 100)),
		);

		render(<ContactForm />);

		const user = userEvent.setup();
		await user.type(screen.getByLabelText("Name"), "Alice");
		await user.type(screen.getByLabelText("Email"), "alice@example.com");
		await user.type(screen.getByLabelText("Message"), "Hello!");
		await user.click(
			screen.getByRole("button", { name: "Send Message & Connect" }),
		);

		expect(
			screen.getByRole("button", { name: "Sending..." }),
		).toBeInTheDocument();
	});

	it("shows success message on successful submission", async () => {
		(globalThis.fetch as any).mockResolvedValueOnce({ ok: true });

		render(<ContactForm />);

		const user = userEvent.setup();
		await user.type(screen.getByLabelText("Name"), "Alice");
		await user.type(screen.getByLabelText("Email"), "alice@example.com");
		await user.type(screen.getByLabelText("Message"), "Hello, let's connect!");
		await user.click(
			screen.getByRole("button", { name: "Send Message & Connect" }),
		);

		await waitFor(() => {
			expect(screen.getByText("Message Sent!")).toBeInTheDocument();
		});

		expect(screen.getByText(/Thanks for reaching out/)).toBeInTheDocument();
	});

	it("shows error message on failed submission", async () => {
		(globalThis.fetch as any).mockResolvedValueOnce({ ok: false });

		render(<ContactForm />);

		const user = userEvent.setup();
		await user.type(screen.getByLabelText("Name"), "Bob");
		await user.type(screen.getByLabelText("Email"), "bob@example.com");
		await user.type(screen.getByLabelText("Message"), "Test");
		await user.click(
			screen.getByRole("button", { name: "Send Message & Connect" }),
		);

		await waitFor(() => {
			expect(
				screen.getByText("Something went wrong. Please try again."),
			).toBeInTheDocument();
		});
	});

	it("shows error on network failure", async () => {
		(globalThis.fetch as any).mockRejectedValueOnce(new Error("Network error"));

		render(<ContactForm />);

		const user = userEvent.setup();
		await user.type(screen.getByLabelText("Name"), "Carol");
		await user.type(screen.getByLabelText("Email"), "carol@example.com");
		await user.type(screen.getByLabelText("Message"), "Test");
		await user.click(
			screen.getByRole("button", { name: "Send Message & Connect" }),
		);

		await waitFor(() => {
			expect(
				screen.getByText("Something went wrong. Please try again."),
			).toBeInTheDocument();
		});
	});

	it("POSTs JSON to /api/contact with correct body", async () => {
		(globalThis.fetch as any).mockResolvedValueOnce({ ok: true });

		render(<ContactForm />);

		const user = userEvent.setup();
		await user.type(screen.getByLabelText("Name"), "Alice");
		await user.type(screen.getByLabelText("Email"), "alice@example.com");
		await user.type(screen.getByLabelText("Message"), "Hello there!");
		await user.click(
			screen.getByRole("button", { name: "Send Message & Connect" }),
		);

		expect(globalThis.fetch).toHaveBeenCalledWith("/api/contact", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				name: "Alice",
				email: "alice@example.com",
				message: "Hello there!",
			}),
		});
	});

	it("can send another message after success", async () => {
		(globalThis.fetch as any).mockResolvedValueOnce({ ok: true });

		render(<ContactForm />);

		const user = userEvent.setup();
		await user.type(screen.getByLabelText("Name"), "Alice");
		await user.type(screen.getByLabelText("Email"), "alice@example.com");
		await user.type(screen.getByLabelText("Message"), "Hello!");
		await user.click(
			screen.getByRole("button", { name: "Send Message & Connect" }),
		);

		await waitFor(() => {
			expect(screen.getByText("Message Sent!")).toBeInTheDocument();
		});

		await user.click(screen.getByText("Send another message"));

		expect(screen.getByLabelText("Name")).toBeInTheDocument();
		expect(
			screen.getByRole("button", { name: "Send Message & Connect" }),
		).toBeInTheDocument();
	});
});
