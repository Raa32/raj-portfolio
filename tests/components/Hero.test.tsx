import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Hero from "@/components/sections/Hero";
import { content } from "@/lib/content";

describe("Hero", () => {
  it('renders "Raj Sahu" as the only h1', () => {
    render(<Hero />);
    const headings = screen.getAllByRole("heading", { level: 1 });
    expect(headings).toHaveLength(1);
    expect(headings[0]).toHaveTextContent("Raj Sahu");
  });

  it("renders the brand line verbatim", () => {
    render(<Hero />);
    expect(screen.getByText(content.identity.brandLine)).toBeInTheDocument();
  });

  it("hides the scroll hint from assistive tech", () => {
    render(<Hero />);
    const hint = screen.getByTestId("scroll-hint");
    expect(hint).toHaveAttribute("aria-hidden", "true");
  });
});
