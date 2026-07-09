import { test, expect } from "@playwright/test";

test("homepage loads with navigation", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Orbeetal/);
  await expect(page.getByRole("navigation").getByRole("link", { name: /Orbeetal Logo/i })).toBeVisible();
  await expect(page.getByRole("navigation").getByRole("link", { name: "Services", exact: true })).toBeVisible();
});

test("contact page renders", async ({ page }) => {
  await page.goto("/contact");
  await expect(page.getByRole("heading", { name: /Contact/i })).toBeVisible();
  await expect(page.getByText("Contact Information")).toBeVisible();
});

test("services page renders", async ({ page }) => {
  await page.goto("/services");
  await expect(page.getByRole("heading", { name: /Strategic/i })).toBeVisible();
});

test("about page renders", async ({ page }) => {
  await page.goto("/about");
  await expect(page.getByRole("heading", { name: /Business Growth/i })).toBeVisible();
});

test("departments page renders", async ({ page }) => {
  await page.goto("/departments");
  await expect(page.getByRole("heading", { name: /Departments/i })).toBeVisible();
});

test("legal pages render", async ({ page }) => {
  await page.goto("/terms");
  await expect(page.getByRole("heading", { name: /Terms of/i })).toBeVisible();

  await page.goto("/privacy-policy");
  await expect(page.getByRole("heading", { name: /Privacy/i })).toBeVisible();
});

test("team member page renders", async ({ page }) => {
  await page.goto("/team/md-saiful-islam");
  await expect(page.getByRole("heading", { name: /Md\. Saiful Islam/i })).toBeVisible();
});

test("404 page renders with site layout", async ({ page }) => {
  await page.goto("/this-page-does-not-exist");
  await expect(page.getByRole("heading", { name: /Page Not Found/i })).toBeVisible();
  await expect(page.getByRole("navigation").getByRole("link", { name: /Orbeetal Logo/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /Back to Home/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /Contact Us/i })).toBeVisible();
});

test("skip link is focusable", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  const skipLink = page.locator('a[href="#main-content"]');
  await expect(skipLink).toBeFocused();
});

test("mobile menu opens and closes", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Open menu" });
  await toggle.click();
  await expect(page.getByRole("dialog", { name: "Mobile navigation" })).toBeVisible();
  await page.getByRole("button", { name: "Close menu" }).click();
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
});
