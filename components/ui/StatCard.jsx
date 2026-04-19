"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";
export function StatCard({ stat, icon: Icon }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="rounded-2xl border border-border-subtle bg-bg-card p-8 text-center glow-hover transition-shadow"
      {...(reduce ? {} : { whileHover: { y: -8 } })}
    >
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/40 to-secondary/30 text-accent">
        <Icon className="h-8 w-8" aria-hidden />
      </div>
      <p className="font-heading text-3xl font-bold text-text-primary md:text-4xl">
        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
      </p>
      <p className="mt-2 text-sm font-medium text-text-secondary md:text-base">
        {stat.label}
      </p>
    </motion.div>
  );
}
