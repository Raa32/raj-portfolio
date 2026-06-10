"use client";

import { useMemo, useRef } from "react";
import { useFrame, type ThreeEvent } from "@react-three/fiber";
import * as THREE from "three";
import { content } from "@/lib/content";
import { useStoreApi } from "@/components/StoreProvider";
import { terrainHeight } from "./Terrain";

const SAND = new THREE.Color("#c4b49a");
const EMBER = new THREE.Color("#d96c3f");
const FLARE_RADIUS = 18;

export default function Beacons() {
  const store = useStoreApi();
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const color = useMemo(() => new THREE.Color(), []);

  const positions = useMemo(
    () =>
      content.projects.map((_, i) => {
        const z = 30 - i * 6.5;
        const x = i % 2 === 0 ? -10 - i * 1.2 : 9 + i * 0.8;
        return new THREE.Vector3(x, terrainHeight(x, z) + 2, z);
      }),
    []
  );

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const t = state.clock.elapsedTime;
    positions.forEach((pos, i) => {
      const dist = state.camera.position.distanceTo(pos);
      const proximity = 1 - Math.min(dist / FLARE_RADIUS, 1);
      const pulse = 1 + Math.sin(t * 2.4 + i) * 0.08;
      const scale = (0.7 + proximity * 1.1) * pulse;

      dummy.position.copy(pos);
      dummy.rotation.y = t * 0.6 + i;
      dummy.scale.setScalar(scale);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);

      color.copy(SAND).lerp(EMBER, Math.pow(proximity, 1.5));
      mesh.setColorAt(i, color);
    });
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  });

  const onClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    if (event.instanceId !== undefined) {
      store.getState().setActiveProject(event.instanceId);
    }
  };

  return (
    <instancedMesh
      ref={meshRef}
      args={[undefined, undefined, content.projects.length]}
      onClick={onClick}
      onPointerOver={() => (document.body.style.cursor = "pointer")}
      onPointerOut={() => (document.body.style.cursor = "")}
    >
      <octahedronGeometry args={[0.6, 0]} />
      <meshBasicMaterial toneMapped={false} />
    </instancedMesh>
  );
}
