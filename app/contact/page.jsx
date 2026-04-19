import { PageHero } from "@/components/common/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";
import { pages } from "@/data/pages";

export const metadata = pages.contact.metadata;

export default function ContactPage() {
  const { hero } = pages.contact;
  return (
    <>
      <PageHero
        kicker={hero.kicker}
        title={hero.title}
        subtitle={hero.subtitle}
      />
      <ContactSection />
    </>
  );
}
