"use client";

import { m } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSafeMotion } from "@/hooks/useSafeMotion";

export function CvSubmitHero({ meta }) {
  const taglineMotion = useSafeMotion({ initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } });
  const titleMotion = useSafeMotion({ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.1 } });
  const subtitleMotion = useSafeMotion({ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: 0.3 } });
  const descMotion = useSafeMotion({ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: 0.4 } });
  const ctaMotion = useSafeMotion({ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: 0.6 } });

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-white/5 hero-top-spacing pb-16">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-150 h-150 rounded-full bg-primary/10 blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-125 h-125 rounded-full bg-amber-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
        <m.p {...taglineMotion} className="text-primary text-sm font-medium uppercase tracking-widest mb-6">
          {meta.organizer} · {meta.edition} Edition
        </m.p>

        <m.div {...titleMotion}>
          <h1 className="text-hero-event font-display font-bold text-balance">
            <span className="text-gradient">CAREER</span>
          </h1>
          <h1 className="text-hero-event font-display font-bold text-balance mb-6">
            <span className="text-white">FAIR</span>
          </h1>
        </m.div>

        <m.p {...subtitleMotion} className="text-amber-400 text-base md:text-lg font-medium uppercase tracking-widest mb-6">
          Your Career Starts Here
        </m.p>

        <m.p {...descMotion} className="text-body-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Submit your CV and connect with top recruiters at {meta.venue} on{" "}
          <strong className="text-white">{meta.eventDate}</strong>.
        </m.p>

        <m.div {...ctaMotion} className="flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white border-none h-14 px-10 text-base shadow-[0_0_50px_-10px_rgba(0,112,243,0.6)]"
          >
            <a href="#cv-form">
              Submit Your CV <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/20 hover:bg-white/5 h-14 px-8 text-white text-base">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Link>
          </Button>
        </m.div>
      </div>
    </section>
  );
}
