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
    id: "claude-code-pm-toolkit",
    title: "Claude Code: The \"AI Engineer\" In Your PM Toolkit",
    date: "Jan 18, 2026",
    readTime: "5 min read",
    tags: ["AI Tools", "Product Management"],
    excerpt: "Claude Code is the closest thing PMs have to an AI engineer on demand. It amplifies product management, but only if your thinking is sharp enough to survive its honesty.",
    content: [
      { type: 'paragraph', text: "Claude Code is the closest thing Product Managers have today to an \"AI engineer on demand.\" Used well, it does not replace product management; it amplifies it. The catch: it is brutally honest about the quality of your thinking." },
      { type: 'heading', text: "Why Claude Code Changes The PM Job" },
      { type: 'paragraph', text: "AI can now write production grade code, but it still cannot decide what to build, why it matters, or how it fits into your roadmap. That responsibility stays with the Product Manager. Claude Code simply collapses the distance between \"idea in a doc\" and \"working experience in a browser.\"" },
      { type: 'paragraph', text: "That means AI is no longer just a cute feature inside the product. It is becoming part of how the product is built: faster prototypes, cheaper experiments, and a tighter loop between strategy and execution." },
      { type: 'heading', text: "Treat Claude Code Like A Sharp Junior Engineer" },
      { type: 'paragraph', text: "Most people treat AI like a vending machine: type a vague prompt, hope something useful falls out. Claude Code punishes that mindset. Vague inputs turn into vague products. Precise feature definitions turn into shippable software." },
      { type: 'paragraph', text: "The right mental model is a sharp junior engineer on your team:" },
      { type: 'list', items: ["You own the product vision, problem statement, and constraints; Claude handles implementation details.", "You break work into clear features and milestones instead of \"build the whole product\" in one shot.", "You review its work, tighten the edges, and iterate exactly as you would in a normal code review."] },
      { type: 'paragraph', text: "The bottleneck stops being \"can we build it?\" and becomes \"did we describe it clearly enough to build?\"" },
      { type: 'heading', text: "Plan First: Features, Not Fantasies" },
      { type: 'paragraph', text: "Many failed AI builds start with one big, over ambitious prompt: \"Build me X.\" That is vibe coding. It feels productive and looks impressive in screenshots, but it rarely ships." },
      { type: 'paragraph', text: "A better approach starts with a simple plan:" },
      { type: 'list', items: ["Write down the product vision and problem: who this is for, what job you are doing, which outcome you are targeting.", "Translate the idea into a lean feature set for version one, each with clear success criteria.", "Decide how you will slice work over time, for example Now, Next, Later, themes, or feature by feature, so you never overload the model."] },
      { type: 'paragraph', text: "Claude Code thrives on this kind of structure. It does not want your talk; it wants your roadmap." },
      { type: 'heading', text: "Let Claude Ask The Annoying Questions" },
      { type: 'paragraph', text: "Strong PMs obsess over discovery and alignment before execution. Claude can mirror that habit with planning modes and \"ask the user\" flows that interview you before it writes any code." },
      { type: 'paragraph', text: "Those questions go straight to the topics people often skip when in a rush:" },
      { type: 'list', items: ["Workflow and UX: Is this a wizard, dashboard, or background agent? What does a good path look like?", "Architecture: Which stack and integrations actually fit your constraints and team?", "Costs and limits: What happens when API calls spike, or a limit is hit mid flow?"] },
      { type: 'paragraph', text: "If you do not know the answer, that is not a reason to guess; it is a discovery task. Go research, then feed a decision back into the plan. By the time you hit \"run,\" you are closer to a lightweight PRD than a prompt." },
      { type: 'heading', text: "Ship Manually Before You Go Full Auto" },
      { type: 'paragraph', text: "There is a new temptation: hand a giant plan to a multi agent loop and let AI run the whole thing. That is the wrong first move. Automation does not fix bad plans; it scales them." },
      { type: 'paragraph', text: "A more disciplined approach:" },
      { type: 'list', items: ["Use Claude Code to ship one narrow, end to end slice first: a single workflow, in production, with real users.", "Learn from real behavior and bugs; adjust your specs and UX.", "Only then start automating repetitive tasks such as tests, refactors, and scaffolding with loops or multi agent workflows."] },
      { type: 'paragraph', text: "Do not give an autopilot control of the plane until you have flown the route manually at least once." },
      { type: 'heading', text: "Operating Habits For PMs Using Claude Code" },
      { type: 'paragraph', text: "When you bring Claude Code into your stack, treat it like any other serious tool: it gets standards and rituals." },
      { type: 'list', items: ["Start from a written plan, not from a prompt box. Roadmap, then feature spec, then Claude.", "Keep sessions short and focused; if a thread gets long and mushy, reset and restate your constraints.", "Measure impact like any other initiative: instrument the feature, watch user behavior, and feed those insights into the next iteration."] },
      { type: 'paragraph', text: "Claude Code will not rescue weak product instincts. In the hands of a PM who can write a clear PRD and make sharp tradeoffs, it feels like hiring a fast, humble, always on engineer who never pushes back on your roadmap." }
    ]
  },
  {
    id: "ralph-agent-pattern",
    title: "Ship Features While You Sleep Without Losing Control: The Ralph Agent Pattern",
    date: "Jan 7, 2026",
    readTime: "6 min read",
    tags: ["AI Agents", "Automation"],
    excerpt: "Ralph turns a good PRD into completed user stories while you sleep. It is Kanban for AI: sticky notes become JSON, and an agent pulls tickets at 3 AM.",
    content: [
      { type: 'paragraph', text: "Ralph sounds like a meme. In practice, it is a serious pattern for Product Managers: turn a good PRD into a stream of completed user stories while you sleep. If Claude Code is your AI engineer, Ralph is the process that makes that engineer dangerous in the best way." },
      { type: 'heading', text: "Why This Pattern Exists: From Vibe Coding To Ticket Driven Shipping" },
      { type: 'paragraph', text: "Many people still use AI like this: open a tool, paste a long prompt, hope a full feature pops out. It is fun, it makes great screenshots, and it almost never ships cleanly." },
      { type: 'paragraph', text: "Ralph does the opposite. It:" },
      { type: 'list', items: ["Takes a real PRD", "Breaks it into very small, testable user stories", "Runs a loop that picks one story at a time, implements it, tests it, commits it, logs what happened, then grabs the next story"] },
      { type: 'paragraph', text: "It is Kanban for AI. Sticky notes become JSON. Instead of an engineer pulling tickets off the board, an agent does it for you at three in the morning." },
      { type: 'heading', text: "Step 1: Use AI To Help You Write A Real PRD" },
      { type: 'paragraph', text: "This pattern does not start with code; it starts with a Product Requirements Document. That is already home turf for PMs." },
      { type: 'paragraph', text: "The workflow:" },
      { type: 'list', items: ["Talk through the feature out loud for a few minutes: vision, user, flows, and edges.", "Let an AI PRD generator skill turn that into a structured markdown PRD with user stories.", "Answer a small set of clarifying questions from the agent so the spec becomes painfully specific."] },
      { type: 'paragraph', text: "You are not offloading product thinking; you are compressing the time from idea in your head to PRD your team or your agent can execute." },
      { type: 'heading', text: "Step 2: Convert The PRD Into Atomic, Testable Stories" },
      { type: 'paragraph', text: "Once the PRD exists, the agent converts it into a file called prd.json: a structured list of user stories. Each story has a title, description, acceptance criteria, and a flag telling the loop whether it is done." },
      { type: 'paragraph', text: "The value comes from three constraints:" },
      { type: 'list', items: ["Stories are atomic: each one can be completed in a single iteration within the model context window.", "Stories are ordered: foundational work appears first so the feature grows in a sane sequence.", "Criteria are verifiable: acceptance criteria read like tests, not vibes, so the agent knows when it is done without asking you."] },
      { type: 'paragraph', text: "\"Add a status column to the tasks table with default pending, plus a dropdown filter for All, Active, and Completed\" is the right level of detail. \"Improve the tasks UI\" is not." },
      { type: 'paragraph', text: "If you rush this step you do not get an overnight feature; you get many iterations of mediocre output and a headache." },
      { type: 'heading', text: "Step 3: Run The Loop Like A Real Team" },
      { type: 'paragraph', text: "With prd.json ready, you kick off the loop with a simple script. From that point, your AI team behaves like a disciplined engineering squad that never gets tired." },
      { type: 'paragraph', text: "Each iteration:" },
      { type: 'list', items: ["Finds a story where passes equals false", "Reads the PRD, the repo, and the existing progress log", "Implements the change, whether frontend, backend, or both", "Runs tests and checks against acceptance criteria", "Commits the code", "Updates prd.json to mark the story as passed", "Appends what it learned to a progress log and any relevant notes files"] },
      { type: 'paragraph', text: "Every loop starts fresh, with a clean context window. Instead of one giant, messy chat thread, you get a series of focused, stateless sprints." },
      { type: 'paragraph', text: "The cost is grounded: a typical feature might take around a dozen iterations and cost roughly the price of a couple of coffees in tokens." },
      { type: 'heading', text: "Memory: Turning Your Repo Into A Second Brain" },
      { type: 'paragraph', text: "Two small files turn this from a party trick into an operating system for your codebase: agents.md and progress.txt." },
      { type: 'list', items: ["agents.md is long term memory. It holds notes for future developers or agents: how this part of the system works, edge cases, and warnings.", "progress.txt is short term memory. It captures what happened in each iteration: which thread was used, what changed, what went wrong, and what to watch for next time."] },
      { type: 'paragraph', text: "Over time, your repo becomes more than code. It turns into a documented, evolving map of how your product actually works in the real world." },
      { type: 'heading', text: "What This Actually Changes For Product Managers" },
      { type: 'paragraph', text: "This pattern does not make PMs less important. It makes your strengths more valuable and your weaknesses more obvious." },
      { type: 'list', items: ["Your leverage moves further upstream. If you can write crisp PRDs and small, outcome driven stories, the loop will happily grind through them while you sleep.", "Your relationship with engineering changes. You are not skipping engineers; you are giving both humans and agents better, testable work to execute, with clearer documentation to back it up.", "Your time to proof drops. You can validate a complex feature idea in days instead of sprints, with working software instead of mockups."] },
      { type: 'paragraph', text: "If you are willing to get your hands dirty and disciplined enough to write good specs, pairing Claude Code with this loop can feel like having a senior engineering team that never sleeps and charges by the feature, not by the sprint." }
    ]
  },
  {
    id: "founder-mindset-speed",
    title: "Ship 10x Faster By Thinking Like A Founder, Not A Function",
    date: "Dec 14, 2025",
    readTime: "6 min read",
    tags: ["Leadership", "Productivity"],
    excerpt: "The real unlock is not treating AI as a shiny add on. It is thinking like a founder inside your org and using AI to remove every excuse for moving slowly.",
    content: [
      { type: 'paragraph', text: "Most teams are still treating AI like a shiny add on to the old way of working. The real unlock is cultural: think and act like a founder inside whatever org you are in, then use AI to remove every excuse for moving slowly." },
      { type: 'paragraph', text: "When you do that, speed stops being a slogan and starts showing up in your calendar, your roadmap, and your shipped work." },
      { type: 'heading', text: "Stop Debating, Start Shipping" },
      { type: 'paragraph', text: "Inside big companies, the default operating system is debate: long threads, alignment meetings, and documents that try to make everyone feel a little bit right. That is the opposite of how early stage founders move." },
      { type: 'paragraph', text: "The founder mindset looks more like this:" },
      { type: 'list', items: ["You ask \"What would I do if this was my company?\" instead of \"What is my job description?\"", "You bias toward shipping ten small bets rather than polishing two ideas to death.", "You accept that some launches will have rough edges, as long as your follow up is fast and visible to users."] },
      { type: 'paragraph', text: "Speed only becomes a risk when you are slow to correct. If you fix issues within minutes or hours, the users who complained often become your strongest advocates." },
      { type: 'heading', text: "Redefine \"Cross Functional\": Do The Work Yourself" },
      { type: 'paragraph', text: "In traditional product cultures, \"cross functional\" often means scheduling other people: coordinating design, engineering, marketing, data, and leadership. That turns PMs into meeting organizers instead of builders." },
      { type: 'paragraph', text: "The new version of cross functional looks very different:" },
      { type: 'list', items: ["You design the first version of the flow yourself with AI design tools.", "You run your own user research sessions and immediately fold insights back into prototypes.", "You write or at least co write code using AI coding tools, enough to get a working prototype in users' hands."] },
      { type: 'paragraph', text: "You are not waiting for ten other people to unlock you. You are doing the work, then pulling others in once there is something real to react to." },
      { type: 'heading', text: "Ban Decisions By Committee (At Least For Yourself)" },
      { type: 'paragraph', text: "Committees optimize for safety, not outcomes. By the time a group has aligned on two options, a founder style operator has already shipped ten experiments and learned more than any meeting could." },
      { type: 'paragraph', text: "If you cannot change company policy, you can still change your own behavior:" },
      { type: 'list', items: ["Default to small, reversible bets that do not need consensus.", "Frame decisions as \"starter experiments\" instead of final calls.", "Share what you shipped and what you learned instead of asking for permission up front."] },
      { type: 'paragraph', text: "Leaders who understand the current AI pace will increasingly reward people who move like this and design processes that back them up, for example explicitly banning decision by committee for certain types of work." },
      { type: 'heading', text: "Turn AI Into Your Personal Chief Of Staff" },
      { type: 'paragraph', text: "A fast culture does not appear by inspiration alone; it is built on boring, repeatable workflows. This is where AI agents and tools start to matter." },
      { type: 'paragraph', text: "A few concrete patterns:" },
      { type: 'list', items: ["Inbox triage: have an AI agent scan your email and surface only \"reply today\" messages, separating urgent, nice to have, and pure noise.", "Emotion shields: for emotionally charged or rambling emails, get a three bullet summary so you can respond to the substance without absorbing the drama.", "Drafting and defusing: let AI draft polite, clear replies, especially for \"no\" responses or stakeholder updates, then you approve and send."] },
      { type: 'paragraph', text: "Used this way, AI becomes a buffer between you and the chaos, so your attention stays on shipping rather than inbox firefighting." },
      { type: 'heading', text: "Prototype With Users In The Loop, Not On The Sidelines" },
      { type: 'paragraph', text: "One of the biggest shifts is how quickly you can now close the loop between idea, prototype, and user feedback." },
      { type: 'paragraph', text: "A practical loop looks like this:" },
      { type: 'list', items: ["Build a scrappy AI powered prototype of a workflow or feature.", "Jump on a call with a customer, watch them use it, and collect raw feedback.", "Immediately after the call, update the prototype with everything you heard.", "Show a meaningfully improved version to the next customer, often the same day."] },
      { type: 'paragraph', text: "Instead of one static prototype shown to ten users, you are effectively running ten micro experiments, each one better than the last. Feedback stops being something you \"compile later\" and becomes part of a live build loop." },
      { type: 'heading', text: "Combine Qualitative And Quantitative Into One Feedback Engine" },
      { type: 'paragraph', text: "Shipping fast only works if you are aimed at the right problems. That requires both numbers and stories: usage data and user feedback, not one or the other." },
      { type: 'paragraph', text: "The emerging pattern:" },
      { type: 'list', items: ["Pull in feedback from support tickets, app reviews, social mentions, and surveys.", "Let AI cluster them into themes like top feature requests, top complaints, and top delights.", "For any theme, instantly create a cohort of affected users and look at their actual behavior and metrics."] },
      { type: 'paragraph', text: "Now you can answer questions like \"users who complain about notifications, what do they actually do in the product?\" and \"how does this cohort convert, retain, or churn compared to the rest?\" in one place." },
      { type: 'paragraph', text: "You can also ask AI to draft a PRD based on a concentrated problem area, then refine it with your own judgment and context." },
      { type: 'heading', text: "Build A Culture Where Fast Follow Is The Feature" },
      { type: 'paragraph', text: "The fear behind shipping rough work is simple: \"If people see this early, they will churn and never come back.\" That only happens if you are slow to respond." },
      { type: 'paragraph', text: "A different culture treats fast follow as part of the product:" },
      { type: 'list', items: ["You launch early to a small, targeted slice of users.", "You listen aggressively to complaints and suggestions.", "You fix visible issues in hours or days, then tell users what changed and why."] },
      { type: 'paragraph', text: "Those users do not walk away; they feel heard and invested. They see speed and care. Over time, this rhythm becomes your reputation." },
      { type: 'paragraph', text: "In an AI first world, nothing is guaranteed. The teams that win will be the ones that think like owners, refuse to hide behind committees, and use AI ruthlessly to remove friction between idea and shipped value." }
    ]
  },
  {
    id: "claude-code-snowflake",
    title: "Claude Code And Snowflake: The Productivity Game Changer",
    date: "Oct 26, 2025",
    readTime: "7 min read",
    tags: ["Data Analysis", "AI Tools"],
    excerpt: "Once you let an LLM write and run SQL inside your warehouse, your data stack stops being where queries go to die and starts feeling like a teammate.",
    content: [
      { type: 'paragraph', text: "Claude Code plus Snowflake is the moment your data stack stops being a place where queries go to die and starts feeling like a teammate. Once you let an LLM write and run SQL inside your warehouse, the productivity jump is hard to ignore." },
      { type: 'heading', text: "Why Connecting Claude Code To Snowflake Matters" },
      { type: 'paragraph', text: "Most data work today still looks like this: open a BI tool, guess the table, write SQL from scratch, tweak for an hour, repeat. It is slow, brittle, and depends heavily on whoever remembers how the schema actually works." },
      { type: 'paragraph', text: "When you plug Claude Code into Snowflake, you flip that script:" },
      { type: 'list', items: ["The model can see your actual schema, tables, and sample data, not just a pasted question.", "It can write, run, and iterate on SQL directly against your warehouse.", "You move from hand crafted queries to setting up the environment once, then delegating much of the grunt work.", "Instead of asking whether someone can pull a report, you design a system where anyone can ask smart questions and get structured answers."] },
      { type: 'heading', text: "Two Main Paths In: Snowflake CLI And MCP" },
      { type: 'paragraph', text: "There are two main integration paths: Snowflake CLI and Snowflake MCP. They largely unlock the same idea, an LLM connected to a warehouse, but they shine in different jobs." },
      { type: 'paragraph', text: "Snowflake CLI:" },
      { type: 'list', items: ["Great for exporting data to your local machine and working out of a repo.", "Uses fewer tokens because you are not streaming every row through the model.", "Fits naturally with Claude Code inside a terminal and Git repo."] },
      { type: 'paragraph', text: "Snowflake MCP, which stands for Model Context Protocol:" },
      { type: 'list', items: ["Acts as a formal bridge between Claude and Snowflake, including in desktop chat.", "Gives fine grained, configuration driven control over what the model is allowed to do, for example blocking drop statements.", "Better when you want a reusable, organization level integration instead of per machine wiring."] },
      { type: 'paragraph', text: "You can think of CLI as your fast local setup and MCP as the standardized team integration." },
      { type: 'heading', text: "Setting Up Snowflake CLI So Claude Can Actually Work" },
      { type: 'paragraph', text: "The CLI setup is where many people bail, but this is where the leverage really starts." },
      { type: 'paragraph', text: "The flow:" },
      { type: 'list', items: ["Install Snowflake CLI using your preferred method.", "Create a named connection with account, username, authentication, and warehouse or role.", "Test and set it as default so every CLI call knows how to reach your warehouse."] },
      { type: 'paragraph', text: "The smart move is permissions strategy: give Claude the ability to select freely, then decide how aggressive you want to be with create, update, delete, or drop. Encode those rules in your instructions so the model always asks permission before destructive changes, at least early on." },
      { type: 'heading', text: "Turning Claude Code Into Your AI Data Analyst" },
      { type: 'paragraph', text: "Once CLI is wired up, Claude Code does not just answer one off questions; it can do full ticket work." },
      { type: 'paragraph', text: "You can have it:" },
      { type: 'list', items: ["Run basic queries end to end: write SQL, save it to a file, export results as CSV, all from a single prompt.", "Operate in Plan Mode first: propose steps, such as exploring tables, writing SQL, doing quality checks on results, and organizing outputs, so you can review before execution.", "Drive parallel workflows: one session building a data catalog from your schema, another answering a specific analytics ticket."] },
      { type: 'paragraph', text: "You stop hand writing every query and start supervising a very fast junior data analyst who lives inside your warehouse." },
      { type: 'heading', text: "Guardrails, Versions, And Not Babysitting The Bot" },
      { type: 'paragraph', text: "This becomes a real productivity system when you set operating rules." },
      { type: 'paragraph', text: "Patterns worth copying:" },
      { type: 'list', items: ["A rules file that codifies: Always allowed (select queries and schema inspection), Restricted (insert, update, delete, drop, and create that require explicit permission).", "Use Plan Mode when you are not sure: see what Claude intends to do before it touches your data.", "Bypass permissions selectively once you trust the pattern, so you can let it run while you focus elsewhere."] },
      { type: 'paragraph', text: "Design the rules so you do not have to sit there clicking approve repeatedly. You want AI working in the background while you go chase bigger problems." },
      { type: 'heading', text: "Going Deeper With Snowflake MCP" },
      { type: 'paragraph', text: "The MCP integration takes everything above and makes it feel more native and repeatable." },
      { type: 'paragraph', text: "Key ideas:" },
      { type: 'list', items: ["Configure a YAML permissions file that declares what the MCP is allowed to do.", "Register the MCP at the user level, not just per project, so any Claude Code repo or desktop workspace can use it.", "Wire the same configuration into desktop chat, so running a sample query uses the same safe path."] },
      { type: 'paragraph', text: "This is how you turn a single person experiment into the standard way your organization lets AI interact with the warehouse." },
      { type: 'heading', text: "What This Unlocks For Product Managers" },
      { type: 'paragraph', text: "If you are a PM or data savvy PM, this stack changes what data driven looks like day to day." },
      { type: 'paragraph', text: "You can:" },
      { type: 'list', items: ["Turn vague tickets into structured AI workflows: documenting the schema, answering cohort questions, and doing metric quality checks across channels.", "Build a living data catalog as a byproduct of analysis: every time Claude explores tables, it can update docs.", "Increase your own output significantly without increasing headcount: while Claude is exploring fact tables and running quality checks, you can work on roadmap and research."] },
      { type: 'paragraph', text: "Wire Claude Code and Snowflake once, encode your guardrails like a good product spec, and you suddenly have an always on analyst who does not get tired of joining the same tables over and over." }
    ]
  },
  {
    id: "claude-code-data-analysis",
    title: "Can Claude Code Analyze Data?",
    date: "Aug 20, 2025",
    readTime: "5 min read",
    tags: ["Data Analysis", "Product Management"],
    excerpt: "Claude Code can analyze data, but it is less like pressing a button for instant insights and more like a power tool that punishes you if you skip structure.",
    content: [
      { type: 'paragraph', text: "Claude Code can analyze data, but not the way hype tweets would have you believe. It is less like pressing a button for instant insights and more like a power tool that punishes you if you skip structure." },
      { type: 'heading', text: "The Experiment: Real Dataset, Real Constraints" },
      { type: 'paragraph', text: "A real World of Warcraft parquet dataset is used to test whether Claude Code can help with serious data analysis or just produces noise." },
      { type: 'paragraph', text: "The flow:" },
      { type: 'list', items: ["Load the data in a notebook with marimo and Polars.", "Ask Claude to create a basic chart, such as players per day.", "Try to build up to a full pipeline: sessions, cleaning, and bot detection."] },
      { type: 'paragraph', text: "Two realities show up quickly: Claude can write real code, but it guesses when it cannot see the data and wastes context on tasks a human could solve by inspecting the frame directly." },
      { type: 'heading', text: "Where Things Break: No Context, No Taste" },
      { type: 'paragraph', text: "The first round highlights common failure modes:" },
      { type: 'list', items: ["Claude assumes column names that do not exist because it cannot easily peek into the parquet file from the terminal.", "It suggests wrapper scripts just to inspect types, nulls, and samples.", "It recommends checks that do not align with the domain, such as impossible timestamps."] },
      { type: 'paragraph', text: "When the model cannot see the real data or environment, it hallucinates structure. That is not an AI bug; that is a workflow bug." },
      { type: 'heading', text: "The Turning Point: Put The Model Where The Data Lives" },
      { type: 'paragraph', text: "The big unlock is moving from a terminal only setup into a notebook where the dataframe itself becomes context." },
      { type: 'paragraph', text: "Inside marimo chat:" },
      { type: 'list', items: ["The dataframe is passed directly as a variable.", "A focused question is asked, such as \"How might I sessionize this data?\"", "Claude now sees the schema, sample rows, and constraints."] },
      { type: 'paragraph', text: "With that, it proposes a sessionization strategy in Polars: sort by player and timestamp, compute time differences, flag new sessions when gaps exceed a threshold, and apply a cumulative sum for the session identifier." },
      { type: 'heading', text: "What AI Is Actually Good At: Pipelines, Not Vibes" },
      { type: 'paragraph', text: "As the analysis continues, a division of labor emerges." },
      { type: 'paragraph', text: "Claude is good at:" },
      { type: 'list', items: ["Drafting non trivial Polars pipelines once it can see the data.", "Suggesting patterns, such as using time differences for sessions.", "Fixing localized errors when pointed at failing cells."] },
      { type: 'paragraph', text: "Humans are necessary for:" },
      { type: 'list', items: ["Choosing what matters: sessions, which columns to trust, how to clean categorical values, how to detect bots.", "Imposing structure by wrapping messy code into clean utilities such as clean data, sessionize data, and filter bots.", "Applying domain intuition to spot obviously wrong sessions or charts that should not be hardened."] },
      { type: 'paragraph', text: "By the end, the notebook is reorganized into reusable functions on one side and the pipeline on the other, with Claude assisting under human direction." },
      { type: 'heading', text: "The Real Takeaways For PMs Using Claude For Data" },
      { type: 'paragraph', text: "The honest conclusion is that this specific exploration might have been faster by hand, but it teaches important design lessons." },
      { type: 'paragraph', text: "Key takeaways:" },
      { type: 'list', items: ["Start with structure, not prompts: define the functions and pipelines you want before asking the model to fill them in.", "Put the model where the data lives: connect it to environments that can feed it real schema and samples.", "Use AI to harden, not replace, your exploration: turn working ad hoc code into clean, reusable pipelines.", "Guard your time: if you are steering more than the model is helping, redesign the workflow."] },
      { type: 'paragraph', text: "Claude Code can analyze data. The pattern that works is using the LLM as a fast pair programmer inside a human led pipeline, not as an all knowing analyst." }
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