"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Sun, Moon } from "lucide-react";
import IconLink from "@/components/ui/IconLink";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { type SectionId } from "@/hooks/useActiveSection";
import { useTheme } from "@/hooks/useTheme";

const ROLES = ["Engineering Manager", "Senior Engineer", "Tech Lead"];
const TYPE_MS = 90;
const DELETE_MS = 55;
const PAUSE_TYPED = 1600;
const PAUSE_DELETED = 320;

function CyclingRole() {
  const [display, setDisplay] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIdx];

    if (!deleting && display === current) {
      const t = setTimeout(() => setDeleting(true), PAUSE_TYPED);
      return () => clearTimeout(t);
    }

    if (deleting && display === "") {
      const t = setTimeout(() => {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % ROLES.length);
      }, PAUSE_DELETED);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setDisplay(deleting
        ? current.slice(0, display.length - 1)
        : current.slice(0, display.length + 1)
      );
    }, deleting ? DELETE_MS : TYPE_MS);
    return () => clearTimeout(t);
  }, [display, roleIdx, deleting]);

  return (
    <span style={{ color: "var(--color-accent)" }}>
      {display}
      <motion.span
        animate={{ opacity: [1, 1, 0, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear", times: [0, 0.45, 0.5, 0.95] }}
        aria-hidden="true"
        style={{ marginLeft: "1px", fontWeight: 300 }}
      >|</motion.span>
    </span>
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
              <span style={{ width: "14px", display: "inline-flex", justifyContent: "center", flexShrink: 0 }}>
                <span className="status-dot" aria-hidden="true" />
              </span>
              <span>Open to <CyclingRole /></span>
            </div>
            <div
              className="flex items-center gap-2"
              style={{ color: "var(--color-text-body)" }}
            >
              <span aria-hidden="true" style={{ width: "14px", display: "inline-flex", justifyContent: "center", flexShrink: 0 }}>📍</span>
              Sydney, AU
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
        <a
          href="mailto:davidreuelvillamayor@gmail.com"
          aria-label="Email"
          className="transition-colors duration-200"
          style={{ color: "var(--color-text-muted)" }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "var(--color-accent)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "var(--color-text-muted)")
          }
        >
          <Mail size={20} />
        </a>

        {/* Theme toggle */}
        <button
          onClick={toggle}
          aria-label="Toggle theme"
          className="ml-auto transition-colors duration-200"
          style={{ color: "var(--color-text-muted)" }}
          title="Toggle Display Mode"
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "var(--color-highlight)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "var(--color-text-muted)")
          }
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </motion.div>
    </motion.aside>
  );
}
