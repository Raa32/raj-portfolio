"use client";

import { useEffect, useRef, useState } from "react";

export default function VideoBg() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lightX, setLightX] = useState(-50);

  useEffect(() => {
    const container = document.getElementById("scroll-root");
    if (!container) return;

    const onScroll = () => {
      const maxScroll = container.scrollHeight - container.clientHeight;
      if (maxScroll > 0) {
        // Light moves horizontally: starts at -50% (off-screen left), ends at 150% (off-screen right)
        // This matches the scroll speed perfectly
        const scrollPercent = (container.scrollTop / maxScroll) * 200 - 50;
        setLightX(scrollPercent);
      }
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Background image with fallback to dark gradient */}
      <div
        ref={containerRef}
        className="fixed inset-0 w-full h-full -z-20 pointer-events-none"
        style={{
          backgroundImage: "url('/portfolio.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundColor: "#0a0a0a",
          backgroundBlendMode: "darken",
        }}
      />

      {/* Scroll-linked light effect - moves horizontally matching scroll speed */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 600px 800px at ${lightX}% 50%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.08) 25%, rgba(0,0,0,0.2) 100%)`,
        }}
      />

      {/* Overlay gradient */}
      <div className="video-overlay fixed inset-0 -z-10 pointer-events-none" />
      <div className="grid-bg fixed inset-0 -z-10 pointer-events-none opacity-60" />
    </>
  );
}
