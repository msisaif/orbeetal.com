import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { PortfolioPageContent } from "@/components/pages/portfolio/PortfolioPageContent";
import { getPortfolioPageMeta, getPortfolioProjects } from "@/lib/content/portfolio.js";
import { getClients } from "@/lib/content/clients.js";

export async function generateMetadata() {
  return getPortfolioPageMeta();
}

export default async function PortfolioPage() {
  const [portfolioProjects, clients] = await Promise.all([
    getPortfolioProjects(),
    getClients(),
  ]);

  return (
    <PageLayout>
      <PageHero
        tagline="Our Portfolio"
        title="Projects We're"
        titleHighlight="Proud Of"
        description="From news portals to EdTech platforms, each project is built with precision, purpose, and a relentless focus on delivering real-world impact."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Portfolio" }]}
      />
      <PortfolioPageContent portfolioProjects={portfolioProjects} clients={clients} />
    </PageLayout>
  );
}
