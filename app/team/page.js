import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { TeamPageContent } from "@/components/pages/team/TeamPageContent";
import { getTeamPageMeta, getTeamMembers } from "@/lib/content/team.js";
import { getAboutContent } from "@/lib/content/about.js";

export async function generateMetadata() {
  return getTeamPageMeta();
}

export default async function TeamPage() {
  const [teamMembers, { stats }] = await Promise.all([getTeamMembers(), getAboutContent()]);

  return (
    <PageLayout>
      <PageHero
        tagline="Leadership"
        title="Meet the"
        titleHighlight="Directors"
        description="Seven visionary leaders driving Orbeetal's mission to engineer competitive advantages for businesses worldwide."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Team" }]}
      />
      <TeamPageContent teamMembers={teamMembers} stats={stats} />
    </PageLayout>
  );
}
