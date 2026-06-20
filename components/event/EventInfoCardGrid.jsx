"use client";

import { MotionFadeIn } from "@/components/common/MotionFadeIn";
import { GlassCard } from "@/components/ui/glass-card";
import { resolveIcon } from "@/lib/icons";

export function EventInfoCardGrid({ cards }) {
  return (
    <section className="py-16 border-b border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => {
            const Icon = resolveIcon(card.icon);
            return (
              <MotionFadeIn key={card.label} delay={i * 0.1}>
                <GlassCard className="rounded-2xl p-8 border border-white/10 text-center hover:border-primary/30 transition-colors duration-300 h-full">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                    {Icon && <Icon className="w-6 h-6 text-primary" />}
                  </div>
                  <p className="text-xs text-white/65 uppercase tracking-wider mb-2">{card.label}</p>
                  <p className="text-xl font-display font-bold text-white mb-1">{card.value}</p>
                  <p className="text-sm text-white/60">{card.sub}</p>
                </GlassCard>
              </MotionFadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
