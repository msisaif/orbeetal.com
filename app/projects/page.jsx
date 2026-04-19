import { PageHero } from "@/components/common/PageHero";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { company } from "@/data/company";
import { pages } from "@/data/pages";

export const metadata = pages.projects.metadata;

export default function ProjectsPage() {
  const { portfolio } = company;
  const { hero } = pages.projects;
  return (
    <>
      <PageHero
        kicker={hero.kicker}
        title={hero.title}
        subtitle={hero.subtitle}
      />
      <section className="border-b border-border-subtle/60 bg-bg-surface/30 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="font-heading text-3xl font-bold text-text-primary md:text-4xl">
            <span className="text-text-primary">
              {portfolio.pageIntro.titleBefore}
            </span>
            <span className="text-gradient">{portfolio.pageIntro.titleAccent}</span>
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-secondary md:text-lg">
            {portfolio.pageIntro.description}
          </p>
        </div>
      </section>
      <section className="border-b border-border-subtle/60 bg-bg-surface/20 py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="font-heading text-xl font-bold text-text-primary">
            {portfolio.origins.title}
          </h2>
          <p className="mt-1 text-sm text-text-secondary">
            {portfolio.origins.subtitle}
          </p>
        </div>
      </section>
      <section className="border-b border-border-subtle/60 py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="font-heading text-xl font-bold text-text-primary">
            {portfolio.jointVentures.title}
          </h2>
          <p className="mt-1 text-sm text-text-secondary">
            {portfolio.jointVentures.subtitle}
          </p>
        </div>
      </section>
      <ProjectsGrid />
    </>
  );
}
