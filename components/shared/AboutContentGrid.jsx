"use client";

import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MotionFadeIn } from "@/components/common/MotionFadeIn";
import { StatCard } from "@/components/ui/glass-card";
export function AboutContentGrid({ paragraphs = [], showCta = false, stats, whyChooseUs }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <MotionFadeIn x={-20} y={0} duration={0.7}>
        {paragraphs.map((text, i) => (
          <p
            key={i}
            className={`text-xl text-white/70 font-light leading-relaxed ${
              i < paragraphs.length - 1 ? "mb-8" : showCta ? "mb-10" : "mb-6"
            }`}
          >
            {text}
          </p>
        ))}
        <ul className={`space-y-4 ${showCta ? "mb-10" : ""}`}>
          {whyChooseUs.map((item) => (
            <li key={item.title} className="flex items-start gap-3 text-white/80">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>
                <strong className="text-white">{item.title}</strong> — {item.description}
              </span>
            </li>
          ))}
        </ul>
        {showCta && (
          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground border-none h-12 px-8">
              Work With Us <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        )}
      </MotionFadeIn>

      <div className="grid grid-cols-2 gap-6">
        {stats.map((stat, i) => (
          <MotionFadeIn key={stat.label} delay={i * 0.1}>
            <StatCard value={stat.value} label={stat.label} />
          </MotionFadeIn>
        ))}
      </div>
    </div>
  );
}
