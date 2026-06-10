import { describe, it, expect } from "vitest";
import { elevationLabel, elevationMeters, WAYPOINT_COUNT } from "@/lib/elevation";

describe("elevation", () => {
  it("labels waypoint 0 as BASE CAMP / 0M", () => {
    expect(elevationLabel(0)).toBe("BASE CAMP / 0M");
  });

  it("elevations strictly increase with index", () => {
    for (let i = 1; i < WAYPOINT_COUNT; i++) {
      expect(elevationMeters(i)).toBeGreaterThan(elevationMeters(i - 1));
    }
  });

  it("final waypoint label contains SUMMIT", () => {
    expect(elevationLabel(WAYPOINT_COUNT - 1)).toContain("SUMMIT");
  });

  it("has five waypoints", () => {
    expect(WAYPOINT_COUNT).toBe(5);
  });

  it("middle waypoints use the WAYPOINT NN / ELEV format", () => {
    expect(elevationLabel(2)).toMatch(/^WAYPOINT 02 \/ ELEV [\d,]+M$/);
  });
});
