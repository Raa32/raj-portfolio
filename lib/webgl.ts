import type { PortfolioStore } from "./store";

export function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement("canvas");
    const context =
      canvas.getContext("webgl2") || canvas.getContext("webgl");
    return context !== null && context !== undefined;
  } catch {
    return false;
  }
}

export function attachContextLossHandler(
  canvas: HTMLCanvasElement,
  store: PortfolioStore
): () => void {
  const onContextLost = (event: Event) => {
    event.preventDefault();
    store.getState().markWebglFailed();
  };
  canvas.addEventListener("webglcontextlost", onContextLost);
  return () => {
    canvas.removeEventListener("webglcontextlost", onContextLost);
  };
}
