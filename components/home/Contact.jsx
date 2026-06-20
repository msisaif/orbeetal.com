"use client";

import { SectionHeader } from "@/components/common/SectionHeader";
import { ContactInfoPanel } from "@/components/shared/ContactInfoPanel";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative z-20 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeader
          tagline="Get In Touch"
          title="Ready to"
          titleHighlight="Launch?"
          description="Reach out and let&apos;s start building something exceptional together."
          className="mb-16"
        />
        <ContactInfoPanel />
      </div>
    </section>
  );
}
