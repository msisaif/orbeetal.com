import { describe, it, expect } from "vitest";
import * as staticAdapter from "./static.js";

describe("static adapter", () => {
  it("getServices returns non-empty array", async () => {
    const services = await staticAdapter.getServices();
    expect(Array.isArray(services)).toBe(true);
    expect(services.length).toBeGreaterThan(0);
    expect(services[0]).toHaveProperty("title");
    expect(services[0]).toHaveProperty("icon");
  });

  it("getSiteConfig returns expected shape", async () => {
    const config = await staticAdapter.getSiteConfig();
    expect(config.features).toHaveProperty("ideaContest");
    expect(config.features).toHaveProperty("cvSubmit");
    expect(["hero", "idea-contest", "cv-submit"]).toContain(config.activeHero);
  });

  it("getTeamMember finds existing slug", async () => {
    const members = await staticAdapter.getTeamMembers();
    const member = await staticAdapter.getTeamMember(members[0].slug);
    expect(member).not.toBeNull();
    expect(member.slug).toBe(members[0].slug);
  });
});
