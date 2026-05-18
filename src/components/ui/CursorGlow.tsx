"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    const move = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed left-0 top-0 z-50"
      style={{
        width: "400px",
        height: "400px",
        marginLeft: "-200px",
        marginTop: "-200px",
        background:
          "radial-gradient(circle, rgba(126,231,135,0.03) 0%, rgba(126,231,135,0.01) 40%, transparent 65%)",
        borderRadius: "50%",
        willChange: "transform",
      }}
    />
  );
}
