"use client";

import LeftColumn from "@/components/LeftColumn";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useActiveSection } from "@/hooks/useActiveSection";

export default function Home() {
  const activeSection = useActiveSection();

  return (
    <div
      className="flex min-h-screen flex-col lg:flex-row"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <LeftColumn activeSection={activeSection} />
      <main className="flex-1 min-w-0">
        <About />
        <Experience />
        <Contact />
        <Footer />
      </main>
      <ScrollToTop />
    </div>
  );
}
