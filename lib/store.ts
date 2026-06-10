"use client";

import { createStore, type StoreApi } from "zustand/vanilla";
import { useStore as useZustandStore } from "zustand";
import { WAYPOINT_COUNT } from "./elevation";

export type ViewMode = "3d" | "classic";
export type QualityTier = "high" | "medium" | "low";

export interface PortfolioState {
  viewMode: ViewMode;
  reducedMotion: boolean;
  webglFailed: boolean;
  qualityTier: QualityTier;
  progress: number;
  activeWaypoint: number;
  activeProject: number | null;
  setViewMode: (mode: ViewMode) => void;
  setQualityTier: (tier: QualityTier) => void;
  setProgress: (progress: number) => void;
  setActiveProject: (index: number | null) => void;
  markWebglFailed: () => void;
}

export type PortfolioStore = StoreApi<PortfolioState>;

export interface StoreOptions {
  reducedMotion: boolean;
}

export function waypointForProgress(progress: number): number {
  const p = Math.min(Math.max(progress, 0), 1);
  return Math.min(Math.floor(p * WAYPOINT_COUNT), WAYPOINT_COUNT - 1);
}

export function createPortfolioStore(options: StoreOptions): PortfolioStore {
  return createStore<PortfolioState>((set) => ({
    viewMode: options.reducedMotion ? "classic" : "3d",
    reducedMotion: options.reducedMotion,
    webglFailed: false,
    qualityTier: "high",
    progress: 0,
    activeWaypoint: 0,
    activeProject: null,
    setViewMode: (mode) => set({ viewMode: mode }),
    setActiveProject: (index) => set({ activeProject: index }),
    setQualityTier: (tier) => set({ qualityTier: tier }),
    setProgress: (progress) =>
      set({
        progress,
        activeWaypoint: waypointForProgress(progress),
      }),
    markWebglFailed: () => set({ webglFailed: true, viewMode: "classic" }),
  }));
}

let appStore: PortfolioStore | undefined;

export function getAppStore(): PortfolioStore {
  if (!appStore) {
    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    appStore = createPortfolioStore({ reducedMotion });
    // ?view=classic wins from the first client render, so the 3D chunk
    // is never requested.
    if (
      typeof window !== "undefined" &&
      new URLSearchParams(window.location.search).get("view") === "classic"
    ) {
      appStore.getState().setViewMode("classic");
    }
  }
  return appStore;
}

export function usePortfolio<T>(selector: (state: PortfolioState) => T): T {
  return useZustandStore(getAppStore(), selector);
}
