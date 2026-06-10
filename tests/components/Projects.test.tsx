import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Projects from "@/components/sections/Projects";
import { content } from "@/lib/content";

describe("Projects", () => {
  it("renders all 6 projects", () => {
    render(<Projects />);
    for (const project of content.projects) {
      expect(screen.getByText(project.name)).toBeInTheDocument();
    }
    expect(content.projects).toHaveLength(6);
  });

  it("renders GitHub links with rel and accessible names", () => {
    render(<Projects />);
    const withUrls = content.projects.filter((p) => "url" in p && p.url);
    expect(withUrls.length).toBeGreaterThan(0);

    for (const project of withUrls) {
      const link = screen.getByRole("link", {
        name: new RegExp(
          project.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
          "i"
        ),
      });
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
      expect(link).toHaveAttribute("href", (project as { url: string }).url);
    }
  });
});
