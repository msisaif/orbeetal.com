import { PageLayout } from "@/components/layout/PageLayout";
import { CvSubmitLanding } from "@/components/pages/cv-submit/CvSubmitLanding";
import { getCvSubmitPageMeta, getCvSubmitContent } from "@/lib/content/events.js";
import { getRuetDepartments } from "@/lib/content/universities.js";
import { getSiteConfig } from "@/lib/content/siteConfig.js";
import { isCvSubmitEnabled } from "@/lib/siteFeatures.js";

export async function generateMetadata() {
  return getCvSubmitPageMeta();
}

export default async function CvSubmitPage() {
  const siteConfig = await getSiteConfig();

  if (isCvSubmitEnabled(siteConfig)) {
    const [content, ruetDepartments] = await Promise.all([
      getCvSubmitContent(),
      getRuetDepartments(),
    ]);
    return (
      <PageLayout>
        <CvSubmitLanding content={content} ruetDepartments={ruetDepartments} />
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">CV Submit is not active</h1>
        <p className="text-lg text-muted-foreground">
          Please check back later for updates on CV Submit.
        </p>
      </div>
    </PageLayout>
  );
}
