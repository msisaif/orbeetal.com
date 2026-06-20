import { LegalPageLayout } from "@/components/pages/legal/LegalPageLayout";
import { getLegalCookies } from "@/lib/content/legal.js";

export async function generateMetadata() {
  const { pageMeta } = await getLegalCookies();
  return pageMeta;
}

export default async function CookiesPage() {
  const { hero, lastUpdated, sections } = await getLegalCookies();

  return (
    <LegalPageLayout
      hero={hero}
      lastUpdated={lastUpdated}
      sections={sections}
    />
  );
}
