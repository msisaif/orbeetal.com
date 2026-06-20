"use client";

import { m } from "framer-motion";
import Link from "next/link";
import { Trophy, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function IdeaContestHero({ meta }) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-white/5 pt-24 pb-16">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-150 h-150 rounded-full bg-amber-500/10 blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-125 h-125 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
        <m.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-amber-400 text-sm font-medium uppercase tracking-widest mb-6"
        >
          {meta.organizer} Presents
        </m.p>

        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h1 className="text-7xl md:text-9xl font-display font-bold leading-none">
            <span className="text-amber-400">IDEA</span>
          </h1>
          <h1 className="text-7xl md:text-9xl font-display font-bold leading-none mb-6">
            <span className="text-white">CONTEST</span>
          </h1>
        </m.div>

        <m.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-primary text-base md:text-lg font-medium uppercase tracking-widest mb-6"
        >
          Ideas Today, Impact Tomorrow
        </m.p>

        <m.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Showcase your innovative ideas and creative concepts that can solve real-world problems and build a
          better future.
        </m.p>

        <m.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="inline-flex items-center gap-3 glass-panel border border-amber-400/30 rounded-full px-6 py-3 mb-10"
        >
          <Trophy className="w-5 h-5 text-amber-400" />
          <span className="text-amber-400 font-display font-semibold text-base">Prize Pool</span>
          <span className="w-px h-5 bg-white/20" />
          <span className="text-white font-display font-bold text-2xl">{meta.prize}</span>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-amber-500 hover:bg-amber-400 text-black font-semibold border-none rounded-sm h-14 px-10 text-base shadow-[0_0_50px_-10px_rgba(245,158,11,0.7)]"
          >
            <a href={meta.submitFormUrl} target="_blank" rel="noopener noreferrer">
              Submit IDEA
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/20 hover:bg-white/5 rounded-sm h-14 px-8 text-white text-base"
          >
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Link>
          </Button>
        </m.div>
      </div>
    </section>
  );
}
