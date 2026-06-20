import dynamic from "next/dynamic";
import { getProcessSteps } from "@/lib/content/process.js";

const ProcessContent = dynamic(
  () => import("./ProcessContent").then((m) => m.ProcessContent),
  { ssr: true }
);

export async function Process() {
  const processSteps = await getProcessSteps();
  return <ProcessContent processSteps={processSteps} />;
}
