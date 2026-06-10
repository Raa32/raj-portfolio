import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ClassicView from "@/components/classic/ClassicView";
import { content } from "@/lib/content";

describe("ClassicView", () => {
  it("renders every section heading in order", () => {
    render(<ClassicView />);
    const headings = screen
      .getAllByRole("heading", { level: 2 })
      .map((h) => h.textContent);
    const expected = ["About", "Projects", "Experience", "Contact"];
    const positions = expected.map((name) =>
      headings.findIndex((h) => h?.includes(name))
    );
    for (const pos of positions) {
      expect(pos).toBeGreaterThanOrEqual(0);
    }
    expect([...positions].sort((a, b) => a - b)).toEqual(positions);
  });

  it("contains zero canvas elements", () => {
    const { container } = render(<ClassicView />);
    expect(container.querySelectorAll("canvas")).toHaveLength(0);
  });

  it("renders all 6 projects", () => {
    render(<ClassicView />);
    for (const project of content.projects) {
      expect(screen.getByText(project.name)).toBeInTheDocument();
    }
  });
});
