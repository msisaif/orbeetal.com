'use client';

import { GlowButton } from '@/components/ui/GlowButton';
import { ScrollReveal, useRevealInView } from '@/components/ui/ScrollReveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { company } from '@/data/company';
import { expertiseServices, getExpertiseHref } from '@/data/services';
import { motion, useReducedMotion } from 'framer-motion';

export function ServicesSection() {
    const reduce = useReducedMotion();
    const { ref: gridRef, inView: gridInView } = useRevealInView();

    return (
        <section id="services" className="scroll-mt-24 py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <ScrollReveal>
                    <SectionHeader
                        kicker={company.expertiseHome.kicker}
                        title={company.expertiseHome.title}
                        subtitle={company.expertiseHome.subtitle}
                    />
                </ScrollReveal>
                <div ref={gridRef}>
                    <motion.div
                        className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
                        initial="hidden"
                        animate={
                            reduce ? 'show' : gridInView ? 'show' : 'hidden'
                        }
                        variants={{
                            hidden: {},
                            show: {
                                transition: {
                                    staggerChildren: reduce ? 0 : 0.08,
                                    delayChildren: reduce ? 0 : 0.05,
                                },
                            },
                        }}
                    >
                        {expertiseServices.map((s) => (
                            <motion.div
                                key={s.slug}
                                variants={{
                                    hidden: reduce ? {} : { y: 24 },
                                    show: reduce ? {} : { y: 0 },
                                }}
                            >
                                <ServiceCard
                                    service={s}
                                    href={getExpertiseHref(s.slug)}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
                <div className="mt-12 flex justify-center">
                    <GlowButton href="/services">View All Services</GlowButton>
                </div>
            </div>
        </section>
    );
}
