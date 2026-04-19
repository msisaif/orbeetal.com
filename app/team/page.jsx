import { PageHero } from "@/components/common/PageHero";
import { TeamSection } from "@/components/sections/TeamSection";
import { pages } from "@/data/pages";

export const metadata = pages.team.metadata;

export default function TeamPage() {
  const { hero } = pages.team;
  return (
    <>
      <PageHero
        kicker={hero.kicker}
        title={hero.title}
        subtitle={hero.subtitle}
      />
      <TeamSection showHeading={false} />
    </>
  );
}
