"use client";

import { Quote } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { MotionFadeIn } from "@/components/common/MotionFadeIn";
import { GlassCard } from "@/components/ui/glass-card";

export function TestimonialsContent({ testimonials }) {
  return (
    <section className="py-24 md:py-32 relative z-20 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeader
          tagline="From Our Customers"
          title="What Our Clients"
          titleHighlight="Say"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <MotionFadeIn key={t.name} y={24} delay={i * 0.12}>
              <GlassCard className="rounded-2xl p-8 border border-white/5 hover:border-primary/20 transition-all duration-500 flex flex-col h-full">
                <Quote className="w-8 h-8 text-primary/40 mb-5 flex-shrink-0" />
                <p className="text-body-muted leading-relaxed mb-8 flex-1 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-4 pt-5 border-t border-white/5">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-sm font-display font-bold flex-shrink-0`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-body-muted text-xs mt-0.5">{t.role}</div>
                  </div>
                </div>
              </GlassCard>
            </MotionFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
