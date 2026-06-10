"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { createNoise2D } from "simplex-noise";
import { usePortfolioState } from "@/components/StoreProvider";

// Deterministic PRNG so the mountain is the same on every visit.
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const noise2D = createNoise2D(mulberry32(1337));

function smoothstep(edge0: number, edge1: number, value: number): number {
  const t = Math.min(Math.max((value - edge0) / (edge1 - edge0), 0), 1);
  return t * t * (3 - 2 * t);
}

// Pure heightmap: ridged simplex with a low corridor so the camera path
// stays clear, mountains rising at the sides and toward the summit.
export function terrainHeight(x: number, z: number): number {
  const n1 = noise2D(x * 0.018, z * 0.018);
  const n2 = noise2D(x * 0.05, z * 0.05) * 0.5;
  const n3 = noise2D(x * 0.12, z * 0.12) * 0.22;
  const combined = (n1 + n2 + n3) / 1.72;
  const ridge = 1 - Math.abs(combined);
  const side = smoothstep(8, 30, Math.abs(x));
  const far = smoothstep(20, -50, z);
  const amp = 2 + side * 14 + far * 9 * Math.max(side, 0.3);
  return ridge * amp - 1.5 + n3 * 1.5;
}

const SEGMENTS: Record<string, number> = {
  high: 128,
  medium: 88,
  low: 52,
};

const DRAW_IN_SECONDS = 1.2;

export default function Terrain() {
  const qualityTier = usePortfolioState((s) => s.qualityTier);
  const segments = SEGMENTS[qualityTier];
  const materialRef = useRef<THREE.MeshBasicMaterial>(null);
  const startedAt = useRef<number | null>(null);

  // Page-load sequence: the terrain lines fade in over 1.2s before the
  // hero name appears.
  useFrame(({ clock }) => {
    const material = materialRef.current;
    if (!material || material.opacity >= 1) return;
    if (startedAt.current === null) startedAt.current = clock.elapsedTime;
    const t = Math.min(
      (clock.elapsedTime - startedAt.current) / DRAW_IN_SECONDS,
      1
    );
    material.opacity = t * t;
    if (t >= 1) material.transparent = false;
  });

  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(180, 240, segments, segments);
    geo.rotateX(-Math.PI / 2);
    geo.translate(0, 0, -20);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      pos.setY(i, terrainHeight(x, z));
    }
    geo.computeVertexNormals();
    return geo;
  }, [segments]);

  return (
    <mesh geometry={geometry}>
      <meshBasicMaterial
        ref={materialRef}
        color="#2a2722"
        wireframe
        transparent
        opacity={0}
      />
    </mesh>
  );
}
