export const WAYPOINT_COUNT = 5;

const ELEVATIONS = [0, 480, 1250, 2140, 3000];

function clampIndex(index: number): number {
  return Math.min(Math.max(Math.trunc(index), 0), WAYPOINT_COUNT - 1);
}

export function elevationMeters(index: number): number {
  return ELEVATIONS[clampIndex(index)];
}

function formatMeters(meters: number): string {
  return meters.toLocaleString("en-US");
}

export function elevationLabel(index: number): string {
  const i = clampIndex(index);
  if (i === 0) return "BASE CAMP / 0M";
  if (i === WAYPOINT_COUNT - 1) {
    return `SUMMIT / ELEV ${formatMeters(elevationMeters(i))}M`;
  }
  return `WAYPOINT ${String(i).padStart(2, "0")} / ELEV ${formatMeters(elevationMeters(i))}M`;
}
