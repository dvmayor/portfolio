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
  id?: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    name: "Bank Statement AI Agent",
    description:
      "An agentic AI app that parses your bank statement, categorises your spending, flags anomalies, and gives a plain-English monthly summary. The ReAct loop analysis streams in real time so you can watch the model's reasoning as it works. Supports multiple LLM providers. Just upload a PDF.",
    outcomes: ["Multi-model Support", "Real-time Streaming"],
    tech: ["Agentic AI", "RAG", "ReAct Loop", "Prompt Engineering", "Python", "Typescript", "Next.js"],
    github: "https://github.com/dvmayor/bank-statement-agent",
    live: "https://bank-statement-agent.davidreuelvillamayor.com/",
    image: "/images/projects/bank-statement-agent.jpg",
    logo: "",
    status: "live",
  },
  {
    id: "delivery-crew",
    name: "Cross-Functional Software Delivery Crew",
    description:
      "A multi-agent crew that takes raw product requirements and does the delivery prep work. One agent analyzes the feature request for edge cases and business value. A second proposes data models, infrastructure updates, and API contracts. A third reviews the architecture against OWASP top 10 vulnerabilities. Built on CrewAI with hierarchical delegation so agents critique and refine each other before final output, turning a PRD into Jira-ready tickets.",
    outcomes: ["PRD to architecture", "Security review", "Jira-ready tickets"],
    tech: ["CrewAI", "Multi-agent AI", "Agents Orchestration", "Agentic AI", "Python"],
    github: "",
    live: "",
    image: "/images/projects/delivery-crew.png",
    logo: "",
    status: "in-progress",
  },
  {
    name: "PDF Redactor",
    description:
      "PDFs often contain more than you want to share. Just drag to highlight any text and black it out with one click. Names, addresses, account numbers, anything. The text is permanently removed from the file, not just hidden. Everything runs in your browser. Your PDF never leaves your device.",
    outcomes: ["Client-side only", "Permanent redaction"],
    tech: ["Python", "FastAPI", "Tailwind CSS", "PyMuPDF", "PDF.js", "JavaScript", "Vercel"],
    github: "https://github.com/dvmayor/pdf-redactor",
    live: "https://pdf-redactor.davidreuelvillamayor.com/",
    image: "/images/projects/pdf-redactor.jpg",
    logo: "",
    status: "live",
  },
];
