"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BarChart2, Code2 } from "lucide-react";
import { GitHubIcon } from "@/components/ui/SocialIcons";
import SectionLabel from "@/components/ui/SectionLabel";
import Pill from "@/components/ui/Pill";
import { featuredProjects, type FeaturedProject } from "@/data/projects";

function ProjectCard({ project, i }: { project: FeaturedProject; i: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      key={project.name}
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.05 }}
      className="group relative flex flex-col overflow-hidden rounded-lg lg:grid lg:grid-cols-[45%_1fr] cursor-pointer"
      style={{
        backgroundColor: hovered ? "var(--color-bg-card)" : "transparent",
        border: "1px solid transparent",
        transition: "background-color 200ms ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => {
        if (project.live) window.open(project.live, "_blank", "noopener,noreferrer");
        else if (project.github) window.open(project.github, "_blank", "noopener,noreferrer");
      }}
    >
      {/* Left: image hero */}
      <div className="relative overflow-hidden" style={{ minHeight: "180px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.name}
          className="h-full w-full object-cover transition-opacity duration-300"
          style={{ opacity: hovered ? 1 : 0.8 }}
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
        <div className="flex items-start justify-between gap-2">
        <h3 className="flex items-center gap-2 text-xl font-bold" style={{ color: hovered ? "var(--color-accent)" : "var(--color-text-primary)", transition: "color 200ms ease" }}>
          <span>{project.name}</span>
          {(project.live || project.github) && (
            <span style={{
              transition: "transform 150ms ease",
              display: "inline-block",
              fontSize: "16px",
              lineHeight: 1,
              transform: hovered ? "translate(3px, -3px)" : "translate(0, 0)",
            }}>↗</span>
          )}
        </h3>
        {project.status && (
          <span className="inline-flex items-center gap-1.5 flex-shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold"
            style={{
              backgroundColor: project.status === "live" ? "rgba(34,197,94,0.12)" : "rgba(251,191,36,0.12)",
              color: project.status === "live" ? "rgb(34,197,94)" : "rgb(251,191,36)",
            }}>
            <span style={{
              width: "6px", height: "6px", borderRadius: "50%", flexShrink: 0,
              backgroundColor: project.status === "live" ? "rgb(34,197,94)" : "rgb(251,191,36)",
              animation: "pulse 2s infinite",
            }} />
            {project.status === "live" ? "Live" : "In Progress"}
          </span>
        )}
        </div>
        <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-body)" }}>{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.outcomes.map(o => <Pill key={o} variant="outcome" icon={BarChart2}>{o}</Pill>)}
          {project.tech.map(t => <Pill key={t} variant="tech">{t}</Pill>)}
        </div>
        {project.github && (
          <div className="relative w-fit">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="peer transition-colors duration-150"
              style={{ color: hovered ? "var(--color-accent)" : "var(--color-text-muted)", display: "flex" }}
              onClick={(e) => e.stopPropagation()}
            >
              <GitHubIcon size={18} />
            </a>
            <div className="pointer-events-none absolute bottom-7 left-1/2 -translate-x-1/2 rounded px-2 py-1 text-xs font-semibold whitespace-nowrap opacity-0 peer-hover:opacity-100 transition-opacity duration-150"
              style={{ backgroundColor: "var(--color-accent)", color: "var(--color-bg)" }}>
              View on GitHub
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="px-8 pb-8 pt-8 lg:px-16 lg:pb-10 lg:pt-8">
      <SectionLabel icon={Code2} glowColor="var(--icon-projects)">Projects</SectionLabel>

      <div className="flex flex-col gap-6">
        {featuredProjects.map((project, i) => (
          <ProjectCard key={project.name} project={project} i={i} />
        ))}
      </div>
    </section>
  );
}
