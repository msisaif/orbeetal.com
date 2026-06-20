import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { AboutPageContent } from "@/components/pages/about/AboutPageContent";
import { getAboutPageMeta, getAboutContent } from "@/lib/content/about.js";

export async function generateMetadata() {
  return getAboutPageMeta();
}

export default async function AboutPage() {
  const aboutContent = await getAboutContent();

  return (
    <PageLayout>
      <PageHero
        tagline="About Orbeetal"
        title="One of the Fastest Ways to"
        titleHighlight="Business Growth"
        description="We combine strategy, design, and engineering to deliver solutions that move the needle for ambitious businesses."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
      />
      <AboutPageContent {...aboutContent} />
    </PageLayout>
  );
}
