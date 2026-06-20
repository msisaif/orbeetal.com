import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";

export function LegalPageLayout({ hero, lastUpdated, sections }) {
  return (
    <PageLayout>
      <PageHero {...hero} />

      <section className="py-20 md:py-28 relative z-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <p className="text-white/65 text-sm mb-12">Last updated: {lastUpdated}</p>
            <div className="space-y-12">
              {sections.map((s) => (
                <div key={s.title}>
                  <h2 className="text-xl font-display font-semibold text-white mb-4">{s.title}</h2>
                  <p className="text-white/65 leading-relaxed whitespace-pre-line">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
