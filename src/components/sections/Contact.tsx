import type React from "react";
import { useState } from "react";
import { Mail, Linkedin, Github, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { HERO_DATA } from "@/constants";
import { logEvent } from "../../components/Analytics";
import { BlurFade } from "../ui/BlurFade";
import { ShinyButton } from "../ui/ShinyButton";

const ContactForm = () => {
	const [status, setStatus] = useState<
		"idle" | "submitting" | "success" | "error"
	>("idle");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setStatus("submitting");
		const form = e.currentTarget;
		const formData = new FormData(form);

		logEvent("Contact", "Send Message", "Form Submit");

		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name: formData.get("name"),
					email: formData.get("email"),
					message: formData.get("message"),
				}),
			});

			if (!res.ok) throw new Error("Failed to send");

			setStatus("success");
			form.reset();
		} catch {
			setStatus("error");
		}
	};

	if (status === "success") {
		return (
			<motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: 1, scale: 1 }}
				className="bg-terracotta/5 border border-terracotta/20 p-8 text-center rounded-2xl"
			>
				<div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-4">
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{
							type: "spring",
							stiffness: 200,
							damping: 10,
							delay: 0.2,
						}}
					>
						<Mail className="text-terracotta" size={24} />
					</motion.div>
				</div>
				<h3 className="text-xl font-bold text-ink mb-2">Message Sent!</h3>
				<p className="text-ink-muted mb-6 text-base">
					Thanks for reaching out, Rodrigo. I'll get back to you personally
					within 24 hours.
				</p>
				<button
					onClick={() => setStatus("idle")}
					className="text-sm font-semibold text-terracotta hover:underline transition-all"
				>
					Send another message
				</button>
			</motion.div>
		);
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<div>
				<label
					htmlFor="name"
					className="block text-xs font-medium text-ink-muted mb-1.5"
				>
					Name
				</label>
				<input
					required
					name="name"
					type="text"
					id="name"
					className="w-full bg-[#EDE7D9] border border-ink/10 p-3.5 text-ink font-medium focus:outline-none focus:border-terracotta/50 focus:ring-2 focus:ring-terracotta/10 transition-all rounded-xl text-sm"
					placeholder="Your name"
				/>
			</div>
			<div>
				<label
					htmlFor="email"
					className="block text-xs font-medium text-ink-muted mb-1.5"
				>
					Email
				</label>
				<input
					required
					name="email"
					type="email"
					id="email"
					className="w-full bg-[#EDE7D9] border border-ink/10 p-3.5 text-ink font-medium focus:outline-none focus:border-terracotta/50 focus:ring-2 focus:ring-terracotta/10 transition-all rounded-xl text-sm"
					placeholder="your@email.com"
				/>
			</div>
			<div>
				<label
					htmlFor="message"
					className="block text-xs font-medium text-ink-muted mb-1.5"
				>
					Message
				</label>
				<textarea
					required
					name="message"
					id="message"
					rows={4}
					className="w-full bg-[#EDE7D9] border border-ink/10 p-3.5 text-ink font-medium focus:outline-none focus:border-terracotta/50 focus:ring-2 focus:ring-terracotta/10 transition-all rounded-xl text-sm"
					placeholder="What are you working on?"
				/>
			</div>
			<ShinyButton
				type="submit"
				disabled={status === "submitting"}
				className="w-full"
			>
				{status === "submitting" ? "Sending..." : "Send Message & Connect"}
			</ShinyButton>
			{status === "error" && (
				<p className="text-center text-sm text-red-600 mt-3">
					Something went wrong. Please try again.
				</p>
			)}
			{status !== "error" && (
				<p className="text-center text-xs text-ink-muted/80 mt-3 pt-1">
					🔒 I actually read these. No spam, ever.
				</p>
			)}
		</form>
	);
};

const socialLinks = [
	{
		key: "linkedin",
		Icon: Linkedin,
		label: "LinkedIn",
		getHref: () => `https://${HERO_DATA.contact.linkedin}`,
		event: "Click LinkedIn",
	},
	{
		key: "github",
		Icon: Github,
		label: "GitHub",
		getHref: () => `https://${HERO_DATA.contact.github}`,
		event: "Click GitHub",
	},
	{
		key: "substack",
		Icon: BookOpen,
		label: "Substack",
		getHref: () => `https://substack.com/@r0l0pes`,
		event: "Click Substack",
	},
];

const FooterContent = () => (
	<BlurFade yOffset={10}>
		<div className="max-w-2xl mx-auto">
			<h2 className="text-4xl md:text-5xl font-black text-terracotta font-display mb-10 leading-none">
				Let's Talk
			</h2>

			<div className="flex gap-3 mb-12 flex-wrap">
				{socialLinks.map(({ key, Icon, label, getHref, event }) => (
					<a
						key={key}
						href={getHref()}
						target="_blank"
						rel="noreferrer"
						onClick={() => logEvent("Social", event)}
					>
						<motion.div
							className="flex items-center gap-2.5 px-4 py-2.5 bg-[#EDE7D9] border border-ink/[0.08] rounded-xl text-ink-muted text-sm font-medium"
							whileHover={{
								backgroundColor: "#B85538",
								color: "#ffffff",
								y: -2,
								boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
							}}
							whileTap={{ y: 1 }}
							transition={{ type: "spring", stiffness: 400, damping: 20 }}
						>
							<Icon size={16} />
							{label}
						</motion.div>
					</a>
				))}
			</div>

			<ContactForm />

			<div className="mt-16 pt-8 border-t border-ink/[0.08] flex justify-between items-center text-ink-muted text-xs">
				<span>&copy; {new Date().getFullYear()} Rodrigo Lopes</span>
				<span>Built with React</span>
			</div>
		</div>
	</BlurFade>
);

export { ContactForm, FooterContent };
