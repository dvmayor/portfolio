export interface Initiative {
  name: string;
  description: string;
  tech: string[];
  outcomes?: string[];
  articleUrl?: string;
  youtubeUrl?: string;
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
    title: "Technical Lead",
    range: "May 2023 - Aug 2025",
    bullets: [
      "Managed 3 cross-functional squads (25+ engineers) across design, dev, testing, and deployment.",
      "Owned end-to-end engineering delivery for UOB's digital banking platform across 5 ASEAN countries (mobile, web, and branch channels), serving 8 million customers.",
      "Drove technical design decisions and release governance across squads; served as the engineering interface for UOB product and compliance stakeholders across multiple ASEAN markets.",
      "Awarded Certificate of Recognition for Performance Excellence (Mar 2024).",
    ],
    tech: ["Java", "Spring", "Kotlin", "Swift", "Microservices"],
    initiatives: [
      {
        name: "Account Drainage Detection",
        description:
          "Built UOB's safeguard system against account-draining scams, detecting and blocking transactions that would empty account balances, in line with Singapore's Shared Responsibility Framework and the industry-wide response coordinated by the Association of Banks in Singapore.",
        tech: ["React", "Kotlin", "Swift", "Java", "Spring", "SQL"],
        outcomes: ["$1.7B scam losses mitigated"],
        articleUrl: "https://www.compliancecorylated.com/news/singapore-banks-act-on-account-draining-scams/",
        youtubeUrl: "https://www.youtube.com/watch?v=DzHyIuDv1Rk",
      },
      {
        name: "Facial Biometric Authentication",
        description:
          "Delivered facial recognition for high-value mobile banking transactions across UOB's ASEAN markets, meeting regulatory mandates (including Bank of Thailand) that required biometric authentication above defined per-transaction and daily transfer thresholds.",
        tech: ["Java", "Spring", "RESTful APIs", "React", "Microservices"],
        outcomes: ["Certificate of Recognition"],
        articleUrl: "https://www.bangkokpost.com/business/2557434/banks-tell-users-put-on-your-best-face",
      },
      {
        name: "Citibank-to-UOB Portfolio Migration",
        description:
          "Following UOB's acquisition of Citibank's ASEAN consumer banking business, part of the Customer Onboarding stream delivering platform changes to migrate 2.4 million customers into UOB's digital channels across Malaysia, Indonesia, and Thailand. Described by The Asian Banker as ASEAN's largest data merger.",
        tech: ["Java", "Spring", "Apache Camel"],
        outcomes: ["2.4M customers migrated"],
        articleUrl: "https://live.theasianbanker.com/video/uob-integrates-citigroup-in-aseans-largest-data-merger",
      },
    ],
  },
  {
    company: "Accenture Singapore",
    url: "https://www.accenture.com",
    title: "Application Development Specialist",
    range: "Nov 2016 - Dec 2022",
    bullets: [
      "Drove delivery of Singpass enhancements for 5M+ users, including QR login handling millions of daily authentication requests.",
      "Directed the full AWS Cloud migration of Corppass, streamlining access for 200k+ businesses.",
      "Championed a modernisation initiative on Corppass to eliminate overnight batch processing, delivering real-time results for 200k+ businesses.",
      "Owned technical design decisions, code reviews, and release governance; mentored junior engineers and managed vendor relationships.",
    ],
    tech: ["Java", "Spring", "AWS", "Kubernetes", "Microservices"],
    initiatives: [
      {
        name: "Corppass AWS Cloud Migration",
        description:
          "Led full migration of Singapore's corporate digital identity platform to AWS Cloud, improving scalability and authentication processing times for 200k+ businesses.",
        tech: ["AWS", "Kubernetes", "Docker", "Microservices", "React", "Java"],
        outcomes: ["200k+ businesses"],
        articleUrl: "https://www.tech.gov.sg/products-and-services/for-businesses/corporate-transactions/corppass/",
      },
      {
        name: "Singpass QR Login",
        description:
          "Designed and delivered QR-based login for Singpass, used by 5M+ users and handling millions of daily authentication requests.",
        tech: ["React", "Java", "Spring", "RESTful APIs"],
        outcomes: ["5M+ users"],
        articleUrl: "https://www.tech.gov.sg/products-and-services/for-citizens/digital-services/singpass/",
      },
    ],
  },
  {
    company: "Accenture Philippines",
    url: "https://www.accenture.com",
    title: "Software Developer Senior Analyst",
    range: "Mar 2015 - Oct 2016",
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
        articleUrl: "https://www.vitalitygroup.com/insights/aia-and-discovery-launch-aia-vitality-in-asia-pacific/",
      },
    ],
  },
  {
    company: "NEC Telecom Software Philippines",
    url: "https://www.nec.com",
    title: "Software Design Engineer",
    range: "Apr 2011 - Feb 2015",
    bullets: [
      "Developed Java applications for NEC's MS5000 telecom platform; awarded the Presidential Award for quality and delivery under tight timelines.",
      "Wrote functional and design specs; contributed to multiple release cycles of mission-critical telecom infrastructure.",
    ],
    tech: ["Java", "Software Design"],
    initiatives: [
      {
        name: "MS5000 Radio Telecom Software",
        description:
          "Designed, developed, and maintained mission-critical Java applications for NEC's MS5000 R10.0 Radio platform. Received Presidential Award for outstanding product development quality and delivery.",
        tech: ["Java", "Swing", "Websphere"],
        outcomes: ["Presidential Award"],
        articleUrl: "https://sg.nec.com/en_AP/press/201105/ap_20110510_01.html",
      },
    ],
  },
];
