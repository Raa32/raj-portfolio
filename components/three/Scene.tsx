"use client";

import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { BASE_CAMP } from "@/lib/cameraPath";
import { isWebGLAvailable, attachContextLossHandler } from "@/lib/webgl";
import { useStoreApi } from "@/components/StoreProvider";
import Terrain from "./Terrain";
import CameraRig from "./CameraRig";
import Beacons from "./Beacons";
import Stars from "./Stars";
import QualityManager from "./QualityManager";

export default function Scene() {
  const store = useStoreApi();
  // Probed in an effect so server and first client render agree (both null).
  const [available, setAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    const ok = isWebGLAvailable();
    setAvailable(ok);
    if (!ok) {
      store.getState().markWebglFailed();
    }
  }, [store]);

  if (!available) return null;

  return (
    <div className="fixed inset-0" aria-hidden="true">
      <Canvas
        dpr={[1, 1.75]}
        gl={{ antialias: true, powerPreference: "high-performance" }}
        camera={{ fov: 60, near: 0.1, far: 400, position: BASE_CAMP }}
        onCreated={({ gl }) => {
          attachContextLossHandler(gl.domElement, store);
        }}
      >
        <color attach="background" args={["#0a0908"]} />
        <fog attach="fog" args={["#2a2722", 30, 140]} />
        <CameraRig />
        <Terrain />
        <Beacons />
        <Stars />
        <QualityManager />
      </Canvas>
    </div>
  );
}
