"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

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
        <h2
          className="text-2xl font-bold leading-snug lg:text-3xl"
          style={{ color: "var(--color-text-primary)" }}
        >
          I&rsquo;m an{" "}
          <span style={{ color: "var(--color-accent)" }}>Engineering Manager</span>
          {" "}who builds teams that ship to{" "}
          <span style={{ color: "var(--color-highlight)" }}>millions of users.</span>
        </h2>

        {/* Bio (left) + Photo (right) */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10 lg:max-w-3xl">
          <div
            className="flex flex-col gap-4 text-sm leading-relaxed lg:flex-1"
            style={{ color: "var(--color-text-body)" }}
          >
            <p>
              I&rsquo;ve spent 15 years building software teams, mostly in Singapore,
              now in Sydney. I managed the engineering side of{" "}
              <a
                href="https://www.uobgroup.com"
                className="font-medium transition-colors duration-150 hover:underline"
                style={{ color: "var(--color-accent)" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                UOB&rsquo;s
              </a>{" "}
              digital banking across 5 countries and worked on{" "}
              <a
                href="https://www.singpass.gov.sg"
                className="font-medium transition-colors duration-150 hover:underline"
                style={{ color: "var(--color-accent)" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Singpass
              </a>{" "}
              and{" "}
              <a
                href="https://www.corppass.gov.sg"
                className="font-medium transition-colors duration-150 hover:underline"
                style={{ color: "var(--color-accent)" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Corppass
              </a>
              , the apps most Singapore residents use to log into government services.
            </p>
            <p>
              I like sitting between the tech and the product side, figuring out what
              to build, not just how. I still get into the code when it helps. Right now
              I&rsquo;m deliberately going deeper on agentic AI. I piloted
              an LLM-based document verification workflow in banking and want to keep building in that space.
            </p>
            <p>
              I&rsquo;m on Australian PR, looking for an EM or senior engineering role in Sydney where I can own delivery and grow a team.
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
              <span
                key={skill}
                className="rounded-full px-3 py-1 text-xs font-semibold"
                style={{
                  backgroundColor: "var(--color-tag-bg)",
                  border: "1px solid var(--color-tag-border)",
                  color: "var(--color-accent)",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest mr-1 self-center" style={{ color: "var(--color-text-muted)" }}>Domain</span>
            {["Digital Banking", "Identity & Access", "Agile / SAFe"].map((skill) => (
              <span
                key={skill}
                className="rounded-full px-3 py-1 text-xs font-semibold"
                style={{
                  backgroundColor: "var(--color-tag-bg)",
                  border: "1px solid var(--color-tag-border)",
                  color: "var(--color-accent)",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
