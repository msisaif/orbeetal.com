import { AboutBackground } from "@/components/shared/AboutBackground";
import { AboutContentGrid } from "@/components/shared/AboutContentGrid";
import { AboutMissionSection } from "@/components/pages/about/AboutMissionSection";

export function AboutPageContent({ aboutIntro, aboutPageExtra, mission, vision, stats, whyChooseUs }) {
  return (
    <>
      <section className="py-20 md:py-28 relative overflow-hidden">
        <AboutBackground opacity={15} />

        <div className="container mx-auto px-6 md:px-12 relative z-30">
          <AboutContentGrid
            paragraphs={[aboutIntro, aboutPageExtra]}
            showCta
            stats={stats}
            whyChooseUs={whyChooseUs}
          />
        </div>
      </section>

      <AboutMissionSection mission={mission} vision={vision} />
    </>
  );
}
