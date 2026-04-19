"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GlowButton } from "@/components/ui/GlowButton";

export function CTASection() {
  const reduce = useReducedMotion();

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-border-subtle bg-gradient-to-r from-primary/40 via-bg-card to-secondary/30 p-10 md:p-14"
          {...(reduce ? {} : { whileHover: { scale: 1.01 } })}
        >
          <div className="pointer-events-none absolute inset-0 bg-grid-dots opacity-30" />
          <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-heading text-3xl font-bold text-text-primary md:text-4xl">
                Ready to Start Your Project?
              </h2>
              <p className="mt-2 max-w-xl text-text-secondary">
                Tell us about your roadmap — we will help you design, build, and launch with confidence.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <GlowButton href="/contact">Get Free Consultation</GlowButton>
              <GlowButton href="/projects" variant="outline">
                View Our Work
              </GlowButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
