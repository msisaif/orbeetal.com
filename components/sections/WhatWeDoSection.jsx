"use client";

import { SafeImage } from "@/components/common/SafeImage";
import { FaBullseye, FaEye } from "react-icons/fa";
import { company, aboutImages } from "@/data/company";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GlowButton } from "@/components/ui/GlowButton";

export function WhatWeDoSection() {
  return (
    <section className="py-16 md:py-24 border-y border-border-subtle/80 bg-bg-surface/30">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 md:flex-row md:px-10 lg:gap-16">
        <ScrollReveal className="w-full md:w-1/2">
          <SafeImage
            src={aboutImages.meeting}
            alt="Orbeetal IT Solutions"
            width={640}
            height={420}
            className="w-full rounded-2xl border border-border-subtle object-cover"
          />
        </ScrollReveal>
        <ScrollReveal className="w-full md:w-1/2">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
            {company.whatWeDoTitle}
          </p>
          <h2 className="font-heading mt-2 text-3xl font-bold text-text-primary md:text-4xl">
            {company.whatWeDoSubtitle}
          </h2>
          <p className="mt-4 text-text-secondary leading-relaxed">
            {company.whatWeDoBody}
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border-subtle bg-bg-card p-4">
              <div className="mb-3 inline-flex rounded-lg bg-secondary/15 p-2 text-secondary">
                <FaEye size={22} />
              </div>
              <h3 className="font-semibold text-text-primary">
                {company.approachTitle}
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                {company.approachDescription}
              </p>
            </div>
            <div className="rounded-2xl border border-border-subtle bg-bg-card p-4">
              <div className="mb-3 inline-flex rounded-lg bg-secondary/15 p-2 text-secondary">
                <FaBullseye size={22} />
              </div>
              <h3 className="font-semibold text-text-primary">
                {company.expertiseHighlightTitle}
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                {company.expertiseHighlightDescription}
              </p>
            </div>
          </div>
          <div className="mt-8">
            <GlowButton href="/services">Explore Services</GlowButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
