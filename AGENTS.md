# Agent Guide — Portifaria

Pi reads this file first. It defines the project, rules, and how to work here.

---

## What This Is

Personal portfolio of Rodrigo Lopes — Senior Growth Product Manager. Live at **rodrigolopes.xyz**. Replaced all WFP (World Food Programme) references with **Postscript** across case studies, experience, hero, and resume (May 2026).

---

## Architecture

- React 19 + Vite + TypeScript
- Static SPA — no backend runtime beyond Vercel serverless functions
- Content split across `src/constants/` files (caseStudies.ts, experience.ts, hero.ts, blogPosts.ts)
- Notion is source of truth for content; sync manually to `.md` files and `caseStudies.ts`
- Deployed on Vercel, auto-deploy on push to `main`

---

## Key Constants Files

| File | Content |
|------|---------|
| `src/constants/caseStudies.ts` | 5 case studies rendered by the site |
| `src/constants/experience.ts` | 4 work entries (Postscript, HELLA, Accenture/Natura, C&A) |
| `src/constants/hero.ts` | Name, tagline (not consumed by Hero.tsx — it's hardcoded) |
| `src/constants/blogPosts.ts` | Articles |
| `src/components/sections/About.tsx` | "Core Skills" and "Tools & Methodologies" dropdowns |

---

## Email Infrastructure

Two serverless functions in `/api/`:
- `contact.ts` — contact form POST → Resend → Gmail
- `webhook.ts` — inbound email routing (Resend webhook → classify → forward to Gmail)

Env vars: `RESEND_API_KEY`, `GMAIL_ADDRESS`, `FROM_ADDRESS`, `TAVILY_API_KEY`

---

## Rules

1. **Em dashes banned everywhere.** Use commas, colons, or sentence breaks.
2. **No Notion API integration.** Content stays as `.md` files. Sync manually, push.
3. **Prompts as files.** Never inline prompt text. Load from `copy-content/`.
4. **Test after every change.** `npm test` — 17 tests (Vitest).
5. **Dry-run before push.** `npx vercel --prod --yes` deploys manually.

---

## A/B Test Candidates

### About.tsx "What I do" paragraph
**Current:** Emphasizes experimentation programs and checkout funnels.
**Proposed:** Lead with AI product experience (LLM workflows, conversational UX, personalization engines), then mention experimentation framework.
**File:** `src/components/sections/About.tsx` lines 33-39
**Status:** Not applied. Evaluate via portfolio analytics or recruiter feedback.

---

## Model Rules

- Use **Kimi K2.6** for writing tasks (portfolio copy, case studies)
- Use **DeepSeek V4 Flash** for research/scoping/analysis
- Switch before any vision/screenshot task
