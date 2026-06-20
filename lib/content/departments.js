import { adapter } from "./client.js";
import { validateData } from "@/lib/validateData.js";
import { pageMetaSchema, departmentSchema } from "@/lib/schemas.js";

export async function getDepartments() {
  const data = await adapter().getDepartments();
  return validateData(departmentSchema.array(), data, "departments");
}

export async function getDepartmentsPageMeta() {
  const data = await adapter().getDepartmentsPageMeta();
  return validateData(pageMetaSchema, data, "departmentsPageMeta");
}
