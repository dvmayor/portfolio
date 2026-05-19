import type { Metadata } from "next";
import { Bai_Jamjuree, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const baiJamjuree = Bai_Jamjuree({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-bai-jamjuree",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "David Reuel Villamayor | Engineering Manager",
  description:
    "Engineering Manager with 15+ years building and scaling mission-critical SaaS platforms. Specialising in digital transformation, AI tooling, and distributed systems across ASEAN and Sydney.",
  metadataBase: new URL("https://davidreuelvillamayor.com"),
  openGraph: {
    title: "David Reuel Villamayor | Engineering Manager",
    description:
      "Engineering Manager with 15+ years building and scaling mission-critical SaaS platforms. Specialising in digital transformation, AI tooling, and distributed systems across ASEAN and Sydney.",
    url: "https://davidreuelvillamayor.com",
    siteName: "David Reuel Villamayor",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "David Reuel Villamayor — Engineering Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "David Reuel Villamayor | Engineering Manager",
    description:
      "Engineering Manager with 15+ years building and scaling mission-critical SaaS platforms.",
    images: ["/og-image.png"],
  },
  other: {
    "theme-color": "#1e2336",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${baiJamjuree.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem('theme')||'dark';document.documentElement.setAttribute('data-theme',t);}catch(e){};window.addEventListener('beforeprint',function(){document.documentElement.style.setProperty('--print-mode','1');document.body.style.minHeight='auto';window.scrollTo(0,0);});window.addEventListener('afterprint',function(){document.documentElement.style.setProperty('--print-mode','0');});` }} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
