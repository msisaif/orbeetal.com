'use client';

import { ProjectCard } from '@/components/ui/ProjectCard';
import { projectCategories, projects } from '@/data/projects';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useMemo, useState } from 'react';

export function ProjectsGrid() {
    const reduce = useReducedMotion();
    const [cat, setCat] = useState('All');

    const filtered = useMemo(() => {
        if (cat === 'All') return projects;
        return projects.filter((p) => p.category === cat);
    }, [cat]);

    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="mb-10 flex flex-wrap gap-2">
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
