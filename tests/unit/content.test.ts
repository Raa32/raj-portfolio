import { describe, it, expect } from "vitest";
import { content } from "@/lib/content";

function collectStrings(value: unknown, out: string[] = []): string[] {
  if (typeof value === "string") {
    out.push(value);
  } else if (Array.isArray(value)) {
    value.forEach((v) => collectStrings(v, out));
  } else if (value && typeof value === "object") {
    Object.values(value).forEach((v) => collectStrings(v, out));
  }
  return out;
}

const allStrings = collectStrings(content);

describe("content", () => {
  it("has seven projects, each with name, tagline, description and stack", () => {
    expect(content.projects).toHaveLength(7);
    for (const project of content.projects) {
      expect(project.name).toBeTruthy();
      expect(project.tagline).toBeTruthy();
      expect(project.description).toBeTruthy();
      expect(project.status).toBeTruthy();
      expect(project.stack.length).toBeGreaterThan(0);
    }
  });

  it("every external URL starts with https://", () => {
    const urls = allStrings.filter(
      (s) => s.includes("://") || s.startsWith("www.")
    );
    for (const url of urls) {
      expect(url.startsWith("https://"), `bad url: ${url}`).toBe(true);
    }
    expect(content.identity.links.github.startsWith("https://")).toBe(true);
    expect(content.identity.links.linkedin.startsWith("https://")).toBe(true);
  });

  it('never contains "Santosh"', () => {
    for (const s of allStrings) {
      expect(s.includes("Santosh"), `found in: ${s}`).toBe(false);
    }
  });

  it("never contains em or en dashes", () => {
    for (const s of allStrings) {
      expect(s.includes("—"), `em dash in: ${s}`).toBe(false);
      expect(s.includes("–"), `en dash in: ${s}`).toBe(false);
    }
  });

  it('never contains "ITIL"', () => {
    for (const s of allStrings) {
      expect(s.includes("ITIL"), `found in: ${s}`).toBe(false);
    }
  });

  it("uses the exact name and brand line", () => {
    expect(content.identity.name).toBe("Raj Sahu");
    expect(content.identity.brandLine).toBe(
      "I build production systems and stay close to the people using them."
    );
  });
});
