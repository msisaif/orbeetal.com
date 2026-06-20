import { adapter } from "./client.js";
import { validateData } from "@/lib/validateData.js";
import { processStepSchema } from "@/lib/schemas.js";

export async function getProcessSteps() {
  const data = await adapter().getProcessSteps();
  return validateData(processStepSchema.array().min(1), data, "processSteps");
}
