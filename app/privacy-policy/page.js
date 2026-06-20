import { LegalPageLayout } from "@/components/pages/legal/LegalPageLayout";
import {
  privacyPageMeta,
  privacyHero,
  privacyLastUpdated,
  privacySections,
} from "@/data/legal/index.js";

export const metadata = privacyPageMeta;

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      hero={privacyHero}
      lastUpdated={privacyLastUpdated}
      sections={privacySections}
    />
  );
}
