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
          <span style={{ color: "var(--color-accent)" }}>ship to millions.</span>
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
              Engineering teams that shipped to millions across Singapore and Sydney. Led delivery for{" "}
              <a href="https://www.uobgroup.com" className="font-medium transition-colors duration-150 hover:underline" style={{ color: "var(--color-accent)" }} target="_blank" rel="noopener noreferrer">UOB</a>
              {" "}digital banking across 5 countries, worked on{" "}
              <a href="https://www.singpass.gov.sg" className="font-medium transition-colors duration-150 hover:underline" style={{ color: "var(--color-accent)" }} target="_blank" rel="noopener noreferrer">Singpass</a>
              {" "}and{" "}
              <a href="https://www.corppass.gov.sg" className="font-medium transition-colors duration-150 hover:underline" style={{ color: "var(--color-accent)" }} target="_blank" rel="noopener noreferrer">Corppass</a>
              , the apps most Singapore residents use to log into government services.
            </p>
            <p>
              I like sitting between the tech and the product side, figuring out what
              to build, not just how. I still get into the code when it helps. Right now
              I&rsquo;m deliberately going deeper on agentic AI. I&rsquo;ve piloted an 
              LLM-based document verification workflow, saw its potential in business 
              impact, and want to continue driving that kind of value.
            </p>
            <p>
              I&rsquo;m an Australian PR based in Sydney, looking for an Engineering Manager or Senior Engineering role where I can own delivery and grow a team.
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
            {["Digital Banking", "Identity & Access", "Agile / SAFe"].map((skill) => (
              <Pill key={skill} variant="tech">{skill}</Pill>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
