"use client";

import { SafeImage } from "@/components/common/SafeImage";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { GlowButton } from "./GlowButton";
import { cn } from "@/lib/utils";

export function ProductCard({ product, featured }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-2xl border border-border-subtle bg-bg-card",
        featured && "ring-2 ring-secondary/60 shadow-[0_0_40px_rgba(37,131,197,0.25)]"
      )}
      {...(reduce ? {} : { whileHover: { y: -8 } })}
    >
      <div className="relative flex items-center justify-center border-b border-border-subtle bg-bg-surface/50 p-8">
        <div className="relative h-20 w-20">
          <SafeImage
            src={product.image}
            alt=""
            fill
            className="object-contain"
            sizes="80px"
          />
        </div>
        {featured ? (
          <span className="absolute right-4 top-4 rounded-full bg-secondary/20 px-3 py-1 text-xs font-semibold text-accent">
            Featured
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-xl font-bold text-text-primary">
          <Link
            href={`/products/${product.slug}`}
            className="hover:text-accent transition-colors"
          >
            {product.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-text-secondary leading-relaxed">
          {product.description}
        </p>
        <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {product.features.map((f) => (
            <li
              key={f}
              className="flex items-center gap-2 text-sm text-text-primary/90"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-secondary" />
              {f}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <GlowButton href="/contact">Get In Touch</GlowButton>
        </div>
      </div>
    </motion.div>
  );
}
