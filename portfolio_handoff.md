# Portfolio Project — Session Handoff

## Context

This document was created in the JobQuest (job search) workspace to hand off a separate task to the portfolio project workspace. Pick this up in a new conversation opened inside the `portifaria` repository.

---

## The Portfolio

**Repo:** https://github.com/r0l0pes/portifaria
**Live site:** rodrigolopes.xyz
**Built with:** React 19 + Vite + TypeScript
**Deployed on:** Vercel (auto-deploy on push to `main`, or `npx vercel --prod`)
**Domain:** rodrigolopes.xyz (Vercel nameservers: ns1.vercel-dns.com, ns2.vercel-dns.com)

### How content works

- Portfolio data is split across `src/constants/` (hero, experience, case studies, blog posts — each in its own file)
- Case study full content also lives as `.md` files in `copy-content/` (source/reference docs)
- The site renders from `src/constants/caseStudies.ts` — the `.md` files are not read at runtime
- No backend, no API calls — purely static SPA
- Notion is the source of truth for content; sync manually to `.md` files and `caseStudies.ts`, then push

### Key files

- `src/constants/hero.ts` — name, tagline, contact info (not currently consumed by `Hero.tsx`, which is hardcoded)
- `src/constants/experience.ts` — 4 work experience entries
- `src/constants/caseStudies.ts` — 5 case studies as structured data (what the site renders)
- `src/constants/blogPosts.ts` — articles
- `src/components/sections/About.tsx` — skills dropdowns ("Core Skills", "Tools & Methodologies")
- `src/components/sections/Hero.tsx` — hardcoded hero section (does not pull from `hero.ts`)
- `copy-content/` — 6 case study `.md` files + `Articles.md` + resume PDF

---

## Completed Updates (Feb 2026)

[Previous case study sync work — unchanged]

---

## Email Infrastructure (added May 2026)

The site has two email flows using **Resend** + **Vercel serverless functions**.

### Environment Variables (set in Vercel Production)

| Variable         | Value                                                             |
| ---------------- | ----------------------------------------------------------------- |
| `RESEND_API_KEY` | Resend API key (needs read + send permission for received emails) |
| `TAVILY_API_KEY` | Tavily search API key for DPO email lookup                        |
| `GMAIL_ADDRESS`  | decalorodrigo@gmail.com                                           |
| `FROM_ADDRESS`   | contact@rodrigolopes.xyz                                          |

---

### 1. Contact Form (`/api/contact`)

**File:** `api/contact.ts`
**Flow:** Visitor fills form → POSTs JSON to `/api/contact` → validates → sends via Resend to `decalorodrigo@gmail.com`

- Accepts `{ name, email, message }` as JSON
- Returns 400 on invalid input
- Returns 500 on Resend failure
- HTML-escaping applied to all fields
- Subject: `[Portfolio] Message from {name}`
- Both `html` and `text` fields sent for email client compatibility
- Form in `Contact.tsx` POSTs to `/api/contact` as JSON (no longer uses Netlify forms)

---

### 2. Email Routing Webhook (`/api/webhook`)

**File:** `api/webhook.ts`
**Flow:** Email sent to `contact@rodrigolopes.xyz` → Resend inbound webhook → `/api/webhook` → fetches body via Resend API → classifies → forwards to Gmail

**How it works:**

1. Resend sends `{ type: "email.received", data: { email_id, from, subject, to, ... } }` — metadata only, no body
2. Webhook calls `GET https://api.resend.com/emails/receiving/{email_id}` to fetch the actual email body (note: `/receiving/` subpath, not `/emails/{id}` which is for sent emails)
3. Classifies email as `[INTERVIEW]`, `[REJECTED]`, or plain forward based on keyword matching in subject + body
4. Forwards to Gmail via Resend with subject tag and full body content
5. On rejections: searches company's DPO email via Tavily API and appends it to the forwarded email as a note (e.g., "GDPR: DPO contact found at privacy@company.com")

**Keyword matching** — supports English, German, and Portuguese:

- Interview keywords: "next step", "schedule an interview", "Einladung zum Vorstellungsgespräch", "entrevista", etc.
- Rejection keywords: "not moving forward", "Absage", "no hemos seleccionado", etc.

---

### Tests

- `tests/unit/contact.test.ts` — 10 tests for `api/contact.ts` (validation, Resend call, HTML escaping, trimming, fetch error)
- `tests/unit/ContactForm.test.tsx` — 7 tests for ContactForm component (rendering, submitting, success/error/network flows, payload, "send another")

No tests for `api/webhook.ts` yet.

---

## Deployment

- **Auto-deploy:** Push to `main` triggers Vercel auto-deploy
- **Manual deploy:** `npx vercel --prod --yes` deploys current working directory (bypasses git)
- **Vercel project ID:** prj_SCOFXg3bFKdh71dNLZqcfVNmcXWd
- **Vercel org ID:** team_51lUzZsrZNpNucF5C8tnFDLa

---

## Known Issues

- None. All email infrastructure is working as of 2026-05-15.

### Future Ideas (not blockers)

- Add WhatsApp notification for interview emails (would need Meta Cloud API setup)
- Write tests for `api/webhook.ts`

---

## Decisions Already Made

- **No Notion API integration** in the portfolio. Content stays as `.md` files in the project. When Notion is updated, update the `.md` files and `caseStudies.ts` manually and push.
- Em dashes (`—`) are banned everywhere. Use commas, colons, or sentence breaks instead.
- **Resend** for email sending (both contact form and email routing).
- **Vercel serverless functions** for backend endpoints (`/api/contact`, `/api/webhook`).
- Separate endpoints for contact form and email routing — different domains, different payload shapes.
- LinkedIn About section was also updated (separate manual task, copy from the job search session output).
- Notion workspace URL for case studies: https://www.notion.so/2f40fd98227b80c7807ad93bbc6adbc8
- Notion master resume URL: https://www.notion.so/2f40fd98227b80c8083a78fc61c38e55a12
