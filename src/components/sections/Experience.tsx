"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="px-8 pb-8 pt-8 lg:px-16 lg:pb-8 lg:pt-8">
      <SectionLabel icon={Briefcase} glowColor="var(--icon-experience)">Work Experience</SectionLabel>

      <div className="flex flex-col">
        {experience.map((exp, i) => {
          const older = i >= 2;
          return (
          <motion.div
            key={exp.company}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.05 }}
          >
            {/* Entry row */}
            <div
              className="flex flex-col lg:flex-row gap-2 lg:gap-10 py-8 rounded-lg transition-all duration-200 px-4 -mx-4"
              style={{ backgroundColor: "transparent", border: "1px solid transparent" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = "var(--color-bg-card)";
                el.style.border = "1px solid var(--color-hover-border)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = "transparent";
                el.style.border = "1px solid transparent";
              }}
            >
              {/* Left: date + logo */}
              <div className="flex flex-col gap-4 flex-shrink-0 lg:w-36">
                <span
                  className={`${older ? "text-xs" : "text-sm"} font-semibold leading-snug lg:whitespace-nowrap`}
                  style={{ color: older ? "var(--color-text-muted)" : "var(--color-text-primary)" }}
                >
                  {exp.range}
                </span>
                {exp.logo && (
                  <div
                    className="flex items-center justify-center rounded"
                    style={{
                      width: "72px",
                      height: "72px",
                      border: "1px solid var(--color-accent)",
                      backgroundColor: "transparent",
                      padding: "8px",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
              </div>

              {/* Right: title + bullets */}
              <div className="flex flex-col gap-4 flex-1 min-w-0">
                <h3
                  className={`${older ? "text-sm" : "text-base"} font-bold leading-snug`}
                  style={{ color: older ? "var(--color-text-muted)" : "var(--color-accent)" }}
                >
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {exp.company}
                  </a>
                  {" • "}
                  {exp.title}.
                </h3>

                <ul className="flex flex-col gap-2.5">
                  {exp.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className={`flex gap-3 ${older ? "text-xs" : "text-sm"} leading-relaxed`}
                      style={{ color: older ? "var(--color-text-muted)" : "var(--color-text-body)" }}
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                        style={{ backgroundColor: older ? "var(--color-text-muted)" : "var(--color-text-body)" }}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Divider (not after last item) */}
            {i < experience.length - 1 && (
              <div
                className="h-px w-full"
                style={{ backgroundColor: "var(--color-border)" }}
              />
            )}
          </motion.div>
          );
        })}
      </div>

      {/* Resume link */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        className="mt-6"
      >
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest transition-colors duration-150"
          style={{ color: "var(--color-text-primary)" }}
        >
          View Full Resume
          <span
            className="transition-transform duration-150 group-hover:translate-x-1"
            style={{ color: "var(--color-accent)" }}
          >
            →
          </span>
        </a>
      </motion.div>
    </section>
  );
}
