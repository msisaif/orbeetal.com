import { PageHero } from "@/components/common/PageHero";
import { ProductCard } from "@/components/ui/ProductCard";
import { products } from "@/data/products";
import { pages } from "@/data/pages";

export const metadata = pages.products.metadata;

export default function ProductsPage() {
  const { hero } = pages.products;
  const ordered = [...products].sort((a, b) =>
    a.featured === b.featured ? 0 : a.featured ? -1 : 1
  );

  return (
    <>
      <PageHero
        kicker={hero.kicker}
        title={hero.title}
        subtitle={hero.subtitle}
      />
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-2 lg:px-10">
          {ordered.map((p) => (
            <ProductCard key={p.slug} product={p} featured={!!p.featured} />
          ))}
        </div>
      </section>
    </>
  );
}
