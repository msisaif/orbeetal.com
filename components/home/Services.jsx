import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ServicesGrid } from "@/components/shared/ServicesGrid";
import { getServices } from "@/lib/content/services.js";

export async function Services() {
  const services = await getServices();

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
        <ServicesGrid services={services} />
      </div>
    </Section>
  );
}
