import { PageHero } from "@/components/common/PageHero";
import { FAQSection } from "@/components/sections/FAQSection";
import { pages } from "@/data/pages";

export const metadata = pages.faq.metadata;

export default function FaqPage() {
  const { hero } = pages.faq;
  return (
    <>
      <PageHero
        kicker={hero.kicker}
        title={hero.title}
        subtitle={hero.subtitle}
      />
      <FAQSection showHeading={false} />
    </>
  );
}
