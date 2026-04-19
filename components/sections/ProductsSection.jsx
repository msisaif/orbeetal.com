"use client";

import { useMemo } from "react";
import { products } from "@/data/products";
import { company } from "@/data/company";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductCard } from "@/components/ui/ProductCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ProductsSection() {
  const ordered = useMemo(() => {
    const feat = products.filter((p) => p.featured);
    const rest = products.filter((p) => !p.featured);
    return [...feat, ...rest];
  }, []);

  return (
    <section id="products" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal>
          <SectionHeader
            kicker={company.productsHome.kicker}
            title={company.productsHome.title}
            subtitle={company.productsHome.subtitle}
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {ordered.map((p) => (
            <ScrollReveal key={p.slug}>
              <ProductCard product={p} featured={!!p.featured} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
