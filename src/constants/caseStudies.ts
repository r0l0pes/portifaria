import { CaseStudy } from '@/types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    "id": "cs1",
    "category": "AI & Humanitarian Tech",
    "title": "Piloting a Generative AI Voice Agent for Low-Literacy Farmers",
    "subtitle": "World Food Programme Innovation Accelerator",
    "role": "Senior Product Manager",
    "summary": "Demonstrated 60% cost efficiency potential for WFP's agricultural outreach by successfully piloting a generative AI voice agent with 5,000 low-literacy farmers in Tanzania. The core challenge was designing for users with zero smartphone literacy and intermittent connectivity. We proved the model viability by identifying field officers as the critical intermediary adoption driver, informing AI strategy across 20+ countries.",
    "challenge": "Standard AI voice interfaces assume reliable connectivity, smartphone literacy, and well-resourced training data. None of these held true for Tanzanian smallholder farmers. The product hypothesis, that generative AI could replace human extension workers, needed validation before WFP committed to scaling. Without defined success metrics, the pilot risked producing anecdotal findings rather than the defensible investment recommendation leadership needed.",
    "approach": [
      {
        "title": "Defined Defensible Success Metrics",
        "description": "Structured validation around three measurable dimensions: Adoption (40%+ weekly active usage), Retention (60%+ return users at 8 weeks), and Decision Quality (behavior change proxies since harvest cycles extended beyond pilot timeline). Prioritized behavioral signals over perfect outcome measurement."
      },
      {
        "title": "Built Low-Connectivity Analytics",
        "description": "Implemented tracking framework adapted for intermittent connectivity using call completion rates, session duration, NLP sentiment analysis on voice feedback, and manual field surveys for qualitative depth. Pivoted mid-pilot from digital-only metrics after field observations revealed farmers sharing phones."
      },
      {
        "title": "Coordinated Distributed Stakeholders",
        "description": "Managed weekly syncs across WFP field operations, Viamo engineering, and Innovation Accelerator leadership. Navigated misaligned incentives by translating each stakeholder's goals into shared success criteria, using early adoption curves and cost models to build alignment."
      },
      {
        "title": "Designed Strategic Recommendation Framework",
        "description": "Structured final presentation around three decision paths (scale now, iterate, or exit) with explicit trade-offs, cost implications, and applicability across WFP's 20+ country agricultural portfolio."
      }
    ],
    "outcomes": [
      {
        "title": "Pilot Validation",
        "description": "Engaged 5,000 farmers across 6-month growing season. Demonstrated 60% cost efficiency potential vs. traditional extension worker model."
      },
      {
        "title": "Failure Mode Identification",
        "description": "Identified 3 critical failure modes for AI voice in low-literacy contexts: connectivity dropoffs, dialect coverage gaps, and trust calibration with AI-generated advice."
      },
      {
        "title": "Strategic Impact",
        "description": "Informed WFP's decision framework for AI product investments across 20+ country programs and contributed to governance framework for responsible AI adoption."
      }
    ],
    "keyMetric": {
      "label": "Cost Efficiency Potential",
      "value": "60%",
      "description": "Cost reduction vs. traditional extension model",
      "chartData": [
        {
          "name": "Extension Worker",
          "value": 100
        },
        {
          "name": "AI Voice",
          "value": 40
        }
      ]
    },
    "lessons": [
      {
        "title": "Leading vs. Lagging Indicators",
        "description": "Harvest outcomes extended beyond pilot timeline, so behavior change proxies (adoption of recommended practices) served as leading indicators. Defining this upfront aligned stakeholders and avoided the recurring 'let's wait for harvest data' debate."
      },
      {
        "title": "Field Reality Over Digital Metrics",
        "description": "Initial adoption tracking relied too heavily on digital metrics; pivoted to qualitative field surveys which produced more honest assessments."
      }
    ]
  },
  {
    "id": "cs2",
    "category": "B2B E-Commerce",
    "title": "Unifying a B2B E-Commerce Platform Post-Merger",
    "subtitle": "FORVIA HELLA - B2B E-Commerce Platform",
    "role": "Senior Product Manager",
    "summary": "Enabled €12M+ Year 1 cross-sell revenue for 60,000+ workshops following the €400M FORVIA-HELLA merger. The challenge was integrating Faurecia's 15,000+ SKUs into a single-vendor catalog without breaking the existing search and checkout experience. We drove adoption by establishing digital order share as the North Star Metric and redesigning the multi-item checkout flow.",
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
        "description": "Enabled EUR 12M+ Year 1 cross-sell revenue through unified catalog and improved product discoverability."
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
      "label": "Year 1 Cross-Sell",
      "value": "EUR 12M+",
      "description": "Revenue through unified catalog",
      "chartData": [
        {
          "name": "Target",
          "value": 10
        },
        {
          "name": "Achieved",
          "value": 12
        }
      ]
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
    ]
  },
  {
    "id": "cs3",
    "category": "E-Commerce Expansion",
    "title": "Expanding E-Commerce Operations Across 4 LatAm Markets",
    "subtitle": "Natura & Co (via Accenture) - Multi-Country E-Commerce Platform",
    "role": "Senior Product Manager",
    "summary": "Drove a 45% increase in checkout conversion for Natura Brazil and expanded the platform across 4 LatAm markets in just 6 months. The challenge was optimizing for a unique social commerce model where consultant-shared links were the primary acquisition path, requiring localized payment methods across all countries. We achieved rapid scale by standardizing a rollout playbook across a 50+ person distributed team.",
    "challenge": "Brazil's e-commerce checkout suffered from 70%+ abandonment due to complex address entry and fragmented payment preferences. A key nuance: Natura's acquisition model relied on beauty consultants sharing product links directly with customers, meaning checkout optimization had to account for the full social commerce funnel. Phase 2 required expanding to LatAm markets with distinct localization requirements while maintaining an aggressive 6-month timeline.",
    "approach": [
      {
        "title": "Data-Driven Experimentation",
        "description": "Conducted comprehensive funnel analysis and heatmaps. Ran 37+ A/B tests on simplified checkout flows, Google Maps address autocomplete, and expanded payment methods (Pix, Mercado Pago, Buy Now Pay Later)."
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
      "description": "Increase in checkout conversion",
      "chartData": [
        {
          "name": "Before",
          "value": 2.8
        },
        {
          "name": "After",
          "value": 4.1
        }
      ]
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
    ]
  },
  {
    "id": "cs4",
    "category": "Mobile Checkout",
    "title": "Boosting Mobile Conversion for a Major Fashion Retailer",
    "subtitle": "C&A Brasil - Fashion E-Commerce Platform",
    "role": "Product Manager -> Senior PM",
    "summary": "Achieved +28% checkout conversion and -18% cart abandonment for C&A's mobile e-commerce platform. The primary barrier was systemic: displaying lump-sum prices to a user base where 70% relied on instalment payments and credit card penetration was under 50%. We fixed this by repositioning instalment pricing as the default display format alongside a streamlined mobile-first checkout.",
    "challenge": "Mobile checkout abandonment sat at 70–75% on a platform serving 80%+ mobile traffic. Beyond form friction and poor multi-item cart UX, the core payment barrier was systemic: over 70% of Brazilian e-commerce purchases used instalment plans and card penetration was below 50%, meaning a checkout showing only lump-sum, card-only options was filtering out a significant share of shoppers before they could buy.",
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
        "description": "+28% conversion rate improvement (from ~2.8% baseline to ~3.6%)."
      },
      {
        "title": "Abandonment Reduction",
        "description": "-18% cart abandonment reduction (from ~72% to ~59%)."
      },
      {
        "title": "Career Growth",
        "description": "Promoted to Senior PM after 18 months based on measurable checkout impact, assuming ownership of Checkout & Payments vertical."
      }
    ],
    "keyMetric": {
      "label": "Conversion Rate",
      "value": "+28%",
      "description": "Increase in checkout conversion",
      "chartData": [
        {
          "name": "Before",
          "value": 2.8
        },
        {
          "name": "After",
          "value": 3.6
        }
      ]
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
    ]
  },
  {
    "id": "cs5",
    "category": "Conversational Commerce",
    "title": "Building Brazil's First WhatsApp Commerce Platform At Scale",
    "subtitle": "C&A Brasil - WhatsApp Business Strategy",
    "role": "Senior Product Manager (Supporting)",
    "summary": "Enabled a new WhatsApp commerce channel that eventually scaled to R$1.17B GMV by 2022, accounting for >50% of C&A's digital sales. The challenge was launching quickly to validate human-led conversational commerce without waiting for complex native integrations into the VTEX legacy platform. We established the product foundations through clear operational metrics and workflow design for 800+ store associates.",
    "challenge": "In late 2019, WhatsApp was Brazil's dominant app, but no fashion retailer had scaled it as a sales channel. The Sales team wanted a feature-rich launch (AI chatbots, personalization) immediately, but the e-commerce platform (VTEX) lacked native integration. The challenge was defining a technically feasible MVP that could launch quickly to validate the hypothesis (human-led sales) without getting bogged down in unproven AI complexity.",
    "approach": [
      {
        "title": "MVP Scope Definition",
        "description": "Advocated for a 'human-first, tech-light' MVP. Instead of building complex chatbots, we focused on enabling 800+ associates with basic tools: inventory lookup, link generation, and order attribution. This allowed for faster launch."
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
        "title": "Scale Validation",
        "description": "Channel grew to R$1.17B GMV by 2022 (Source: C&A 4Q22 Earnings), validating the strategic bet on WhatsApp."
      },
      {
        "title": "Digital Dominance",
        "description": "Accounted for >50% of all digital sales in Q1 2022, proving that conversational commerce could outperform traditional web e-commerce in Brazil."
      },
      {
        "title": "Unit Economics",
        "description": "Achieved 2x Average Order Value (AOV) compared to physical stores, as personalized advice drove bigger baskets."
      },
      {
        "title": "Strategic Foresight",
        "description": "Validated the 'human-in-the-loop' model years before competitors, giving C&A a significant operational advantage during the 2020-2021 digital shift."
      }
    ],
    "keyMetric": {
      "label": "Channel Scale (2022)",
      "value": "R$1.17B",
      "description": "GMV via WhatsApp Channel",
      "chartData": [
        {
          "name": "2019",
          "value": 0
        },
        {
          "name": "2022",
          "value": 1.17
        }
      ]
    },
    "lessons": [
      {
        "title": "Enablement vs. Ownership",
        "description": "I supported this initiative without owning the P&L. It taught me the importance of setting strong technical foundations for commercial teams to build upon. The product contribution wasn't the sale itself, but making the sale scalable."
      },
      {
        "title": "Timing is Strategic",
        "description": "Launching the pilot prep in late 2019 seemed early, but it meant C&A was ready when the market shifted in 2020. Strategic foresight in product often looks like 'too early' until it's suddenly 'just in time'."
      }
    ]
  }
];
