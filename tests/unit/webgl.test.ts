import { describe, it, expect, vi, afterEach } from "vitest";
import { isWebGLAvailable, attachContextLossHandler } from "@/lib/webgl";
import { createPortfolioStore } from "@/lib/store";

afterEach(() => {
  vi.restoreAllMocks();
});

describe("isWebGLAvailable", () => {
  it("returns false when canvas.getContext returns null", () => {
    vi.spyOn(document, "createElement").mockImplementation(() => {
      return { getContext: () => null } as unknown as HTMLCanvasElement;
    });
    expect(isWebGLAvailable()).toBe(false);
  });

  it("returns true when a WebGL context is created", () => {
    vi.spyOn(document, "createElement").mockImplementation(() => {
      return { getContext: () => ({}) } as unknown as HTMLCanvasElement;
    });
    expect(isWebGLAvailable()).toBe(true);
  });
});

describe("attachContextLossHandler", () => {
  it("flips the store to classic mode on webglcontextlost", () => {
    const store = createPortfolioStore({ reducedMotion: false });
    const canvas = document.createElement("canvas");

    const detach = attachContextLossHandler(canvas, store);
    expect(store.getState().viewMode).toBe("3d");

    canvas.dispatchEvent(new Event("webglcontextlost"));

    expect(store.getState().viewMode).toBe("classic");
    expect(store.getState().webglFailed).toBe(true);
    detach();
  });

  it("detaches cleanly", () => {
    const store = createPortfolioStore({ reducedMotion: false });
    const canvas = document.createElement("canvas");
    const detach = attachContextLossHandler(canvas, store);
    detach();

    canvas.dispatchEvent(new Event("webglcontextlost"));
    expect(store.getState().viewMode).toBe("3d");
  });
});
