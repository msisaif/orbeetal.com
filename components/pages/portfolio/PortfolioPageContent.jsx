import { ClientsBar } from "@/components/shared/ClientsBar";
import { PortfolioGrid } from "@/components/pages/portfolio/PortfolioGrid";
import { PortfolioCtaSection } from "@/components/pages/portfolio/PortfolioCtaSection";

export function PortfolioPageContent({ portfolioProjects, clients }) {
  return (
    <>
      <PortfolioGrid portfolioProjects={portfolioProjects} />
      <ClientsBar clients={clients} />
      <PortfolioCtaSection />
    </>
  );
}
