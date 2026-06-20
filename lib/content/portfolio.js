import { adapter } from "./client.js";
import { validateData } from "@/lib/validateData.js";
import { pageMetaSchema, portfolioProjectSchema } from "@/lib/schemas.js";

export async function getPortfolioProjects() {
  const data = await adapter().getPortfolioProjects();
  return validateData(portfolioProjectSchema.array().min(1), data, "portfolioProjects");
}

export async function getPortfolioPageMeta() {
  const data = await adapter().getPortfolioPageMeta();
  return validateData(pageMetaSchema, data, "portfolioPageMeta");
}
