import { describe, it, expect } from "vitest";
import {
  cameraPose,
  BASE_CAMP,
  SUMMIT,
  type Vec3,
} from "@/lib/cameraPath";

function dist(a: Vec3, b: Vec3): number {
  return Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
}

function sub(a: Vec3, b: Vec3): Vec3 {
  return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
}

function dot(a: Vec3, b: Vec3): number {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

describe("cameraPose", () => {
  it("returns the base-camp position at progress 0", () => {
    const { position } = cameraPose(0);
    expect(dist(position, BASE_CAMP)).toBeLessThan(1e-6);
  });

  it("returns the summit position at progress 1", () => {
    const { position } = cameraPose(1);
    expect(dist(position, SUMMIT)).toBeLessThan(1e-6);
  });

  it("is continuous: no jump larger than epsilon between 0.01 steps", () => {
    const EPSILON = 3;
    let prev = cameraPose(0).position;
    for (let p = 0.01; p <= 1.000001; p += 0.01) {
      const next = cameraPose(Math.min(p, 1)).position;
      expect(dist(prev, next)).toBeLessThan(EPSILON);
      prev = next;
    }
  });

  it("lookAt always targets ahead on the path", () => {
    for (let p = 0; p <= 0.99; p += 0.01) {
      const { position, lookAt } = cameraPose(p);
      const ahead = cameraPose(Math.min(p + 0.02, 1)).position;
      const toLook = sub(lookAt, position);
      const travel = sub(ahead, position);
      expect(dist(lookAt, position)).toBeGreaterThan(1e-6);
      expect(dot(toLook, travel)).toBeGreaterThan(0);
    }
  });

  it("clamps progress below 0", () => {
    const low = cameraPose(-5);
    const zero = cameraPose(0);
    expect(dist(low.position, zero.position)).toBeLessThan(1e-6);
    expect(dist(low.lookAt, zero.lookAt)).toBeLessThan(1e-6);
  });

  it("clamps progress above 1", () => {
    const high = cameraPose(7);
    const one = cameraPose(1);
    expect(dist(high.position, one.position)).toBeLessThan(1e-6);
    expect(dist(high.lookAt, one.lookAt)).toBeLessThan(1e-6);
  });
});
