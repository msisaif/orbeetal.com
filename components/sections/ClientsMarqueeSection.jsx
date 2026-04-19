"use client";

import { SafeImage } from "@/components/common/SafeImage";
import { motion, useReducedMotion } from "framer-motion";
import { clients } from "@/data/clients";
import { company } from "@/data/company";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const row = [...clients, ...clients, ...clients];

export function ClientsMarqueeSection() {
  const reduce = useReducedMotion();

  return (
    <section className="py-16 md:py-20 border-t border-border-subtle/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal>
          <SectionHeader
            kicker={company.clientsSectionKicker}
            title={company.clientsSectionTitle}
          />
        </ScrollReveal>
      </div>
      <div className="relative mt-8 overflow-hidden">
        <motion.div
          className="flex w-max gap-6"
          animate={reduce ? undefined : { x: ["0%", "-33.333%"] }}
          transition={
            reduce
              ? undefined
              : { repeat: Infinity, ease: "linear", duration: 28 }
          }
        >
          {row.map((c, idx) => (
            <div
              key={`${c.name}-${idx}`}
              className="flex h-44 w-52 shrink-0 flex-col items-center justify-center rounded-2xl border border-border-subtle bg-bg-card p-4 shadow-lg"
            >
              <div className="relative mb-3 h-16 w-16">
                <SafeImage
                  src={c.logo}
                  alt={c.name}
                  fill
                  className="object-contain"
                  sizes="64px"
                />
              </div>
              <p className="text-center text-sm font-semibold text-text-primary">
                {c.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
