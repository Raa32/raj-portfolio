"use client";

import { useEffect } from "react";
import { useStoreApi } from "@/components/StoreProvider";
import { isWebGLAvailable } from "@/lib/webgl";

// Placeholder until the 3D layer lands: probes WebGL support and falls
// back to classic view when the device cannot render the scene.
export default function Scene() {
  const store = useStoreApi();

  useEffect(() => {
    if (!isWebGLAvailable()) {
      store.getState().markWebglFailed();
    }
  }, [store]);

  return null;
}
