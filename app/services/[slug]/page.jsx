import { SafeImage } from "@/components/common/SafeImage";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/common/PageHero";
import { GlowButton } from "@/components/ui/GlowButton";
import { resolveServicePage } from "@/data/services";

export async function generateStaticParams() {
  const { expertiseServices, serviceOfferings } = await import("@/data/services");
  const slugs = new Set();
  expertiseServices.forEach((e) => slugs.add(e.slug));
  serviceOfferings.forEach((o) => slugs.add(o.slug));
  return Array.from(slugs).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const r = resolveServicePage(slug);
  if (!r || (!r.expertise && !r.offering)) return { title: "Service" };
  const title = r.offering?.name ?? r.expertise?.title ?? "Service";
  const description =
    r.offering?.description ?? r.expertise?.shortDescription ?? "";
  return { title, description };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const r = resolveServicePage(slug);
  if (!r || (!r.expertise && !r.offering)) notFound();

  const title = r.offering?.name ?? r.expertise?.title ?? "Service";
  const lead = r.offering?.description ?? r.expertise?.shortDescription ?? "";

  return (
    <>
      <PageHero kicker="Service" title={title} subtitle={lead} />
      <section className="py-16 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:px-10">
          <div className="flex-1 space-y-6">
            {r.expertise ? (
              <div>
                <h2 className="font-heading text-xl font-bold text-text-primary">
                  Overview
                </h2>
                <p className="mt-2 text-text-secondary leading-relaxed">
                  {r.expertise.shortDescription}
                </p>
                {r.expertise.highlights?.length ? (
                  <div className="mt-6">
                    <h3 className="font-heading text-lg font-semibold text-text-primary">
                      Where we focus
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {r.expertise.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex gap-2 text-sm text-text-secondary"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            ) : null}
            {r.offering ? (
              <div>
                <h2 className="font-heading text-xl font-bold text-text-primary">
                  How we deliver
                </h2>
                <ul className="mt-3 space-y-3">
                  {r.offering.bullets.map((b) => (
                    <li
                      key={b}
                      className="rounded-xl border border-border-subtle bg-bg-card px-4 py-3 text-sm text-text-primary"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <div className="flex flex-wrap gap-4">
              <GlowButton href="/contact">Start a project</GlowButton>
              <Link
                href="/services"
                className="inline-flex items-center rounded-xl border border-secondary px-6 py-3 text-sm font-semibold text-secondary hover:bg-secondary/10"
              >
                All services
              </Link>
            </div>
          </div>
          {r.offering ? (
            <div className="relative mx-auto h-80 w-full max-w-md shrink-0 lg:h-[420px]">
              <SafeImage
                src={r.offering.image}
                alt=""
                fill
                className="rounded-2xl border border-border-subtle bg-bg-card object-contain p-6"
              />
            </div>
          ) : r.expertise ? (
            <div className="relative mx-auto h-48 w-full max-w-xs shrink-0">
              <SafeImage
                src={r.expertise.icon}
                alt=""
                fill
                className="object-contain"
              />
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
