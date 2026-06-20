import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { PortfolioPageContent } from "@/components/sections/PortfolioPageContent";
import { portfolioPageMeta } from "@/data/portfolio.js";

export const metadata = portfolioPageMeta;

export default function PortfolioPage() {
  return (
    <PageLayout>
      <PageHero
        tagline="Our Portfolio"
        title="Projects We're"
        titleHighlight="Proud Of"
        description="From news portals to EdTech platforms, each project is built with precision, purpose, and a relentless focus on delivering real-world impact."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Portfolio" }]}
      />
      <PortfolioPageContent />
    </PageLayout>
  );
}
