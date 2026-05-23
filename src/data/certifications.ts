export interface Certification {
  name: string;
  issuer: string;
  logo?: string;
  logoBg?: string;
  year: string;
  verifyUrl: string;
}

export const certifications: Certification[] = [
  {
    name: "Generative AI Leader",
    issuer: "Google Cloud",
    logo: "/images/projects/logo-google-g.svg",
    year: "2025",
    verifyUrl: "https://www.credly.com/earner/earned/badge/40692738-e555-4c61-8eea-f450978eb9e7",
  },
  {
    name: "SAFe 6 Agilist",
    issuer: "Scaled Agile",
    logo: "/images/projects/logo-scaled-agile.svg",
    year: "2025",
    verifyUrl: "https://www.credly.com/earner/earned/badge/ecda151c-c7e2-4641-899b-e906852b2b2f",
  },
  {
    name: "Professional Scrum Master I",
    issuer: "Scrum.org",
    logo: "/images/projects/logo-scrum-org.svg",
    year: "2025",
    verifyUrl: "https://www.credly.com/earner/earned/badge/d8c0fd85-f672-474c-b8d3-1d236a633445",
  },
];
