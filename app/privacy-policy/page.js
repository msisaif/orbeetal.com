import { LegalPageLayout } from "@/components/pages/legal/LegalPageLayout";
import { getLegalPrivacy } from "@/lib/content/legal.js";

export async function generateMetadata() {
  const { pageMeta } = await getLegalPrivacy();
  return pageMeta;
}

export default async function PrivacyPolicyPage() {
  const { hero, lastUpdated, sections } = await getLegalPrivacy();

  return (
    <LegalPageLayout
      hero={hero}
      lastUpdated={lastUpdated}
      sections={sections}
    />
  );
}
