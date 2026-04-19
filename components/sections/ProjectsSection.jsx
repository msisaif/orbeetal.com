'use client';

import { ProjectCard } from '@/components/ui/ProjectCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { projectCategories, projects } from '@/data/projects';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { useMemo, useState } from 'react';

const HOME_LIMIT = 6;

export function ProjectsSection() {
    const reduce = useReducedMotion();
    const [cat, setCat] = useState('All');

    const filtered = useMemo(() => {
        const list =
            cat === 'All'
                ? projects
                : projects.filter((p) => p.category === cat);
        return list.slice(0, HOME_LIMIT);
    }, [cat]);

    return (
        <section id="projects" className="scroll-mt-24 py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <ScrollReveal>
                    <SectionHeader
                        kicker="Portfolio"
                        title="Projects that ship"
                        subtitle="A snapshot of platforms we have built with our partners."
                        action={
                            <Link
                                href="/projects"
                                className="text-sm font-semibold text-accent hover:text-secondary"
                            >
                                View all →
                            </Link>
                        }
                    />
                </ScrollReveal>
                <div className="mb-8 flex flex-wrap gap-2">
                    {projectCategories.map((c) => (
                        <button
                            key={c}
                            type="button"
                            onClick={() => setCat(c)}
                            className={cn(
                                'rounded-full border px-4 py-2 text-sm font-medium transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-secondary/50',
                                cat === c
                                    ? 'border-secondary bg-secondary/15 text-accent'
                                    : 'border-border-subtle bg-bg-card text-text-secondary hover:border-secondary/50'
                            )}
                        >
                            {c}
                        </button>
                    ))}
                </div>
                <motion.div
                    layout
                    className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
                >
                    <AnimatePresence mode="popLayout">
                        {filtered.map((p) => (
                            <motion.div
                                key={p.slug}
                                layout
                                initial={reduce ? false : { scale: 0.98 }}
                                animate={reduce ? false : { scale: 1 }}
                                exit={reduce ? undefined : { scale: 0.98 }}
                                transition={{ duration: 0.35 }}
                            >
                                <ProjectCard project={p} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
