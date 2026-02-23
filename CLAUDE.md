# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # start dev server on port 3000
npm run build      # production build to dist/
npm run preview    # preview production build locally
npm run test       # run tests once with Vitest
npm run test:ui    # open Vitest UI
```

## Architecture

React 19 + Vite SPA. No backend, no CMS. All content is static TypeScript.

**Entry point:** `index.tsx` wraps `App.tsx` in `AppProvider` (navigation context only — dark mode has been removed).

**App.tsx** orchestrates all sections and manages one state item: the active case study (for the modal). Lazy-loaded sections: `WorkSection`, `CaseStudyModal`, `BlogContent`.

**Content lives in `src/constants/`** as typed TypeScript objects (not loaded from files at runtime). When updating site content, edit the constants directly. The `copy-content/` directory holds Markdown source documents used as reference, not imported anywhere.

**Types in `src/types/index.ts`** define `CaseStudy`, `ExperienceItem`, `BlogPost`, `Metric`, `ContentBlock`. Match these when adding new content.

**Sections** (`src/components/sections/`) are prop-driven: they receive callbacks like `onNavigate`, `onStudyClick` from `App.tsx`. They do not read from context directly.

**Animations** are in `src/components/animations/` (Framer Motion). Reuse `TiltCard`, `ParallaxSection`, `PageTransition` before writing new motion code.

**Dark mode has been removed.** Do not reintroduce dark: classes or toggleDarkMode.

**Tailwind v4 custom colors** must be defined in the `@theme {}` block in `index.css`. Do not rely solely on `tailwind.config.js` — it is unreliable in Netlify CI builds.

**Analytics** (`src/components/Analytics.tsx`): GA4 via `react-ga4`. Measurement ID from `VITE_GA_MEASUREMENT_ID` env var. Import `logEvent` from there to track custom events.

## Environment Variables

Copy `.env.example` to `.env.local` before running locally:

```
VITE_GA_MEASUREMENT_ID=G-FJ9DNTJJR6
```

## Content Sync Workflow

Notion is the source of truth for content. When updating case studies or blog posts:
1. Update the Markdown file in `copy-content/` to match Notion
2. Update the corresponding constant in `src/constants/`

Note: the Hero section is hardcoded in `src/components/sections/Hero.tsx` and does not consume `src/constants/hero.ts`.

### Deployment & CI/CD
- Deployed on **Vercel**.
- Pushing to `main` triggers auto-deploy via GitHub integration.
- SPA routing fallback is handled in `vercel.json` (rewrites).
- Domain: `rodrigolopes.eu` (managed at Gandi, nameservers pointed to Vercel).

## Prompt Caching (LLM API Patterns)

Static content first, dynamic content last — always:

```
system:  [voice/persona] + [task instructions]        ← static, cached
user:    [stable context (master resume, templates)]  ← semi-static, cached after first run
         [dynamic content (job posting, user input)]  ← dynamic, never cached
         [instruction]                                ← dynamic
```

DeepSeek V3.2 has automatic prefix caching — no config needed, just ordering.
Anthropic requires explicit `cache_control: {"type": "ephemeral"}` on system blocks (minimum 4096 tokens to cache):

```python
"system": [
    {
        "type": "text",
        "text": system_prompt,
        "cache_control": {"type": "ephemeral"},
    }
]
```

Response is at `data["content"][0]["text"]`. Use `x-api-key` header, `anthropic-version: 2023-06-01`.

Cache is prefix-based and model-specific. Swapping models or adding/removing tools breaks the shared prefix and invalidates all cached content.
