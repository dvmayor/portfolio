"use client";

import { motion } from "framer-motion";
import { Mail, Sun, Moon } from "lucide-react";
import IconLink from "@/components/ui/IconLink";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { type SectionId } from "@/hooks/useActiveSection";
import { useTheme } from "@/hooks/useTheme";

interface NavItem {
  id: SectionId;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
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
          <motion.p
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
            className="mt-1 flex items-center gap-1.5 text-xs"
            style={{ color: "var(--color-text-body)" }}
          >
            <span>📍</span>
            Sydney, AU · Open to EM &amp; Senior Eng roles
          </motion.p>
        </div>

        {/* Desktop nav */}
        <nav className="hidden flex-col gap-1 lg:flex" aria-label="Sections">
          {NAV_ITEMS.map((item, i) => {
            const isActive = activeSection === item.id;
            return (
              <motion.button
                key={item.id}
                initial={{ x: -12, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 + i * 0.07 }}
                onClick={() => scrollTo(item.id)}
                className="group flex cursor-pointer items-center gap-3 py-2 text-left"
              >
                <span className="nav-bar" data-active={isActive ? "true" : "false"} />
                <span className="text-xs uppercase tracking-widest transition-colors duration-200"
                  style={{ color: isActive ? "var(--color-text-primary)" : "var(--color-text-body)", fontWeight: isActive ? 700 : 400 }}>
                  {item.label}
                </span>
              </motion.button>
            );
          })}
        </nav>

        {/* Now block — desktop only */}
        <div className="hidden lg:block mt-8 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <div className="flex items-center gap-2" style={{ fontFamily: "monospace", fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.22em", color: "var(--color-text-muted)" }}>
            <span className="now-dot" />
            Currently
          </div>
          <div className="mt-3 flex flex-col gap-1.5 text-xs leading-relaxed" style={{ color: "var(--color-text-body)" }}>
            <div><b style={{ color: "var(--color-text-primary)" }}>Learning</b> · Agentic Frameworks</div>
            <div><b style={{ color: "var(--color-text-primary)" }}>Reading</b> · <a href="https://www.latent.space" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-accent)" }}>Latent Space</a></div>
          </div>
        </div>

        {/* Mobile nav — horizontal scroll row */}
        <nav
          className="flex gap-4 overflow-x-auto pb-1 lg:hidden"
          aria-label="Sections"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="flex-shrink-0 border-b-2 pb-1 text-xs font-semibold uppercase tracking-widest transition-all duration-200"
                style={{
                  borderBottomColor: isActive
                    ? "var(--color-accent)"
                    : "transparent",
                  color: isActive
                    ? "var(--color-accent)"
                    : "var(--color-text-body)",
                }}
              >
                {item.label}
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
