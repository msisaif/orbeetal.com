import { adapter } from "./client.js";
import { validateData } from "@/lib/validateData.js";
import { navLinkSchema } from "@/lib/schemas.js";

export async function getNavLinks() {
  const data = await adapter().getNavLinks();
  return validateData(navLinkSchema.array(), data, "navLinks");
}
