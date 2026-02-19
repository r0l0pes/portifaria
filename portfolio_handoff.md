# Portfolio Project — Session Handoff

## Context
This document was created in the JobQuest (job search) workspace to hand off a separate task to the portfolio project workspace. Pick this up in a new conversation opened inside the `portifaria` repository.

---

## The Portfolio

**Repo:** https://github.com/r0l0pes/portifaria
**Live site:** rodrigolopes.eu
**Built with:** React 19 + Vite + TypeScript
**Deployed on:** Netlify (auto-deploy on push to `main`)
**Built in:** Firebase Studio + Google Antigravity

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

### Case study `.md` files — synced with Notion
All 6 files rewritten from Notion content. Em dashes removed throughout.

| File | Status | Key framing |
|------|--------|-------------|
| `wfp_case_study_final.md` | Done | Field officers as critical intermediary adoption driver; two-challenge structure; strategic recommendation framework |
| `FORVIA_HELLA_Case_Study.md` | Done | North Star = digital order share; numbered problem structure; phased approach |
| `accenture_case_study.md` | Done | Social commerce model context; 4-phase approach with explicit decisions/trade-offs |
| `case_study_ca_brasil_checkout.md` | Done | Payment barrier as market exclusion narrative (70%+ parcelas, <50% card penetration) |
| `case_study_ca_brasil_whatsapp.md` | Done | Clean rewrite; two-model strategy; honest attribution preserved |
| `case_study_ca_brasil_combined.md` | Done (new file) | Created from "C&A Brasil - Full Journey" Notion page |

### `src/constants/caseStudies.ts` — key framing updated
- **WFP (cs1):** Summary updated with "field officers as critical intermediary adoption driver"; challenge split into two explicit problems; approach updated with stakeholder coordination step
- **FORVIA HELLA (cs2):** Summary updated with North Star Metric; challenge updated to 3-part structure
- **Accenture (cs3):** Summary and challenge updated with social commerce model context
- **C&A Checkout (cs4):** Challenge updated with payment-as-market-barrier narrative; payment approach updated
- **C&A WhatsApp (cs5):** No changes needed

### Em dashes
Zero em dashes remaining across all `copy-content/*.md` files and all `src/` files.

---

## Still Not in the Site (Resume-Only Items)

These items exist in the Notion master resume but have no equivalent in the site code:

| Item | Status | Notes |
|------|--------|-------|
| Tagline "Experiments that accelerate revenue." | Resume only | Site hero is hardcoded "From Hypothesis to Impact." in `Hero.tsx` |
| Section label "Skills & Tools" | Resume only | Site uses "Core Skills" and "Tools & Methodologies" in `About.tsx` |
| Education year 2017 | Resume only | No education section exists in the site |

If any of these should be added to the site, they need to be built from scratch.

---

## Decisions Already Made

- **No Notion API integration** in the portfolio. Content stays as `.md` files in the project. When Notion is updated, update the `.md` files and `caseStudies.ts` manually and push. Simple and reliable.
- Em dashes (`—`) are banned everywhere. Use commas, colons, or sentence breaks instead.
- LinkedIn About section was also updated (separate manual task, copy from the job search session output).
- Notion workspace URL for case studies: https://www.notion.so/2f40fd98227b80c7807ad93bbc6adbc8
- Notion master resume URL: https://www.notion.so/2f40fd98227b8083a78fc61c38e55a12
