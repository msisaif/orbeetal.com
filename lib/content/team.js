import { adapter } from "./client.js";
import { validateData } from "@/lib/validateData.js";
import { pageMetaSchema, teamMemberSchema } from "@/lib/schemas.js";

export async function getTeamMembers() {
  const data = await adapter().getTeamMembers();
  return validateData(teamMemberSchema.array(), data, "teamMembers");
}

export async function getTeamMember(slug) {
  const data = await adapter().getTeamMember(slug);
  if (!data) return null;
  return validateData(teamMemberSchema, data, `teamMember:${slug}`);
}

export async function getTeamPageMeta() {
  const data = await adapter().getTeamPageMeta();
  return validateData(pageMetaSchema, data, "teamPageMeta");
}
