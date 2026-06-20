"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSafeMotion } from "@/hooks/useSafeMotion";

export function PortfolioCtaSection() {
  const titleMotion = useSafeMotion({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  });
  const descMotion = useSafeMotion({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay: 0.1 },
  });
  const ctaMotion = useSafeMotion({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay: 0.2 },
  });

  return (
    <section className="py-20 border-t border-white/5 relative z-20 overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-primary/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <m.h2 {...titleMotion} className="text-4xl md:text-5xl font-display font-bold mb-6">
          Your Project Could Be <span className="text-gradient">Next</span>
        </m.h2>
        <m.p {...descMotion} className="text-xl text-body-muted mb-10 max-w-xl mx-auto">
          Let&apos;s build something together that you&apos;ll be proud to show the world.
        </m.p>
        <m.div {...ctaMotion} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="h-14 px-10 bg-primary hover:bg-primary/90 text-white border-none shadow-[0_0_40px_-10px_rgba(0,112,243,0.5)]"
          >
            <Link href="/contact">
              Start a Project <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-14 px-10 border-white/20 hover:bg-white/5">
            <Link href="/services">Explore Services</Link>
          </Button>
        </m.div>
      </div>
    </section>
  );
}
