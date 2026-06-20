import { adapter } from "./client.js";

export async function getRuetDepartments() {
  const data = await adapter().getRuetDepartments();
  if (!Array.isArray(data) || data.length === 0) {
    throw new Error('Data validation failed for "ruetDepartments": must be non-empty array');
  }
  return data;
}
