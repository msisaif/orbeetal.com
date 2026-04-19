"use client";

import { SafeImage } from "@/components/common/SafeImage";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ServiceCard({ service, href }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="gradient-border-wrap group h-full"
      {...(reduce ? {} : { whileHover: { y: -8 } })}
    >
      <div className="gradient-border-inner flex h-full flex-col p-6 md:p-8 glow-hover transition-shadow">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary p-3 shadow-lg shadow-[rgba(40,66,154,0.35)]">
          <div className="relative h-10 w-10">
            <SafeImage
              src={service.icon}
              alt=""
              fill
              className="object-contain"
              sizes="40px"
            />
          </div>
        </div>
        <h3 className="font-heading text-lg font-bold text-text-primary">
          {service.title}
        </h3>
        <div className="mt-3 flex gap-2">
          <span className="h-1 w-10 rounded-full bg-secondary" />
          <span className="h-1 w-4 rounded-full bg-accent/80" />
        </div>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-text-secondary">
          {service.shortDescription}
        </p>
        <Link
          href={href}
          className={cn(
            "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors",
            "group-hover:text-secondary"
          )}
        >
          Learn More
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
}
