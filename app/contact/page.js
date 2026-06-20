import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { ContactPageContent } from "@/components/pages/contact/ContactPageContent";
import { getContactPageMeta, getContactInfo } from "@/lib/content/contact.js";

export async function generateMetadata() {
  return getContactPageMeta();
}

export default async function ContactPage() {
  const contactInfo = await getContactInfo();

  return (
    <PageLayout>
      <PageHero
        tagline="Get In Touch"
        title="Ready to"
        titleHighlight="Launch?"
        description="Reach out and let's start building something exceptional together."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <ContactPageContent contactInfo={contactInfo} />
    </PageLayout>
  );
}
