// ---- Types ----

export interface Experience {
  company: string;
  role: string;
  location: string;
  dates: string;
  tags: string[];
  bullets: string[];
}

export interface Project {
  title: string;
  description: string;
  href: string;
  stack: string[];
  meta: string;
}

export interface StatusItem {
  key: string;
  value: string;
}

// ---- Data ----

export const experiences: Experience[] = [
  {
    company: "Speeir Ltd",
    role: "Junior Software Engineer",
    location: "ireland · remote",
    dates: "jul 2025 — mar 2026",
    tags: ["Next.js", "TypeScript", "AWS Amplify", "Firebase", "Stripe", "OpenAI"],
    bullets: [
      "Built a full-stack AI research platform from scratch — RAG pipeline retrieving 10 web sources per query, chunked into 800-char segments, streamed responses with function calling",
      "Integrated Stripe across 2 subscription tiers with webhook handling for 3 lifecycle events; freemium cap of 3 searches/day with server-side throttling at 10 req/min",
      "Set up auth and backend resources as code with AWS Amplify Gen2 + Cognito; branch-based CI/CD pipeline ready before the first feature shipped",
      "Triaged production issues end to end — reproduced in test env, escalated with full context, ran post-deployment checks to confirm fixes held",
    ],
  },
  {
    company: "Anvaya Ltd",
    role: "Customer Onboarding Executive",
    location: "ireland",
    dates: "feb 2025 — jun 2025",
    tags: ["SaaS", "HubSpot", "User onboarding", "Technical writing"],
    bullets: [
      "Onboarded 1,200+ users end to end on a peer-to-peer booking platform, contributing to €144,000 in platform revenue",
      "Authored user guide and FAQ documentation; reduced onboarding friction and incoming support queries",
      "Identified stalled registrations before they escalated, resolved directly, and wrote escalation reports for engineering covering user impact and reproduction steps",
    ],
  },
  {
    company: "CeX",
    role: "Team Leader",
    location: "athlone, ireland",
    dates: "aug 2024 — jan 2026",
    tags: ["Team mgmt", "Hardware diagnostics", "macOS", "Windows"],
    bullets: [
      "Diagnosed and configured 30+ devices daily across macOS and Windows — fault identification, component testing, OS reinstallation, data recovery",
      "Led a team of 5–10 staff; ran briefings and training sessions on hardware testing and customer-facing communication",
      "Delivered up to €9,000 in individual weekly sales through consultative, face-to-face conversations",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "BookIt Appointment SMS",
    description:
      "Full-stack appointment booking system with real-time SMS notifications via Twilio. Book confirmations, 24-hour reminders, cancellations, and status updates. Background scheduler checks for reminders hourly. Users can reply CANCEL via SMS to cancel appointments.",
    href: "https://github.com/Raa32/bookit-appointment-sms",
    stack: ["Flask", "Python", "Twilio", "SQLite", "APScheduler", "HTML/CSS"],
    meta: "2025",
  },
  {
    title: "TaskFlow API",
    description:
      "Production-grade REST API for task management with full CRUD, layered architecture (controller/service/repository), Bean Validation, global exception handling, and status filtering via query params.",
    href: "https://github.com/Raa32",
    stack: ["Java", "Spring Boot 3", "Spring Data JPA", "H2", "Maven"],
    meta: "2026",
  },
  {
    title: "DocFlow",
    description:
      "Document management system with multi-stage configurable approval workflows and a full audit trail. Delivered with system docs, end-user guide, and a ten-case test plan. Final year project.",
    href: "https://github.com/Raa32/document-workflow-system",
    stack: ["FastAPI", "Python", "SQLAlchemy", "SQLite"],
    meta: "final year · 2025",
  },
  {
    title: "SWIFT MT103 Parser",
    description:
      "CLI parser and validator for SWIFT MT103 international payment messages. Field-level validation against the standard spec; flags malformed fields and writes timestamped JSON logs on every run.",
    href: "https://github.com/Raa32/swift-parser",
    stack: ["Python", "CLI"],
    meta: "cli tool",
  },
  {
    title: "Observability Stack",
    description:
      "Docker Compose monitoring environment using Node.js, Prometheus, and Ansible. Demonstrates systems administration, infrastructure-as-code, and observable service design.",
    href: "https://github.com/Raa32/nr-monitor-stack",
    stack: ["Docker", "Node.js", "Prometheus", "Ansible"],
    meta: "infra · 2025",
  },
];

export const stack: string[] = [
  "TypeScript",
  "React",
  "Next.js",
  "Java",
  "Spring Boot",
  "Python",
  "FastAPI",
  "AWS Amplify",
  "Firebase",
  "OpenAI APIs",
  "Docker",
  "PostgreSQL",
  "Git",
  "Stripe",
  "JIRA",
  "Postman",
];

export const status: StatusItem[] = [
  { key: "Building", value: "rxj.life" },
  { key: "Learning", value: "AI + RAG systems" },
  { key: "Reading", value: "DDIA" },
  { key: "Stack", value: "Next.js + TS + Java" },
];
