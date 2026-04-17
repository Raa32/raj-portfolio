// ---- Types ----

export interface Experience {
  company: string;
  role: string;
  location: string;
  dates: string;
  tags: string[];
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
    role: "Client Implementation Support",
    location: "athlone, ie",
    dates: "jul 2025 — mar 2026",
    tags: ["SaaS", "Client onboarding", "HubSpot", "JIRA"],
  },
  {
    company: "Anvaya",
    role: "Customer Implementation Support",
    location: "remote",
    dates: "feb — jun 2025",
    tags: ["SaaS", "User guides", "Product feedback"],
  },
  {
    company: "CeX",
    role: "Team Leader",
    location: "athlone, ie",
    dates: "2020 — 2024",
    tags: ["Team mgmt", "Retail ops", "Customer-facing"],
  },
];

export const projects: Project[] = [
  {
    title: "DocFlow",
    description:
      "Document management system with configurable approval workflows and a full audit trail. Final year project.",
    href: "https://github.com/Raa32/document-workflow-system",
    stack: ["FastAPI", "Python", "SQLAlchemy", "Jinja2"],
    meta: "final year project",
  },
  {
    title: "TaskFlow API",
    description:
      "Production-grade task management REST API with JWT auth, deployed on AWS via Docker + Kubernetes. CI/CD with GitHub Actions.",
    href: "https://github.com/Raa32",
    stack: ["Spring Boot", "Docker", "K8s", "AWS"],
    meta: "2026",
  },
  {
    title: "SWIFT MT103 Parser",
    description:
      "CLI parser and validator for SWIFT MT103 international payment messages. Field-level validation against the standard.",
    href: "https://github.com/Raa32/swift-parser",
    stack: ["Python", "CLI"],
    meta: "cli tool",
  },
  {
    title: "This portfolio",
    description:
      "The site you're on. Scroll-reveal bento grid built from scratch. Source on GitHub.",
    href: "https://github.com/Raa32/raj-portfolio",
    stack: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    meta: "2026",
  },
];

export const stack: string[] = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind",
  "Spring Boot",
  "Python",
  "Docker",
  "AWS",
  "PostgreSQL",
  "Git",
  "JIRA",
  "HubSpot",
];

export const status: StatusItem[] = [
  { key: "Building", value: "This portfolio" },
  { key: "Learning", value: "React patterns" },
  { key: "Reading", value: "DDIA" },
  { key: "Stack", value: "Next.js + TS" },
];