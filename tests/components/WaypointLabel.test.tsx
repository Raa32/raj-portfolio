import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import WaypointLabel from "@/components/ui/WaypointLabel";
import { elevationLabel, WAYPOINT_COUNT } from "@/lib/elevation";

describe("WaypointLabel", () => {
  it("renders the elevation label for its index", () => {
    for (let i = 0; i < WAYPOINT_COUNT; i++) {
      const { unmount } = render(<WaypointLabel index={i} />);
      expect(screen.getByText(elevationLabel(i))).toBeInTheDocument();
      unmount();
    }
  });

  it("uses the mono font class", () => {
    render(<WaypointLabel index={2} />);
    const label = screen.getByText(elevationLabel(2));
    expect(label.className).toContain("font-mono");
  });
});
