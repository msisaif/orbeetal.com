import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { slugify } from "@/lib/utils";

export function LegalPageLayout({ hero, lastUpdated, sections }) {
  const tocItems = sections.map((section) => ({
    title: section.title,
    id: `section-${slugify(section.title)}`,
  }));

  return (
    <PageLayout>
      <PageHero {...hero} />

      <section className="py-20 md:py-28 relative z-20">
        <div className="absolute inset-0 bg-white/[0.015] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <details className="lg:hidden mb-8 glass-panel rounded-panel p-4 border border-white/10">
            <summary className="text-sm font-medium text-white cursor-pointer">Table of Contents</summary>
            <ul className="mt-4 space-y-2">
              {tocItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-body-muted hover:text-primary text-sm">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </details>

          <div className="flex gap-12 max-w-5xl mx-auto">
            <aside className="hidden lg:block w-64 shrink-0">
              <nav aria-label="Table of contents" className="sticky top-32 glass-panel rounded-panel p-5 border border-white/10">
                <p className="text-xs uppercase tracking-widest text-body-muted mb-4">Contents</p>
                <ul className="space-y-3">
                  {tocItems.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="text-sm text-body-muted hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded-sm"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            <div className="flex-1 min-w-0">
              <p className="text-body-muted text-sm mb-12">Last updated: {lastUpdated}</p>
              <div className="space-y-8">
                {sections.map((section) => {
                  const id = `section-${slugify(section.title)}`;
                  return (
                    <div key={section.title} id={id} className="glass-panel rounded-panel p-6 md:p-8 border border-white/8">
                      <h2 className="text-xl font-display font-semibold text-white mb-4 scroll-mt-32">
                        {section.title}
                      </h2>
                      <p className="text-body-muted leading-relaxed whitespace-pre-line">{section.body}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
