"use client";

import { useEffect } from "react";
import Scene from "@/components/three/Scene";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import SectionReveal from "@/components/sections/SectionReveal";
import ProjectCard from "@/components/ui/ProjectCard";
import { content } from "@/lib/content";
import { observeScrollProgress } from "@/lib/scrollProgress";
import { usePortfolioState, useStoreApi } from "@/components/StoreProvider";

export default function ThreeExperience() {
  const store = useStoreApi();
  const activeProject = usePortfolioState((s) => s.activeProject);

  useEffect(() => {
    return observeScrollProgress((progress) => {
      store.getState().setProgress(progress);
    });
  }, [store]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        store.getState().setActiveProject(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [store]);

  const project =
    activeProject !== null ? content.projects[activeProject] : null;

  return (
    <>
      <Scene />
      <main id="content" className="relative z-10">
        <Hero />
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
      {project ? (
        <div
          role="dialog"
          aria-label={project.name}
          className="fixed bottom-6 left-1/2 z-40 w-[min(92vw,420px)] -translate-x-1/2"
        >
          <div className="relative">
            <ProjectCard project={project} />
            <button
              type="button"
              onClick={() => store.getState().setActiveProject(null)}
              className="absolute right-3 top-3 font-mono text-xs uppercase tracking-widest text-fog hover:text-sand"
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
