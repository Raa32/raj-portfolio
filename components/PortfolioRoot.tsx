"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import ClassicView from "@/components/classic/ClassicView";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import { usePortfolioState, useStoreApi } from "@/components/StoreProvider";
import type { ViewMode } from "@/lib/store";

const Scene = dynamic(() => import("@/components/three/Scene"), {
  ssr: false,
});

export default function PortfolioRoot({
  initialView,
}: {
  initialView: ViewMode;
}) {
  const store = useStoreApi();
  const storeView = usePortfolioState((s) => s.viewMode);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    if (initialView === "classic") {
      store.getState().setViewMode("classic");
    }
    setHydrated(true);
  }, [initialView, store]);

  // Until hydration the server-chosen view wins, so SSR HTML matches.
  const view = hydrated ? storeView : initialView;

  if (view === "classic") {
    return <ClassicView />;
  }

  return (
    <>
      <Scene />
      <main id="content" className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
