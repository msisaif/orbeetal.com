import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { DepartmentsPageContent } from "@/components/sections/DepartmentsPageContent";
import { departmentsPageMeta } from "@/data/departments.js";

export const metadata = departmentsPageMeta;

export default function DepartmentsPage() {
  return (
    <PageLayout>
      <PageHero
        tagline="Our Structure"
        title="Our"
        titleHighlight="Departments"
        description="Seven specialized departments working in perfect unison — each a centre of excellence delivering mastery across every dimension of your project."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Departments" }]}
      />
      <DepartmentsPageContent />
    </PageLayout>
  );
}
