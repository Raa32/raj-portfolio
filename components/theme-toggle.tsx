"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-6 right-6 z-50 p-3 rounded-xl border border-line hover:border-accent transition-all duration-300 bg-code-bg/50 backdrop-blur hover:scale-110 active:scale-95 hover:shadow-lg"
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <span className="text-xl inline-block animate-spin" style={{ animationDuration: "20s" }}>☀️</span>
      ) : (
        <span className="text-xl inline-block animate-bounce">🌙</span>
      )}
    </button>
  );
}
