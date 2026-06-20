import { describe, it, expect } from "vitest";
import { getPortfolioProjects, getPortfolioPageMeta } from "./portfolio.js";

describe("content repository — portfolio", () => {
  it("getPortfolioProjects validates project shape", async () => {
    const projects = await getPortfolioProjects();
    expect(projects.length).toBeGreaterThan(0);
    expect(projects[0].title).toBeTruthy();
    expect(projects[0].tags.length).toBeGreaterThan(0);
  });

  it("getPortfolioPageMeta returns title and description", async () => {
    const meta = await getPortfolioPageMeta();
    expect(meta.title.length).toBeGreaterThan(0);
    expect(meta.description.length).toBeGreaterThan(0);
  });
});
