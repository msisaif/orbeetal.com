import { LegalPageLayout } from "@/components/pages/legal/LegalPageLayout";
import { getLegalTerms } from "@/lib/content/legal.js";

export async function generateMetadata() {
  const { pageMeta } = await getLegalTerms();
  return pageMeta;
}

export default async function TermsPage() {
  const { hero, lastUpdated, sections } = await getLegalTerms();

  return (
    <LegalPageLayout
      hero={hero}
      lastUpdated={lastUpdated}
      sections={sections}
    />
  );
}
