"use client";

import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { ServicesGrid } from "./ServicesGrid";

export function Services() {
  return (
    <Section id="services" className="py-24 md:py-32 relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeader
          tagline="What We Offer"
          title="Strategic"
          titleHighlight="Capabilities"
          description="A full-spectrum armory of digital services. We don't just build software; we engineer competitive advantages."
          className="mb-20"
        />
        <ServicesGrid />
      </div>
    </Section>
  );
}
