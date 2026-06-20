"use client";

import { SectionHeader } from "@/components/common/SectionHeader";
import { MotionFadeIn } from "@/components/common/MotionFadeIn";
import { StatCard } from "@/components/ui/glass-card";
import { stats } from "@/data/index.js";
import { TeamGrid } from "@/components/shared/TeamGrid";

export function TeamPageContent() {
  return (
    <>
      <section className="py-20 relative z-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <TeamGrid />
        </div>
      </section>

      <section className="py-20 border-t border-white/5 relative z-20">
        <div className="absolute inset-0 bg-white/1.5" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <SectionHeader
            tagline="By The Numbers"
            title="Impact We've"
            titleHighlight="Created"
            className="mb-16"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            {stats.map((stat, i) => (
              <MotionFadeIn key={stat.label} delay={i * 0.1} className="text-center">
                <StatCard value={stat.value} label={stat.label} />
              </MotionFadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
