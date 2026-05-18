export interface ExperienceItem {
  company: string;
  url: string;
  title: string;
  range: string;
  bullets: string[];
  logo?: string;
}

export const experience: ExperienceItem[] = [
  {
    company: "HCLTech Singapore",
    url: "https://www.hcltech.com",
    title: "Engineering Manager / Technical Lead",
    range: "May 2023 -Aug 2025",
    bullets: [
      "Piloted an LLM-backed document verification workflow (Bedrock, LangChain, RAG) to replace manual eligibility checks in account opening, targeting 25% reduction in staff processing time.",
      "Led end-to-end engineering delivery for UOB's digital banking platform across 5 ASEAN countries (mobile, web, and branch channels), serving 8 million customers.",
      "Managed and mentored 25+ engineers across design, dev, testing, and deployment.",
      "Awarded Certificate of Recognition for Performance Excellence (Mar 2024).",
    ],
  },
  {
    company: "Accenture Singapore",
    url: "https://www.accenture.com",
    title: "Application Development Specialist / Team Lead",
    range: "Nov 2016 -Dec 2022",
    bullets: [
      "Delivered Singpass enhancements for 5M+ users, including QR login supporting millions of daily auth requests.",
      "Led full AWS Cloud migration of Corppass, streamlining access for 200k+ businesses.",
      "Drove initiative to replace a 24-hour batch job with a real-time API on Corppass, cutting processing time from overnight to instant.",
      "Owned technical design, code reviews, and release management; mentored juniors and managed vendor relationships.",
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
  },
];
