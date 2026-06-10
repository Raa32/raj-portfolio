export interface Project {
  name: string;
  description: string;
  stack: string[];
  url?: string;
  image: string;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  summary: string;
}

export interface Certification {
  name: string;
  date: string;
}

export const content = {
  identity: {
    name: "Raj Sahu",
    title: "Software Engineer",
    location: "Athlone, Ireland (open to Dublin)",
    brandLine:
      "I build the infrastructure software runs on, and I know how to support the people who use it.",
    links: {
      github: "https://github.com/Raa32",
      linkedin: "https://www.linkedin.com/in/rajsahu-ie",
      email: "rajsahuire@outlook.com",
    },
  },

  about: {
    heading: "About",
    paragraphs: [
      "BEng Software Engineering, TUS Athlone, 2025.",
      "Three tracks. Software engineering: Go, gRPC, Kubernetes and Next.js at Speeir. Implementation support: 1,200+ users onboarded at Anvaya. IT and hardware support at CeX.",
      "Currently building products and looking for the next engineering role in Ireland.",
    ],
  },

  projects: [
    {
      name: "SiteCrew / LabourLink",
      image: "/img/p-sitecrew.webp",
      description: "Two-sided construction labour marketplace for Ireland.",
      stack: ["Next.js", "TypeScript"],
      url: "https://github.com/Raa32/site-crew-ie",
    },
    {
      name: "ATS Scout",
      image: "/img/p-ats.webp",
      description:
        "Chrome extension for resume ATS analysis. One provider-agnostic AI adapter: Claude, OpenAI, Gemini, Groq, Mistral, Cohere.",
      stack: ["Chrome Extension", "Manifest V3", "TypeScript"],
    },
    {
      name: "Observability Stack",
      image: "/img/p-observability.webp",
      description: "Self-hosted monitoring stack: metrics, dashboards, alerts.",
      stack: ["Monitoring", "Dashboards", "Alerting"],
      url: "https://github.com/Raa32/nr-monitor-stack",
    },
    {
      name: "DocFlow",
      image: "/img/p-docflow.webp",
      description: "Document workflow system. Upload, route, approve.",
      stack: ["FastAPI", "Python"],
      url: "https://github.com/Raa32/document-workflow-system",
    },
    {
      name: "SWIFT MT103 Parser",
      image: "/img/p-mt103.webp",
      description: "Parser for SWIFT MT103 financial messages.",
      stack: ["Financial messaging", "Parsing"],
    },
    {
      name: "Irish Student Budget Tracker",
      image: "/img/p-budget.webp",
      description: "Budget tracker built for students in Ireland.",
      stack: ["Web app", "Personal finance"],
      url: "https://github.com/Raa32/irish-student-budget",
    },
  ] satisfies Project[],

  experience: [
    {
      role: "Software Engineer",
      company: "Speeir Ltd",
      period: "Jul 2025 - Mar 2026",
      summary:
        "Lookinit AI answer engine and a fitness SaaS platform. Go, gRPC, Kubernetes, Next.js 14.",
    },
    {
      role: "Technical Onboarding Engineer",
      company: "Anvaya Ltd",
      period: "Feb 2025 - Jun 2025",
      summary: "Onboarded 1,200+ users. Supported EUR 144,000 in revenue.",
    },
    {
      role: "Team Leader (Part Time, alongside degree)",
      company: "CeX",
      period: "Aug 2024 - Jan 2026",
      summary: "IT and hardware support, team leadership on the floor.",
    },
  ] satisfies ExperienceEntry[],

  certifications: [
    { name: "Google IT Support Professional", date: "Apr 2026" },
    {
      name: "Google System Administration and IT Infrastructure Services",
      date: "Apr 2026",
    },
    { name: "Google AI Fundamentals", date: "May 2026" },
  ] satisfies Certification[],

  contact: {
    heading: "The summit is just the next base camp.",
    cta: "Email me",
    footer: "Designed and built by Raj Sahu. Athlone, Ireland.",
  },

  sections: {
    about: "About",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",
  },
} as const;

export type Content = typeof content;
