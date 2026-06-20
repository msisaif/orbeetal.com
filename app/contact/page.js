import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { ContactPageContent } from "@/components/sections/ContactPageContent";
import { contactPageMeta } from "@/data/contact.js";

export const metadata = contactPageMeta;

export default function ContactPage() {
  return (
    <PageLayout>
      <PageHero
        tagline="Get In Touch"
        title="Ready to"
        titleHighlight="Launch?"
        description="Reach out and let's start building something exceptional together. We're based in Dhaka, Bangladesh and serve clients across the globe."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <ContactPageContent />
    </PageLayout>
  );
}
