export interface Project {
  name: string;
  status: string;
  tagline: string;
  description: string;
  stack: string[];
  url?: string;
  image?: string;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  points: string[];
}

export interface Certification {
  name: string;
  date: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export const content = {
  identity: {
    name: "Raj Sahu",
    title: "Software Engineer",
    location: "Athlone, Ireland (Dublin-ready)",
    brandLine:
      "I build production systems and stay close to the people using them.",
    tagline: "Go / TypeScript / Python / Kubernetes / LLMs",
    links: {
      github: "https://github.com/Raa32",
      linkedin: "https://www.linkedin.com/in/rajsahu-ie",
      email: "rajsahuire@outlook.com",
    },
  },

  statements: {
    intro: "I help teams ship projects like:",
    partner: "Teams work with me because of my",
    partnerPunch: "range + calm under load",
    workTease: "Curious?... Check out my",
    workHint: "Or keep scrolling",
  },

  about: {
    heading: "About",
    paragraphs: [
      "Most engineers either build the system or support it. For the past year, that line didn't exist for me. At Speeir I was shipping production code in the morning and diagnosing user issues in the afternoon. When something broke, the fastest path to a fix was understanding how it was built. That shaped how I work.",
      "I have built an AI answer engine integrating seven different LLM providers through a unified gateway, a multi-tenant fitness SaaS across Go, React, and Flutter, and onboarded 1,200+ users onto a live platform while feeding root-cause findings back into engineering sprints. Right now I am building SiteCrew, a two-sided construction labour marketplace for Ireland.",
      "Based in Athlone, working Dublin-ready. BEng Software Engineering, TUS Athlone 2025. Full work authorisation.",
    ],
  },

  stats: [
    { value: "1,200+", label: "Users onboarded" },
    { value: "95%", label: "CSAT sustained" },
    { value: "460+", label: "Lookinit users" },
    { value: "43", label: "Integration tests passed" },
  ] satisfies Stat[],

  skills: [
    {
      name: "Languages",
      items: ["Go", "TypeScript", "JavaScript", "Python", "Bash", "SQL", "Java"],
    },
    {
      name: "AI and LLMs",
      items: [
        "Claude API",
        "OpenAI API",
        "Groq",
        "Portkey",
        "LangChain",
        "Upstash Vector",
        "Vercel AI SDK",
        "Semantic Caching",
        "Agent Routing",
      ],
    },
    {
      name: "Frontend",
      items: ["React 18", "Next.js 14", "Tailwind CSS", "Flutter", "Capacitor"],
    },
    {
      name: "Backend and APIs",
      items: [
        "gRPC",
        "Protocol Buffers",
        "REST APIs",
        "Kafka",
        "Spring Boot",
        "PostgreSQL 15",
        "Redis",
        "Firebase",
      ],
    },
    {
      name: "Infrastructure",
      items: [
        "Kubernetes",
        "Helm",
        "Docker",
        "GitHub Actions",
        "OpenTelemetry",
        "Prometheus",
        "Grafana",
        "AWS",
        "Terraform",
        "Ansible",
      ],
    },
  ] satisfies SkillCategory[],

  projects: [
    {
      name: "SiteCrew",
      status: "In Development",
      tagline: "A two-sided construction labour marketplace for Ireland.",
      description:
        "Workers list free. Clients pay per lead or through a monthly subscription. Built web and Android from a single React/TypeScript/Capacitor codebase. Targeting Dublin first, three trades, with Stripe Connect, GPS check-in, and timesheets in Phase 2.",
      stack: ["React", "TypeScript", "Capacitor", "Node.js", "Stripe"],
      url: "https://github.com/Raa32/site-crew-ie",
      image: "/img/p-sitecrew.webp",
    },
    {
      name: "Lookinit AI Engine",
      status: "Production at Speeir",
      tagline: "Multi-provider AI answer engine. Seven LLMs, one gateway.",
      description:
        "Integrated Claude, OpenAI, Groq, Cohere, Mistral, DeepSeek, and Qwen through Portkey. Added LangChain embeddings with Upstash Vector semantic caching at a 0.95 threshold to cut redundant API calls. Built an @mention agent routing system and Vercel AI SDK streaming on a Next.js 14 frontend. 460+ users in production, 95% CSAT.",
      stack: [
        "Next.js 14",
        "TypeScript",
        "Portkey",
        "LangChain",
        "Upstash Vector",
        "Claude API",
      ],
    },
    {
      name: "Fitness SaaS Platform",
      status: "Production at Speeir",
      tagline: "Multi-tenant fitness SaaS. 572 users, 16 gyms, full observability.",
      description:
        "Go/gRPC backend across 7 microservice domains with Protocol Buffers proto3, PostgreSQL 15, Redis JWT blacklisting, and RBAC across 60+ endpoints. Kubernetes/Helm deployment of 8 services with GitHub Actions CI/CD. OpenTelemetry v1.37 distributed tracing to Grafana Alloy. 43 integration tests at 100% pass rate.",
      stack: ["Go", "gRPC", "Kubernetes", "PostgreSQL", "Redis", "OpenTelemetry"],
    },
    {
      name: "Observability Stack",
      status: "Open Source",
      tagline: "Self-hosted monitoring. Prometheus, Grafana, OpenTelemetry in one stack.",
      description:
        "Built to instrument production services and surface latency and error trends in real time. Covers metric collection, distributed tracing, and alerting rules across containerised environments.",
      stack: ["Prometheus", "Grafana", "OpenTelemetry", "Docker"],
      url: "https://github.com/Raa32/nr-monitor-stack",
      image: "/img/p-observability.webp",
    },
    {
      name: "DocFlow",
      status: "Open Source",
      tagline: "Document workflow automation with FastAPI and structured QA.",
      description:
        "Multi-step document processing pipeline with FastAPI backend, structured output generation, and Zephyr Scale QA validation. Built to automate document handling workflows end to end.",
      stack: ["FastAPI", "Python", "REST API"],
      url: "https://github.com/Raa32/document-workflow-system",
      image: "/img/p-docflow.webp",
    },
    {
      name: "Client Implementation Tracker",
      status: "Open Source",
      tagline: "Track concurrent onboarding pipelines with SLA flags.",
      description:
        "Internal tooling for managing multi-stream client implementations. Status dashboards per client, SLA breach flags, and progress tracking across concurrent delivery streams.",
      stack: ["React", "TypeScript", "Firebase"],
      url: "https://github.com/Raa32/client-implementation-tracker",
    },
    {
      name: "Hotel Reviews Sentiment Analysis",
      status: "Open Source",
      tagline: "NLP tool for processing customer feedback at scale.",
      description:
        "Processes hotel reviews to surface satisfaction trends and recurring complaint patterns using natural language processing techniques.",
      stack: ["Python", "NLP", "Data Analysis"],
      url: "https://github.com/Raa32/Hotel-Reviews-Sentiment-Analysis",
    },
  ] satisfies Project[],

  experience: [
    {
      role: "Software Engineer",
      company: "Speeir Ltd",
      period: "Jul 2025 - Mar 2026",
      location: "Dublin / Remote",
      summary:
        "Built two production SaaS products where engineering and support were the same job.",
      points: [
        "Multi-provider AI engine (7 LLMs, Portkey, semantic caching)",
        "Multi-tenant fitness platform (Go/gRPC, Kubernetes, 572 users)",
        "95% CSAT across 1,000+ users, same-day SLA",
        "OpenTelemetry observability, 43 integration tests at 100%",
      ],
    },
    {
      role: "Technical Onboarding Engineer",
      company: "Anvaya Ltd",
      period: "Feb 2025 - Jun 2025",
      location: "Dublin",
      summary:
        "Onboarded 1,200+ users and traced a 15-20% platform drop-off to its root cause.",
      points: [
        "8-12 concurrent onboarding streams, EUR 144,000 platform revenue",
        "Cloudflare misconfiguration investigation via Postman API testing",
        "HubSpot webhook automation saving 40 min/day",
        "Weekly engineering reports influencing sprint priorities",
      ],
    },
    {
      role: "Team Leader (Part Time)",
      company: "CeX",
      period: "Aug 2024 - Jun 2025",
      location: "Athlone",
      summary:
        "Led 5-10 staff, diagnosed 25-50 devices per week, delivered EUR 9,000 in weekly sales.",
      points: [
        "Windows and macOS diagnostics (boot recovery, OS reinstalls, hardware)",
        "Windows POS first responder",
        "Pitched AI pricing tool to management using Gemini API",
      ],
    },
  ] satisfies ExperienceEntry[],

  certifications: [
    { name: "Google AI Fundamentals", date: "May 2026" },
    { name: "Google IT Support Professional Certificate", date: "Apr 2026" },
    {
      name: "Google System Administration and IT Infrastructure Services",
      date: "Apr 2026",
    },
    {
      name: "JPMorgan Chase Software Engineering Job Simulation (Forage)",
      date: "Jun 2026",
    },
    {
      name: "Citi Technology Software Development Job Simulation (Forage)",
      date: "Jun 2026",
    },
  ] satisfies Certification[],

  contact: {
    heading: "The summit is just the next base camp.",
    body: "Open to software engineering, AI engineering, implementation, and technical support roles in Ireland. Available immediately.",
    cta: "Get in touch",
    footer: "Built by Raj Sahu. Next.js + Tailwind CSS. Athlone, Ireland.",
  },

  sections: {
    about: "About",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",
  },
} as const;

export type Content = typeof content;
