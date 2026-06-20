"use client";

import { m } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSafeMotion } from "@/hooks/useSafeMotion";

export function IdeaContestClosingSection({ meta }) {
  const taglineMotion = useSafeMotion({ initial: { opacity: 0, y: 10 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } });
  const titleMotion = useSafeMotion({ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8, delay: 0.1 } });
  const descMotion = useSafeMotion({ initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7, delay: 0.2 } });
  const ctaMotion = useSafeMotion({ initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7, delay: 0.3 } });

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 rounded-full bg-amber-500/10 blur-[150px]" />
      </div>
      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
        <m.p {...taglineMotion} className="text-amber-400 text-sm font-medium uppercase tracking-widest mb-6">
          Think. Create. Inspire.
        </m.p>
        <m.h2 {...titleMotion} className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
          Your Idea Can <span className="text-amber-400">Change</span>
          <br />
          The Future.
        </m.h2>
        <m.p {...descMotion} className="text-body-muted text-lg max-w-xl mx-auto mb-10">
          Don&apos;t wait. Submit your idea before <strong className="text-white">{meta.deadline}</strong> and
          showcase it at the RCF Career Fair on <strong className="text-white">{meta.eventDate}</strong>.
        </m.p>
        <m.div {...ctaMotion}>
          <Button
            asChild
            size="lg"
            className="bg-amber-500 hover:bg-amber-400 text-black font-semibold border-none h-16 px-12 text-lg shadow-[0_0_60px_-10px_rgba(245,158,11,0.7)]"
          >
            <a href={meta.submitFormUrl} target="_blank" rel="noopener noreferrer">
              Submit IDEA
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </m.div>
      </div>
    </section>
  );
}
