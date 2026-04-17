"use client";

import { useEffect, useRef } from "react";

export default function VideoBg() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let rafId: number;
    let target = 0;

    const onScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        target = (window.scrollY / maxScroll) * (video.duration || 0);
      }
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

    window.addEventListener("scroll", onScroll, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Fixed video layer */}
      <video
        ref={videoRef}
        src="/bg.mp4"
        muted
        playsInline
        preload="auto"
        className="fixed inset-0 w-full h-full object-cover -z-20 pointer-events-none"
      />
      {/* Dark gradient overlay */}
      <div className="video-overlay fixed inset-0 -z-10 pointer-events-none" />
      {/* Subtle grid texture */}
      <div className="grid-bg fixed inset-0 -z-10 pointer-events-none opacity-60" />
    </>
  );
}
