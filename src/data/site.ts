// Single source of truth for page content. The HTML page and /llms.txt are both generated from this file.
// Rule: no internal numbers, internal product names or confidential details from current or past employers.

export const person = {
  name: "Michael Müller",
  role: "Senior Developer Productivity Engineer",
  company: "Leadfeeder",
  tagline: "Developer productivity in the age of AI coding agents",
  summary:
    "I help engineering teams get real value from AI coding agents: the platforms, guardrails and workflows that make agents useful, safe and measurable in everyday development.",
  location: "Palatinate, Germany · remote",
  links: {
    github: "https://github.com/haimich",
    linkedin: "https://www.linkedin.com/in/michael-m%C3%BCller-9a90a6284/",
  },
};

export type Focus = { icon: string; title: string; text: string };

export const focus: Focus[] = [
  {
    icon: "🧩",
    title: "Agent platform",
    text: "A shared marketplace of plugins and skills for Claude Code, Copilot and Cursor: one plugin standard, CI validation and clear ownership per plugin. Good defaults, such as a pull-request workflow with a pre-PR review and an AI review loop, ship to every engineer.",
  },
  {
    icon: "🤖",
    title: "Agents in the engineering workflow",
    text: "Agents that sit inside the development process: from an error report to a scored, triaged issue to a coding agent that opens the fix as a PR. Humans stay in control at the points that matter, and autonomy grows only where the agent has earned trust.",
  },
  {
    icon: "📊",
    title: "Measurement",
    text: "Developer experience reports on how AI changes the way we build software: AI-reviewed PRs, PRs from background agents, issues fixed by AI and how useful each skill really is. Data decides which tools and workflows we keep.",
  },
];

export type CaseStudy = { title: string; problem: string; approach: string[]; lesson: string; tags: string[] };

export const work: CaseStudy[] = [
  {
    title: "From error report to agent-written fix",
    problem: "New production errors piled up faster than teams could triage them, and many easy fixes never got done.",
    approach: [
      "A workflow agent classifies each new error, scores how likely a coding agent can fix it and runs a root-cause analysis.",
      "The result lands in the team's Slack channel with a recommendation. One click creates a Linear issue and hands it to a coding agent.",
      "An auto mode starts the fix on its own, but only when the fixability score is high. Every change still goes through a PR and human review.",
    ],
    lesson: "Build the feedback loop in from day one. Without it, an agent cannot learn from wrong scores or rejected PRs.",
    tags: ["Workflow automation", "Coding agents", "Linear", "Human-in-the-loop"],
  },
  {
    title: "A marketplace for agent plugins and skills",
    problem: "Every team wrote its own prompts and agent instructions, so good practices didn't spread and nobody knew what worked.",
    approach: [
      "One plugin format for Claude Code, Copilot and Cursor, with CI checks and code owners for every plugin.",
      "Shared skills for recurring work: creating PRs, project bootstrapping, issue handling.",
      "A tool that mines agent sessions for patterns worth turning into new shared skills, and a report on how useful each skill is.",
    ],
    lesson: "Defaults beat opt-in. Adoption took off when the best workflow became the default for everyone.",
    tags: ["Claude Code", "Copilot", "Cursor", "Developer platform"],
  },
  {
    title: "Security report routing agent",
    problem: "Bug bounty reports were easy to lose track of, and finding the right owner for each one took time.",
    approach: [
      "An agent classifies each report, finds the owning team and posts an assessment with a suggested action to Slack.",
      "Hard guardrail: the agent never writes to the external platform. People act, the agent prepares.",
      "A weekly self-review checks its own routing decisions and improves which services belong to which team.",
    ],
    lesson: "Start with read-only autonomy and widen it step by step, once the data shows the agent gets it right.",
    tags: ["Workflow automation", "Security", "Guardrails", "Self-improving agents"],
  },
  {
    title: "A serverless framework that agents can use too",
    problem: "Starting a new AWS Lambda service meant days of copy-paste and one deploy pipeline per function.",
    approach: [
      "A framework with a project generator, plugins, one settings file and one shared pipeline and test setup.",
      "Docs with an llms.txt, plus agent skills that turn starting a new service into a short interview with a coding agent.",
      "Teams adopted it on their own, and migrated services became faster and more reliable.",
    ],
    lesson: "If you design for agents from the start, the docs and conventions get better for humans too.",
    tags: ["Ruby", "AWS Lambda", "Agent skills", "llms.txt"],
  },
];

export type Project = { name: string; description: string; tech: string[]; repo: string; demo?: string; image: string };

export const projects: Project[] = [
  { name: "Copy & Pasta", description: "My food blog, built with Vue.js and Nuxt.", tech: ["Vue.js", "Nuxt"], repo: "https://github.com/haimich/copyundpasta", demo: "https://copyundpasta.de", image: "/images/projects/copyundpasta.jpg" },
  { name: "Billy", description: "A simple invoice manager built with Electron and React.", tech: ["Electron", "React", "TypeScript"], repo: "https://github.com/haimich/billy", image: "/images/projects/billy.png" },
  { name: "sprachmuehle.de", description: "A static website built with HTML, CSS and a little PHP.", tech: ["HTML", "CSS", "PHP"], repo: "https://github.com/haimich/sprachmuehle.de", demo: "https://www.sprachmuehle.de/", image: "/images/projects/sprachmuehle.jpg" },
  { name: "Event", description: "A platform to discover and manage conferences and events, built on Node.js.", tech: ["Node.js"], repo: "https://github.com/haimich/event", image: "/images/projects/event.png" },
  { name: "Flatfinder", description: "A scraper that regularly checks websites for flats to buy.", tech: ["Node.js", "Scraping"], repo: "https://github.com/haimich/flatfinder", image: "/images/projects/flatfinder.png" },
  { name: "Knick-Knack", description: "A language-agnostic project scaffolding tool.", tech: ["JavaScript", "CLI"], repo: "https://github.com/knick-knack/knick-knack", image: "/images/projects/knick-knack.png" },
  { name: "Photobooth", description: "A photobooth app with a green-screen background of your choice.", tech: ["JavaScript", "Canvas"], repo: "https://github.com/haimich/photobooth", image: "/images/projects/photobooth.png" },
];

export type Talk = { title: string; venue: string; year?: number; slides?: string; video?: string };

export const talks: Talk[] = [
  { title: "Vue vs. Vanilla", venue: "Accento, Karlsruhe", year: 2019, slides: "https://haimich.github.io/vue-vs-vanilla", video: "https://www.youtube.com/watch?v=qVHh2go6GN4" },
  { title: "Innovation Week", venue: "Entwicklertag Karlsruhe", year: 2016, slides: "https://haimich.github.io/innovationweek" },
  { title: "How to become a Web Developer", venue: "HdM Stuttgart", year: 2016, slides: "http://slides.com/haimich/how-to-become-a-webdev" },
  { title: "Innovation Week", venue: "WebTech Con, Munich", year: 2015, slides: "https://haimich.github.io/innovationweek" },
  { title: "ReactJS · TypeScript · Electron", venue: "Guest lectures, HdM Stuttgart", slides: "http://slides.com/haimich/reactjs" },
];

export type CommunityItem = { title: string; text: string; url: string };

export const community: CommunityItem[] = [
  { title: "Campus", text: "I started Campus, a developer-led knowledge-sharing session at my company, and I still organize it. Lately I often speak there about MCP and AI agents.", url: "#talks" },
  { title: "n8n community forum", text: "Helping other builders with workflows, nodes and agents.", url: "https://community.n8n.io/u/haimich" },
  { title: "Custom n8n node tutorial", text: "A step-by-step TypeScript tutorial for building a custom n8n node (NASA API).", url: "https://github.com/haimich/n8n-nasa" },
];

export const career = [
  { period: "2025 – now", title: "Senior Developer Productivity Engineer", org: "Leadfeeder" },
  { period: "2022 – 2025", title: "Engineering Manager", org: "Dealfront (now Leadfeeder)" },
  { period: "2017 – 2022", title: "Team Lead · Senior Full-Stack Developer", org: "Echobot" },
  { period: "2011 – 2017", title: "Senior Full-Stack Developer", org: "1&1" },
  { period: "2007 – 2011", title: "IT Consultant", org: "Logica" },
];

export const hobbies = ["Padel", "Bouldering", "3D printing", "Electronics projects"];
