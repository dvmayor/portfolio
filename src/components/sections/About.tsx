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
          Led banking delivery across{" "}
          <span style={{ color: "var(--color-highlight)" }}>5 ASEAN countries.</span>
          {" "}Now going deep on{" "}
          <span style={{ color: "var(--color-accent)" }}>AI.</span>
        </h2>

        {/* Bio (left) + Photo (right) */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10 lg:max-w-3xl">
          <div
            className="flex flex-col gap-4 text-sm leading-relaxed lg:flex-1"
            style={{ color: "var(--color-text-body)" }}
          >
            <p>
              Led teams delivering for{" "}
              <a href="https://www.uobgroup.com" className="font-medium transition-colors duration-150 hover:underline" style={{ color: "var(--color-accent)" }} target="_blank" rel="noopener noreferrer">UOB</a>
              , one of Southeast Asia's largest banks, across 5 ASEAN countries, and worked on{" "}
              <a href="https://www.singpass.gov.sg" className="font-medium transition-colors duration-150 hover:underline" style={{ color: "var(--color-accent)" }} target="_blank" rel="noopener noreferrer">Singpass</a>
              {" "}and{" "}
              <a href="https://www.corppass.gov.sg" className="font-medium transition-colors duration-150 hover:underline" style={{ color: "var(--color-accent)" }} target="_blank" rel="noopener noreferrer">Corppass</a>
              , the apps that allow Singapore residents to securely access government and private-sector services online.
            </p>
            <p>
              I like sitting between the tech and the product side, figuring out what
              to build, not just how. I still get into the code when it helps.
              Since leaving HCLTech I've been building personal AI projects, including
              a{" "}
              <a href="#projects" className="font-medium transition-colors duration-150 hover:underline" style={{ color: "var(--color-accent)" }}>Bank Statement AI Agent</a>
              , live with real architecture behind it, and currently experimenting with running my own{" "}
              <a href="#delivery-crew" className="font-medium transition-colors duration-150 hover:underline" style={{ color: "var(--color-accent)" }}>multi-agent software delivery crew</a>
              . The goal: understand what AI can actually do for a business when done properly, not just read about it.
            </p>
            <p>
              Australian PR based in Sydney since Jan 2026, looking for an
              Engineering Manager role where I can own delivery, lead and grow a team.
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
            <span className="text-xs font-semibold uppercase tracking-widest mr-1 self-center" style={{ color: "var(--color-text-muted)" }}>Leadership</span>
            {["Cross-functional", "Mentoring", "Technical Roadmaps", "Delivery at Scale"].map((skill) => (
              <Pill key={skill} variant="domain">{skill}</Pill>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest mr-1 self-center" style={{ color: "var(--color-text-muted)" }}>Technical</span>
            {["AWS", "Agentic AI", "Python", "Typescript", "React", "Java"].map((skill) => (
              <Pill key={skill} variant="domain">{skill}</Pill>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest mr-1 self-center" style={{ color: "var(--color-text-muted)" }}>Domain</span>
            {["Digital Banking", "FinTech", "Digital Identity", "Fraud Prevention", "HealthTech"].map((skill) => (
              <Pill key={skill} variant="domain">{skill}</Pill>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            <span className="text-xs font-semibold uppercase tracking-widest mr-1 self-center" style={{ color: "var(--color-text-muted)" }}>Shipped for</span>
            {[
              { src: "/images/projects/logo-accenture.svg", alt: "Accenture", href: "https://www.accenture.com", height: "16px", padding: "2px 7px 5px" },
              { src: "/images/projects/logo-hcltech.svg", alt: "HCLTech", href: "https://www.hcltech.com", height: "14px" },
              { src: "/images/projects/logo-uob.svg", alt: "UOB", href: "https://www.uobgroup.com", height: "12px" },
              { src: "/images/projects/logo-singpass.svg", alt: "Singpass", href: "https://www.singpass.gov.sg", height: "10px", padding: "8px 4px 4px" },
              { src: "/images/projects/logo-corppass.svg", alt: "Corppass", href: "https://www.corppass.gov.sg", height: "14px" },
              { src: "/images/projects/logo-aia.svg", alt: "AIA", href: "https://www.aia.co.th/en/health-wellness/vitality", height: "14px" },
            ].map((logo) => (
              <a
                key={logo.alt}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={logo.alt}
                className="flex items-center rounded transition-opacity duration-150"
                style={{ backgroundColor: "rgba(255,255,255,0.93)", opacity: "0.75", padding: (logo as any).padding ?? "4px 4px" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.75")}
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
