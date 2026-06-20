import { adapter } from "./client.js";
import { validateData } from "@/lib/validateData.js";
import { pageMetaSchema, serviceSchema } from "@/lib/schemas.js";

export async function getServices() {
  const data = await adapter().getServices();
  return validateData(serviceSchema.array(), data, "services");
}

export async function getServicesPageMeta() {
  const data = await adapter().getServicesPageMeta();
  return validateData(pageMetaSchema, data, "servicesPageMeta");
}
