import { describe, it, expect } from "vitest";
import { getIdeaContestContent, getCvSubmitContent } from "./events.js";

describe("content repository — events", () => {
  it("getIdeaContestContent returns validated shape", async () => {
    const content = await getIdeaContestContent();
    expect(content.meta.organizer).toBeTruthy();
    expect(content.meta.submitFormUrl).toMatch(/^https?:\/\//);
    expect(content.stats.length).toBeGreaterThan(0);
    expect(content.infoCards.length).toBeGreaterThan(0);
    expect(content.submitItems.length).toBeGreaterThan(0);
    expect(content.criteria.length).toBeGreaterThan(0);
    expect(content.pageMeta.title).toBeTruthy();
  });

  it("getCvSubmitContent returns validated shape", async () => {
    const content = await getCvSubmitContent();
    expect(content.meta.organizer).toBeTruthy();
    expect(content.stats.length).toBeGreaterThan(0);
    expect(content.infoCards.length).toBeGreaterThan(0);
    expect(content.steps.length).toBeGreaterThan(0);
    expect(content.benefits.length).toBeGreaterThan(0);
    expect(content.pageMeta.title).toBeTruthy();
  });
});
