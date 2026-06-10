import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

async function expectNoSeriousViolations(
  page: import("@playwright/test").Page
) {
  const results = await new AxeBuilder({ page }).analyze();
  const serious = results.violations.filter(
    (v) => v.impact === "serious" || v.impact === "critical"
  );
  expect(
    serious,
    serious.map((v) => `${v.id}: ${v.description}`).join("\n")
  ).toHaveLength(0);
}

test.describe("accessibility", () => {
  test("axe finds no serious or critical violations in the 3D view", async ({
    page,
  }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await expectNoSeriousViolations(page);
  });

  test("axe finds no serious or critical violations in the classic view", async ({
    page,
  }) => {
    await page.goto("/?view=classic");
    await expectNoSeriousViolations(page);
  });

  test("tab reaches the skip link first, then the view toggle", async ({
    page,
  }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await page.keyboard.press("Tab");
    await expect(
      page.getByRole("link", { name: /skip to content/i })
    ).toBeFocused();

    await page.keyboard.press("Tab");
    await expect(
      page.getByRole("button", { name: /classic view/i })
    ).toBeFocused();
  });

  test("focus ring is visible on the focused element", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await page.keyboard.press("Tab");
    const outlineStyle = await page.evaluate(() => {
      const el = document.activeElement as HTMLElement;
      return getComputedStyle(el).outlineStyle;
    });
    expect(outlineStyle).not.toBe("none");
  });
});
