"use client";

import { CheckCircle2 } from "lucide-react";
import { MotionFadeIn } from "@/components/common/MotionFadeIn";
import { GlassCard } from "@/components/ui/glass-card";

export function EventCriteriaList({ tagline, title, titleHighlight, items }) {
  return (
    <section className="py-24 border-b border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <MotionFadeIn y={10}>
            <p className="text-primary text-sm font-medium uppercase tracking-widest mb-4">{tagline}</p>
          </MotionFadeIn>
          <MotionFadeIn delay={0.1} duration={0.7}>
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              {title} <span className="text-gradient">{titleHighlight}</span>
            </h2>
          </MotionFadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {items.map((item, i) => (
            <MotionFadeIn key={item.label} x={i % 2 === 0 ? -20 : 20} y={0} delay={i * 0.1} duration={0.6}>
              <GlassCard className="rounded-2xl p-6 border border-white/10 flex items-start gap-4 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 h-full">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-display font-semibold text-white mb-1">{item.label}</p>
                  <p className="text-sm text-white/60">{item.desc}</p>
                </div>
              </GlassCard>
            </MotionFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
