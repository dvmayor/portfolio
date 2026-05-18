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
  // Replace with your real domain before deploying
  // metadataBase: new URL("https://yourdomain.com"),
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
