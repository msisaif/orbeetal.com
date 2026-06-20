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
