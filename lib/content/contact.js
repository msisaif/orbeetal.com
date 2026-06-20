import { adapter } from "./client.js";
import { validateData } from "@/lib/validateData.js";
import { pageMetaSchema, contactInfoSchema } from "@/lib/schemas.js";

export async function getContactInfo() {
  const data = await adapter().getContactInfo();
  return validateData(contactInfoSchema, data, "contactInfo");
}

export async function getContactPageMeta() {
  const data = await adapter().getContactPageMeta();
  return validateData(pageMetaSchema, data, "contactPageMeta");
}
