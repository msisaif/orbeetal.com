import { describe, it, expect } from "vitest";
import { getLegalTerms, getLegalPrivacy, getLegalCookies } from "./legal.js";

describe("content repository — legal", () => {
  it("getLegalTerms returns page meta and sections", async () => {
    const data = await getLegalTerms();
    expect(data.pageMeta.title).toMatch(/Terms/i);
    expect(data.sections.length).toBeGreaterThan(0);
    expect(data.sections[0].title).toBeTruthy();
    expect(data.lastUpdated).toBeTruthy();
  });

  it("getLegalPrivacy returns page meta and sections", async () => {
    const data = await getLegalPrivacy();
    expect(data.pageMeta.title).toMatch(/Privacy/i);
    expect(data.sections.length).toBeGreaterThan(0);
  });

  it("getLegalCookies returns page meta and sections", async () => {
    const data = await getLegalCookies();
    expect(data.pageMeta.title).toMatch(/Cookie/i);
    expect(data.sections.length).toBeGreaterThan(0);
  });
});
