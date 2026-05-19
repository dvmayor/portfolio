"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Pill from "@/components/ui/Pill";

export default function About() {
  return (
    <section id="about" className="px-8 pb-8 pt-16 lg:px-16 lg:pb-8 lg:pt-24">
      <SectionLabel icon={User} glowColor="var(--icon-about)">About Me</SectionLabel>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col gap-6"
      >
        {/* Headline — full width */}
        <h2 className="text-3xl font-bold leading-[1.1] tracking-tight lg:text-5xl" style={{ color: "var(--color-text-primary)" }}>
          Building teams that{" "}
          <span style={{ color: "var(--color-highlight)" }}>ship to millions.</span>
          {" "}Going deep on{" "}
          <span style={{ color: "var(--color-accent)" }}>AI.</span>
        </h2>

        {/* Bio (left) + Photo (right) */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10 lg:max-w-3xl">
          <div
            className="flex flex-col gap-4 text-sm leading-relaxed lg:flex-1"
            style={{ color: "var(--color-text-body)" }}
          >
            <p>
              Engineering teams that shipped to millions across Asia. Led delivery for{" "}
              <a href="https://www.uobgroup.com" className="font-medium transition-colors duration-150 hover:underline" style={{ color: "var(--color-accent)" }} target="_blank" rel="noopener noreferrer">UOB</a>
              {" "}digital banking across 5 countries, worked on{" "}
              <a href="https://www.singpass.gov.sg" className="font-medium transition-colors duration-150 hover:underline" style={{ color: "var(--color-accent)" }} target="_blank" rel="noopener noreferrer">Singpass</a>
              {" "}and{" "}
              <a href="https://www.corppass.gov.sg" className="font-medium transition-colors duration-150 hover:underline" style={{ color: "var(--color-accent)" }} target="_blank" rel="noopener noreferrer">Corppass</a>
              , the apps Singapore residents use to log into government services.
            </p>
            <p>
              I like sitting between the tech and the product side, figuring out what
              to build, not just how. I still get into the code when it helps. I&rsquo;ve
              piloted an LLM-based document verification workflow, saw its potential in
              business impact, and want to continue driving that kind of value.
            </p>
            <p>
              After leaving HCLTech in Aug 2025, I took time off to travel and pick up
              new certifications, then moved to Sydney as an Australian PR in Jan 2026.
              Currently going deeper on agentic AI (Bedrock, LangChain, RAG) and looking
              for an Engineering Manager or Senior Engineering role where I can own
              delivery and grow a team.
            </p>
          </div>

          {/* Photo */}
          <div className="flex justify-center lg:flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/avatar.jpg"
              alt="David Reuel Villamayor"
              className="rounded-full object-cover"
              style={{ width: "180px", height: "180px", border: "2px solid var(--color-border)" }}
            />
          </div>
        </div>

        {/* Skills bar */}
        <div className="flex flex-col gap-3 lg:max-w-3xl">
          <div className="flex flex-wrap gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest mr-1 self-center" style={{ color: "var(--color-text-muted)" }}>Stack</span>
            {["AWS", "Agentic AI", "Python", "React", "TypeScript", "Java"].map((skill) => (
              <Pill key={skill} variant="tech">{skill}</Pill>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest mr-1 self-center" style={{ color: "var(--color-text-muted)" }}>Domain</span>
            {["Digital Banking", "FinTech", "Identity Systems", "Fraud Prevention"].map((skill) => (
              <Pill key={skill} variant="domain">{skill}</Pill>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            <span className="text-xs font-semibold uppercase tracking-widest mr-1 self-center" style={{ color: "var(--color-text-muted)" }}>Shipped for</span>
            {[
              { src: "/images/projects/logo-uob.svg", alt: "UOB", href: "https://www.uobgroup.com", height: "12px" },
              { src: "/images/projects/logo-singpass.svg", alt: "Singpass", href: "https://www.singpass.gov.sg", height: "11px" },
              { src: "/images/projects/logo-corppass.svg", alt: "Corppass", href: "https://www.corppass.gov.sg", height: "14px" },
              { src: "/images/projects/logo-aia.svg", alt: "AIA", href: "https://www.aia.com/en/health-wellness/aia-vitality", height: "14px" },
            ].map((logo) => (
              <a
                key={logo.alt}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={logo.alt}
                className="flex items-center rounded px-2 py-1 transition-opacity duration-150"
                style={{ backgroundColor: "rgba(255,255,255,0.93)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.75")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="object-contain"
                  style={{ height: logo.height, width: "auto" }}
                />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
