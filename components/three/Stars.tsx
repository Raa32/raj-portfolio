"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { usePortfolioState, useStoreApi } from "@/components/StoreProvider";

const COUNT: Record<string, number> = {
  high: 1800,
  medium: 1100,
  low: 500,
};

function smoothstep(edge0: number, edge1: number, value: number): number {
  const t = Math.min(Math.max((value - edge0) / (edge1 - edge0), 0), 1);
  return t * t * (3 - 2 * t);
}

export default function Stars() {
  const store = useStoreApi();
  const qualityTier = usePortfolioState((s) => s.qualityTier);
  const materialRef = useRef<THREE.PointsMaterial>(null);
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = COUNT[qualityTier];
    const array = new Float32Array(count * 3);
    let seed = 42;
    const rand = () => {
      seed = (seed * 16807) % 2147483647;
      return seed / 2147483647;
    };
    for (let i = 0; i < count; i++) {
      const radius = 70 + rand() * 90;
      const theta = rand() * Math.PI * 2;
      const phi = Math.acos(1 - rand() * 1.1);
      array[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      array[i * 3 + 1] = Math.abs(radius * Math.cos(phi)) + 5;
      array[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta) - 20;
    }
    return array;
  }, [qualityTier]);

  useFrame((_, delta) => {
    const { progress } = store.getState();
    if (materialRef.current) {
      // Stars belong to the summit: fade in over the last quarter of the climb.
      materialRef.current.opacity = 0.15 + smoothstep(0.65, 0.95, progress) * 0.85;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.004;
    }
  });

  return (
    <points ref={pointsRef} frustumCulled={false}>
      <bufferGeometry key={qualityTier}>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        ref={materialRef}
        color="#f2efe8"
        size={0.35}
        sizeAttenuation
        transparent
        opacity={0.15}
        depthWrite={false}
      />
    </points>
  );
}
