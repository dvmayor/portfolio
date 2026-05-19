"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Sun, Moon } from "lucide-react";
import IconLink from "@/components/ui/IconLink";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { type SectionId } from "@/hooks/useActiveSection";
import { useTheme } from "@/hooks/useTheme";

const EMAIL = "davidreuelvillamayor@gmail.com";

function EmailCopyButton() {
  const [copied, setCopied] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tooltipVisible = hovered || copied;
  const tooltipText = copied ? "Copied!" : "Copy my email";

  return (
    <div className="relative">
      <a
        href={`mailto:${EMAIL}`}
        aria-label="Copy email address"
        onClick={(e) => { e.preventDefault(); handleCopy(); }}
        className="transition-colors duration-200"
        style={{ color: hovered || copied ? "var(--color-accent)" : "var(--color-text-muted)" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Mail size={20} />
      </a>
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: tooltipVisible ? 1 : 0, y: tooltipVisible ? 0 : 6 }}
        transition={{ duration: 0.15 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 rounded px-2 py-1 text-xs font-semibold whitespace-nowrap pointer-events-none"
        style={{ backgroundColor: "var(--color-accent)", color: "var(--color-bg)" }}
      >
        {tooltipText}
      </motion.div>
    </div>
  );
}


function ThemeToggleButton({ toggle, theme }: { toggle: () => void; theme: string }) {
  const [hovered, setHovered] = useState(false);
  const label = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <div className="relative ml-auto">
      <button
        onClick={toggle}
        aria-label="Toggle theme"
        className="transition-colors duration-200"
        style={{ color: hovered ? "var(--color-highlight)" : "var(--color-text-muted)", background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
      </button>
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 6 }}
        transition={{ duration: 0.15 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 rounded px-2 py-1 text-xs font-semibold whitespace-nowrap pointer-events-none"
        style={{ backgroundColor: "var(--color-highlight)", color: "var(--color-bg)" }}
      >
        {label}
      </motion.div>
    </div>
  );
}

interface NavItem {
  id: SectionId;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact Me" },
];

interface LeftColumnProps {
  activeSection: SectionId;
}

export default function LeftColumn({ activeSection }: LeftColumnProps) {
  const { theme, toggle } = useTheme();
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
  };

  return (
    <motion.aside
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col justify-between px-8 py-12 lg:sticky lg:top-0 lg:h-screen lg:w-[42%] lg:max-w-md lg:py-24 lg:pl-16 lg:pr-10"
      style={{ backgroundColor: "var(--color-bg-nav)" }}
    >
      {/* Top: name + tagline + nav */}
      <div className="flex flex-col gap-10">
        {/* Identity */}
        <div className="flex flex-col gap-2">
          <motion.h1
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="text-2xl font-bold tracking-tight lg:text-3xl whitespace-nowrap"
            style={{ color: "var(--color-text-primary)" }}
          >
            David Reuel Villamayor
          </motion.h1>
          <motion.h2
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="text-xl font-semibold lg:text-xl"
            style={{ color: "var(--color-accent)" }}
          >
            Engineering Manager
          </motion.h2>
          <motion.p
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            className="mt-1 text-sm lg:hidden"
            style={{ color: "var(--color-text-primary)", fontWeight: 500 }}
          >
            Engineering teams that ship to millions.
          </motion.p>
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
            className="mt-3 flex flex-col gap-1.5 text-xs"
          >
            <div
              className="flex items-center gap-2 font-medium"
              style={{ color: "var(--color-text-primary)" }}
            >
              <span>Open to</span>
              <span style={{ width: "14px", display: "inline-flex", justifyContent: "center", flexShrink: 0 }}>
                <span className="status-dot" aria-hidden="true" />
              </span>
              <span style={{ color: "var(--color-highlight)" }}>EM & Tech Lead roles</span>
            </div>
            <div
              className="flex items-center gap-2"
              style={{ color: "var(--color-text-body)" }}
            >
              <span aria-hidden="true" style={{ width: "14px", display: "inline-flex", justifyContent: "center", flexShrink: 0 }}>📍</span>
              Sydney, AU · Australian PR
            </div>
          </motion.div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden flex-col gap-2 lg:flex" aria-label="Sections">
          {NAV_ITEMS.map((item, i) => {
            const isActive = activeSection === item.id;
            return (
              <motion.button
                key={item.id}
                initial={{ x: -12, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 + i * 0.07 }}
                onClick={() => scrollTo(item.id)}
                aria-current={isActive ? "page" : undefined}
                className="group flex items-baseline gap-4 py-1.5 text-left transition-colors duration-200"
                style={{
                  color: isActive ? "var(--color-text-primary)" : "var(--color-text-muted)",
                  fontWeight: isActive ? 700 : 400,
                }}
                onMouseEnter={(e) => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.color = "var(--color-text-body)";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.color = "var(--color-text-muted)";
                }}
              >
                <span
                  className="font-mono text-xs tabular-nums"
                  style={{
                    minWidth: "1.5ch",
                    color: isActive ? "var(--color-accent)" : "var(--color-border-dark)",
                    transition: "color 0.2s ease",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm uppercase tracking-widest">{item.label}</span>
              </motion.button>
            );
          })}
        </nav>


        {/* Mobile nav — horizontal scroll row */}
        <nav
          className="flex gap-4 overflow-x-auto pb-1 lg:hidden"
          aria-label="Sections"
        >
          {NAV_ITEMS.map((item, i) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="flex-shrink-0 inline-flex items-baseline gap-2 pb-1 transition-colors duration-200"
                style={{ color: isActive ? "var(--color-text-primary)" : "var(--color-text-muted)" }}
              >
                <span
                  className="font-mono text-[10px]"
                  style={{ color: isActive ? "var(--color-accent)" : "var(--color-border-dark)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest">
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom: social icons + theme toggle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-10 flex items-center gap-5 lg:mt-0"
      >
        {[
          // { href: "https://github.com/davidreuelv", label: "GitHub", Icon: GitHubIcon },
          { href: "https://www.linkedin.com/in/davidreuelvillamayor/", label: "LinkedIn", Icon: LinkedInIcon },
        ].map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="transition-colors duration-200"
            style={{ color: "var(--color-text-muted)" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--color-accent)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--color-text-muted)")
            }
          >
            <Icon size={20} />
          </a>
        ))}
        <EmailCopyButton />

        {/* Theme toggle */}
        <ThemeToggleButton toggle={toggle} theme={theme} />
      </motion.div>
    </motion.aside>
  );
}
