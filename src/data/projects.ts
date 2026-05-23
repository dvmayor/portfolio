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
  status?: "live" | "in-progress";
}

export const featuredProjects: FeaturedProject[] = [
  {
    name: "Bank Statement AI Agent",
    description:
      "An agentic AI app that parses your bank statement, categorises your spending, flags anomalies, and gives a plain-English monthly summary. The ReAct loop analysis streams in real time so you can watch the model's reasoning as it works. Supports multiple LLM providers. Just upload a PDF.",
    outcomes: ["Multi-model Support", "Real-time Streaming"],
    tech: ["Agentic AI", "RAG", "ReAct Loop", "Prompt Engineering", "Python", "Next.js", "Tailwind CSS"],
    github: "https://github.com/dvmayor/bank-statement-agent",
    live: "https://bank-statement-agent.davidreuelvillamayor.com/",
    image: "/images/projects/bank-statement-agent.jpg",
    logo: "",
    status: "live",
  },
  {
    name: "PDF Redactor",
    description:
      "PDFs often contain more than you want to share. Just drag to highlight any text and black it out with one click. Names, addresses, account numbers, anything. The text is permanently removed from the file, not just hidden. Everything runs in your browser. Your PDF never leaves your device.",
    outcomes: ["Client-side only", "Permanent redaction"],
    tech: ["Python", "FastAPI", "PyMuPDF", "PDF.js", "JavaScript", "Vercel"],
    github: "https://github.com/dvmayor/pdf-redactor",
    live: "https://pdf-redactor.davidreuelvillamayor.com/",
    image: "/images/projects/pdf-redactor.jpg",
    logo: "",
    status: "live",
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
