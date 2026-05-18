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
    live: "https://www.aia.co.th/en/health-wellness/vitality",
    image: "/images/projects/aia.jpg",
    logo: "/images/projects/logo-aia.svg",
  },
];

