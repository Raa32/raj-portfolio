import { test, expect, chromium } from "@playwright/test";

test.describe("fallbacks", () => {
  test("the rich view does not depend on WebGL", async () => {
    const browser = await chromium.launch({
      args: ["--disable-webgl", "--disable-webgl2", "--disable-3d-apis"],
    });
    const page = await browser.newPage();
    try {
      await page.goto("http://localhost:3000/");
      await page.waitForLoadState("networkidle");
      const h1 = page.getByRole("heading", { level: 1 });
      await expect(h1).toHaveText("Raj Sahu");
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
