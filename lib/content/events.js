import { adapter } from "./client.js";
import { validateData } from "@/lib/validateData.js";
import {
  pageMetaSchema,
  legalSectionSchema,
  eventMetaSchema,
  eventStatSchema,
  eventInfoCardSchema,
  eventSubmitItemSchema,
  eventCriteriaItemSchema,
} from "@/lib/schemas.js";

export async function getIdeaContestContent() {
  const data = await adapter().getIdeaContestContent();
  return {
    meta: validateData(eventMetaSchema, data.meta, "ideaContestMeta"),
    pageMeta: validateData(pageMetaSchema, data.pageMeta, "ideaContestPageMeta"),
    stats: validateData(eventStatSchema.array(), data.stats, "ideaContestStats"),
    infoCards: validateData(eventInfoCardSchema.array(), data.infoCards, "ideaContestInfoCards"),
    submitItems: validateData(eventSubmitItemSchema.array(), data.submitItems, "ideaContestSubmitItems"),
    criteria: validateData(eventCriteriaItemSchema.array(), data.criteria, "ideaContestCriteria"),
  };
}

export async function getCvSubmitContent() {
  const data = await adapter().getCvSubmitContent();
  return {
    meta: validateData(eventMetaSchema, data.meta, "cvSubmitMeta"),
    pageMeta: validateData(pageMetaSchema, data.pageMeta, "cvSubmitPageMeta"),
    stats: validateData(eventStatSchema.array(), data.stats, "cvSubmitStats"),
    infoCards: validateData(eventInfoCardSchema.array(), data.infoCards, "cvSubmitInfoCards"),
    steps: validateData(eventSubmitItemSchema.array(), data.steps, "cvSubmitSteps"),
    benefits: validateData(eventCriteriaItemSchema.array(), data.benefits, "cvSubmitBenefits"),
  };
}

export async function getIdeaContestPageMeta() {
  const { pageMeta } = await getIdeaContestContent();
  return pageMeta;
}

export async function getCvSubmitPageMeta() {
  const { pageMeta } = await getCvSubmitContent();
  return pageMeta;
}

export async function getIdeaContestMeta() {
  const { meta } = await getIdeaContestContent();
  return meta;
}

export async function getCvSubmitMeta() {
  const { meta } = await getCvSubmitContent();
  return meta;
}
