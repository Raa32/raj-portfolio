"use client";

import { useEffect } from "react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import StatementBand from "@/components/sections/StatementBand";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import SectionReveal from "@/components/sections/SectionReveal";
import HeroIntro from "@/components/sections/HeroIntro";
import PillNav from "@/components/ui/PillNav";
import { observeScrollProgress } from "@/lib/scrollProgress";
import { useStoreApi } from "@/components/StoreProvider";

// One working day on warm paper: full-bleed day photo up top, content
// on cream, a statement band mid-shift, night photo at the summit.
export default function PhotoExperience() {
  const store = useStoreApi();

  useEffect(() => {
    return observeScrollProgress((progress) => {
      store.getState().setProgress(progress);
    });
  }, [store]);

  return (
    <>
      <PillNav />
      <main id="content" className="bg-paper">
        <HeroIntro>
          <Hero />
        </HeroIntro>
        <SectionReveal>
          <Projects />
        </SectionReveal>
        <StatementBand />
        <SectionReveal>
          <About />
        </SectionReveal>
        <SectionReveal>
          <Experience />
        </SectionReveal>
        <Contact />
      </main>
    </>
  );
}
