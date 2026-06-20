"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { MotionFadeIn } from "@/components/common/MotionFadeIn";
import { GlassCard } from "@/components/ui/glass-card";

export function PortfolioContent({ projects }) {
  return (
    <section id="portfolio" className="py-24 md:py-32 relative z-20 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeader
          tagline="Our Portfolio"
          title="Projects We're"
          titleHighlight="Proud Of"
          description="A selection of work that defines our standards and ambition."
          className="mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <MotionFadeIn key={project.title} y={24} delay={i * 0.1}>
              <GlassCard className="group relative rounded-2xl overflow-hidden border border-white/5 hover:border-primary/20 transition-all duration-500 h-full">
                <div className={`h-60 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-grid-pattern opacity-75">
                    {project.preview && (
                      <Image
                        src={project.preview}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-surface-deep to-transparent" />
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} in new tab`}
                      className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="w-9 h-9 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center hover:bg-primary/40 transition-colors">
                        <ExternalLink className="w-4 h-4 text-primary" />
                      </div>
                    </a>
                  )}
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-display font-semibold mb-3 text-white group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-body-muted text-sm leading-relaxed mb-5">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-body-muted bg-white/5 border border-white/10 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </MotionFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
