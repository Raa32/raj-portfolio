import { describe, it, expect, vi } from "vitest";
import { createPortfolioStore } from "@/lib/store";

describe("portfolio store", () => {
  it("defaults to 3d view when reduced motion is not requested", () => {
    const store = createPortfolioStore({ reducedMotion: false });
    expect(store.getState().viewMode).toBe("3d");
  });

  it("defaults to classic view when reduced motion is requested", () => {
    const store = createPortfolioStore({ reducedMotion: true });
    expect(store.getState().viewMode).toBe("classic");
  });

  it("setting quality tier updates subscribers", () => {
    const store = createPortfolioStore({ reducedMotion: false });
    const listener = vi.fn();
    store.subscribe(listener);

    store.getState().setQualityTier("low");

    expect(listener).toHaveBeenCalled();
    expect(store.getState().qualityTier).toBe("low");
  });

  it("waypoint changes are monotonic with progress", () => {
    const store = createPortfolioStore({ reducedMotion: false });
    let lastWaypoint = -1;
    for (let p = 0; p <= 1.0000001; p += 0.005) {
      store.getState().setProgress(Math.min(p, 1));
      const wp = store.getState().activeWaypoint;
      expect(wp).toBeGreaterThanOrEqual(lastWaypoint);
      lastWaypoint = wp;
    }
    expect(store.getState().activeWaypoint).toBe(4);
  });

  it("progress 0 maps to waypoint 0", () => {
    const store = createPortfolioStore({ reducedMotion: false });
    store.getState().setProgress(0);
    expect(store.getState().activeWaypoint).toBe(0);
  });

  it("setViewMode flips between modes", () => {
    const store = createPortfolioStore({ reducedMotion: false });
    store.getState().setViewMode("classic");
    expect(store.getState().viewMode).toBe("classic");
    store.getState().setViewMode("3d");
    expect(store.getState().viewMode).toBe("3d");
  });
});
