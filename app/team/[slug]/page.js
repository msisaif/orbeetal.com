import { notFound } from "next/navigation";
import { PageLayout } from "@/components/layout/PageLayout";
import { TeamMemberProfile } from "@/components/pages/team/TeamMemberProfile";
import { getTeamMembers, getTeamMember } from "@/lib/content/team.js";

export async function generateStaticParams() {
  const teamMembers = await getTeamMembers();
  return teamMembers.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const member = await getTeamMember(slug);
  if (!member) return {};
  return {
    title: `${member.name} — Orbeetal`,
    description: member.bio,
    openGraph: {
      title: `${member.name} — Orbeetal`,
      description: member.bio,
      images: [{ url: "/api/og/team", width: 1200, height: 630 }],
    },
  };
}

export default async function TeamMemberPage({ params }) {
  const { slug } = await params;
  const member = await getTeamMember(slug);
  if (!member) notFound();

  return (
    <PageLayout>
      <TeamMemberProfile member={member} />
    </PageLayout>
  );
}
