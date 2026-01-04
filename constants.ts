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
    category: "Mobility • ADAS",
    title: "Enhancing Driver Safety",
    subtitle: "Mobile-Integrated Feedback System",
    role: "Senior Product Manager",
    summary: "Reduced risky driving behaviors while boosting driver satisfaction by delivering real-time, actionable feedback.",
    challenge: "Drivers lacked real-time insight into risky habits. Post-purchase satisfaction flat-lined at 55 NPS, and insurers flagged a 12% YoY rise in claims.",
    approach: [
      { title: "User-Centric Discovery", description: "Interviewed 25 drivers to frame a Safety & Satisfaction goal." },
      { title: "Experimentation", description: "Bench-marked SVM and Random Forest models on in-car telemetry data in shadow mode." },
      { title: "Compliance", description: "Achieved ISO 26262 ASIL-B and GDPR sign-off with encrypted on-device logs." }
    ],
    outcomes: [
      { title: "Post-Purchase Satisfaction", description: "Rose 47% (NPS 55 → 81) within six months." },
      { title: "Risk Reduction", description: "Harsh-brake events dropped 18% and rapid-accel events fell 12%." },
      { title: "Time to Market", description: "Shipped in six months — 20% faster than previous ADAS releases." }
    ],
    keyMetric: {
      label: "NPS Growth",
      value: "+47%",
      description: "Increase in Net Promoter Score",
      chartData: [
        { name: 'Start', value: 55 },
        { name: 'End', value: 81 },
      ]
    },
    lessons: [
      { title: "Privacy First", description: "Early GDPR review avoided costly re-work." },
      { title: "Micro-Iteration Wins", description: "Weekly shadow rides surfaced edge cases fast." }
    ]
  },
  {
    id: "cs2",
    category: "FMCG • E-Commerce",
    title: "Driving Customer Engagement",
    subtitle: "AI Chatbot & Sales Conversions",
    role: "Senior Digital Consultant",
    summary: "Halved inquiry latency and boosted online conversions for a leading German FMCG brand via NLP chatbot.",
    challenge: "Inquiry resolution took minutes rather than seconds (4h avg response), and purchase completion lagged industry benchmarks (sub-2% conversion).",
    approach: [
      { title: "Problem Framing", description: "Used funnel analytics to set success metrics (50% latency cut, 2x conversion uplift)." },
      { title: "Agile Implementation", description: "Led Scrum sprints to ship a Rasa-based NLP chatbot." },
      { title: "Adoption", description: "Devised a tiered enablement program for 150+ staff." }
    ],
    outcomes: [
      { title: "Faster Response", description: "Cut average inquiry time from 120s to 60s (50% faster)." },
      { title: "Conversion Uplift", description: "8% uplift via chat-guided upsells and cart-recovery." },
      { title: "Query Automation", description: "60% of routine inquiries deflected to the bot." }
    ],
    keyMetric: {
      label: "Response Speed",
      value: "50%",
      description: "Reduction in inquiry time",
      chartData: [
        { name: 'Manual', value: 120 },
        { name: 'Bot', value: 60 },
      ]
    },
    lessons: [
      { title: "Localization Matters", description: "Transparent 'bot identity' messaging drove 25% higher adoption." },
      { title: "Data-Informed Optimization", description: "Feedback loops raised NLP accuracy by 32%." }
    ]
  },
  {
    id: "cs3",
    category: "Urban Innovation • Circular Economy",
    title: "Digital Traceability & Collaboration",
    subtitle: "Local Production Platform",
    role: "Senior Product Manager",
    summary: "Enabled digital traceability and collaboration while upholding user privacy and circular economy principles.",
    challenge: "Centralized supply chains operate as black boxes. Makers and cities lacked auditable transparency to make sustainable decisions.",
    approach: [
      { title: "Policy-To-Product", description: "Anchored roadmap in EU regulations (ESPR, DPP) through co-creation sprints." },
      { title: "Privacy-By-Design", description: "Launched MVP using Decentralized Identifiers (DIDs) for pseudonymous attribution." },
      { title: "Modular Tech", description: "Built Git-inspired frontend for versioned documentation." }
    ],
    outcomes: [
      { title: "Modular MVP", description: "Delivered Fab City OS Core prototype with DIDs." },
      { title: "Uptick In Contributions", description: "37% increase in maker documentation submissions." },
      { title: "Policy Alignment", description: "Prototype met ESPR requirements for EU-wide federation." }
    ],
    keyMetric: {
      label: "Contributions",
      value: "+37%",
      description: "Increase in documentation",
      chartData: [
        { name: 'Before', value: 100 },
        { name: 'After', value: 137 },
      ]
    },
    lessons: [
      { title: "Local Realities", description: "Successful onboarding demanded dedicated training for non-tech users." },
      { title: "Trust Takes Time", description: "Building alignment across public-private partners required shared governance rituals." }
    ]
  },
  {
    id: "cs4",
    category: "Logistics • Analytics",
    title: "Supply Chain Efficiency",
    subtitle: "ML-Driven Demand Forecasting",
    role: "Senior Product Manager",
    summary: "Minimized surplus and accelerated delivery in complex cross-border aid supply chains using Machine Learning.",
    challenge: "Global aid supply chains operate under extreme uncertainty. Without accurate forecasts, warehouses overflowed with expired stock.",
    approach: [
      { title: "Forecasting Pipeline", description: "Deployed ML pipeline using Spark and TensorFlow Serving for real-time inference." },
      { title: "Model Development", description: "Trained Random-Forest and LSTM hybrid ensemble models." },
      { title: "Change Management", description: "Developed enablement program for 100+ supply-chain staff." }
    ],
    outcomes: [
      { title: "Surplus Reduction", description: "Cut average overstock rates from 25% to 20% (20% reduction)." },
      { title: "Faster Delivery", description: "Reduced average lead times from 10 to 8.5 days (15% faster)." },
      { title: "Accuracy Gain", description: "Ensemble models achieved a 30% lower MAPE versus baseline." }
    ],
    keyMetric: {
      label: "Surplus Rate",
      value: "-20%",
      description: "Reduction in overstock",
      chartData: [
        { name: 'Legacy', value: 25 },
        { name: 'ML-Guided', value: 20 },
      ]
    },
    lessons: [
      { title: "Data Quality", description: "Early investment in cleansing was critical to avoid model drift." },
      { title: "Feedback Loops", description: "Embedding planners in model-validation uncovered domain nuances." }
    ]
  },
  {
    id: "cs5",
    category: "Fintech • Fraud Prevention",
    title: "Reducing False Positives",
    subtitle: "Machine Learning Payment Scoring",
    role: "Associate Product Manager",
    summary: "Cut false positives while keeping near-perfect approval rates for a top Brazilian bank.",
    challenge: "Legitimate e-commerce payments were being blocked: 5% of transactions were falsely flagged as fraud.",
    approach: [
      { title: "Discovery", description: "Mapped root causes (opaque rule chains) via 30 analyst interviews." },
      { title: "Solution", description: "Shipped ML scoring service integrated with Mastercard gateway using SVM/Decision Trees." },
      { title: "Validation", description: "Instituted weekly win/loss reviews to refine alert thresholds." }
    ],
    outcomes: [
      { title: "False-Positive Rate", description: "Dropped from 5% to 3.6% (-28%) while maintaining 97.8% approval rate." },
      { title: "Latency", description: "Reduced processing latency by 66%." },
      { title: "Time to Market", description: "Pilot live in four months - 30% faster than bank norms." }
    ],
    keyMetric: {
      label: "False Positives",
      value: "-28%",
      description: "Reduction in false flags",
      chartData: [
        { name: 'Rule Engine', value: 5.0 },
        { name: 'ML Model', value: 3.6 },
      ]
    },
    lessons: [
      { title: "Local Context", description: "Brazilian merchant codes boosted model lift by 12%." },
      { title: "Cross-Functional", description: "Pairing data scientists with legal counsel halved sign-off time." }
    ]
  }
];