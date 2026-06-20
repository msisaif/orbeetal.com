"use client";

import { ContactInfoPanel } from "@/components/shared/ContactInfoPanel";

export function ContactPageContent() {
  return (
    <section className="py-20 md:py-28 relative z-20 overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-125 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <ContactInfoPanel />
      </div>
    </section>
  );
}
