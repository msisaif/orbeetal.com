const EVENT_NAV_LINKS = {
  ideaContest: { name: "Idea Contest", route: "/idea-contest" },
  cvSubmit: { name: "Career Fair", route: "/cv-submit" },
};

const BANNER_MAP = {
  "idea-contest": { iconName: "Trophy", contentKey: "ideaContest" },
  "cv-submit": { iconName: "Briefcase", contentKey: "cvSubmit" },
};

export function isIdeaContestEnabled(config) {
  return config.features.ideaContest === true;
}

export function isCvSubmitEnabled(config) {
  return config.features.cvSubmit === true;
}

export function resolveActiveHero(config) {
  const { activeHero } = config;
  if (activeHero === "idea-contest" && !isIdeaContestEnabled(config)) return "hero";
  if (activeHero === "cv-submit" && !isCvSubmitEnabled(config)) return "hero";
  return activeHero;
}

export function resolveTopBanner(config, bannerContents) {
  const { activeTopBanner, customBannerContent } = config;
  if (!activeTopBanner) return null;

  if (activeTopBanner === "custom") {
    return {
      content: customBannerContent,
      iconName: customBannerContent.icon ?? "Megaphone",
    };
  }

  const entry = BANNER_MAP[activeTopBanner];
  if (!entry) return null;

  const content = bannerContents[entry.contentKey];
  if (!content) return null;

  return { content, iconName: entry.iconName };
}

export function getEnabledEventNavLinks(config) {
  const links = [];
  if (isIdeaContestEnabled(config)) links.push(EVENT_NAV_LINKS.ideaContest);
  if (isCvSubmitEnabled(config)) links.push(EVENT_NAV_LINKS.cvSubmit);
  return links;
}
