"use client";

import Image from "next/image";
import { MotionFadeIn } from "@/components/common/MotionFadeIn";
import { GlassCard } from "@/components/ui/glass-card";
import { resolveIcon } from "@/lib/icons";

export function ServicesGrid({ services }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, i) => {
        const Icon = resolveIcon(service.icon);
        return (
          <MotionFadeIn key={service.title} delay={i * 0.1}>
            <GlassCard className="group relative p-8 rounded-xl overflow-hidden hover:bg-white/[0.04] transition-colors duration-500 h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] -mr-16 -mt-16 rounded-full group-hover:bg-primary/40 transition-colors duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  {Icon && <Icon className="w-6 h-6 text-primary" />}
                </div>
                <h3 className="text-2xl font-display font-semibold mb-3">{service.title}</h3>
                <p className="text-body-muted leading-relaxed mb-6">{service.description}</p>
                <div className="relative w-full h-40 rounded-lg overflow-hidden border border-white/10 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </GlassCard>
          </MotionFadeIn>
        );
      })}
    </div>
  );
}
