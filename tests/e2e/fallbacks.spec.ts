import { test, expect, chromium } from "@playwright/test";

test.describe("fallbacks", () => {
  test("with WebGL disabled the site renders classic view with a notice", async () => {
    const browser = await chromium.launch({
      args: ["--disable-webgl", "--disable-webgl2", "--disable-3d-apis"],
    });
    const page = await browser.newPage();
    try {
      await page.goto("http://localhost:3000/");
      await expect(page.getByRole("status")).toContainText(
        /3D view unavailable/i,
        { timeout: 15_000 }
      );
      await expect(page.locator("#classic-about")).toBeAttached();
      await expect(page.locator("canvas")).toHaveCount(0);
    } finally {
      await browser.close();
    }
  });

  test("with prefers-reduced-motion the classic view loads by default", async ({
    browser,
  }) => {
    const context = await browser.newContext({ reducedMotion: "reduce" });
    const page = await context.newPage();
    try {
      await page.goto("http://localhost:3000/");
      await expect(page.locator("#classic-about")).toBeAttached({
        timeout: 15_000,
      });
      await expect(page.locator("canvas")).toHaveCount(0);
    } finally {
      await context.close();
    }
  });
});
