"use client";

import { useEffect, useSyncExternalStore } from "react";
import dynamic from "next/dynamic";
import ClassicView from "@/components/classic/ClassicView";
import { usePortfolioState, useStoreApi } from "@/components/StoreProvider";
import type { ViewMode } from "@/lib/store";

// Three.js and framer-motion live inside this chunk; classic view never
// downloads them.
const ThreeExperience = dynamic(
  () => import("@/components/ThreeExperience"),
  { ssr: true }
);

const emptySubscribe = () => () => {};
function useHydrated(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export default function PortfolioRoot({
  initialView,
}: {
  initialView: ViewMode;
}) {
  const store = useStoreApi();
  const storeView = usePortfolioState((s) => s.viewMode);
  const hydrated = useHydrated();

  useEffect(() => {
    if (initialView === "classic") {
      store.getState().setViewMode("classic");
    }
  }, [initialView, store]);

  // Until hydration the server-chosen view wins, so SSR HTML matches.
  const view = hydrated ? storeView : initialView;

  if (view === "classic") {
    return <ClassicView />;
  }

  return <ThreeExperience />;
}
