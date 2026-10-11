import { CaseStudy } from '@/types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    "id": "cs1",
    "category": "SaaS & AI Products",
    "title": "Post-launch AI-Powered SMS Optimization for Shopify Merchants",
    "subtitle": "Postscript - SMS Marketing Platform",
    "role": "Senior Product Manager",
    "summary": "Owned post-launch product direction and iteration of Infinity Testing, an AI-powered message optimization system that generated hundreds of brand-aligned message variants and evaluated them against live subscriber segments. Used Brand Center as the brand-voice control layer and preserved merchant review before activation, defining product-specific quality criteria across brand fit, predicted CTR, and earnings-per-message. Infinity Testing campaigns delivered a 28% increase in EPM. In parallel, redesigned subscriber acquisition around SMS compliance and built analytics instrumentation across 18,000+ merchant accounts.",
    "challenge": "AI-powered message optimization was unproven at scale. Standard A/B testing optimized against a single variant, but with hundreds of thousands of subscribers across different segments, a single 'winning' message was a weak approximation of personalization. Merchants feared AI would generate off-brand copy if not properly constrained. Simultaneously, Texas SB 140 threatened $5,000-per-message penalties for consent-based SMS, and Oregon HB 3865 imposed quiet hours and send limits—regulations that threatened to paralyze the entire SMS channel. The product had to solve three tensions simultaneously: scale vs. authenticity, automation vs. compliance, and data-driven optimization vs. brand trust.",
    "approach": [
      {
        "title": "Owned Post-Launch Message Optimization",
        "description": "Owned post-launch product direction and iteration of Infinity Testing, where generative AI produced hundreds of brand-aligned message variants and predictive analytics tested them against live subscriber segments. Used Brand Center as the brand-voice control layer and preserved merchant review before activation to address the trust barrier that initially slowed adoption. Defined product-specific quality criteria across brand fit, predicted CTR, and earnings-per-message."
      },
      {
        "title": "Redesigned Subscriber Acquisition Around Compliance",
        "description": "Redesigned the opt-in flow around one-tap mobile opt-in as default, incentive timing repositioned from 'discount upfront' to 'discount after first purchase', simplified consent language, and compliance safeguards baked into the experience rather than added after the fact. Proved that compliance and growth could reinforce each other rather than trade off."
      },
      {
        "title": "Built Analytics Instrumentation at Merchant Scale",
        "description": "Designed analytics instrumentation establishing earnings-per-message and click-through rate as primary product KPIs across 18,000+ merchant accounts. Used engagement data to identify SMS-specific decay patterns and prioritize a re-engagement automation roadmap."
      },
      {
        "title": "Turned Compliance Crisis Into Product Advantage",
        "description": "Influenced product-side compliance strategy during the Texas SB 140 and Oregon HB 3865 regulatory transitions. Supported product-led compliance tools such as quiet-hour controls, auto-enforcement by area code, and opt-out management, positioning Postscript as a platform that protected merchants while competitors rushed to impose compliance costs."
      }
    ],
    "outcomes": [
      {
        "title": "Revenue Impact",
        "description": "28% increase in earnings-per-message across Infinity Testing campaigns."
      },
      {
        "title": "Acquisition Improvement",
        "description": "32% increase in opt-in conversion and 18% reduction in acquisition cost through redesigned subscriber acquisition flow."
      },
      {
        "title": "Analytics Scale",
        "description": "Instrumentation deployed across 18,000+ merchant accounts with EPM and CTR established as product-wide primary KPIs."
      },
      {
        "title": "Compliance Leadership",
        "description": "Contributed to product strategy that turned SMS regulatory crises (Texas SB 140, Oregon HB 3865) into competitive differentiation."
      }
    ],
    "keyMetric": {
      "label": "Earnings Per Message",
      "value": "+28%",
      "description": "Increase in revenue per SMS sent",
      "chartData": [
        {
          "name": "Static A/B",
          "value": 100
        },
        {
          "name": "Infinity Testing",
          "value": 128
        }
      ]
    },
    "lessons": [
      {
        "title": "Trust Is the Prerequisite for AI Adoption",
        "description": "Infinity Testing adoption was slower than projected because merchants didn't trust AI-generated copy for their brand voice. Using Brand Center as a prerequisite for AI features and preserving merchant review before activation addressed the trust barrier before asking merchants to adopt AI-generated messaging."
      },
      {
        "title": "Compliance Can Be a Product Moat",
        "description": "When competitors rushed to impose compliance costs on merchants during the Texas SB 140 panic, Postscript's product-led compliance strategy turned a regulatory crisis into competitive advantage. The lesson: regulation is an opportunity to build trust, not just a risk to mitigate."
      }
    ],
    "slug": "ai-sms-personalization-postscript"
  },
  {
    "id": "cs2",
    "category": "B2B E-Commerce",
    "title": "Unifying a B2B E-Commerce Platform Post-Merger",
    "subtitle": "FORVIA HELLA - B2B E-Commerce Platform",
    "role": "Senior Product Manager",
    "summary": "The unified catalog delivered €12M+ in first-year cross-sell revenue across 60,000+ workshops following the €400M FORVIA-HELLA merger. The challenge was integrating Faurecia's 15,000+ SKUs into a single-vendor catalog without breaking the existing search and checkout experience. We drove adoption by establishing digital order share as the North Star Metric and redesigning the multi-item checkout flow.",
    "challenge": "HELLA Partner World operated as a single-vendor catalog optimized for lighting and electronics products. Post-merger, three core challenges emerged: integrating Faurecia's 15,000+ SKUs without degrading search/navigation; commercial misalignment with cross-functional stakeholders operating in silos with conflicting priorities; and UX debt in checkout flows optimized for single-vendor ordering that created friction for multi-item, cross-brand purchases.",
    "approach": [
      {
        "title": "Phased Catalog Integration",
        "description": "Partnered with data teams to audit Faurecia catalog quality, defined MVP scope with top 500 SKUs by revenue potential, validated search/filter functionality before full 15,000 SKU integration at Month 12."
      },
      {
        "title": "Cross-Functional Alignment",
        "description": "Established weekly syncs with engineering, data, and commercial teams. Translated business requirements ('maximize cross-sell') into product specs (unified search, cross-brand recommendations, multi-item cart UX)."
      },
      {
        "title": "B2B UX Optimization",
        "description": "Conducted workshop user research to identify friction points, redesigned cart and checkout for mobile optimization and multi-item ordering, implemented Userlane digital adoption platform for contextual guidance."
      },
      {
        "title": "Measurement & Iteration",
        "description": "Defined success metrics (order completion time, self-service adoption, NPS), launched GA4 analytics instrumentation, ran iterative A/B tests on catalog navigation and checkout variants."
      }
    ],
    "outcomes": [
      {
        "title": "Revenue Impact",
        "description": "First-year cross-sell revenue from the unified catalog reached €12M+"
      },
      {
        "title": "Operational Efficiency",
        "description": "Reduced order completion time by 35% through streamlined checkout flow and multi-item cart optimization."
      },
      {
        "title": "User Adoption",
        "description": "Increased self-service adoption by 40% via Userlane digital adoption tools, reducing customer support tickets for catalog navigation issues."
      },
      {
        "title": "Customer Satisfaction",
        "description": "Improved Net Promoter Score by 22 points post-optimization while maintaining 99.9%+ uptime during integration."
      }
    ],
    "keyMetric": {
      "label": "First-Year Cross-Sell",
      "value": "€12M+",
      "description": "Revenue through unified catalog"
    },
    "lessons": [
      {
        "title": "MVP Scope Prevents Paralysis",
        "description": "Early alignment on 500-SKU MVP (vs. full 15,000) enabled faster validation and reduced risk. Phased rollout mitigated integration failures that could have disrupted revenue for 60,000 workshop customers."
      },
      {
        "title": "Earlier User Research Saves Rework",
        "description": "Conducted workshop interviews in Month 4 (mid-project); earlier research in Month 1 would have informed catalog taxonomy decisions and avoided rework on search/filter architecture."
      }
    ],
    "slug": "unifying-b2b-ecommerce-forvia"
  },
  {
    "id": "cs3",
    "category": "E-Commerce Expansion",
    "title": "Expanding E-Commerce Operations Across 4 LatAm Markets",
    "subtitle": "Natura & Co (via Accenture) - Multi-Country E-Commerce Platform",
    "role": "Senior Product Manager / Digital Commerce",
    "summary": "Drove a 45% increase in checkout conversion for Natura Brazil and expanded the platform across 4 LatAm markets in just 6 months. The challenge was optimizing for a unique social commerce model where consultant-shared links were the primary acquisition path, requiring country-specific payment localization (Mercado Pago, PSE, WebPay, OXXO), languages, and regulatory requirements. We achieved rapid scale by standardizing a rollout playbook across a 50+ person distributed team.",
    "challenge": "Brazil's e-commerce checkout suffered from high abandonment due to complex address entry and fragmented payment preferences. A key nuance: Natura's acquisition model relied on beauty consultants sharing product links directly with customers, meaning checkout optimization had to account for the full social commerce funnel. Phase 2 required expanding to LatAm markets with distinct localization requirements while maintaining an aggressive 6-month timeline.",
    "approach": [
      {
        "title": "Data-Driven Experimentation",
        "description": "Conducted comprehensive funnel analysis and heatmaps. Ran structured A/B experiments across simplified checkout flows, Google Maps address autocomplete, and expanded payment methods in Brazil (Pix, Mercado Pago, Buy Now Pay Later)."
      },
      {
        "title": "Playbook Development",
        "description": "Documented Brazil learnings into standardized rollout playbook covering technical implementation sequences, localization requirements framework, QA testing protocols, and stakeholder communication cadences."
      },
      {
        "title": "Phased Market Launch",
        "description": "Used Argentina as full-cycle pilot (10-12 weeks) to validate playbook despite smaller market size, then parallelized Colombia, Chile, and Mexico (5-6 weeks each) using standardized approach and shared platform components."
      },
      {
        "title": "Distributed Coordination",
        "description": "Aligned engineering, UX, data, and commercial teams across 5 countries without direct authority, translating technical complexity into business outcomes for client leadership."
      }
    ],
    "outcomes": [
      {
        "title": "Conversion Performance",
        "description": "+45% conversion rate and -15% cart abandonment in Brazil through simplified checkout, address autocomplete, and expanded payment methods."
      },
      {
        "title": "Market Expansion",
        "description": "4 countries launched in 6 months with 90%+ feature parity, expanding addressable market by approximately 40%."
      },
      {
        "title": "Efficiency Gains",
        "description": "35% reduction in time-to-market for subsequent launches (Argentina 10-12 weeks, later markets 5-6 weeks each) through playbook reuse and shared platform components."
      }
    ],
    "keyMetric": {
      "label": "Conversion Rate",
      "value": "+45%",
      "description": "Increase in checkout conversion"
    },
    "lessons": [
      {
        "title": "Pilot Market Investment Pays Dividends",
        "description": "Full learning cycle in Argentina (despite smaller market size vs. Mexico) validated the playbook and compressed subsequent launches by 35%. Sequential pilot before parallel execution balanced speed with quality."
      },
      {
        "title": "Feature Parity Thresholds Prevent Perfectionism",
        "description": "Accepting 90% feature parity (vs. 100%) allowed faster market entry while deferring edge cases to post-launch iterations. Diminishing returns beyond 90% would have delayed launches without proportional business value."
      }
    ],
    "slug": "expanding-e-commerce-latam"
  },
  {
    "id": "cs4",
    "category": "Mobile Checkout",
    "title": "Boosting Mobile Conversion for a Major Fashion Retailer",
    "subtitle": "C&A Brasil - Fashion E-Commerce Platform",
    "role": "Product Manager",
    "summary": "Achieved +28% checkout conversion and -18% cart abandonment for C&A's mobile e-commerce platform. The primary barrier was systemic: in a Brazilian e-commerce market where over 70% of purchases used instalment plans and credit card penetration was below 50%, displaying lump-sum prices filtered out a significant share of shoppers. We fixed this by repositioning instalment pricing as the default display format alongside a streamlined mobile-first checkout.",
    "challenge": "Mobile checkout abandonment was high on a platform serving 80%+ mobile traffic. Beyond form friction and poor multi-item cart UX, the core payment barrier was systemic: over 70% of Brazilian e-commerce purchases used instalment plans and card penetration was below 50%, meaning a checkout showing only lump-sum, card-only options was filtering out a significant share of shoppers before they could buy.",
    "approach": [
      {
        "title": "Funnel Analysis and Diagnosis",
        "description": "Used Google Analytics 360 for funnel analysis identifying drop-off points. Deployed Hotjar heatmaps to reveal mobile UX friction (form fields, CTA placement, multi-item cart complexity)."
      },
      {
        "title": "Mobile-First Checkout Redesign",
        "description": "Reduced form fields from 12 to 7 (removed redundant shipping info), implemented Google Maps API address autocomplete (reduced input errors by ~30%), streamlined multi-item cart flow."
      },
      {
        "title": "Payment Method Expansion",
        "description": "Introduced Boleto bancário and repositioned instalment pricing as the default display format (e.g., 'R$120 or 12x R$10' instead of lump sum), removing the payment barrier filtering out credit-constrained shoppers. In a market where 70%+ of purchases are made in parcelas and card penetration was below 50%, showing a lump-sum price was a conversion barrier, not a design choice. Also integrated Mercado Pago as an alternative wallet."
      },
      {
        "title": "Experimentation Rigor",
        "description": "Ran controlled A/B tests with 7-day minimum runtime and statistical significance thresholds. Created experimentation playbook in Confluence for team reuse."
      }
    ],
    "outcomes": [
      {
        "title": "Conversion Impact",
        "description": "+28% conversion rate improvement"
      },
      {
        "title": "Abandonment Reduction",
        "description": "-18% cart abandonment reduction"
      },
      {
        "title": "Career Growth",
        "description": "As Product Manager, expanded ownership to the Checkout & Payments vertical."
      }
    ],
    "keyMetric": {
      "label": "Conversion Rate",
      "value": "+28%",
      "description": "Increase in checkout conversion"
    },
    "lessons": [
      {
        "title": "Mobile-First Prioritization",
        "description": "With 80% mobile traffic, desktop optimization would have been wasted effort. Accepted temporary desktop conversion dip for larger mobile gains."
      },
      {
        "title": "Stakeholder Negotiation Protects Long-Term Wins",
        "description": "Pushed back on marketing's request for email capture at cart stage. Negotiated post-purchase email capture instead, protecting conversion funnel while still meeting marketing's needs."
      }
    ],
    "slug": "boosting-mobile-conversion-ca"
  },
  {
    "id": "cs5",
    "category": "Conversational Commerce",
    "title": "Product Foundations for C&A's WhatsApp Commerce Channel",
    "subtitle": "C&A Brasil - WhatsApp Business Strategy",
    "role": "Product Manager",
    "summary": "Launched one of Brazil's earliest enterprise WhatsApp Business API deployments in fashion retail, integrating Salesforce Marketing Cloud for order notifications and lifecycle messaging and establishing the channel as a retention and re-engagement lever. Defined the operational metrics and associate workflow foundations for the pilot. The channel's later commercial scale, including roughly half of C&A's R$1.17B FY2022 digital gross revenue, was a company and Sales/Commercial outcome after my C&A tenure ended in Aug 2020.",
    "challenge": "In late 2019, WhatsApp was Brazil's dominant app, but no fashion retailer had scaled it as a sales channel. The Sales team wanted a feature-rich launch (AI chatbots, personalization) immediately, but the e-commerce platform (VTEX) lacked native integration. The challenge was defining a technically feasible MVP that could launch quickly without getting bogged down in unproven AI complexity.",
    "approach": [
      {
        "title": "MVP Scope Definition",
        "description": "Advocated for a 'human-first, tech-light' MVP. Instead of building complex chatbots, we focused on enabling store associates with basic tools: inventory lookup, link generation, and order attribution. This allowed for faster launch."
      },
      {
        "title": "Metrics Framework Design",
        "description": "Defined success beyond just revenue: 'Conversation-to-Conversion' for sales quality, 'Response Time' for customer experience, and 'Orders per Associate' for operational efficiency. This balanced commercial goals with operational reality."
      },
      {
        "title": "Technical Feasibility Assessment",
        "description": "Mapped the gap between Sales ambitions and VTEX API capabilities. Created the integration specs for real-time inventory sync to prevent associates from selling out-of-stock items, a critical failure mode in manual sales."
      },
      {
        "title": "Workflow Standardization",
        "description": "Designed the standard operating procedure for associates: how to greet, how to share product cards, and when to transition to checkout. This ensured consistent brand voice across hundreds of decentralized store employees."
      }
    ],
    "outcomes": [
      {
        "title": "Channel Launch",
        "description": "Launched one of Brazil's earliest enterprise WhatsApp Business API deployments in fashion retail, with Salesforce Marketing Cloud integration for order notifications and lifecycle messaging."
      },
      {
        "title": "Retention Lever",
        "description": "Established the channel as a retention and re-engagement lever, and defined the conversion and operational metrics framework and associate workflow foundations."
      },
      {
        "title": "Later Company Outcome (post-tenure)",
        "description": "After my C&A tenure ended in Aug 2020, the channel reached 50.2% of C&A digital gross revenue in FY2022, against total digital GMV of R$1.17B, +30% YoY, and 2x average order value vs. physical stores. Source: C&A 4Q22 release. These are company and Sales/Commercial results, not my personal outcomes."
      }
    ],
    "keyMetric": {
      "label": "WhatsApp Business API",
      "value": "Launch & integration",
      "description": "One of Brazil's earliest enterprise WhatsApp Business API deployments in fashion retail, with Salesforce Marketing Cloud integration for order notifications and lifecycle messaging."
    },
    "lessons": [
      {
        "title": "Enablement vs. Ownership",
        "description": "I launched the WhatsApp Business API deployment without owning the channel's P&L. It taught me the importance of setting strong technical and workflow foundations for commercial teams to build upon. The product contribution wasn't the sale itself, but making the sale scalable."
      },
      {
        "title": "Timing is Strategic",
        "description": "Launching the pilot prep in late 2019 seemed early, but it meant C&A was ready when the market shifted in 2020. Strategic foresight in product often looks like 'too early' until it's suddenly 'just in time'."
      }
    ],
    "slug": "whatsapp-commerce-brazil"
  }
];
