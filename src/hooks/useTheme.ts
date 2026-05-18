"use client";

import { useEffect, useState, useCallback } from "react";

export type Theme = "dark" | "light";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as Theme) ?? "dark";
    apply(saved);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const apply = useCallback((t: Theme) => {
    setTheme(t);
    localStorage.setItem("theme", t);
    document.documentElement.setAttribute("data-theme", t);
  }, []);

  return { theme, toggle: () => apply(theme === "dark" ? "light" : "dark") };
}
