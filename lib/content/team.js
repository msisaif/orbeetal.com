import * as laravelAdapter from "./adapters/laravel.js";
import { validateData } from "@/lib/validateData.js";
import { pageMetaSchema, teamMemberSchema } from "@/lib/schemas.js";

// Team data always comes from the Laravel admin panel, independent of
// CONTENT_SOURCE — the other content types' Laravel endpoints don't exist yet.
export async function getTeamMembers() {
  const data = await laravelAdapter.getTeamMembers();
  return validateData(teamMemberSchema.array(), data, "teamMembers");
}

export async function getTeamMember(slug) {
  const data = await laravelAdapter.getTeamMember(slug);
  if (!data) return null;
  return validateData(teamMemberSchema, data, `teamMember:${slug}`);
}

export async function getTeamPageMeta() {
  const data = await laravelAdapter.getTeamPageMeta();
  return validateData(pageMetaSchema, data, "teamPageMeta");
}
