import { DepartmentsGrid } from "@/components/shared/DepartmentsGrid";
import { HowWeWorkSection } from "@/components/pages/departments/HowWeWorkSection";

export function DepartmentsPageContent({ departments }) {
  return (
    <>
      <section className="py-20 md:py-28 relative z-20">
        <div className="container mx-auto px-6 md:px-12">
          <DepartmentsGrid departments={departments} />
        </div>
      </section>

      <HowWeWorkSection />
    </>
  );
}
