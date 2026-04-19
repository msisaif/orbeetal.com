import { SafeImage } from "@/components/common/SafeImage";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/common/PageHero";
import { GlowButton } from "@/components/ui/GlowButton";
import { CheckCircle2 } from "lucide-react";
import { getProductBySlug, products } from "@/data/products";
import { clipMetaDescription } from "@/data/pages";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getProductBySlug(slug);
  if (!p) return { title: "Product" };
  return {
    title: p.title,
    description: clipMetaDescription(
      `${p.description} ${p.longDescription ?? ""}`.trim()
    ),
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const p = getProductBySlug(slug);
  if (!p) notFound();

  return (
    <>
      <PageHero kicker="Product" title={p.title} subtitle={p.description} />
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-10">
          <div className="space-y-6">
            <div className="relative mx-auto aspect-[9/16] max-w-sm overflow-hidden rounded-2xl border border-border-subtle bg-bg-card">
              <SafeImage
                src={p.imageScreen}
                alt={p.title}
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 400px"
              />
            </div>
          </div>
          <div>
            <div className="relative mb-6 h-20 w-20 shrink-0">
              <SafeImage
                src={p.image}
                alt=""
                fill
                className="object-contain"
                sizes="80px"
              />
            </div>
            {p.longDescription ? (
              <p className="mb-8 text-text-secondary leading-relaxed">
                {p.longDescription}
              </p>
            ) : null}
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-text-primary">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-4">
              <GlowButton href="/contact">Get In Touch</GlowButton>
              <Link
                href="/products"
                className="inline-flex items-center rounded-xl border border-secondary px-6 py-3 text-sm font-semibold text-secondary hover:bg-secondary/10"
              >
                All products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
