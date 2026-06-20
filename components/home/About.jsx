import dynamic from "next/dynamic";
import { SectionHeader } from "@/components/common/SectionHeader";
import { AboutBackground } from "@/components/shared/AboutBackground";
import { getAboutContent } from "@/lib/content/about.js";

const AboutContentGrid = dynamic(
  () => import("@/components/shared/AboutContentGrid").then((m) => m.AboutContentGrid),
  { ssr: true }
);

export async function About() {
  const { aboutIntro, stats, whyChooseUs } = await getAboutContent();

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden border-t border-white/5">
      <AboutBackground opacity={20} />

      <div className="container mx-auto px-6 md:px-12 relative z-30">
        <SectionHeader
          tagline="About Orbeetal"
          title="One of the Fastest Ways to"
          titleHighlight="Business Growth"
          align="left"
          animated={false}
          className="mb-6"
        />
        <AboutContentGrid paragraphs={[aboutIntro]} stats={stats} whyChooseUs={whyChooseUs} />
      </div>
    </section>
  );
}
