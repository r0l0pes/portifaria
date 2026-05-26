# Scaling AI-Powered SMS Personalization for 18,000 Shopify Merchants
**Postscript** | Jul 2024 – Apr 2026 | Remote

*Led product development for an AI-driven message optimization engine that balanced the tension between sending more SMS messages and keeping every one on-brand, driving a 28% increase in earnings-per-message for Shopify merchants. Redesigned subscriber acquisition around SMS compliance, achieving 32% higher opt-in conversion and 18% lower acquisition cost. Built analytics instrumentation measuring SMS program health across 18,000+ merchant accounts.*

---

## CONTEXT

Postscript is the leading SMS marketing platform built exclusively for Shopify merchants. Founded in 2018, the company had grown to serve over 15,000 brands by 2024, from boutique stores to digitally-native brands like Dr. Squatch, Ridge, and Olipop, processing hundreds of millions of dollars in attributed revenue.

By early 2024, Postscript sat at a strategic inflection point. The market had shifted: SMS was no longer a niche channel, it was a primary revenue driver for ecommerce brands, growing from $5.6B to a projected $24.7B global market. But with scale came tension. The company had pioneered human-led SMS sales where trained associates had 1:1 text conversations with shoppers, driving 60% purchase rates, but this model couldn't scale past a fraction of the customer base. The answer was AI, but brands feared losing control of their voice. Meanwhile, the regulatory landscape was shifting: Texas SB 140 threatened $5,000-per-message penalties for consent-based SMS, while Oregon HB 3865 introduced quiet hours and send limits.

The stakes: SMS was becoming the highest-performing channel for many merchants, but the product had to solve the fundamental tension between scale and authenticity, between automation and compliance, between data-driven optimization and brand trust.

---

## PROBLEM

**Challenge 1: The personalization-at-scale paradox**

Standard A/B testing optimized messages against a single variant. But with hundreds of thousands of subscribers across different segments, a single "winning" message was a weak approximation of personalization. True personalization meant testing not two variants, but dozens or hundreds, per automation. No existing SMS tool did this. The hypothesis, that predictive analytics and generative AI could continuously test and evolve message variants automatically, was unproven at merchant scale and risked generating off-brand or irrelevant copy if not properly constrained.

**Challenge 2: Compliance as an existential threat to the business model**

Texas SB 140 was a vague law that threatened consent-based SMS programs with registration requirements, $10,000 security bonds, and penalties up to $5,000 per message. Oregon's HB 3865 imposed quiet hours and send limits. These weren't edge cases, they were core markets. The SMS marketing industry was in panic, with competitors rushing to impose compliance costs on merchants. Postscript needed not just to survive these regulations, but to turn compliance into a competitive advantage without slowing product velocity.

**Challenge 3: Fragmented analytics across 18,000+ merchants**

Each brand had different SMS strategies, segments, and success definitions. Without standardized instrumentation, the product team was making decisions based on anecdotes from power users rather than systematic data. The company needed a unified analytics framework that could measure SMS program health across the entire merchant base, identify engagement decay patterns unique to SMS versus email, and translate those insights into the product roadmap.

---

## ROLE & SCOPE

Ownership: Senior Product Manager for Growth & AI at Postscript. Responsible for the AI-powered message optimization product roadmap, subscriber acquisition funnel redesign, and analytics instrumentation strategy. Reported to product leadership, collaborated extensively with engineering, data science, sales, and legal teams.

**In scope:**
- Define product strategy and roadmap for Infinity Testing (AI-powered message optimization)
- Redesign subscriber acquisition funnel (opt-in flows, incentive timing, compliance integration)
- Build analytics instrumentation framework for SMS program health measurement
- Establish earnings-per-message and click-through rate as primary product KPIs
- Influence compliance product strategy (Texas SB 140, Oregon HB 3865)

**Out of scope:**
Direct management of engineering teams (matrixed organization); Shopper AI assistant product (separate track); brand-facing dashboard redesign; pricing and packaging changes.

Stakeholders: Engineering and data science teams, CEO Adam Turner and product leadership, sales team (quota attainment pressure), legal and compliance, merchant success team, Ecommerce Innovation Alliance (EIA) partnership.

---

## APPROACH

**1. Built an AI-powered message optimization engine that learned from every send**

Led product development of Infinity Testing, Postscript's AI-driven message optimization system. The core insight was that traditional A/B testing forced merchants to bet on a single winner, when the optimal message varied by segment, time, and behavior. Infinity Testing used predictive analytics and generative AI to create, test, and learn from hundreds of message variants simultaneously, continuously evolving the best-performing message per segment over time.

Implemented Brand Center as the guardrail, training the AI on each merchant's unique voice before generating variants. This solved the fundamental tension: brands wanted AI-driven scale, but feared losing control. By making brand voice training the prerequisite to AI features, we turned "off-brand risk" from a blocker into an adoption driver.

Trade-off: Accepted incremental revenue capture (28% EPM lift) instead of a single massive lift, betting that continuous optimization would compound over time. This was a hard sell against the sales team's preference for big, demonstrable wins.

**2. Redesigned subscriber acquisition around compliance and consent**

The opt-in funnel was the top-of-bottleneck for every merchant. Brands struggled to grow their SMS list while staying compliant, and the compliance panic around Texas SB 140 was causing some merchants to pause list growth entirely.

Redesigned the acquisition flow around four principles: one-tap mobile opt-in as the default, incentive timing repositioned from "discount upfront" to "discount after first purchase" (reducing acquisition cost by preventing one-time coupon shoppers from churning), simplified consent language that passed legal review without scaring subscribers, and compliance safeguards baked into the opt-in experience rather than added as an afterthought.

The result was a 32% increase in opt-in conversion alongside an 18% reduction in acquisition cost, proving that compliance and growth could reinforce each other rather than trade off.

**3. Built analytics instrumentation to make SMS program health measurable**

When I joined, SMS program health was assessed through sales anecdotes and screenshots of individual merchant dashboards. No standardized framework existed for comparing performance across 18,000+ accounts.

Designed and shipped an analytics instrumentation layer that established earnings-per-message and click-through rate as the primary product KPIs. These weren't vanity metrics: EPM directly tied merchant revenue to the product's value proposition, and CTR measured engagement quality separate from list size.

Used this framework to identify engagement decay patterns unique to SMS versus email. The critical finding: SMS engagement decayed faster than email but recovered faster with targeted re-engagement. This insight contradicted the conventional wisdom that SMS behavior mirrored email behavior, and drove a dedicated re-engagement automation roadmap.

Trade-off: Prioritized EPM and CTR over more granular metrics (conversation quality, sentiment scoring), accepting that second-order metrics would be addressed post-instrumentation.

**4. Influenced compliance product strategy as a competitive differentiator**

The Texas SB 140 panic was an industry-wide crisis. Competitors rushed to impose compliance costs on merchants, adding registration fees and disclosure requirements to their platforms. Postscript took the opposite approach: we partnered with the Ecommerce Innovation Alliance to file a federal lawsuit challenging the law's application to consent-based messaging.

My contribution was ensuring the product side moved in parallel with the legal strategy. We designed compliance features (quiet hour controls, send limits, opt-out management) as product-led tools rather than regulatory burdens. When the settlement confirmed that consent-based SMS was exempt from SB 140, Postscript was positioned as the platform that protected merchants rather than profited from their fear. The Oregon HB 3865 compliance was handled similarly, with automatic quiet hour enforcement by area code.

---

## RESULTS

**Product outcomes:**
- 28% increase in earnings-per-message across Infinity Testing campaigns, averaging 38% lift in campaign-specific A/B tests
- 32% increase in opt-in conversion through redesigned subscriber acquisition flow
- 18% reduction in acquisition cost through repositioned incentive timing
- Analytics instrumentation deployed across 18,000+ merchant accounts
- EPM and CTR established as product-wide primary KPIs
- Identified SMS-specific engagement decay patterns, driving a dedicated re-engagement automation roadmap

**Strategic impact:**
- Infinity Testing became a core product differentiator against Klaviyo and Attentive in a rapidly saturating market
- Compliance-first acquisition strategy turned regulatory crisis into competitive advantage during the Texas SB 140 and Oregon HB 3865 transitions
- Analytics framework standardized product decision-making across 18,000+ merchants, replacing anecdote-driven prioritization

**Organizational learning:**
- Proved that AI-driven message optimization could increase revenue without sacrificing brand authenticity, when properly constrained by Brand Center
- Validated that compliance and growth are not a trade-off when compliance is designed as a product feature rather than a legal burden
- Established that SMS engagement behavior diverges meaningfully from email, requiring channel-specific analytics and re-engagement strategies

**What didn't work:**
Initial Infinity Testing adoption was slower than projected because merchants didn't trust AI-generated copy for their brand voice. We had to invest months in Brand Center as a prerequisite feature before Infinity Testing could achieve meaningful adoption. In hindsight, launching Brand Center first (6 months earlier) would have accelerated the Infinity Testing rollout by removing the trust barrier before asking merchants to buy into AI-generated messaging.
