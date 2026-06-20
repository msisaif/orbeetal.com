import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { TeamPageContent } from "@/components/sections/TeamPageContent";
import { teamPageMeta } from "@/data/team/index.js";

export const metadata = teamPageMeta;

export default function TeamPage() {
  return (
    <PageLayout>
      <PageHero
        tagline="Leadership"
        title="Meet the"
        titleHighlight="Directors"
        description="Seven visionary leaders driving Orbeetal's mission to engineer competitive advantages for businesses worldwide."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Team" }]}
      />
      <TeamPageContent />
    </PageLayout>
  );
}
