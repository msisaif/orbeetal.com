import { adapter } from "./client.js";
import { validateData } from "@/lib/validateData.js";
import { clientSchema } from "@/lib/schemas.js";

export async function getClients() {
  const data = await adapter().getClients();
  return validateData(clientSchema.array().min(1), data, "clients");
}
