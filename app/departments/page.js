import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { DepartmentsPageContent } from "@/components/pages/departments/DepartmentsPageContent";
import { getDepartmentsPageMeta, getDepartments } from "@/lib/content/departments.js";

export async function generateMetadata() {
  return getDepartmentsPageMeta();
}

export default async function DepartmentsPage() {
  const departments = await getDepartments();

  return (
    <PageLayout>
      <PageHero
        tagline="Our Structure"
        title="Our"
        titleHighlight="Departments"
        description="Seven specialized departments working in unison to deliver excellence across every dimension of your project."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Departments" }]}
      />
      <DepartmentsPageContent departments={departments} />
    </PageLayout>
  );
}
