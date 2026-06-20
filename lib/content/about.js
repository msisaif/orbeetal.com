import { adapter } from "./client.js";
import { validateData } from "@/lib/validateData.js";
import {
  pageMetaSchema,
  statSchema,
  whyChooseUsItemSchema,
  missionVisionSchema,
} from "@/lib/schemas.js";

export async function getAboutContent() {
  const data = await adapter().getAboutContent();
  if (!data.aboutIntro || !data.aboutPageExtra) {
    throw new Error('Data validation failed for "aboutIntro/aboutPageExtra": must be non-empty strings');
  }
  return {
    stats: validateData(statSchema.array(), data.stats, "stats"),
    whyChooseUs: validateData(whyChooseUsItemSchema.array(), data.whyChooseUs, "whyChooseUs"),
    aboutIntro: data.aboutIntro,
    aboutPageExtra: data.aboutPageExtra,
    mission: validateData(missionVisionSchema, data.mission, "mission"),
    vision: validateData(missionVisionSchema, data.vision, "vision"),
  };
}

export async function getAboutPageMeta() {
  const data = await adapter().getAboutPageMeta();
  return validateData(pageMetaSchema, data, "aboutPageMeta");
}
