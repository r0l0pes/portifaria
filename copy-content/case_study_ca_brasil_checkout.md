# E-Commerce Checkout Optimization
**C&A Brasil** | Mar 2018 – Sep 2019 (18 months) | São Paulo, Brazil

*Hired as most junior PM on 6-person team, promoted to Senior PM after +28% conversion rate improvement*

---

## CONTEXT & CHALLENGE

**Company Background**

C&A Brasil, a R$7B fashion retailer with 280+ stores, underwent aggressive digital transformation during Brazil's mobile-first e-commerce boom (2018–2020). Operating on VTEX platform, the company served 80%+ mobile traffic but conversion rates lagged industry benchmarks.

**The Problem**

Hired as most junior PM on 6-person team with mandate: reduce cart abandonment through data-driven experimentation.

Initial funnel analysis revealed:
- **Mobile checkout abandonment:** ~70–75% (Brazilian e-commerce baseline)
- **Form friction:** 12-field checkout (manual address entry, redundant shipping info)
- **Payment barrier:** Over 70% of Brazilian e-commerce purchases used instalment plans and credit card penetration was below 50%. A checkout showing only lump-sum, card-only options was systematically filtering out a significant share of shoppers.
- **Multi-item cart complexity:** Confusing CTAs ("continue shopping" vs. "checkout"), poor mobile UX

**The Stakes**

C&A was preparing for its 2019 public listing. Digital growth metrics would be closely scrutinized by investors. Checkout optimization was critical to demonstrating e-commerce traction.

---

## APPROACH

**Team Structure:**
- PM Team: 6 total (I was most junior), embedded with engineering squad
- Cross-functional coordination: UX research, data analytics, engineering through agile 2-week sprints
- Methodology: Continuous discovery + experimentation framework

**Prioritization Framework:**
Applied impact x confidence / effort model, weighted heavily toward mobile-first wins (80% traffic = highest reach).

**Experimentation Rigor:**
- 15+ A/B tests over 18 months (2-week sprint cycles)
- 7-day minimum runtime for statistical significance
- Documented every experiment in Confluence (hypothesis, results, learnings)
- Created reusable experimentation playbook for team institutional knowledge

**Key Initiatives:**

**1. Mobile Checkout Redesign**
- Reduced form fields: 12 to 7 (removed redundant shipping info)
- Google Maps API integration: Replaced manual 8-field address entry with autocomplete (reduced input errors ~30%)
- Streamlined cart flow: Consolidated "continue shopping" vs. "checkout" CTAs, optimized for thumb-friendly mobile interactions

**2. Payment Method Expansion**
- Introduced Boleto bancário and repositioned instalment pricing as the default display format (e.g., "R$120 or 12x R$10" instead of lump sum), removing the payment method gap that had been filtering out credit-constrained shoppers in a market where card penetration was below 50%
- Made instalment pricing the default display, addressing a market where over 70% of purchases were made in parcelas. Showing a single lump-sum price was a conversion barrier, not a design choice.
- Integrated Mercado Pago: Alternative payment wallet expanding beyond credit card dependency

**3. Stakeholder Negotiation (Key Trade-off)**
- Marketing request: Add email capture at cart stage (lead generation goal)
- My position: Cart-stage friction increases abandonment, net revenue loss
- Data-backed argument: Showed projected conversion impact via A/B test simulation
- Resolution: Negotiated post-purchase email capture (Marketing got leads, checkout stayed optimized)

---

## RESULTS

| Metric | Baseline (Mar 2018) | Post-Optimization (Sep 2019) | Improvement |
|--------|---------------------|------------------------------|-------------|
| **Conversion Rate** | ~2.8% [BR e-commerce benchmark] | ~3.6% | **+28%** |
| **Cart Abandonment** | ~72% | ~59% | **-18%** |

**Promotion Outcome:**
After 18 months of measurable checkout impact, promoted to Senior Product Manager (Oct 2019), assuming ownership of Checkout & Payments vertical.

---

## KEY DECISIONS & TRADE-OFFS

**Decision 1: Mobile-First Prioritization**
- Choice: Optimize mobile experience even if desktop metrics temporarily declined
- Rationale: 80%+ traffic mobile, desktop users more conversion-tolerant
- Trade-off: Accepted 2–3% desktop conversion dip for 8–10% mobile improvement

**Decision 2: Payment Method Sequencing**
- Choice: Boleto + installments before Buy Now Pay Later (BNPL)
- Rationale: In Brazil, 70%+ of e-commerce purchases use instalment plans and card penetration was below 50%. Boleto and instalment visibility were not payment preferences but primary purchasing behaviours for the majority of shoppers.
- Trade-off: Delayed BNPL (higher AOV potential) to capture quick wins

**Decision 3: Experimentation Pace**
- Challenge: 2-week sprints sometimes too long for simple UI tweaks
- Learning: Could have run more rapid 3-day experiments for low-risk changes (CTA placement, color variants)
- Would do differently: Implement dual-track testing (2-week for complex flows, 3-day for UI tweaks)

---

## KEY LEARNINGS

**What Worked:**
1. Mobile-first in emerging markets: Brazil 2018–2020 was overwhelmingly mobile. Desktop optimization would have been wasted effort.
2. Experimentation discipline: Documenting every test created institutional knowledge (playbook used by team after my departure)
3. Data-driven stakeholder negotiation: Marketing email capture example. Used A/B test projections to win the argument, not opinions.
4. Quick wins build credibility: Form field reduction and Google Maps API were low-effort, high-impact, and built trust for bigger bets.

**What I'd Do Differently:**
1. Deeper competitive benchmarking: Could have researched Brazilian fashion e-commerce conversion benchmarks earlier to set more aggressive targets from Day 1, rather than iterating upward from an assumed baseline
2. Faster iteration on low-risk changes: Some experiments didn't need 2-week sprint cycles
3. Earlier payment method expansion: Took 6 months to prioritize Boleto/installments. Should have been Month 1, it was a clear consumer behavior signal.

**Foundation for Next Role (Accenture):**
This experience established core PM craft: experimentation rigor (hypothesis, test, measure, iterate), cross-functional coordination without formal authority, metric-driven decision-making under investor scrutiny (2019 public listing pressure), and fast promotion that validated readiness for Accenture's demanding consulting environment.
