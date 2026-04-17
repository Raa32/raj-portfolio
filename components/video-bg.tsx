"use client";

import { useEffect, useRef, useState } from "react";

export default function VideoBg() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lightX, setLightX] = useState(-30);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const container = document.getElementById("scroll-root");
    if (!container) return;

    let rafId = 0;
    let pending = false;

    const update = () => {
      const maxScroll = container.scrollHeight - container.clientHeight;
      if (maxScroll > 0) {
        const pct = container.scrollTop / maxScroll;
        setScrollPct(pct);
        setLightX(pct * 160 - 30);
      }
      pending = false;
    };

    const onScroll = () => {
      if (!pending) {
        pending = true;
        rafId = requestAnimationFrame(update);
      }
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      container.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Subtle parallax tilt for 3D depth
  const tiltX = (scrollPct - 0.5) * 4;   // -2deg → +2deg
  const scale = 1.05 + scrollPct * 0.04; // 1.05 → 1.09

  return (
    <>
      {/* Background image with perspective-driven 3D tilt */}
      <div
        className="fixed inset-0 -z-20 pointer-events-none overflow-hidden"
        style={{ perspective: "1200px" }}
      >
        <div
          ref={containerRef}
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/portfolio.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `scale(${scale}) rotateY(${tiltX}deg) rotateX(${-tiltX * 0.3}deg)`,
            transformOrigin: "center center",
            willChange: "transform",
            filter: "contrast(1.05) saturate(1.1)",
          }}
        />
      </div>

      {/* Sunlight sweep — warm, directional, follows scroll */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 700px 900px at ${lightX}% 35%, rgba(255,220,170,0.22) 0%, rgba(255,200,150,0.08) 30%, transparent 65%),
            radial-gradient(ellipse 500px 700px at ${lightX + 8}% 55%, rgba(255,255,255,0.14) 0%, transparent 55%)
          `,
          mixBlendMode: "screen",
        }}
      />

      {/* Shadow opposite the light for 3D modeling */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 900px 1000px at ${100 - lightX}% 50%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.2) 35%, transparent 70%)`,
        }}
      />

      {/* Vignette for depth */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.45) 100%)",
        }}
      />

      {/* Dimming overlay */}
      <div className="video-overlay fixed inset-0 -z-10 pointer-events-none" />
      <div className="grid-bg fixed inset-0 -z-10 pointer-events-none opacity-60" />
    </>
  );
}
