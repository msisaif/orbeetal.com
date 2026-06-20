import { CallToAction } from "@/components/common/CallToAction";
import { ServicesGrid } from "@/components/shared/ServicesGrid";
import { ServicesHighlightsSection } from "@/components/pages/services/ServicesHighlightsSection";

export function ServicesPageContent({ services, processSteps }) {
  return (
    <>
      <section className="py-20 md:py-28 relative z-20">
        <div className="container mx-auto px-6 md:px-12">
          <ServicesGrid services={services} />
        </div>
      </section>

      <ServicesHighlightsSection processSteps={processSteps} />

      <CallToAction
        primaryAction={{ href: "/contact", label: "Initiate Project" }}
        secondaryAction={{ href: "/portfolio", label: "See Our Work" }}
      />
    </>
  );
}
