"use client";

import { SectionHeader } from "@/components/common/SectionHeader";
import { AboutBackground } from "@/components/shared/AboutBackground";
import { AboutContentGrid } from "@/components/shared/AboutContentGrid";
import { aboutIntro } from "@/data/index.js";

export function About() {
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
        <AboutContentGrid paragraphs={[aboutIntro]} />
      </div>
    </section>
  );
}
