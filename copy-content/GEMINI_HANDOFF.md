# Portfolio Copy Review: Gemini Handoff

Before starting, read these two skill files in the project — they define the full methodology and tone rules:

- `.claude/commands/page-cro.md` — CRO analysis framework, visitor context, output format
- `.claude/commands/copywriting.md` — copy tone, writing rules, what good portfolio copy looks like

Apply both when reviewing the sections below.

---

You are a conversion rate optimization expert reviewing the portfolio website of Rodrigo Lopes, a Senior Product Manager based in Berlin who is actively job searching. The site is live at rodrigolopes.eu.

The conversion goal is not a purchase. It is getting a recruiter or hiring manager to send a message (email or LinkedIn DM).

---

## About Rodrigo

- Senior PM, 8+ years. Based in Berlin, open to EU/remote.
- Target roles: Senior PM or Group PM at a tech-forward company.
- Background: e-commerce, B2B platforms, AI/ML products, international expansion.
- Companies: World Food Programme (Munich), FORVIA HELLA (automotive B2B), Accenture Brasil (embedded at Natura), C&A Brasil. Started as a founder of a digital agency in São Paulo.

---

## Visitor Context

The primary visitor is a recruiter or hiring manager who arrived via LinkedIn, a job application, or a referral. They are scanning fast, skeptical of portfolios, and looking for:
1. Proof that this person has done work at the right scope and impact level
2. Clarity on what kind of PM they are (generalist? AI? e-commerce?)
3. A reason to believe the numbers are real

Secondary visitor: a peer PM or technical collaborator checking credibility.

---

## Analysis Framework (apply in order of impact)

**1. Value Proposition Clarity**
Can a visitor understand who Rodrigo is and why they should care within 5 seconds? Is it written in plain language, not PM jargon? Does it say what he actually does, not what he's "passionate about"?

**2. Headline and Hero Effectiveness**
Does it communicate a concrete value, not just a title? Is it specific enough to be meaningful and differentiated?

**3. CTA Clarity**
Is the primary action obvious? Does button copy communicate value?

**4. Trust Signals and Proof**
Are numbers specific and credible? ("+28% conversion" is credible; "significant improvement" is not.) Are company names and contexts present? Is the career progression visible and logical?

**5. Scannability**
Can someone get the core message by scanning headers and bold text only?

**6. Objection Handling**
- "Is this PM senior enough?" — is seniority clear?
- "Are these results real or inflated?" — is context provided?
- "What kind of PM is this?" — is the specialization clear?

**7. Friction**
Is there anything requiring unnecessary effort from the visitor? Is contact easy and obvious?

---

## Tone Rules

- Peer tone, not applicant tone. Write like a smart colleague sharing something relevant, not someone asking for a favour.
- Every sentence must earn its place. If it has no clear reason for the reader to care, cut it.
- No em dashes. Use commas, colons, or sentence breaks instead.
- Banned phrases: "passionate about", "I believe", "I look forward to", "resonates deeply", "In conclusion", "Ultimately", "It's worth noting", "What excites me about".
- Specific and outcome-focused. Replace vague descriptors with concrete evidence.
- Do NOT suggest structural or design changes. Only rewrite the copy fields shown below.

---

## Current Copy (all sections)

### Hero (`src/components/sections/Hero.tsx`)

```
Headline (h1):
"From Hypothesis to Impact."

Subtext (p):
"Senior PM with 8+ years de-risking innovation across e-commerce, B2B platforms, and AI products."

Primary CTA button:
"See Case Studies"

Secondary link:
"or get in touch"

Stats row:
8+ Years PM | 4 Countries | 20+ Products

Status badge:
"Open to Opportunities · Berlin"
```

### About (`src/components/sections/About.tsx`)

```
Section: What I do
P1: I build products in environments where the path forward isn't clear. My focus is on data-driven experimentation, cross-functional coordination, and turning ambiguous problems into outcomes people can act on.
P2: The work tends to happen in complex situations: AI for vulnerable populations, post-merger B2B integration, multi-country platform expansions. Places where conventional playbooks break down and you need to figure it out as you go.

Section: Background
P1: I'm a Senior Product Manager, currently based in Berlin. Most recently at the World Food Programme in Munich, working on generative AI voice technology and contributing to organizational AI governance. Before that, FORVIA HELLA, unifying product catalogs from two recently merged automotive companies into a single online experience for workshop customers. Earlier, Accenture Brasil, embedded with Natura to scale their e-commerce platform across four Latin American countries. Started at C&A Brasil, working on mobile shopping and early WhatsApp commerce integration.
P2: I got into product through a digital agency I founded in São Paulo while finishing university. Started building solutions for SMBs, realized the work I enjoyed most was understanding what to build and why, and transitioned into product management. That was 2018.

Section: Beyond work
P1: When I'm not working, you'll find me swimming, hiking, or reading. Feel free to reach out, let's connect.
```

### Contact (`src/components/sections/Contact.tsx`)

```
Heading: "Let's Talk"
Subtext: "Open to new roles. I respond within 24 hours."
```

### Case Study Cards (homepage cards showing category + title + key metric)

```
CS1:
  Category: "Humanitarian Tech Aid - AI Validation & Adoption"
  Title: "AI-Powered Agricultural Extension for Low-Literacy Farmers"
  Key metric label: "Cost Efficiency Potential"
  Key metric value: "60%"

CS2:
  Category: "Automotive B2B - Post-Merger Integration"
  Title: "Integrating a B2B E-Commerce Platform Post-Merger for 60,000+ Workshops"
  Key metric label: "Year 1 Cross-Sell"
  Key metric value: "EUR 12M+"

CS3:
  Category: "E-Commerce - Growth & International Expansion"
  Title: "Scaling an E-Commerce Platform Across 4 LatAm Markets"
  Key metric label: "Conversion Rate"
  Key metric value: "+45%"

CS4:
  Category: "E-Commerce - Mobile Checkout Optimization"
  Title: "Boosting Mobile Conversion for a Major Fashion Retailer"
  Key metric label: "Conversion Rate"
  Key metric value: "+28%"

CS5:
  Category: "Conversational Commerce - Emerging Tech Strategy"
  Title: "Building Brazil's First WhatsApp Commerce Platform At Scale"
  Key metric label: "Channel Scale (2022)"
  Key metric value: "R$1.17B"
```

---

## Output Format

### Quick Wins
Copy tweaks with likely immediate impact. Label each with the field name it replaces.

### High-Impact Changes
Structural copy changes worth the effort.

### Copy Alternatives
For each key element, provide 2-3 alternatives with rationale. Clearly label with field name (e.g., `Hero subtext`, `About - What I do P1`, `CS2 title`).

Each alternative should follow this structure:
- **Option**: the rewrite
- **Why**: one sentence on why it's stronger than the current copy
