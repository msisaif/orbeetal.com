"use client";

import { Users, FolderKanban, Hourglass, Sparkles } from "lucide-react";
import { company } from "@/data/company";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { StatCard } from "@/components/ui/StatCard";

const icons = [Users, FolderKanban, Hourglass, Sparkles];

export function StatsSection() {
  return (
    <section id="stats" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {company.stats.map((stat, idx) => (
              <StatCard key={stat.id} stat={stat} icon={icons[idx] ?? Sparkles} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
