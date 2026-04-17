"use client";

import { useEffect, useRef } from "react";

export default function VideoBg() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let rafId: number;
    let target = 0;

    const bindScroll = () => {
      const container = document.getElementById("scroll-root");
      if (!container) return;

      const onScroll = () => {
        const maxScroll = container.scrollHeight - container.clientHeight;
        if (maxScroll > 0) {
          target = (container.scrollTop / maxScroll) * (video.duration || 0);
        }
      };

      container.addEventListener("scroll", onScroll, { passive: true });
      return () => container.removeEventListener("scroll", onScroll);
    };

    const tick = () => {
      if (video.readyState >= 2 && video.duration) {
        const diff = target - video.currentTime;
        if (Math.abs(diff) > 0.016) {
          video.currentTime += diff * 0.1;
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    const cleanup = bindScroll();
    rafId = requestAnimationFrame(tick);

    return () => {
      cleanup?.();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        src="/bg.mp4"
        muted
        playsInline
        preload="auto"
        className="fixed inset-0 w-full h-full object-cover -z-20 pointer-events-none"
      />
      <div className="video-overlay fixed inset-0 -z-10 pointer-events-none" />
      <div className="grid-bg fixed inset-0 -z-10 pointer-events-none opacity-60" />
    </>
  );
}
