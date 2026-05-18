"use client";

import { motion } from "framer-motion";
import { PenLine } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { writing } from "@/data/writing";

export default function Writing() {
  if (writing.length === 0) return null;

  return (
    <section id="writing" className="px-8 py-16 lg:px-16 lg:py-24">
      <SectionLabel icon={PenLine} glowColor="var(--icon-about)">Writing</SectionLabel>

      <motion.ul
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col divide-y"
        style={{ borderColor: "var(--color-border)" }}
      >
        {writing.map((post, i) => (
          <motion.li
            key={i}
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
          >
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 py-5 transition-colors duration-150"
            >
              {/* Thumbnail / placeholder */}
              <div
                className="h-12 w-12 flex-shrink-0 rounded overflow-hidden"
                style={{ backgroundColor: "var(--color-bg-card)" }}
              >
                {post.thumbnail ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div
                    className="h-full w-full"
                    style={{ backgroundColor: "var(--color-border)" }}
                  />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <p
                  className="text-sm font-medium leading-snug transition-colors duration-150 group-hover:text-accent truncate"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {post.title}
                </p>
                <p
                  className="mt-0.5 text-xs"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {post.publication}
                </p>
              </div>

              <span
                className="flex-shrink-0 font-mono text-xs"
                style={{ color: "var(--color-text-muted)" }}
              >
                {post.year}
              </span>
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
