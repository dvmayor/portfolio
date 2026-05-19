"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { Mail } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "", honeypot: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setForm({ name: "", email: "", message: "", honeypot: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputBase: React.CSSProperties = {
    backgroundColor: "var(--color-bg-card)",
    border: "1px solid var(--color-border-dark)",
    color: "var(--color-text-primary)",
    borderRadius: "6px",
    padding: "10px 14px",
    fontSize: "0.875rem",
    width: "100%",
    outline: "none",
    transition: "border-color 0.15s",
  };

  return (
    <section id="contact" className="px-8 pb-16 pt-6 lg:px-16 lg:pb-24 lg:pt-8">
      <SectionLabel icon={Mail} glowColor="var(--icon-contact)">Contact Me</SectionLabel>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="lg:max-w-lg"
      >
        <div className="mb-8 flex flex-col gap-2">
          <h2 className="text-2xl font-bold" style={{ color: "var(--color-text-primary)" }}>
            Let's talk.
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-body)" }}>
            Hiring manager, engineer, or just want to chat? Drop me a message and let's connect.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="text" name="honeypot" value={form.honeypot ?? ""} onChange={handleChange} style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            value={form.name}
            onChange={handleChange}
            style={inputBase}
            onFocus={(e) => (e.target.style.borderColor = "var(--color-accent)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--color-border-dark)")}
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            value={form.email}
            onChange={handleChange}
            style={inputBase}
            onFocus={(e) => (e.target.style.borderColor = "var(--color-accent)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--color-border-dark)")}
          />
          <textarea
            name="message"
            placeholder="Your message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            style={{ ...inputBase, resize: "vertical" }}
            onFocus={(e) => (e.target.style.borderColor = "var(--color-accent)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--color-border-dark)")}
          />

          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition-all duration-150 disabled:opacity-60"
              style={{
                backgroundColor: "var(--color-btn-bg)",
                color: "var(--color-btn-text)",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = "0.85")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = status === "sending" ? "0.6" : "1")
              }
            >
              <Send size={14} />
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>

            {status === "sent" && (
              <motion.span
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-sm"
                style={{ color: "var(--color-highlight)" }}
              >
                Message sent!
              </motion.span>
            )}
            {status === "error" && (
              <motion.span
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-sm"
                style={{ color: "var(--color-accent)" }}
              >
                Something went wrong. Try again.
              </motion.span>
            )}
          </div>
        </form>
      </motion.div>
    </section>
  );
}
