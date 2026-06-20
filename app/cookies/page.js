import { LegalPageLayout } from "@/components/pages/legal/LegalPageLayout";
import {
  cookiesPageMeta,
  cookiesHero,
  cookiesLastUpdated,
  cookiesSections,
} from "@/data/legal/index.js";

export const metadata = cookiesPageMeta;

export default function CookiesPage() {
  return (
    <LegalPageLayout
      hero={cookiesHero}
      lastUpdated={cookiesLastUpdated}
      sections={cookiesSections}
    />
  );
}
