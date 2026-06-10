import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import {
  computeScrollProgress,
  observeScrollProgress,
} from "@/lib/scrollProgress";

describe("computeScrollProgress", () => {
  it("returns 0 at scrollTop 0", () => {
    expect(computeScrollProgress(0, 5000, 800)).toBe(0);
  });

  it("returns 1 at max scroll", () => {
    expect(computeScrollProgress(4200, 5000, 800)).toBe(1);
  });

  it("returns 0 when there is nothing to scroll", () => {
    expect(computeScrollProgress(0, 800, 800)).toBe(0);
  });

  it("clamps above max scroll", () => {
    expect(computeScrollProgress(9999, 5000, 800)).toBe(1);
  });
});

describe("observeScrollProgress", () => {
  let rafCallbacks: FrameRequestCallback[];

  beforeEach(() => {
    rafCallbacks = [];
    vi.stubGlobal("requestAnimationFrame", (cb: FrameRequestCallback) => {
      rafCallbacks.push(cb);
      return rafCallbacks.length;
    });
    vi.stubGlobal("cancelAnimationFrame", () => {});
    Object.defineProperty(document.documentElement, "scrollHeight", {
      configurable: true,
      value: 5000,
    });
    Object.defineProperty(window, "innerHeight", {
      configurable: true,
      value: 800,
    });
    window.scrollY = 0;
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  function flushRaf() {
    const cbs = rafCallbacks.splice(0);
    cbs.forEach((cb) => cb(performance.now()));
  }

  it("is rAF-throttled: multiple scroll events in one frame produce one callback", () => {
    const onChange = vi.fn();
    const cleanup = observeScrollProgress(onChange);
    onChange.mockClear();

    window.scrollY = 100;
    window.dispatchEvent(new Event("scroll"));
    window.scrollY = 200;
    window.dispatchEvent(new Event("scroll"));
    window.scrollY = 300;
    window.dispatchEvent(new Event("scroll"));

    expect(onChange).not.toHaveBeenCalled();
    flushRaf();
    expect(onChange).toHaveBeenCalledTimes(1);
    cleanup();
  });

  it("reports progress from the latest scroll position", () => {
    const onChange = vi.fn();
    const cleanup = observeScrollProgress(onChange);
    onChange.mockClear();

    window.scrollY = 4200;
    window.dispatchEvent(new Event("scroll"));
    flushRaf();

    expect(onChange).toHaveBeenLastCalledWith(1);
    cleanup();
  });

  it("removes listeners on cleanup", () => {
    const removeSpy = vi.spyOn(window, "removeEventListener");
    const onChange = vi.fn();
    const cleanup = observeScrollProgress(onChange);
    cleanup();

    expect(removeSpy).toHaveBeenCalledWith("scroll", expect.any(Function));

    onChange.mockClear();
    window.scrollY = 500;
    window.dispatchEvent(new Event("scroll"));
    flushRaf();
    expect(onChange).not.toHaveBeenCalled();
  });
});
