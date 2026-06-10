"use client";

import { createStore, type StoreApi } from "zustand/vanilla";
import { useStore as useZustandStore } from "zustand";
import { WAYPOINT_COUNT } from "./elevation";

export type ViewMode = "rich" | "classic";

export interface PortfolioState {
  viewMode: ViewMode;
  reducedMotion: boolean;
  progress: number;
  activeWaypoint: number;
  setViewMode: (mode: ViewMode) => void;
  setProgress: (progress: number) => void;
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
    viewMode: options.reducedMotion ? "classic" : "rich",
    reducedMotion: options.reducedMotion,
    progress: 0,
    activeWaypoint: 0,
    setViewMode: (mode) => set({ viewMode: mode }),
    setProgress: (progress) =>
      set({
        progress,
        activeWaypoint: waypointForProgress(progress),
      }),
  }));
}

let appStore: PortfolioStore | undefined;

export function getAppStore(): PortfolioStore {
  if (!appStore) {
    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    appStore = createPortfolioStore({ reducedMotion });
    // ?view=classic wins from the first client render, so the rich
    // chunk is never requested.
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
