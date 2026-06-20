import { CvSubmitContent } from "@/components/home/CvSubmitContent";
import { getCvSubmitContent } from "@/lib/content/events.js";

export async function CvSubmit() {
  const { meta, stats } = await getCvSubmitContent();
  return <CvSubmitContent meta={meta} stats={stats} />;
}
