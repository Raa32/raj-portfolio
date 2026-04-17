"use client";

import { useState, useEffect } from "react";
import { projects } from "@/lib/data";

export default function ProjectsCarousel() {
  const [idx, setIdx] = useState(0);
  const proj = projects[idx];

  // Auto-swipe every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((i) => (i + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-2xl">
      {/* Counter */}
      <div className="flex items-center justify-between mb-6">
        <span className="font-mono text-xs text-ink-3 tracking-widest uppercase">
          project{" "}
          <span className="text-accent">{String(idx + 1).padStart(2, "0")}</span>
          {" / "}
          {String(projects.length).padStart(2, "0")}
        </span>
        <div className="flex gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === idx ? "bg-accent scale-150" : "nav-dot"
              }`}
              style={i === idx ? { boxShadow: "0 0 8px rgba(0,229,255,0.8)" } : {}}
            />
          ))}
        </div>
      </div>

      {/* Card */}
      <div className="glass rounded-2xl p-8 relative overflow-hidden hover:border-accent/50 transition-all duration-500 hover:shadow-lg">
        {/* Decorative corner accent */}
        <div
          className="absolute top-0 right-0 w-24 h-24 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at top right, rgba(0,229,255,0.08), transparent 70%)",
          }}
        />

        <h3
          className="font-mono text-3xl font-bold text-ink"
          style={{ letterSpacing: "-0.02em" }}
        >
          {proj.title}
          <a
            href={proj.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block ml-3 text-accent text-xl align-middle opacity-60 hover:opacity-100 transition-opacity hover:animate-bounce"
          >
            ↗
          </a>
        </h3>

        <p className="text-ink-2 mt-4 leading-relaxed text-[15px]">
          {proj.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {proj.stack.map((s) => (
            <span key={s} className="tag hover:scale-110 transition-transform duration-300">
              {s}
            </span>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
          <span className="font-mono text-[11px] text-ink-3 uppercase tracking-widest">
            {proj.meta}
          </span>
          <a
            href={proj.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-accent hover:underline underline-offset-4 transition-all hover:glow-pulse"
            style={{ textShadow: "0 0 8px rgba(0,229,255,0.3)" }}
          >
            view on github →
          </a>
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="flex gap-3 mt-6">
        <button
          onClick={() => setIdx((i) => Math.max(0, i - 1))}
          disabled={idx === 0}
          className="w-12 h-12 rounded-xl font-mono text-lg flex items-center justify-center transition-all duration-200 disabled:opacity-20"
          style={{
            background: "var(--btn-bg)",
            border: "1px solid var(--btn-border)",
          }}
          onMouseEnter={(e) => {
            if (idx > 0)
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "rgba(0,229,255,0.4)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor =
              "var(--btn-border)";
          }}
        >
          ←
        </button>
        <button
          onClick={() => setIdx((i) => Math.min(projects.length - 1, i + 1))}
          disabled={idx === projects.length - 1}
          className="w-12 h-12 rounded-xl font-mono text-lg flex items-center justify-center transition-all duration-200 disabled:opacity-20"
          style={{
            background: "var(--btn-bg)",
            border: "1px solid var(--btn-border)",
          }}
          onMouseEnter={(e) => {
            if (idx < projects.length - 1)
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "rgba(0,229,255,0.4)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor =
              "var(--btn-border)";
          }}
        >
          →
        </button>
      </div>
    </div>
  );
}
