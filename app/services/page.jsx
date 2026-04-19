import { PageHero } from "@/components/common/PageHero";
import { ServicesTabs } from "@/components/services/ServicesTabs";
import { pages } from "@/data/pages";

export const metadata = pages.services.metadata;

export default function ServicesPage() {
  const { hero } = pages.services;
  return (
    <>
      <PageHero
        kicker={hero.kicker}
        title={hero.title}
        subtitle={hero.subtitle}
      />
      <ServicesTabs />
    </>
  );
}
