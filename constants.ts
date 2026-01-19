import { CaseStudy, ExperienceItem, BlogPost } from './types';

export const HERO_DATA = {
  name: "Rodrigo Lopes",
  tagline: "From Hypothesis to Impact.",
  subtext: "Senior Product Manager de-risking innovation through continuous discovery, data-driven experimentation, and emerging-technology-powered build–measure–learn loops.",
  contact: {
    email: "contact@rodrigolopes.eu",
    linkedin: "linkedin.com/in/rodecalo",
    github: "github.com/r0l0pes",
    web: "rodrigolopes.eu",
    location: "Berlin, DE"
  }
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "ai-derisking",
    title: "De-risking AI Products: Lessons from the Field",
    date: "Oct 12, 2024",
    readTime: "5 min read",
    tags: ["AI Strategy", "Product Management"],
    excerpt: "Building AI products often feels like magic, but magic doesn't always find product-market fit. Here is how we validated use cases before training a single model.",
    content: [
      { type: 'paragraph', text: "In the rush to adopt Generative AI, many product teams fall into the trap of 'solution looking for a problem'. At WFP, when we set out to build a voice companion for farmers, the technology was the exciting part, but the user context was the critical part." },
      { type: 'heading', text: "The Latency Fallacy" },
      { type: 'paragraph', text: "We initially optimized for sub-second response times. However, field testing revealed that trust was more correlated with the 'thoughtfulness' of the answer than its speed. Farmers were willing to wait 5 seconds for an answer if the voice sounded authoritative and locally nuanced." },
      { type: 'heading', text: "Wizard of Oz Testing" },
      { type: 'paragraph', text: "Before fine-tuning our own models, we used human operators to simulate the AI via WhatsApp. This 'Wizard of Oz' test saved us months of engineering time by proving that the primary value driver was not 'chatting' but specific weather-based crop advice." },
      { type: 'list', items: ["Start with low-fidelity prototypes.", "Measure trust, not just accuracy.", "Context beats raw intelligence."] }
    ]
  },
  {
    id: "circular-data",
    title: "The Invisible Supply Chain: Data in the Circular Economy",
    date: "Aug 24, 2024",
    readTime: "4 min read",
    tags: ["Sustainability", "Data Governance"],
    excerpt: "Tracking physical resources across a city requires more than just a database. It requires a new way of thinking about privacy and ownership.",
    content: [
      { type: 'paragraph', text: "Circular economy initiatives often fail because of a lack of data visibility. You cannot reuse what you cannot see. However, makers and local manufacturers are hesitant to share their inventory data due to IP concerns." },
      { type: 'heading', text: "Privacy by Design" },
      { type: 'paragraph', text: "At Fab City, we implemented Decentralized Identifiers (DIDs) to allow participants to prove facts about their materials (e.g., 'this plastic is recycled') without revealing their entire supplier list. This cryptographic approach to supply chain transparency bridged the trust gap." },
      { type: 'paragraph', text: "By decoupling the 'what' from the 'who', we saw a 37% increase in data contributions from local workshops." }
    ]
  },
  {
    id: "shadow-mode",
    title: "Why 'Shadow Mode' is Your Best Friend in ADAS",
    date: "Feb 15, 2024",
    readTime: "6 min read",
    tags: ["Automotive", "Testing"],
    excerpt: "You can't A/B test emergency braking with live users. How to validate safety-critical features without risking a pile-up.",
    content: [
      { type: 'paragraph', text: "In consumer apps, we move fast and break things. In automotive, breaking things means putting lives at risk. Yet, we still need to iterate. This is the central paradox of ADAS product management." },
      { type: 'heading', text: "The Shadow Deploy" },
      { type: 'paragraph', text: "At HELLA, we utilized 'Shadow Mode' deployment. The new model runs silently in the background of the car's computer, receiving the same inputs as the active system but having no control over the vehicle." },
      { type: 'paragraph', text: "We could then compare the Shadow Model's 'decisions' against the actual driver behavior. If the model predicted a brake event but the driver accelerated, we flagged it as a potential false positive. This allowed us to calculate precision and recall on millions of real-world kilometers before the feature ever engaged." }
    ]
  },
  {
    id: "scaling-data-mesh",
    title: "Scaling Data Mesh: A Cultural Shift",
    date: "Nov 10, 2023",
    readTime: "7 min read",
    tags: ["Data Engineering", "Team Topologies"],
    excerpt: "Moving from a centralized data lake to a federated data mesh isn't just an architecture change—it's an organizational restructuring.",
    content: [
      { type: 'paragraph', text: "The promise of Data Mesh is enticing: domain-oriented decentralized data ownership and architecture. But the reality of implementation often hits a wall of 'that's not my job' from domain teams." },
      { type: 'heading', text: "Treating Data as a Product" },
      { type: 'paragraph', text: "The key unlock for us was shifting the conversation from 'compliance' to 'value'. We built a self-serve data platform that made it easier for domain teams to publish data than to keep it siloed. By reducing the friction of producing data products, we incentivized the behavior we wanted to see." }
    ]
  },
  {
    id: "api-product-strategy",
    title: "API as a Product: Beyond Documentation",
    date: "Jun 15, 2023",
    readTime: "5 min read",
    tags: ["Platform", "Strategy"],
    excerpt: "Your API is a UI for developers. If the DX (Developer Experience) is poor, your churn will be high, no matter how powerful the backend.",
    content: [
      { type: 'paragraph', text: "When we integrated the Mastercard API for real-time authorization, we learned that 'functionally complete' is not the same as 'usable'. A good API product strategy treats the developer as a user persona with specific needs, pain points, and jobs-to-be-done." },
      { type: 'list', items: ["Time to First Call (TTFC) is your north star metric.", "Error messages are part of the UI.", "Versioning is a promise, not a feature."] }
    ]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "World Food Programme",
    role: "Senior Product Manager",
    period: "Jun 2023 – Sep 2025",
    location: "Munich",
    description: [
      "Led end-to-end AI Voice Companion mobile rollout in five months to a 5,000-user pilot cohort of Tanzanian farmers.",
      "Boosted app awareness by 15%, weekly active accounts by 25%, and retention by 12% through targeted A/B tests.",
      "Built an XGBoost-based machine learning demand forecast on AWS, cutting oversupply by 20% and boosting accuracy by 30%."
    ]
  },
  {
    company: "Fab City Hamburg",
    role: "Senior Product Manager",
    period: "Jan 2022 – Apr 2023",
    location: "Hamburg",
    description: [
      "Launched Fab City Operating System (FCOS) MVP to help cities track physical resources and meet EU Circular Economy goals.",
      "Integrated Hyperledger Fabric for traceability, doubling FCOS cadence and improving release success rate by 30%.",
      "Onboarded five municipal partners, facilitating stakeholder engagement across government and technical teams."
    ]
  },
  {
    company: "HELLA Aglaia Mobile Vision",
    role: "Senior Product Manager",
    period: "Aug 2020 – Dec 2021",
    location: "Berlin",
    description: [
      "Shaped vision and roadmap for a data mesh-based batch-and-streaming platform to enable 24/7 insights.",
      "Accelerated enterprise data lake modernisation boosting self-service adoption by 35%.",
      "Led cross-functional team to launch an Android app for ADAS feedback, reducing harsh-brake events by 18%."
    ]
  },
  {
    company: "Accenture Brasil",
    role: "Digital Product Manager",
    period: "Sep 2017 – Apr 2020",
    location: "São Paulo, BR",
    description: [
      "Managed projects for Natura (major LatAm beauty retailer) and Itau (leading Brazilian bank).",
      "Cut cart abandonment by 15% and increased conversions by 50% through UX friction testing.",
      "Integrated Mastercard’s API for real-time authorization, reducing false positives by 28%."
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs1",
    category: "Humanitarian Tech Aid - AI Validation & Adoption",
    title: "Launching a Generative AI Voice Agent for 5,000 Farmers in Tanzania",
    subtitle: "World Food Programme - Generative AI Voice Agent",
    role: "Senior Product Manager",
    summary: "Partnered with Viamo to validate whether generative AI could deliver agricultural advice to smallholder farmers facing extreme constraints: limited smartphone literacy, unreliable connectivity, and languages underrepresented in commercial AI training data. Engaged 5,000 farmers across a 6-month growing season, demonstrating 60% cost efficiency potential vs. traditional extension worker models and informing WFP's AI investment strategy across 20+ country programs.",
    challenge: "Standard AI voice interfaces assume reliable connectivity, smartphone literacy, and well-resourced training data. None of these held true for Tanzanian smallholder farmers. WFP needed to validate product-market fit before committing to scaling, but the Innovation Accelerator structure prioritized speed over perfection, risking anecdotal findings rather than strategic clarity.",
    approach: [
      { title: "Defined Defensible Success Metrics", description: "Structured validation around three measurable dimensions: adoption (40%+ weekly active usage), retention (60%+ return users at 8 weeks), and decision quality (behavior change proxies since harvest cycles extended beyond pilot timeline)." },
      { title: "Built Low-Connectivity Analytics", description: "Implemented tracking framework adapted for intermittent connectivity using call completion rates, session duration, NLP sentiment analysis on voice feedback, and manual field surveys for qualitative depth." },
      { title: "Ran Parallel AI Governance Stream", description: "Contributed to WFP's AI Sandbox, an internal platform enabling non-technical staff to test AI use cases, focusing on validation methodology and responsible AI principles for vulnerable populations." },
      { title: "Designed Strategic Recommendation Framework", description: "Structured final presentation around three decision paths (scale now, iterate, or exit) with explicit trade-offs, cost implications, and applicability across WFP's 20+ country agricultural portfolio." }
    ],
    outcomes: [
      { title: "Farmer Engagement", description: "Engaged 5,000 farmers across 6-month growing season in Tanzania (sunflower farmers, Northern and Southern highlands)." },
      { title: "Cost Efficiency Potential", description: "Demonstrated 60% cost reduction vs. traditional extension worker model based on cost-per-farmer-reached analysis." },
      { title: "Failure Mode Identification", description: "Identified 3 critical failure modes for AI voice in low-literacy contexts: connectivity dropoffs, dialect coverage gaps, and trust calibration with AI-generated advice." },
      { title: "Strategic Impact", description: "Informed WFP's decision framework for AI product investments across 20+ country programs and contributed to governance framework for responsible AI adoption." }
    ],
    keyMetric: {
      label: "Cost Efficiency Potential",
      value: "60%",
      description: "Cost reduction vs. traditional extension model",
      chartData: [
        { name: 'Extension Worker', value: 100 },
        { name: 'AI Voice', value: 40 },
      ]
    },
    lessons: [
      { title: "Leading vs. Lagging Indicators", description: "Harvest outcomes extended beyond pilot timeline, so behavior change proxies (adoption of recommended practices) served as leading indicators. Defining this upfront aligned stakeholders and avoided the recurring 'let's wait for harvest data' debate." },
      { title: "Field Reality Over Digital Metrics", description: "Initial tracking relied on call logs and session duration, but field observations revealed farmers sharing phones, making individual-level tracking misleading. Pivoting to combine quantitative signals with qualitative field surveys produced more honest assessments." }
    ]
  },
  {
    id: "cs2",
    category: "Automotive B2B - Post-Merger Integration",
    title: "Integrating a B2B E-Commerce Platform Post-Merger for 60,000+ Workshops",
    subtitle: "FORVIA HELLA - B2B E-Commerce Platform",
    role: "Senior Product Manager",
    summary: "Following the Faurecia-HELLA merger, managed product roadmap for the B2B e-commerce integration workstream serving 60,000+ independent automotive workshops across Europe. Unified 15,000+ SKUs from two legacy catalogs, redesigned checkout flows for multi-brand purchases, and implemented digital adoption tooling. Enabled EUR 12M+ Year 1 cross-sell revenue while maintaining 99.9%+ platform uptime.",
    challenge: "HELLA Partner World operated as a single-vendor catalog optimized for lighting and electronics products. Post-merger, three challenges emerged: catalog complexity (integrating Faurecia's 15,000+ SKUs without degrading search/navigation), commercial misalignment (engineering, data, and sales teams operating in silos with conflicting priorities), and UX debt (checkout flows optimized for single-vendor ordering creating friction for multi-item, cross-brand purchases).",
    approach: [
      { title: "Phased Catalog Integration", description: "Partnered with data teams to audit Faurecia catalog quality, defined MVP scope with top 500 SKUs by revenue potential, validated search/filter functionality before full 15,000 SKU integration at Month 12." },
      { title: "Cross-Functional Alignment", description: "Established weekly syncs with engineering (platform roadmap), data (catalog quality SLAs), and commercial teams (product prioritization). Translated business requirements ('maximize cross-sell') into product specs (unified search, cross-brand recommendations, multi-item cart UX)." },
      { title: "B2B UX Optimization", description: "Conducted workshop user research to identify friction points, redesigned cart and checkout for mobile optimization and multi-item ordering, implemented Userlane digital adoption platform for contextual guidance on new catalog features." },
      { title: "Measurement and Iteration", description: "Defined success metrics (order completion time, self-service adoption, NPS), launched GA4 analytics instrumentation, ran iterative A/B tests on catalog navigation and checkout variants." }
    ],
    outcomes: [
      { title: "Revenue Impact", description: "Enabled EUR 12M+ Year 1 cross-sell revenue through unified catalog and improved product discoverability." },
      { title: "Operational Efficiency", description: "Reduced order completion time by 35% through streamlined checkout flow and multi-item cart optimization." },
      { title: "User Adoption", description: "Increased self-service adoption by 40% via Userlane digital adoption tools, reducing customer support tickets for catalog navigation issues." },
      { title: "Customer Satisfaction", description: "Improved Net Promoter Score by 22 points post-optimization while maintaining 99.9%+ uptime during integration." }
    ],
    keyMetric: {
      label: "Year 1 Cross-Sell",
      value: "EUR 12M+",
      description: "Revenue through unified catalog",
      chartData: [
        { name: 'Target', value: 10 },
        { name: 'Achieved', value: 12 },
      ]
    },
    lessons: [
      { title: "MVP Scope Prevents Paralysis", description: "Early alignment on 500-SKU MVP (vs. full 15,000) enabled faster validation and reduced risk. Phased rollout mitigated integration failures that could have disrupted revenue for 60,000 workshop customers." },
      { title: "Earlier User Research Saves Rework", description: "Conducted workshop interviews in Month 4 (mid-project); earlier research in Month 1 would have informed catalog taxonomy decisions and avoided rework on search/filter architecture." }
    ]
  },
  {
    id: "cs3",
    category: "E-Commerce - Growth & International Expansion",
    title: "Scaling an E-Commerce Platform Across 4 LatAm Markets",
    subtitle: "Natura & Co (via Accenture) - Multi-Country E-Commerce Platform",
    role: "Senior Product Manager",
    summary: "Embedded as Senior PM within Accenture Brasil's 30-person delivery team for Natura & Co, a publicly traded LatAm beauty retailer. Phase 1 (18 months) focused on Brazil checkout optimization, achieving +45% conversion and -15% cart abandonment through mobile-first redesign, address autocomplete, and payment method expansion. Phase 2 (6 months) expanded the optimized platform to Argentina, Colombia, Chile, and Mexico, coordinating 50+ people across 5 countries with 90%+ feature parity.",
    challenge: "Brazil's e-commerce checkout suffered from 70%+ abandonment due to complex 8-field address entry, fragmented payment preferences (credit cards, Pix, Boleto), and mobile-first behavior on a platform where 70%+ traffic came from mobile devices. Phase 2 added complexity: each LatAm market had distinct localization requirements (country-specific payment methods, language variants, regulatory compliance) while maintaining aggressive 6-month timeline.",
    approach: [
      { title: "Data-Driven Experimentation", description: "Conducted comprehensive funnel analysis using Google Analytics, deployed heatmap tools for mobile behavior patterns, ran 15+ A/B tests on simplified checkout flows (5 pages to 3), Google Maps address autocomplete, and expanded payment methods (Pix, Mercado Pago, Buy Now Pay Later)." },
      { title: "Playbook Development", description: "Documented Brazil learnings into standardized rollout playbook covering technical implementation sequences, localization requirements framework, QA testing protocols, and stakeholder communication cadences." },
      { title: "Phased Market Launch", description: "Used Argentina as full-cycle pilot (10-12 weeks) to validate playbook despite smaller market size, then parallelized Colombia, Chile, and Mexico (5-6 weeks each) using standardized approach and shared platform components." },
      { title: "Distributed Coordination", description: "Aligned engineering, UX, data, and commercial teams across 5 countries without direct authority, translating technical complexity into business outcomes for client leadership." }
    ],
    outcomes: [
      { title: "Conversion Performance", description: "+45% conversion rate and -15% cart abandonment in Brazil through simplified checkout, address autocomplete (estimated +15% impact), and expanded payment methods (estimated +10% impact)." },
      { title: "Market Expansion", description: "4 countries launched in 6 months with 90%+ feature parity, expanding addressable market by approximately 40%." },
      { title: "Efficiency Gains", description: "35% reduction in time-to-market for subsequent launches (Argentina 10-12 weeks, later markets 5-6 weeks each) through playbook reuse and shared platform components." },
      { title: "Scalable Process", description: "Standardized playbook reduced duplicate effort across country teams and minimized country-specific technical debt." }
    ],
    keyMetric: {
      label: "Conversion Rate",
      value: "+45%",
      description: "Increase in checkout conversion",
      chartData: [
        { name: 'Before', value: 2.8 },
        { name: 'After', value: 4.1 },
      ]
    },
    lessons: [
      { title: "Pilot Market Investment Pays Dividends", description: "Full learning cycle in Argentina (despite smaller market size vs. Mexico) validated the playbook and compressed subsequent launches by 35%. Sequential pilot before parallel execution balanced speed with quality." },
      { title: "Feature Parity Thresholds Prevent Perfectionism", description: "Accepting 90% feature parity (vs. 100%) allowed faster market entry while deferring edge cases to post-launch iterations. Diminishing returns beyond 90% would have delayed launches without proportional business value." }
    ]
  },
  {
    id: "cs4",
    category: "E-Commerce - Mobile Checkout Optimization",
    title: "Boosting Mobile Conversion for a Major Fashion Retailer",
    subtitle: "C&A Brasil - Fashion E-Commerce Platform",
    role: "Product Manager to Senior Product Manager",
    summary: "Joined C&A Brasil (R$7B revenue, 280+ stores) as the most junior PM on a 6-person team with mandate to reduce cart abandonment through data-driven experimentation. Over 18 months, redesigned mobile checkout (form fields reduced from 12 to 7), expanded payment methods (Boleto, installment plans, Mercado Pago), and ran 15+ A/B tests, achieving +28% conversion and -18% abandonment. Promoted to Senior PM based on measurable impact, then expanded scope to CRM integration and WhatsApp Business pilot before joining Accenture.",
    challenge: "Mobile checkout abandonment sat at 70-75% (Brazilian e-commerce baseline) on a platform serving 80%+ mobile traffic. Friction points included 12-field forms requiring manual entry, limited payment options (credit cards dominated despite Brazilian preference for installment plans), and poor multi-item cart UX. As the most junior PM, needed to prove value quickly through measurable outcomes.",
    approach: [
      { title: "Funnel Analysis and Diagnosis", description: "Used Google Analytics 360 for funnel analysis identifying drop-off points across cart, payment selection, and order confirmation. Deployed Hotjar heatmaps to reveal mobile UX friction (form fields, CTA placement, multi-item cart complexity)." },
      { title: "Mobile-First Checkout Redesign", description: "Reduced form fields from 12 to 7 (removed redundant shipping info), implemented Google Maps API address autocomplete (reduced input errors by ~30%), streamlined multi-item cart flow by consolidating 'continue shopping' vs. 'checkout' CTAs." },
      { title: "Payment Method Expansion", description: "Added Boleto bancario, increased installment plan visibility (3x, 6x, 12x options prominently displayed), integrated Mercado Pago. Key insight: Brazilian consumers prefer installments, so made pricing split more prominent (e.g., 'R$120 or 12x R$10')." },
      { title: "Experimentation Rigor", description: "Ran controlled A/B tests with 7-day minimum runtime and statistical significance thresholds. Created experimentation playbook in Confluence for team reuse, documenting hypothesis, results, and learnings for each of 15+ tests." }
    ],
    outcomes: [
      { title: "Conversion Impact", description: "+28% conversion rate improvement (from ~2.8% baseline to ~3.6%)." },
      { title: "Abandonment Reduction", description: "-18% cart abandonment reduction (from ~72% to ~59%)." },
      { title: "Career Growth", description: "Promoted to Senior PM after 18 months based on measurable checkout impact, assuming ownership of Checkout & Payments vertical." },
      { title: "Expanded Scope", description: "As Senior PM, supported Salesforce Marketing Cloud CRM integration and WhatsApp Business API pilot for order notifications and customer service deflection." }
    ],
    keyMetric: {
      label: "Conversion Rate",
      value: "+28%",
      description: "Increase in checkout conversion",
      chartData: [
        { name: 'Before', value: 2.8 },
        { name: 'After', value: 3.6 },
      ]
    },
    lessons: [
      { title: "Mobile-First Prioritization in Emerging Markets", description: "With 80% mobile traffic, desktop optimization would have been wasted effort. Accepted temporary desktop conversion dip for larger mobile gains, knowing the traffic distribution justified the trade-off." },
      { title: "Stakeholder Negotiation Protects Long-Term Wins", description: "Pushed back on marketing's request for email capture at cart stage (would have increased abandonment). Negotiated post-purchase email capture instead, protecting conversion funnel while still meeting marketing's lead generation needs." }
    ]
  }
];