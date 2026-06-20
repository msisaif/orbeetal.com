import { ProcessContent } from "@/components/home/ProcessContent";
import { getProcessSteps } from "@/lib/content/process.js";

export async function Process() {
  const processSteps = await getProcessSteps();
  return <ProcessContent processSteps={processSteps} />;
}
