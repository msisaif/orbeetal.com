import { PageLayout } from "@/components/layout/PageLayout";
import { IdeaContestLanding } from "@/components/pages/idea-contest/IdeaContestLanding";
import { getIdeaContestPageMeta, getIdeaContestContent } from "@/lib/content/events.js";
import { getSiteConfig } from "@/lib/content/siteConfig.js";
import { isIdeaContestEnabled } from "@/lib/siteFeatures.js";

export async function generateMetadata() {
  return getIdeaContestPageMeta();
}

export default async function IdeaContestPage() {
  const siteConfig = await getSiteConfig();

  if (isIdeaContestEnabled(siteConfig)) {
    const content = await getIdeaContestContent();
    return (
      <PageLayout>
        <IdeaContestLanding content={content} />
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">Idea Contest is not active</h1>
        <p className="text-lg text-muted-foreground">
          Please check back later for updates on the Idea Contest.
        </p>
      </div>
    </PageLayout>
  );
}
