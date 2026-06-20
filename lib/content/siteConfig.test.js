import { describe, it, expect } from "vitest";
import {
  getSiteConfig,
  getIdeaContestBannerContent,
  getCvSubmitBannerContent,
} from "./siteConfig.js";

describe("content repository — siteConfig", () => {
  it("getSiteConfig returns validated config", async () => {
    const config = await getSiteConfig();
    expect(typeof config.features.ideaContest).toBe("boolean");
    expect(typeof config.features.cvSubmit).toBe("boolean");
    expect(["hero", "idea-contest", "cv-submit"]).toContain(config.activeHero);
  });

  it("getIdeaContestBannerContent returns banner fields", async () => {
    const banner = await getIdeaContestBannerContent();
    expect(banner.label).toBeTruthy();
    expect(banner.href).toBeTruthy();
    expect(banner.cta).toBeTruthy();
  });

  it("getCvSubmitBannerContent returns banner fields", async () => {
    const banner = await getCvSubmitBannerContent();
    expect(banner.label).toBeTruthy();
    expect(banner.href).toBeTruthy();
    expect(banner.cta).toBeTruthy();
  });
});
