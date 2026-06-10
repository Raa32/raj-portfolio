"use client";

import { useEffect } from "react";
import { usePortfolioState, useStoreApi } from "@/components/StoreProvider";

export default function ViewToggle() {
  const store = useStoreApi();
  const viewMode = usePortfolioState((s) => s.viewMode);
  const isClassic = viewMode === "classic";

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("view") === "classic") {
      store.getState().setViewMode("classic");
    }
  }, [store]);

  const toggle = () => {
    const next = isClassic ? "3d" : "classic";
    store.getState().setViewMode(next);
    const url = new URL(window.location.href);
    if (next === "classic") {
      url.searchParams.set("view", "classic");
    } else {
      url.searchParams.delete("view");
    }
    window.history.replaceState(null, "", url);
  };

  return (
    <button
      type="button"
      aria-pressed={isClassic}
      onClick={toggle}
      className="fixed right-4 top-4 z-50 border border-line bg-bg/90 px-4 py-2 font-mono text-xs uppercase tracking-widest text-sand hover:border-sand"
    >
      Classic view
    </button>
  );
}
