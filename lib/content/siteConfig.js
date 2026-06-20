import { adapter } from "./client.js";
import { validateData } from "@/lib/validateData.js";
import { siteConfigSchema, bannerContentSchema } from "@/lib/schemas.js";

export async function getSiteConfig() {
  const data = await adapter().getSiteConfig();
  return validateData(siteConfigSchema, data, "siteConfig");
}

export async function getIdeaContestBannerContent() {
  const data = await adapter().getIdeaContestBannerContent();
  return validateData(bannerContentSchema, data, "ideaContestBannerContent");
}

export async function getCvSubmitBannerContent() {
  const data = await adapter().getCvSubmitBannerContent();
  return validateData(bannerContentSchema, data, "cvSubmitBannerContent");
}
