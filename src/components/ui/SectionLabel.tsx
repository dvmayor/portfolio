"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface SectionLabelProps {
  children: React.ReactNode;
  icon: LucideIcon;
  glowColor: string;
}

const lineAccent = {
  hidden: { scaleX: 0, originX: "0%" },
  visible: { scaleX: 1, transition: { duration: 0.3, ease: "easeOut" } },
};

const lineMuted = {
  hidden: { scaleX: 0, originX: "0%" },
  visible: { scaleX: 1, transition: { duration: 0.5, ease: "easeOut", delay: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut", delay: 0.2 } },
};

export default function SectionLabel({ children, icon: Icon, glowColor }: SectionLabelProps) {
  return (
    <motion.div
      className="mb-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.8 }}
    >
      {/* Divider */}
      <div className="relative mb-8 h-px">
        <motion.div
          className="absolute left-0 top-0 h-px w-6"
          style={{ backgroundColor: "var(--color-divider-accent)" }}
          variants={lineAccent}
        />
        <motion.div
          className="absolute left-8 right-0 top-0 h-px"
          style={{ backgroundColor: "var(--color-divider-muted)" }}
          variants={lineMuted}
        />
      </div>

      {/* Icon + title */}
      <motion.div className="flex items-center gap-5" variants={fadeUp}>
        <div className="flex-shrink-0 section-icon">
          <Icon size={20} style={{ color: glowColor }} />
        </div>
        <h2
          className="text-sm font-semibold uppercase tracking-widest"
          style={{ color: "var(--color-text-primary)" }}
        >
          {children}
        </h2>
      </motion.div>
    </motion.div>
  );
}
