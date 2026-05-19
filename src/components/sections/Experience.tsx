"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BarChart2, Briefcase, ChevronRight, ShieldAlert, Bot, UserCheck, Cloud, QrCode, Radio, HeartPulse, Download, type LucideIcon } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Pill from "@/components/ui/Pill";
import { experience, type Initiative } from "@/data/experience";
import { certifications } from "@/data/certifications";

const INITIATIVE_ICONS: Record<string, LucideIcon> = {
  "UOB Fraud Detection System": ShieldAlert,
  "AI Workflow Automation": Bot,
  "Customer Onboarding & Identity Assurance": UserCheck,
  "Corppass AWS Cloud Migration": Cloud,
  "Singpass QR Login": QrCode,
  "AIA Vitality Rewards Program": HeartPulse,
  "MS5000 Radio Telecom Software": Radio,
};

export default function Experience() {
  const [openMap, setOpenMap] = useState<Record<number, boolean>>({ 0: true, 1: true, 2: true, 3: true });

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
              className="flex flex-col lg:flex-row gap-2 lg:gap-10 py-8 rounded-lg px-4 -mx-4"
              style={{ backgroundColor: "transparent", border: "1px solid transparent" }}
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

              {/* Right: toggle + bullets + tech */}
              <div className="flex flex-col gap-4 flex-1 min-w-0">
                <button
                  onClick={() => setOpenMap(prev => ({ ...prev, [i]: !prev[i] }))}
                  className="flex items-center gap-2 text-left w-full group"
                  style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
                >
                  <ChevronRight
                    size={16}
                    style={{
                      color: "var(--color-accent)",
                      transform: openMap[i] ? "rotate(90deg)" : "rotate(0deg)",
                      transition: "transform 200ms ease",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    className={`${older ? "text-sm" : "text-base"} font-bold leading-snug`}
                    style={{ color: older ? "var(--color-text-muted)" : "var(--color-text-primary)" }}
                  >
                    {exp.company}
                    <span style={{ fontWeight: 500 }}>{" · "}</span>
                    {exp.title}
                  </span>
                </button>

                {openMap[i] && (
                  <>
                    <ul className="flex flex-col gap-2.5">
                      {exp.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className={`${older ? "text-xs" : "text-sm"} leading-relaxed`}
                          style={{ color: older ? "var(--color-text-muted)" : "var(--color-text-body)" }}
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    {exp.initiatives && exp.initiatives.length > 0 && (
                      <InitiativesToggle initiatives={exp.initiatives} />
                    )}
                  </>
                )}
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

      {/* Credentials sub-section */}
      <motion.div
        initial={{ y: 16, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="mt-12"
      >
        <motion.h3
          initial={{ x: -24, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-4 text-center text-sm font-semibold uppercase tracking-widest"
          style={{ color: "var(--color-text-muted)" }}
        >
          Credentials
        </motion.h3>

        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {certifications.map((c) => (
            <motion.div
              key={c.name}
              variants={{
                hidden: { y: 16, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
              }}
              className="relative flex flex-col gap-2 rounded-lg px-5 py-4"
              style={{
                backgroundColor: "var(--color-bg-card)",
                border: "1px solid var(--color-border)",
                borderTop: "2px solid var(--color-tag-domain-border)",
              }}
            >

              <div className="flex items-baseline justify-between gap-3">
                <h4
                  className="text-base font-bold leading-snug"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {c.name}
                </h4>
                <span
                  className="font-mono text-xs flex-shrink-0"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {c.year}
                </span>
              </div>

              <div className="flex items-baseline justify-between gap-3">
                <p
                  className="text-sm"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {c.issuer}
                </p>
                <a
                  href={c.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium transition-colors duration-150 flex-shrink-0"
                  style={{ color: "var(--color-accent)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--color-accent-hover)";
                    const arrow = e.currentTarget.querySelector(".proj-arrow") as HTMLElement;
                    if (arrow) arrow.style.transform = "translate(3px, -3px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--color-accent)";
                    const arrow = e.currentTarget.querySelector(".proj-arrow") as HTMLElement;
                    if (arrow) arrow.style.transform = "translateX(0)";
                  }}
                >
                  <span>Verify</span>
                  <span className="proj-arrow" style={{ transition: "transform 150ms ease", display: "inline-block", fontSize: "14px", lineHeight: 1 }}>↗</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Resume link */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        className="mt-14"
      >
        <a
          href="/resume.pdf"
          download="David_Reuel_Villamayor_CV.pdf"
          className="btn-download inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold"
        >
          <Download size={14} />
          Download CV
        </a>
      </motion.div>
    </section>
  );
}

function InitiativesToggle({ initiatives }: { initiatives: Initiative[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleBeforePrint = () => setOpen(true);
    const handleAfterPrint = () => setOpen(false);
    window.addEventListener("beforeprint", handleBeforePrint);
    window.addEventListener("afterprint", handleAfterPrint);
    return () => {
      window.removeEventListener("beforeprint", handleBeforePrint);
      window.removeEventListener("afterprint", handleAfterPrint);
    };
  }, []);

  return (
    <div className="mt-4 ml-[22px]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-150 print:hidden"
        style={{ color: "var(--color-text-primary)", background: "none", border: "none", padding: 0, cursor: "pointer" }}
      >
        <ChevronRight
          size={12}
          style={{
            color: "var(--color-accent)",
            transform: open ? "rotate(90deg)" : "rotate(0)",
            transition: "transform 0.15s ease",
          }}
        />
        {`${open ? "Hide" : "Show"} Key Initiatives (${initiatives.length})`}
      </button>

      {open && (
        <div className="mt-1">
          {initiatives.map((init) => (
            <InitiativeRow key={init.name} init={init} />
          ))}
        </div>
      )}
    </div>
  );
}

function InitiativeRow({ init }: { init: Initiative }) {
  const Icon = INITIATIVE_ICONS[init.name];
  return (
    <div className="py-2.5 pl-[22px]">
      <div className="mb-1.5 flex items-center gap-2">
        {Icon && <Icon size={13} aria-hidden="true" style={{ color: "var(--color-accent)", flexShrink: 0 }} />}
        <span
          className="text-sm font-bold"
          style={{ color: "var(--color-accent-secondary)" }}
        >
          {init.name}
        </span>
      </div>
      <div
        className="ml-3 text-sm leading-relaxed"
        style={{ color: "var(--color-text-body)" }}
      >
        {init.description}
      </div>
      <div className="ml-3 mt-1.5 flex flex-wrap gap-1.5">
        {init.outcomes?.map((o) => (
          <Pill key={o} variant="outcome" icon={BarChart2}>
            {o}
          </Pill>
        ))}
        {init.tech.map((t) => (
          <Pill key={t} variant="tech">
            {t}
          </Pill>
        ))}
      </div>
    </div>
  );
}
