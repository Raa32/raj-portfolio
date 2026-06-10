export type Vec3 = [number, number, number];

export interface CameraPose {
  position: Vec3;
  lookAt: Vec3;
}

// One waypoint per section: base camp, about, projects, experience, summit.
const WAYPOINTS: Vec3[] = [
  [0, 2, 46],
  [-10, 8, 30],
  [8, 14, 14],
  [-6, 22, -2],
  [0, 34, -20],
];

export const BASE_CAMP: Vec3 = [...WAYPOINTS[0]];
export const SUMMIT: Vec3 = [...WAYPOINTS[WAYPOINTS.length - 1]];

const LOOK_AHEAD = 0.04;

function clamp01(t: number): number {
  return Math.min(Math.max(t, 0), 1);
}

function catmullRom(p0: number, p1: number, p2: number, p3: number, t: number): number {
  const t2 = t * t;
  const t3 = t2 * t;
  return (
    0.5 *
    (2 * p1 +
      (-p0 + p2) * t +
      (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 +
      (-p0 + 3 * p1 - 3 * p2 + p3) * t3)
  );
}

function samplePath(progress: number): Vec3 {
  const t = clamp01(progress);
  const segments = WAYPOINTS.length - 1;
  const scaled = Math.min(t * segments, segments - 1e-9);
  const i = Math.floor(scaled);
  const local = scaled - i;

  const p0 = WAYPOINTS[Math.max(i - 1, 0)];
  const p1 = WAYPOINTS[i];
  const p2 = WAYPOINTS[i + 1];
  const p3 = WAYPOINTS[Math.min(i + 2, WAYPOINTS.length - 1)];

  return [
    catmullRom(p0[0], p1[0], p2[0], p3[0], local),
    catmullRom(p0[1], p1[1], p2[1], p3[1], local),
    catmullRom(p0[2], p1[2], p2[2], p3[2], local),
  ];
}

export function cameraPose(progress: number): CameraPose {
  const t = clamp01(progress);
  const position = samplePath(t);

  const aheadT = t + LOOK_AHEAD;
  let lookAt: Vec3;
  if (aheadT <= 1) {
    lookAt = samplePath(aheadT);
  } else {
    // Past the summit: extend along the final tangent so the camera
    // keeps facing the direction of travel.
    const before = samplePath(1 - LOOK_AHEAD);
    const end = samplePath(1);
    lookAt = [
      end[0] + (end[0] - before[0]),
      end[1] + (end[1] - before[1]),
      end[2] + (end[2] - before[2]),
    ];
  }

  return { position, lookAt };
}
