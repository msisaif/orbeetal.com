'use client';

import { SafeImage } from '@/components/common/SafeImage';
import { GlowButton } from '@/components/ui/GlowButton';
import { ScrollReveal, useRevealInView } from '@/components/ui/ScrollReveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { aboutImages, company, whyChooseItems } from '@/data/company';
import { motion, useReducedMotion } from 'framer-motion';
import { Check } from 'lucide-react';

const checklist = whyChooseItems.map((w) => w.title);

function AboutChecklistRow({ item, idx, reduce }) {
    const { ref, inView } = useRevealInView();
    return (
        <motion.li
            ref={ref}
            className="flex items-center gap-3 text-text-primary"
            initial={reduce ? false : { x: -12 }}
            animate={reduce ? { x: 0 } : inView ? { x: 0 } : { x: -12 }}
            transition={{ delay: idx * 0.06 }}
        >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                <Check className="h-4 w-4" />
            </span>
            {item}
        </motion.li>
    );
}

export function AboutSection() {
    const reduce = useReducedMotion();

    return (
        <section id="about" className="scroll-mt-24 py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <ScrollReveal>
                    <SectionHeader
                        kicker="About"
                        title={company.aboutLead}
                        align="left"
                    />
                </ScrollReveal>
                <div className="mt-4 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
                    <ScrollReveal>
                        <p className="text-text-secondary leading-relaxed">
                            {company.aboutBody}
                        </p>
                        <ul className="mt-8 space-y-3">
                            {checklist.map((item, idx) => (
                                <AboutChecklistRow
                                    key={item}
                                    item={item}
                                    idx={idx}
                                    reduce={reduce}
                                />
                            ))}
                        </ul>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <GlowButton href="/team">Meet Our Team</GlowButton>
                            <GlowButton href="/contact" variant="outline">
                                Get In Touch
                            </GlowButton>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal>
                        <div className="relative">
                            <div className="overflow-hidden rounded-2xl border border-border-subtle">
                                <SafeImage
                                    src={aboutImages.teams1}
                                    alt="Orbeetal team collaborating"
                                    width={640}
                                    height={420}
                                    className="h-auto w-full object-cover"
                                />
                            </div>
                            <motion.div
                                className="absolute -bottom-6 -left-4 rounded-2xl border border-border-subtle bg-bg-card px-5 py-4 shadow-xl md:left-6"
                                {...(reduce ? {} : { whileHover: { y: -4 } })}
                            >
                                <p className="font-heading text-2xl font-bold text-gradient">
                                    {
                                        company.stats.find(
                                            (s) => s.id === 'projects'
                                        )?.value
                                    }
                                    {
                                        company.stats.find(
                                            (s) => s.id === 'projects'
                                        )?.suffix
                                    }
                                </p>
                                <p className="text-sm text-text-secondary">
                                    Projects completed
                                </p>
                            </motion.div>
                            <motion.div
                                className="absolute -right-2 top-8 rounded-2xl border border-border-subtle bg-bg-card px-5 py-4 shadow-xl md:right-4"
                                {...(reduce ? {} : { whileHover: { y: -4 } })}
                            >
                                <p className="font-heading text-2xl font-bold text-gradient">
                                    {
                                        company.stats.find(
                                            (s) => s.id === 'clients'
                                        )?.value
                                    }
                                    {
                                        company.stats.find(
                                            (s) => s.id === 'clients'
                                        )?.suffix
                                    }
                                </p>
                                <p className="text-sm text-text-secondary">
                                    Happy clients
                                </p>
                            </motion.div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
