"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { GlowButton } from "@/components/ui/GlowButton";
import { company } from "@/data/company";

const ROTATING = ["Digital Solutions", "Powerful Software", "Real Results"];

export function HeroSection() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI((v) => (v + 1) % ROTATING.length), 2800);
    return () => clearInterval(id);
  }, [reduce]);

  const numericStats = company.stats.filter((s) => s.value !== null);

  return (
    <section className="relative min-h-[100dvh] overflow-hidden border-b border-border-subtle">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-bg-dark to-bg-dark" />
      <div className="absolute inset-0 bg-grid-dots opacity-40" />
      <div className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-secondary/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-primary/30 blur-[120px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-6 pb-16 pt-28 lg:flex-row lg:items-center lg:gap-8 lg:px-10 lg:pt-32 lg:pb-24">
        <div className="flex-1 space-y-6">
          <Badge>Your Trusted IT Partner</Badge>
          <h1 className="font-heading text-4xl font-bold leading-tight text-text-primary sm:text-5xl lg:text-6xl">
            Transforming Ideas Into{" "}
            <span className="text-gradient block min-h-[1.2em] sm:inline sm:min-h-0">
              {ROTATING[i]}
            </span>
          </h1>
          <p className="max-w-xl text-lg text-text-secondary">
            {company.heroHeadline}. {company.heroKicker}.
          </p>
          <p className="max-w-xl text-sm text-text-secondary/90">
            {company.shortDescription}
          </p>
          <div className="flex flex-wrap gap-4">
            <GlowButton href="/projects">View Our Work</GlowButton>
            <GlowButton href="/contact" variant="outline">
              Talk to Us
            </GlowButton>
          </div>
          <div className="flex flex-wrap gap-6 border-t border-border-subtle pt-6 text-sm text-text-secondary">
            {numericStats.map((s) => (
              <div key={s.id}>
                <span className="font-heading text-2xl font-bold text-text-primary">
                  {s.value}
                  {s.suffix}
                </span>
                <span className="ml-2">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-center lg:justify-end">
          <motion.div
            className="relative h-[280px] w-full max-w-md lg:h-[360px]"
            animate={
              reduce
                ? undefined
                : {
                    y: [0, -12, 0],
                  }
            }
            transition={
              reduce
                ? undefined
                : { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }
            aria-hidden
          >
            <svg
              viewBox="0 0 400 360"
              className="h-full w-full drop-shadow-[0_0_40px_rgba(79,163,224,0.35)]"
            >
              <defs>
                <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#28429a" />
                  <stop offset="100%" stopColor="#2583c5" />
                </linearGradient>
                <linearGradient id="g2" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4fa3e0" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#2583c5" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              <rect
                x="40"
                y="60"
                width="200"
                height="240"
                rx="24"
                fill="url(#g1)"
                opacity="0.35"
              />
              <rect
                x="120"
                y="40"
                width="200"
                height="240"
                rx="24"
                fill="url(#g2)"
                stroke="#4fa3e0"
                strokeWidth="2"
                opacity="0.9"
              />
              <circle cx="180" cy="160" r="36" fill="#080d1a" stroke="#4fa3e0" strokeWidth="2" />
              <path
                d="M160 160 L175 175 L200 145"
                fill="none"
                stroke="#4fa3e0"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <rect x="150" y="210" width="140" height="12" rx="6" fill="#e8edf8" opacity="0.25" />
              <rect x="150" y="232" width="100" height="12" rx="6" fill="#e8edf8" opacity="0.15" />
              {[0, 1, 2, 3].map((n) => (
                <circle
                  key={n}
                  cx={280 + n * 18}
                  cy={300}
                  r="6"
                  fill="#2583c5"
                  opacity={0.4 + n * 0.15}
                />
              ))}
            </svg>
          </motion.div>
        </div>
      </div>

      <a
        href="#stats"
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-text-secondary hover:text-accent"
        aria-label="Scroll to stats"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}
