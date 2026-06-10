"use client";

import { useEffect, useRef } from "react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import SectionReveal from "@/components/sections/SectionReveal";
import HeroIntro from "@/components/sections/HeroIntro";
import { observeScrollProgress } from "@/lib/scrollProgress";
import { useStoreApi } from "@/components/StoreProvider";

function smoothstep(edge0: number, edge1: number, value: number): number {
  const t = Math.min(Math.max((value - edge0) / (edge1 - edge0), 0), 1);
  return t * t * (3 - 2 * t);
}

// Fixed photographic backdrop. Day fades to night as the visitor scrolls:
// the page is one working day, dawn at the hero, night at the summit.
// Opacity is set imperatively from store subscriptions so scrolling never
// re-renders React.
function DayNightBackdrop() {
  const store = useStoreApi();
  const nightRef = useRef<HTMLImageElement>(null);
  const veilRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const apply = (progress: number) => {
      if (nightRef.current) {
        nightRef.current.style.opacity = String(
          smoothstep(0.18, 0.82, progress)
        );
      }
      if (veilRef.current) {
        // Photo reads clearly at both ends; middle sections sit on a
        // near-solid ground for legibility.
        const veil =
          smoothstep(0.02, 0.22, progress) * smoothstep(1, 0.78, progress);
        veilRef.current.style.opacity = String(0.55 + veil * 0.42);
      }
    };
    apply(store.getState().progress);
    return store.subscribe((state) => apply(state.progress));
  }, [store]);

  return (
    <div className="fixed inset-0" aria-hidden="true">
      <img
        src="/img/desk-day.webp"
        alt=""
        fetchPriority="high"
        className="h-full w-full object-cover object-[70%_center]"
      />
      <img
        ref={nightRef}
        src="/img/desk-night.webp"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[70%_center] opacity-0"
      />
      <div
        ref={veilRef}
        className="absolute inset-0 bg-bg opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/55 to-transparent" />
    </div>
  );
}

export default function PhotoExperience() {
  const store = useStoreApi();

  useEffect(() => {
    return observeScrollProgress((progress) => {
      store.getState().setProgress(progress);
    });
  }, [store]);

  return (
    <>
      <DayNightBackdrop />
      <main id="content" className="relative z-10">
        <HeroIntro>
          <Hero />
        </HeroIntro>
        <SectionReveal>
          <About />
        </SectionReveal>
        <SectionReveal>
          <Projects />
        </SectionReveal>
        <SectionReveal>
          <Experience />
        </SectionReveal>
        <SectionReveal>
          <Contact />
        </SectionReveal>
      </main>
    </>
  );
}
