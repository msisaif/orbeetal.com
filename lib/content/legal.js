import { adapter } from "./client.js";
import { validateData } from "@/lib/validateData.js";
import { pageMetaSchema, legalSectionSchema } from "@/lib/schemas.js";

function validateLegal(data, label) {
  return {
    pageMeta: validateData(pageMetaSchema, data.pageMeta, `${label}PageMeta`),
    hero: data.hero,
    lastUpdated: data.lastUpdated,
    sections: validateData(legalSectionSchema.array(), data.sections, `${label}Sections`),
  };
}

export async function getLegalTerms() {
  const data = await adapter().getLegalTerms();
  return validateLegal(data, "terms");
}

export async function getLegalPrivacy() {
  const data = await adapter().getLegalPrivacy();
  return validateLegal(data, "privacy");
}

export async function getLegalCookies() {
  const data = await adapter().getLegalCookies();
  return validateLegal(data, "cookies");
}
