---
title: Remove Download Resume and Writing Section
type: feat
status: active
date: 2026-06-03
---

# Remove Download Resume and Writing Section

## Summary

Remove two site elements from the portfolio: the "Download Resume" button in the About section and the full "Writing" section (nav link, component, and section rendering). Write tests first (TDD) to verify both elements are absent after the changes.

---

## Requirements

- R1. "Download Resume" button is no longer rendered in the About section
- R2. "Writing" nav link is no longer shown in the site header
- R3. "Writing" section (blog posts listing) is no longer rendered on the page
- R4. All other sections (Hero, About, Work, Contact) remain functional and unchanged

---

## Scope Boundaries

- The Writings.tsx component file and BLOG_POSTS constant may be retained (tree-shaken by bundler) or removed — either is in scope
- No styling, layout, or copy changes to other sections
- No removal of the "Get in Touch" button or other nav links

---

## Context & Research

### Relevant Code and Patterns

- `src/components/sections/About.tsx`: Lines 85-99 contain the Download Resume button (motion.a + Download icon). Already tested mock patterns for framer-motion exist in `tests/unit/ContactForm.test.tsx`
- `src/components/sections/Writings.tsx`: Full BlogContent component — section title "Writing", blog post listing loop
- `src/components/layout/Header.tsx`: navLinks array contains `{ name: 'Writing', id: 'writings' }`
- `App.tsx`: Lazy import of BlogContent at line 11, rendered in `<SectionCard id="writings">` block

### Existing Test Patterns

- `tests/unit/ContactForm.test.tsx` shows existing mock patterns for framer-motion and analytics
- Vitest + @testing-library/react setup (jsdom environment)

---

## Key Technical Decisions

- **Test-first approach**: Write tests that assert absence of the removed elements before making code changes (TDD red-green-refactor)
- **Component file retention**: Keep `Writings.tsx` and `blogPosts.ts` on disk — they are tree-shaken and removing source files adds unnecessary churn risk with no benefit. If a future Writing section is reintroduced, the component and data stay available
- **Remove the nav link and App.tsx import+rendering** as the primary deletions; the component file being unused is fine

---

## Implementation Units

### U1. Write characterization tests for removal

**Goal:** Write failing tests that assert the Download Resume button and Writing section are absent, establishing the TDD red state.

**Requirements:** R1, R2, R3

**Dependencies:** None

**Files:**
- Create: `tests/unit/AboutContent.test.tsx`
- Create: `tests/unit/Header.test.tsx`
- Create: `tests/unit/WritingsSection.test.tsx`

**Approach:**
- Write tests that render each affected component and assert the removed elements are NOT in the document
- Follow existing mock patterns from `ContactForm.test.tsx` (framer-motion mock, analytics mock for AboutContent)
- Tests start in RED (elements still present) before code changes are made

**Execution note:** Test-first

**Test scenarios:**
- **Happy path — About does not show Download Resume:** Render AboutContent; assert no element matching "Download Resume" text or role exists
- **Happy path — Header does not show Writing link:** Render Header; assert no "Writing" text in nav links
- **Happy path — Writings section not rendered in App:** Render the full App (or the surrounding layout); assert no blog post content is in the DOM
- **Edge case — other nav links preserved:** Assert "About" and "Work" links still render in Header
- **Edge case — about content preserved:** Assert "What I do" and "Background" text still render in AboutContent

**Verification:**
- `npm test` passes all new tests in RED state (confirming removed elements currently exist)
- `npm test` passes all existing tests

---

### U2. Remove Download Resume button from About.tsx

**Goal:** Delete the Download Resume button and clean up the unused Download icon import.

**Requirements:** R1

**Dependencies:** U1 (tests exist to verify removal)

**Files:**
- Modify: `src/components/sections/About.tsx`

**Approach:**
- Remove the motion.a block (lines 85-99) containing the Download Resume button
- Remove `Download` from the lucide-react import on line 2 (only `ChevronDown` and `Sparkles` remain)
- Keep all other content and dropdown sections intact

**Test scenarios:**
- Tests from U1 now pass (GREEN) — "Download Resume" text is absent from rendered output

**Verification:**
- `npm test` passes

---

### U3. Remove Writing nav link from Header.tsx

**Goal:** Remove the "Writing" entry from the navigation links in the site header.

**Requirements:** R2

**Dependencies:** U1 (tests exist to verify removal)

**Files:**
- Modify: `src/components/layout/Header.tsx`

**Approach:**
- Remove `{ name: 'Writing', id: 'writings' }` from the navLinks array (line 37)
- Keep all other nav links, mobile menu entries, and CTA button unchanged

**Test scenarios:**
- Tests from U1 now pass (GREEN) — "Writing" text is absent from header nav
- "About" and "Work" links remain present

**Verification:**
- `npm test` passes

---

### U4. Remove Writing section from App.tsx

**Goal:** Remove the lazy import and rendered section for the Writing component from the main app layout.

**Requirements:** R3

**Dependencies:** U1, U2, U3 (full removal chain)

**Files:**
- Modify: `App.tsx`

**Approach:**
- Remove the lazy import: `const BlogContent = React.lazy(() => import('@/components/sections/Writings').then(m => ({ default: m.BlogContent })));`
- Remove the `<SectionCard id="writings">` block (including surrounding ErrorBoundary)
- Keep all other lazy imports and section cards unchanged

**Test scenarios:**
- Tests from U1 now pass (GREEN) — no blog post content in rendered DOM

**Verification:**
- `npm test` passes
- `npm run build` succeeds (no broken imports or references)

---

## Risks & Dependencies

| Risk | Mitigation |
|------|------------|
| A page scrolls to #writings anchor and lands on contact section | The contact section is the next natural scroll target; no smooth-scroll breakage because the section no longer exists. Low risk for portfolio visitors |

---

## Sources & References

- `src/components/sections/About.tsx` — Download Resume button at lines 85-99
- `src/components/layout/Header.tsx` — navLinks array at line 34-40
- `App.tsx` — BlogContent lazy import at line 11, section rendering at lines 46-50
