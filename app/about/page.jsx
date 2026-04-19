import { SafeAvatarImage, SafeImage } from "@/components/common/SafeImage";
import { PageHero } from "@/components/common/PageHero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { departments } from "@/data/departments";
import { pages } from "@/data/pages";
import { TeamSection } from "@/components/sections/TeamSection";

export const metadata = pages.about.metadata;

export default function AboutPage() {
  const { hero, departments: deptIntro } = pages.about;
  return (
    <>
      <PageHero
        kicker={hero.kicker}
        title={hero.title}
        subtitle={hero.subtitle}
      />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="font-heading text-center text-3xl font-bold text-text-primary md:text-4xl">
            {deptIntro.titleBefore}
            <span className="text-gradient">{deptIntro.titleAccent}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-text-secondary">
            {deptIntro.subtitle}
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {departments.map((d) => (
              <ScrollReveal key={d.name}>
                <article className="flex h-full flex-col rounded-2xl border border-border-subtle bg-bg-card p-5">
                  <div className="relative mb-4 h-12 w-12">
                    <SafeImage
                      src={d.icon}
                      alt=""
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-text-primary">{d.name}</h3>
                  <p className="mt-2 text-sm text-text-secondary">{d.description}</p>
                  <div className="mt-4 flex items-center gap-3 border-t border-border-subtle pt-4">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full">
                      <SafeAvatarImage
                        src={d.director.photo}
                        alt={d.director.name}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-text-primary">
                        {d.director.name}
                      </p>
                      <p className="text-xs text-text-secondary">Director</p>
                    </div>
                  </div>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {d.roles.slice(0, 3).map((r) => (
                      <li
                        key={r}
                        className="rounded-full bg-bg-surface px-2 py-0.5 text-xs text-text-secondary"
                      >
                        {r}
                      </li>
                    ))}
                  </ul>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <TeamSection />
    </>
  );
}
