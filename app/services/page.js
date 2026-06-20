import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { ServicesPageContent } from "@/components/pages/services/ServicesPageContent";
import { getServicesPageMeta } from "@/lib/content/services.js";
import { getServices } from "@/lib/content/services.js";
import { getProcessSteps } from "@/lib/content/process.js";

export async function generateMetadata() {
  return getServicesPageMeta();
}

export default async function ServicesPage() {
  const [services, processSteps] = await Promise.all([getServices(), getProcessSteps()]);

  return (
    <PageLayout>
      <PageHero
        tagline="What We Offer"
        title="Strategic"
        titleHighlight="Capabilities"
        description="A full-spectrum armory of digital services. We don't just build software — we engineer competitive advantages that move the needle for your business."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <ServicesPageContent services={services} processSteps={processSteps} />
    </PageLayout>
  );
}
