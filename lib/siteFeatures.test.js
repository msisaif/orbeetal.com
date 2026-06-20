import { describe, it, expect } from "vitest";
import {
  isIdeaContestEnabled,
  isCvSubmitEnabled,
  resolveActiveHero,
  getEnabledEventNavLinks,
  resolveTopBanner,
} from "./siteFeatures.js";

const baseConfig = {
  features: { ideaContest: true, cvSubmit: false },
  activeHero: "idea-contest",
  activeTopBanner: "idea-contest",
  customBannerContent: {
    label: "Custom",
    highlight: "Highlight",
    detail: "Detail",
    href: "/contact",
    cta: "Learn More",
    icon: "Megaphone",
  },
};

const bannerContents = {
  ideaContest: {
    label: "Idea Contest",
    highlight: "Prize",
    detail: "Deadline",
    href: "/idea-contest",
    cta: "View",
  },
  cvSubmit: {
    label: "CV Submit",
    highlight: "Fair",
    detail: "Date",
    href: "/cv-submit",
    cta: "Apply",
  },
};

describe("siteFeatures", () => {
  it("isIdeaContestEnabled respects config", () => {
    expect(isIdeaContestEnabled(baseConfig)).toBe(true);
    expect(isIdeaContestEnabled({ ...baseConfig, features: { ideaContest: false, cvSubmit: false } })).toBe(false);
  });

  it("resolveActiveHero falls back when feature disabled", () => {
    const config = { ...baseConfig, features: { ideaContest: false, cvSubmit: false }, activeHero: "idea-contest" };
    expect(resolveActiveHero(config)).toBe("hero");
  });

  it("getEnabledEventNavLinks returns only enabled events", () => {
    const links = getEnabledEventNavLinks(baseConfig);
    expect(links).toHaveLength(1);
    expect(links[0].route).toBe("/idea-contest");
  });

  it("resolveTopBanner returns banner for active type", () => {
    const banner = resolveTopBanner(baseConfig, bannerContents);
    expect(banner).not.toBeNull();
    expect(banner.content.label).toBe("Idea Contest");
    expect(banner.iconName).toBe("Trophy");
  });

  it("resolveTopBanner returns null when disabled", () => {
    expect(resolveTopBanner({ ...baseConfig, activeTopBanner: false }, bannerContents)).toBeNull();
  });
});
