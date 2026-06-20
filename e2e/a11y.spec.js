import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const pages = ["/", "/services", "/contact", "/team", "/terms", "/cv-submit"];

test.beforeEach(async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
});

async function waitForPageReady(page, path) {
  await page.goto(path, { waitUntil: "networkidle" });

  if (path === "/") {
    const ideaContest = page.locator("#idea-contest");
    if (await ideaContest.count()) {
      await ideaContest.scrollIntoViewIfNeeded();
    }
  }
}

for (const path of pages) {
  test(`a11y: ${path}`, async ({ page }) => {
    await waitForPageReady(page, path);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa"])
      .analyze();
    expect(results.violations).toEqual([]);
  });
}

test("a11y: 404", async ({ page }) => {
  await page.goto("/this-page-does-not-exist", { waitUntil: "networkidle" });
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa"])
    .analyze();
  expect(results.violations).toEqual([]);
});
