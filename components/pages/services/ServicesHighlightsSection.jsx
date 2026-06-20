"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getSafeMotionProps, useSafeMotion } from "@/hooks/useSafeMotion";
import { useReducedMotion } from "framer-motion";

const highlights = [
  "Scalable, secure architectures built to last",
  "Designs that convert visitors into customers",
  "Mobile-first, performance-optimised delivery",
  "Full-stack teams — strategy through deployment",
];

export function ServicesHighlightsSection({ processSteps }) {
  const reduced = useReducedMotion();
  const leftMotion = useSafeMotion({
    initial: { opacity: 0, x: -20 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.7 },
  });

  return (
    <section className="py-20 md:py-28 border-t border-white/5 relative z-20">
      <div className="absolute inset-0 bg-white/[0.015]" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <m.div {...leftMotion}>
            <p className="text-primary text-sm font-medium uppercase tracking-widest mb-4">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Engineering Your <span className="text-gradient">Competitive Edge</span>
            </h2>
            <p className="text-xl text-body-muted mb-8 leading-relaxed">
              Every engagement starts with understanding your business goals. We deliver solutions that don&apos;t
              just look great — they perform, scale, and grow with you.
            </p>
            <ul className="space-y-4 mb-10">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground border-none h-12 px-8">
              <Link href="/contact">
                Start a Project <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </m.div>

          <div className="space-y-6">
            {processSteps.map((step, i) => (
              <m.div
                key={step.num}
                {...getSafeMotionProps(reduced, {
                  initial: { opacity: 0, x: 20 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.5, delay: i * 0.15 },
                })}
                className="glass-panel p-7 rounded-xl border border-white/5 hover:border-primary/20 transition-colors duration-300 flex gap-6 items-start"
              >
                <div className="w-14 h-14 shrink-0 rounded-full bg-surface-deep border border-primary/30 flex items-center justify-center shadow-[0_0_30px_-5px_rgba(0,112,243,0.3)]">
                  <span className="text-lg font-bold text-primary">{step.num}</span>
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-2">{step.title}</h3>
                  <p className="text-body-muted leading-relaxed text-sm">{step.description}</p>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
