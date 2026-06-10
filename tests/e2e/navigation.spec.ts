import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
  test("page loads with Raj Sahu as the h1", async ({ page }) => {
    await page.goto("/");
    const h1 = page.getByRole("heading", { level: 1 });
    await expect(h1).toHaveCount(1);
    await expect(h1).toHaveText("Raj Sahu");
  });

  test("scrolling to the bottom reveals the contact heading", async ({
    page,
  }) => {
    await page.goto("/");
    await page.evaluate(() =>
      window.scrollTo(0, document.documentElement.scrollHeight)
    );
    await expect(
      page.getByRole("heading", {
        name: "The summit is just the next base camp.",
      })
    ).toBeVisible();
  });

  test("waypoint labels appear as sections enter the viewport", async ({
    page,
  }) => {
    await page.goto("/");
    const sections = ["#hero", "#about", "#projects", "#experience", "#contact"];
    const labels = [
      "BASE CAMP / 0M",
      "WAYPOINT 01 / ELEV 480M",
      "WAYPOINT 02 / ELEV 1,250M",
      "WAYPOINT 03 / ELEV 2,140M",
      "SUMMIT / ELEV 3,000M",
    ];
    for (let i = 0; i < sections.length; i++) {
      await page
        .locator(sections[i])
        .evaluate((el) =>
          el.scrollIntoView({ block: "start", behavior: "instant" })
        );
      await expect(page.getByText(labels[i])).toBeInViewport();
    }
  });
});
