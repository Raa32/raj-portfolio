"use client";

import { useState, useEffect } from "react";
import { experiences } from "@/lib/data";

export default function ExperienceSlider() {
  const [idx, setIdx] = useState(0);
  const exp = experiences[idx];

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((i) => (i + 1) % experiences.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-2xl">
      {/* Counter */}
      <div className="flex items-center justify-between mb-6">
        <span className="font-mono text-xs text-ink-3 tracking-widest uppercase">
          role{" "}
          <span className="text-accent">{String(idx + 1).padStart(2, "0")}</span>
          {" / "}
          {String(experiences.length).padStart(2, "0")}
        </span>
        <div className="flex gap-2">
          {experiences.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === idx ? "bg-accent scale-150" : "bg-white/20"
              }`}
              style={i === idx ? { boxShadow: "0 0 8px rgba(0,229,255,0.8)" } : {}}
            />
          ))}
        </div>
      </div>

      {/* Card */}
      <div className="glass rounded-2xl p-6 relative overflow-hidden">
        <div
          className="absolute top-0 left-0 w-32 h-32 pointer-events-none"
          style={{
            background: "radial-gradient(circle at top left, rgba(0,229,255,0.06), transparent 70%)",
          }}
        />

        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-mono text-xl font-bold text-ink">{exp.company}</h3>
            <p className="text-accent text-sm mt-1 font-mono">{exp.role}</p>
          </div>
          <span className="font-mono text-[11px] text-ink-3 text-right leading-relaxed shrink-0">
            {exp.dates}
            <br />
            {exp.location}
          </span>
        </div>

        {/* Bullets */}
        <ul className="mt-4 space-y-2">
          {exp.bullets.map((b, i) => (
            <li key={i} className="flex gap-2 text-[13px] text-ink-2 leading-relaxed">
              <span className="text-accent mt-1 shrink-0" style={{ textShadow: "0 0 6px rgba(0,229,255,0.5)" }}>▹</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-5">
          {exp.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div className="flex gap-3 mt-5">
        <button
          onClick={() => setIdx((i) => Math.max(0, i - 1))}
          disabled={idx === 0}
          className="w-12 h-12 rounded-xl font-mono text-lg flex items-center justify-center transition-all duration-200 disabled:opacity-20"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
          onMouseEnter={(e) => { if (idx > 0) (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(0,229,255,0.4)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
        >←</button>
        <button
          onClick={() => setIdx((i) => Math.min(experiences.length - 1, i + 1))}
          disabled={idx === experiences.length - 1}
          className="w-12 h-12 rounded-xl font-mono text-lg flex items-center justify-center transition-all duration-200 disabled:opacity-20"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
          onMouseEnter={(e) => { if (idx < experiences.length - 1) (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(0,229,255,0.4)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
        >→</button>
      </div>
    </div>
  );
}
