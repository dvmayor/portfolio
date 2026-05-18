export interface Initiative {
  name: string;
  description: string;
  tech: string[];
  outcomes?: string[];
}

export interface ExperienceItem {
  company: string;
  url: string;
  title: string;
  range: string;
  bullets: string[];
  initiatives?: Initiative[];
  logo?: string;
  tech?: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "HCLTech Singapore",
    url: "https://www.hcltech.com",
    title: "Engineering Manager (Technical Lead)",
    range: "May 2023 -Aug 2025",
    bullets: [
      "Piloted an LLM-backed document verification workflow (Bedrock, LangChain, RAG) to replace manual eligibility checks in account opening, targeting 25% reduction in staff processing time.",
      "Led end-to-end engineering delivery for UOB's digital banking platform across 5 ASEAN countries (mobile, web, and branch channels), serving 8 million customers.",
      "Managed and mentored 25+ engineers across design, dev, testing, and deployment.",
      "Awarded Certificate of Recognition for Performance Excellence (Mar 2024).",
    ],
    tech: ["Java", "Spring", "Bedrock", "LangChain", "RAG", "Microservices"],
    initiatives: [
      {
        name: "Fraud Detection System",
        description:
          "Led development of a fraud detection initiative for UOB's digital banking operations. Awarded Certificate of Recognition for Performance Excellence (Mar 2024).",
        tech: ["Java", "Spring Boot", "React", "SQL"],
        outcomes: ["$1.7B scam losses mitigated"],
      },
      {
        name: "AI Workflow Automation",
        description:
          "Integrated LLM-backed workflows using Amazon Bedrock, LangChain, and RAG pipelines into regulated environments.",
        tech: ["Amazon Bedrock", "LangChain", "RAG", "Python", "TypeScript"],
        outcomes: ["-25% manual processing"],
      },
      {
        name: "Customer Onboarding & Identity Assurance",
        description:
          "Built customer onboarding and identity assurance level systems integrating front-end digital banking apps with back-end systems across multiple ASEAN countries.",
        tech: ["Java", "Spring", "Apache Camel", "RESTful APIs"],
      },
    ],
  },
  {
    company: "Accenture Singapore",
    url: "https://www.accenture.com",
    title: "Application Development Specialist",
    range: "Nov 2016 -Dec 2022",
    bullets: [
      "Delivered Singpass enhancements for 5M+ users, including QR login supporting millions of daily auth requests.",
      "Led full AWS Cloud migration of Corppass, streamlining access for 200k+ businesses.",
      "Drove initiative to replace a 24-hour batch job with a real-time API on Corppass, cutting processing time from overnight to instant.",
      "Owned technical design, code reviews, and release management; mentored juniors and managed vendor relationships.",
    ],
    tech: ["Java", "Spring", "AWS", "Kubernetes", "Microservices"],
    initiatives: [
      {
        name: "Corppass AWS Cloud Migration",
        description:
          "Led full migration of Singapore's corporate digital identity platform to AWS Cloud, improving scalability and authentication processing times.",
        tech: ["AWS", "Kubernetes", "Docker", "Microservices", "React", "Java"],
        outcomes: ["200k+ businesses"],
      },
      {
        name: "Singpass QR Login",
        description:
          "Designed and delivered QR-based login for Singpass, supporting millions of daily authentication requests.",
        tech: ["React", "Java", "Spring", "RESTful APIs"],
        outcomes: ["5M+ users"],
      },
    ],
  },
  {
    company: "Accenture Philippines",
    url: "https://www.accenture.com",
    title: "Software Developer Senior Analyst",
    range: "Mar 2015 -Oct 2016",
    bullets: [
      "Built and maintained client-facing applications across multiple financial services delivery tracks.",
      "Worked closely with business analysts to turn requirements into working software.",
    ],
    tech: ["Java", "SQL"],
    initiatives: [
      {
        name: "AIA Vitality Rewards Program",
        description:
          "Built integrations for AIA's science-backed wellness rewards programme, linking activity tracking and rewards fulfilment into the core insurance platform.",
        tech: ["Java", "Spring", "RESTful APIs", "SQL"],
      },
    ],
  },
  {
    company: "NEC Telecom Software Philippines",
    url: "https://www.nec.com",
    title: "Software Design Engineer",
    range: "Apr 2011 -Feb 2015",
    bullets: [
      "Developed Java applications for NEC's MS5000 telecom platform; awarded the Presidential Award for quality and delivery under tight timelines.",
      "Wrote functional and design specs; contributed to multiple release cycles of mission-critical telecom infrastructure.",
    ],
    tech: ["Java", "Software Design"],
    initiatives: [
      {
        name: "MS5000 Radio Telecom Software",
        description:
          "Designed, developed, and maintained mission-critical Java applications for NEC's MS5000 R10.0 Radio platform. Awarded Presidential Award.",
        tech: ["Java"],
      },
    ],
  },
];
