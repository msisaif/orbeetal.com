"use client";

import { SafeImage } from "@/components/common/SafeImage";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "./Badge";

export function ProjectCard({ project }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl border border-border-subtle bg-bg-card"
      layout
      {...(reduce ? {} : { whileHover: { y: -8 } })}
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <SafeImage
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width:768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/40 to-transparent opacity-90 transition-opacity group-hover:opacity-95" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <Badge className="mb-2 border-secondary/30 bg-secondary/10 text-secondary">
              {project.category}
            </Badge>
            <h3 className="font-heading text-xl font-bold text-text-primary">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-text-secondary">{project.subtitle}</p>
            <p className="mt-3 text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
              View Details →
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
