import type { CSSProperties } from "react";

export interface FeaturedProject {
  name: string;
  description: string;
  tech: string[];
  outcomes: string[];
  github: string;
  live: string;
  image: string;
  logo: string;
  logoStyle?: CSSProperties;
}

export interface OtherProject {
  name: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    name: "UOB Digital Banking Platform",
    description:
      "End-to-end engineering leadership of a Tier-1 ASEAN bank's mobile, web, and branch-counter channels across Singapore, Thailand, Malaysia, Indonesia, and Vietnam, serving 8 million customers.",
    outcomes: ["25+ engineers", "8M customers", "5 countries", "Certificate of Excellence"],
    tech: ["Java", "Spring", "Microservices", "RESTful APIs", "Apache Camel", "Jenkins", "SQL"],
    github: "",
    live: "https://www.uobgroup.com",
    image: "/images/projects/uob.jpg",
    logo: "/images/projects/logo-uob.svg",
    logoStyle: { height: "12px" },
  },
  {
    name: "Singpass",
    description:
      "Engineering delivery on Singapore's national digital identity platform. Led QR login implementation, improving security and UX across government and private sector services for 5M+ users.",
    outcomes: ["5M+ users", "Millions of daily auth requests", "QR Login delivery"],
    tech: ["Java", "Spring", "Microservices", "RESTful APIs", "Agile"],
    github: "",
    live: "https://www.singpass.gov.sg",
    image: "/images/projects/singpass.jpg",
    logo: "/images/projects/logo-singpass.svg",
    logoStyle: { height: "11px" },
  },
  {
    name: "Corppass",
    description:
      "Led full AWS Cloud migration of Singapore's corporate digital identity platform, improving scalability and authentication throughput for businesses accessing government services.",
    outcomes: ["200k+ businesses", "AWS Cloud migration", "Improved auth throughput"],
    tech: ["Java", "Spring", "AWS", "Kubernetes", "Weblogic", "Agile"],
    github: "",
    live: "https://www.corppass.gov.sg",
    image: "/images/projects/corppass.jpg",
    logo: "/images/projects/logo-corppass.svg",
  },
  {
    name: "AIA Vitality",
    description:
      "Delivered integrations between wellness activity tracking, rewards, and the core insurance platform for AIA's science-backed wellness programme across Asia.",
    outcomes: ["Pan-Asia rollout", "Insurance platform integration", "Wellness + rewards pipeline"],
    tech: ["Java", "Spring Boot", "Microservices", "RESTful APIs", "SQL"],
    github: "",
    live: "https://www.aia.com/en/health-wellness/aia-vitality",
    image: "/images/projects/aia.jpg",
    logo: "/images/projects/logo-aia.svg",
  },
];

export const otherProjects: OtherProject[] = [
  {
    name: "Fraud Detection System",
    description:
      "Led development of a fraud detection initiative for UOB's digital banking operations. Awarded Certificate of Recognition for Performance Excellence (Mar 2024) for outstanding delivery.",
    tech: ["Java", "Spring Boot", "Microservices", "SQL"],
    github: "",
    live: "",
  },
  {
    name: "AI Workflow Automation",
    description:
      "Integrated LLM-backed workflows using Amazon Bedrock, LangChain, and RAG pipelines into regulated environments, cutting manual processing effort by 25%.",
    tech: ["Amazon Bedrock", "LangChain", "RAG", "Python"],
    github: "",
    live: "",
  },
  {
    name: "Corppass AWS Cloud Migration",
    description:
      "Led full migration of Corppass, Singapore's corporate digital identity platform, to AWS Cloud, improving scalability and authentication processing times for 200k+ businesses.",
    tech: ["AWS", "Kubernetes", "Java", "Weblogic"],
    github: "",
    live: "",
  },
  {
    name: "Singpass QR Login",
    description:
      "Designed and delivered QR-based login for Singpass, enhancing security and user experience for over 5 million users with support for millions of daily authentication requests.",
    tech: ["Java", "Spring", "RESTful APIs", "Agile"],
    github: "",
    live: "",
  },
  {
    name: "Customer Onboarding & Identity Assurance",
    description:
      "Built customer onboarding and identity assurance level systems integrating front-end digital banking apps with back-end systems across multiple ASEAN countries.",
    tech: ["Java", "Spring", "Apache Camel", "RESTful APIs"],
    github: "",
    live: "",
  },
  {
    name: "NEC MS5000 Radio Telecom Software",
    description:
      "Designed, developed, and maintained mission-critical Java applications for NEC's MS5000 R10.0 Radio platform. Awarded Presidential Award for outstanding delivery under a short development period.",
    tech: ["Java", "Computer Science", "Software Design"],
    github: "",
    live: "",
  },
];
