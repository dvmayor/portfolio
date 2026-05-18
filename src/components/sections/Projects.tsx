"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, BarChart2, Code2 } from "lucide-react";
import { GitHubIcon } from "@/components/ui/SocialIcons";
import SectionLabel from "@/components/ui/SectionLabel";
import Pill from "@/components/ui/Pill";
import { featuredProjects, otherProjects } from "@/data/projects";

const VISIBLE_OTHER = 6;

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleOther = showAll ? otherProjects : otherProjects.slice(0, VISIBLE_OTHER);

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
              className="group relative flex flex-col overflow-hidden rounded-lg transition-all duration-300 lg:flex-row cursor-pointer"
              style={{
                backgroundColor: "transparent",
                border: "1px solid transparent",
                boxShadow: "none",
              }}
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
              {/* Image */}
              <div
                className="relative flex-shrink-0 self-start overflow-hidden lg:order-first"
                style={{ width: "140px", minWidth: "140px", height: "80px", marginTop: "1.75rem", marginLeft: "1.75rem", backgroundColor: "var(--color-border)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <span
                  className="absolute left-2 top-2 font-mono text-xl font-bold leading-none select-none"
                  style={{ color: "var(--color-accent)", opacity: 0.3 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {project.logo && (
                  <div className="absolute bottom-2 right-2 left-2 flex justify-end">
                    <div className="rounded px-2 py-1" style={{ backgroundColor: "rgba(255,255,255,0.93)" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={project.logo} alt={`${project.name} logo`} className="w-auto max-w-[80px] object-contain" style={{ height: "16px", ...project.logoStyle }} />
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-start gap-4 p-4 lg:order-last">
                <h3 className="flex items-center gap-2 text-xl font-bold" style={{ color: "var(--color-text-primary)" }}>
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 transition-colors duration-150"
                      style={{ color: "var(--color-text-primary)" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "var(--color-accent)";
                        const icon = e.currentTarget.querySelector(".ext-icon") as HTMLElement;
                        if (icon) icon.style.transform = "translateY(-3px)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "var(--color-text-primary)";
                        const icon = e.currentTarget.querySelector(".ext-icon") as HTMLElement;
                        if (icon) icon.style.transform = "translateY(0)";
                      }}
                    >
                      {project.name}
                      <span className="ext-icon inline-flex flex-shrink-0 transition-transform duration-150">
                        <ExternalLink size={16} />
                      </span>
                    </a>
                  ) : (
                    project.name
                  )}
                </h3>

                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-body)" }}>
                  {project.description}
                </p>

                {/* Outcome pills */}
                <div className="flex flex-wrap gap-2">
                  {project.outcomes.map((o) => (
                    <Pill key={o} variant="outcome" icon={BarChart2}>{o}</Pill>
                  ))}
                </div>

                {project.github && (
                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="transition-colors duration-150"
                      style={{ color: "var(--color-text-muted)" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-accent)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-text-muted)")}
                    >
                      <GitHubIcon size={18} />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ── Key Initiatives ── */}
      <div className="mt-20">
        <motion.h3
          initial={{ x: -24, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-8 text-center text-sm font-semibold uppercase tracking-widest"
          style={{ color: "var(--color-text-muted)" }}
        >
          Key Initiatives
        </motion.h3>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleOther.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: (i % 3) * 0.06 }}
              className="group flex flex-col gap-4 rounded-lg p-6 transition-all duration-200 overflow-hidden relative"
              style={{
                backgroundColor: "var(--color-bg-card)",
                border: "1px solid var(--color-border)",
                borderTop: "2px solid var(--color-accent)",
              }}
              onMouseMove={(e) => {
                const el = e.currentTarget as HTMLElement;
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                el.style.background = `radial-gradient(circle at ${x}px ${y}px, hsla(14,98%,50%,0.06) 0%, var(--color-bg-card) 75%)`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "var(--color-bg-card)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Header row — links only, no folder icon */}
              <div className="flex items-start justify-end gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="transition-colors duration-150"
                    style={{ color: "var(--color-text-muted)" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-accent)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-text-muted)")}
                  >
                    <GitHubIcon size={16} />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live site"
                    className="transition-colors duration-150"
                    style={{ color: "var(--color-text-muted)" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-accent)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-text-muted)")}
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>

              {/* Title + description */}
              <div className="flex flex-col gap-2">
                <h4 className="font-semibold" style={{ color: "var(--color-text-primary)" }}>
                  {project.name}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-body)" }}>
                  {project.description}
                </p>
              </div>

              {/* Tech tags */}
              <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                {project.tech.map((t) => (
                  <Pill key={t} variant="tech">{t}</Pill>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Certifications ── */}
        <div className="mt-16">
          <motion.h3
            initial={{ x: -24, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="mb-8 text-center text-sm font-semibold uppercase tracking-widest"
            style={{ color: "var(--color-text-muted)" }}
          >
            Certifications
          </motion.h3>
          <motion.div
            className="flex flex-wrap justify-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          >
            {[
              {
                href: "https://www.credly.com/earner/earned/badge/40692738-e555-4c61-8eea-f450978eb9e7",
                img: "https://images.credly.com/size/680x680/images/ec23e41a-0f32-4a98-9c00-28925621b281/blob",
                alt: "Generative AI Leader",
              },
              {
                href: "https://www.credly.com/earner/earned/badge/ecda151c-c7e2-4641-899b-e906852b2b2f",
                img: "https://images.credly.com/size/680x680/images/3e987079-3013-4359-9ad3-578c0b864e3d/image.png",
                alt: "Certified SAFe 6 Agilist",
              },
              {
                href: "https://www.credly.com/earner/earned/badge/d8c0fd85-f672-474c-b8d3-1d236a633445",
                img: "https://images.credly.com/size/680x680/images/a2790314-008a-4c3d-9553-f5e84eb359ba/image.png",
                alt: "Professional Scrum Master I",
              },
            ].map((cert) => (
              <motion.a
                key={cert.href}
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={{ hidden: { y: 16, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } } }}
                whileHover={{ y: -4 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cert.img}
                  alt={cert.alt}
                  title={cert.alt}
                  className="w-14 h-14 object-contain"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {otherProjects.length > VISIBLE_OTHER && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="rounded-full border px-6 py-2 text-sm font-medium transition-all duration-150"
              style={{ borderColor: "var(--color-accent)", color: "var(--color-accent)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "var(--color-accent)";
                (e.currentTarget as HTMLElement).style.color = "var(--color-text-light)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLElement).style.color = "var(--color-accent)";
              }}
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
