"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { cameraPose } from "@/lib/cameraPath";
import { useStoreApi } from "@/components/StoreProvider";

export default function CameraRig() {
  const store = useStoreApi();
  const targetPosition = useRef(new THREE.Vector3());
  const targetLook = useRef(new THREE.Vector3());
  const smoothedLook = useRef<THREE.Vector3 | null>(null);

  useFrame((state, delta) => {
    const { progress } = store.getState();
    const pose = cameraPose(progress);

    targetPosition.current.set(...pose.position);
    targetLook.current.set(...pose.lookAt);

    if (smoothedLook.current === null) {
      smoothedLook.current = targetLook.current.clone();
      state.camera.position.copy(targetPosition.current);
    }

    const k = 1 - Math.exp(-delta * 5);
    state.camera.position.lerp(targetPosition.current, k);
    smoothedLook.current.lerp(targetLook.current, k);
    state.camera.lookAt(smoothedLook.current);
  });

  return null;
}
