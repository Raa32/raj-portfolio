import { test, expect } from "@playwright/test";

const PROJECT_NAMES = [
  "SiteCrew",
  "Lookinit AI Engine",
  "Fitness SaaS Platform",
  "Observability Stack",
  "DocFlow",
  "Client Implementation Tracker",
  "Hotel Reviews Sentiment Analysis",
];

test.describe("classic view", () => {
  test("clicking the toggle shows the classic layout with no canvas", async ({
    page,
  }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await page.getByRole("button", { name: /classic view/i }).click();
    await expect(page.locator("#classic-about")).toBeVisible();
    await expect(page.locator("canvas")).toHaveCount(0);
  });

  test("direct visit to /?view=classic never instantiates WebGL", async ({
    page,
  }) => {
    await page.goto("/?view=classic");
    await page.waitForLoadState("networkidle");
    await expect(page.locator("canvas")).toHaveCount(0);
    await expect(page.locator("#classic-contact")).toBeAttached();
  });

  test("content parity: the same 6 project names exist in both views", async ({
    page,
  }) => {
    await page.goto("/?view=classic");
    for (const name of PROJECT_NAMES) {
      await expect(page.getByText(name).first()).toBeAttached();
    }

    await page.goto("/");
    await page.waitForLoadState("networkidle");
    for (const name of PROJECT_NAMES) {
      await expect(page.getByText(name).first()).toBeAttached();
    }
  });
});
