"use client";

import { m } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSafeMotion } from "@/hooks/useSafeMotion";

export function CvSubmitClosingSection({ meta }) {
  const taglineMotion = useSafeMotion({ initial: { opacity: 0, y: 10 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } });
  const titleMotion = useSafeMotion({ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8, delay: 0.1 } });
  const descMotion = useSafeMotion({ initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7, delay: 0.2 } });
  const ctaMotion = useSafeMotion({ initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7, delay: 0.3 } });

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 rounded-full bg-primary/10 blur-[150px]" />
      </div>
      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
        <m.p {...taglineMotion} className="text-amber-400 text-sm font-medium uppercase tracking-widest mb-6">
          Your Career Starts Here
        </m.p>
        <m.h2 {...titleMotion} className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
          Submit Your CV, <br />
          <span className="text-gradient">Shape Your Future.</span>
        </m.h2>
        <m.p {...descMotion} className="text-body-muted text-lg max-w-xl mx-auto mb-10">
          Meet top recruiters at <strong className="text-white">{meta.venue}</strong> on{" "}
          <strong className="text-white">{meta.eventDate}</strong>.
        </m.p>
        <m.div {...ctaMotion}>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white border-none h-16 px-12 text-lg shadow-[0_0_60px_-10px_rgba(0,112,243,0.6)]"
          >
            <a href="#cv-form">
              Submit Your CV <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </m.div>
      </div>
    </section>
  );
}
