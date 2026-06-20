import { LegalPageLayout } from "@/components/pages/legal/LegalPageLayout";
import { termsPageMeta, termsHero, termsLastUpdated, termsSections } from "@/data/legal/index.js";

export const metadata = termsPageMeta;

export default function TermsPage() {
  return (
    <LegalPageLayout
      hero={termsHero}
      lastUpdated={termsLastUpdated}
      sections={termsSections}
    />
  );
}
