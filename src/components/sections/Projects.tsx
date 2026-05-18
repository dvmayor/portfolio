"use client";

import { motion } from "framer-motion";
import { BarChart2, Code2 } from "lucide-react";
import { GitHubIcon } from "@/components/ui/SocialIcons";
import SectionLabel from "@/components/ui/SectionLabel";
import Pill from "@/components/ui/Pill";
import { featuredProjects } from "@/data/projects";

export default function Projects() {

  return (
    <section id="projects" className="px-8 pb-8 pt-8 lg:px-16 lg:pb-10 lg:pt-8">
      <SectionLabel icon={Code2} glowColor="var(--icon-projects)">Projects</SectionLabel>

      {/* ── Delivery Highlights ── */}
      <motion.h3
        initial={{ x: -24, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="mb-8 text-center text-sm font-semibold uppercase tracking-widest"
        style={{ color: "var(--color-text-muted)" }}
      >
        Delivery Highlights
      </motion.h3>

      <div className="flex flex-col gap-6">
        {featuredProjects.map((project, i) => {
          return (
            <motion.div
              key={project.name}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.05 }}
              className="group relative flex flex-col overflow-hidden rounded-lg lg:grid lg:grid-cols-[45%_1fr]"
              style={{ backgroundColor: "var(--color-bg-card)", border: "1px solid var(--color-border)" }}
            >
              {/* Left: image hero */}
              <div className="relative overflow-hidden" style={{ minHeight: "180px" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    (target.parentElement as HTMLElement).classList.add("img-placeholder");
                  }}
                />
                {/* gradient overlay */}
                <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(30,35,54,0.1), rgba(30,35,54,0.55))" }} />
                {/* number top-left */}
                <span className="absolute left-3 top-3 font-mono text-2xl font-bold select-none" style={{ color: "white", opacity: 0.5 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {/* logo bottom-right */}
                {project.logo && (
                  <div className="absolute bottom-3 right-3">
                    <div className="rounded px-2 py-1" style={{ backgroundColor: "rgba(255,255,255,0.93)" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={project.logo} alt={`${project.name} logo`} className="w-auto max-w-[80px] object-contain" style={{ height: "16px", ...project.logoStyle }} />
                    </div>
                  </div>
                )}
              </div>

              {/* Right: content */}
              <div className="flex flex-col justify-start gap-4 p-5">
                <h3 className="flex items-center gap-2 text-xl font-bold" style={{ color: "var(--color-text-primary)" }}>
                  {project.live ? (
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 transition-colors duration-150"
                      style={{ color: "var(--color-text-primary)" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "var(--color-accent)";
                        const arrow = e.currentTarget.querySelector(".proj-arrow") as HTMLElement;
                        if (arrow) arrow.style.transform = "translate(3px, -3px)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "var(--color-text-primary)";
                        const arrow = e.currentTarget.querySelector(".proj-arrow") as HTMLElement;
                        if (arrow) arrow.style.transform = "translateX(0)";
                      }}>
                      <span>{project.name}</span>
                      <span className="proj-arrow" style={{ transition: "transform 150ms ease", display: "inline-block", fontSize: "16px", lineHeight: 1 }}>↗</span>
                    </a>
                  ) : project.name}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-body)" }}>{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.outcomes.map(o => <Pill key={o} variant="outcome" icon={BarChart2}>{o}</Pill>)}
                </div>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                    className="transition-colors duration-150" style={{ color: "var(--color-text-muted)" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-accent)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-text-muted)")}>
                    <GitHubIcon size={18} />
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
