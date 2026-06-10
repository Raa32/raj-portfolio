import { describe, it, expect, vi } from "vitest";
import { createPortfolioStore } from "@/lib/store";

describe("portfolio store", () => {
  it("defaults to rich view when reduced motion is not requested", () => {
    const store = createPortfolioStore({ reducedMotion: false });
    expect(store.getState().viewMode).toBe("rich");
  });

  it("defaults to classic view when reduced motion is requested", () => {
    const store = createPortfolioStore({ reducedMotion: true });
    expect(store.getState().viewMode).toBe("classic");
  });

  it("progress updates notify subscribers", () => {
    const store = createPortfolioStore({ reducedMotion: false });
    const listener = vi.fn();
    store.subscribe(listener);

    store.getState().setProgress(0.4);

    expect(listener).toHaveBeenCalled();
    expect(store.getState().progress).toBeCloseTo(0.4);
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
    store.getState().setViewMode("rich");
    expect(store.getState().viewMode).toBe("rich");
  });
});
