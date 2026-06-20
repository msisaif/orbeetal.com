import { IdeaContestContent } from "@/components/home/IdeaContestContent";
import { getIdeaContestContent } from "@/lib/content/events.js";

export async function IdeaContest() {
  const { meta, stats } = await getIdeaContestContent();
  return <IdeaContestContent meta={meta} stats={stats} />;
}
