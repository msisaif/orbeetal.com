import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import { getNavLinks } from "@/lib/content/navigation.js";
import {
  getSiteConfig,
  getIdeaContestBannerContent,
  getCvSubmitBannerContent,
} from "@/lib/content/siteConfig.js";
import { getEnabledEventNavLinks, resolveTopBanner } from "@/lib/siteFeatures.js";

export async function PageLayout({ children, className }) {
  const [navLinks, siteConfig, ideaContestBanner, cvSubmitBanner] = await Promise.all([
    getNavLinks(),
    getSiteConfig(),
    getIdeaContestBannerContent(),
    getCvSubmitBannerContent(),
  ]);

  const eventLinks = getEnabledEventNavLinks(siteConfig);
  const banner = resolveTopBanner(siteConfig, {
    ideaContest: ideaContestBanner,
    cvSubmit: cvSubmitBanner,
  });

  return (
    <div
      className={cn(
        "min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/30 selection:text-white",
        className
      )}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>
      <Navbar navLinks={navLinks} eventLinks={eventLinks} banner={banner} />
      <main id="main-content">{children}</main>
      <Footer navLinks={navLinks} />
    </div>
  );
}
