"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useStoreApi } from "@/components/StoreProvider";
import type { QualityTier } from "@/lib/store";

const PROBE_SECONDS = 1;

// Counts frames for one second after mount, then locks in a quality tier.
export default function QualityManager() {
  const store = useStoreApi();
  const frames = useRef(0);
  const startedAt = useRef<number | null>(null);
  const done = useRef(false);

  useFrame(({ clock }) => {
    if (done.current) return;
    if (startedAt.current === null) {
      startedAt.current = clock.elapsedTime;
      return;
    }
    frames.current += 1;
    const elapsed = clock.elapsedTime - startedAt.current;
    if (elapsed < PROBE_SECONDS) return;

    done.current = true;
    const fps = frames.current / elapsed;
    const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

    let tier: QualityTier;
    if (fps >= 48) tier = "high";
    else if (fps >= 28) tier = "medium";
    else tier = "low";
    if (tier === "high" && dpr >= 3) tier = "medium";

    if (store.getState().qualityTier !== tier) {
      store.getState().setQualityTier(tier);
    }
  });

  return null;
}
