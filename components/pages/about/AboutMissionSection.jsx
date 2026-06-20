"use client";

import { BasisBadge } from "@/components/common/BasisBadge";
import { MotionFadeIn } from "@/components/common/MotionFadeIn";
import { GlassCard } from "@/components/ui/glass-card";

export function AboutMissionSection({ mission, vision }) {
  return (
    <section className="py-20 border-t border-white/5 relative z-20">
      <div className="absolute inset-0 bg-white/1.5" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[mission, vision].map((item, i) => (
            <MotionFadeIn key={item.title} y={24} delay={i * 0.15}>
              <GlassCard className="p-10 rounded-2xl border border-white/5 hover:border-primary/20 transition-all duration-500 h-full">
                <p className="text-primary text-sm font-medium uppercase tracking-widest mb-4">
                  {item.title}
                </p>
                <p className="text-xl text-white/75 leading-relaxed font-light">{item.text}</p>
              </GlassCard>
            </MotionFadeIn>
          ))}
        </div>

        <MotionFadeIn className="flex justify-center">
          <BasisBadge />
        </MotionFadeIn>
      </div>
    </section>
  );
}
