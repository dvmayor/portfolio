"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: show ? 1 : 0, scale: show ? 1 : 0.9 }}
      transition={{ duration: 0.2 }}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-8 right-8 z-40 rounded-full p-3 transition-colors duration-150"
      style={{
        backgroundColor: "var(--color-accent)",
        color: "var(--color-bg)",
        pointerEvents: show ? "auto" : "none",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--color-accent-hover)")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--color-accent)")}
    >
      <ArrowUp size={20} />
    </motion.button>
  );
}
