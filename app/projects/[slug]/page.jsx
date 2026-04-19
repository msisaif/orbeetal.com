import { SafeAvatarImage, SafeImage } from "@/components/common/SafeImage";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/common/PageHero";
import { GlowButton } from "@/components/ui/GlowButton";
import { getProjectBySlug, projects } from "@/data/projects";
import { clipMetaDescription } from "@/data/pages";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getProjectBySlug(slug);
  if (!p) return { title: "Project" };
  return {
    title: p.title,
    description: clipMetaDescription(
      `${p.subtitle} ${p.detailBody ?? ""}`.trim()
    ),
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const p = getProjectBySlug(slug);
  if (!p) notFound();

  return (
    <>
      <PageHero kicker={p.category} title={p.title} subtitle={p.subtitle} />
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-10">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border-subtle lg:aspect-[4/3]">
            <SafeImage
              src={p.image}
              alt={p.title}
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
              priority
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-secondary">
              {p.organizationName}
            </p>
            {p.partnerName ? (
              <p className="mt-2 text-sm text-text-secondary">
                Partner: {p.partnerName}
              </p>
            ) : null}
            {p.detailBody ? (
              <p className="mt-4 text-text-secondary leading-relaxed">
                {p.detailBody}
              </p>
            ) : null}
            {p.supervisor ? (
              <div className="mt-4 flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <SafeAvatarImage
                    src={p.supervisor.image}
                    alt={p.supervisor.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <p className="font-medium text-text-primary">
                    {p.supervisor.name}
                  </p>
                  <p className="text-xs text-text-secondary">{p.supervisor.role}</p>
                </div>
              </div>
            ) : null}
            <ul className="mt-8 space-y-2">
              {p.features.map((f) => (
                <li
                  key={f}
                  className="rounded-xl border border-border-subtle bg-bg-card px-4 py-2 text-sm text-text-primary"
                >
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-4">
              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-xl bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-semibold text-white"
                >
                  Visit live site
                </a>
              ) : null}
              <GlowButton href="/contact" variant="outline">
                Plan something similar
              </GlowButton>
              <Link
                href="/projects"
                className="inline-flex items-center rounded-xl border border-border-subtle px-6 py-3 text-sm font-semibold text-text-secondary hover:border-secondary/50"
              >
                All projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
