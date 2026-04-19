'use client';

import { TeamMemberModal } from '@/components/team/TeamMemberModal';
import { GlowButton } from '@/components/ui/GlowButton';
import { ScrollReveal, useRevealInView } from '@/components/ui/ScrollReveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TeamCard } from '@/components/ui/TeamCard';
import { teamMembers } from '@/data/team';
import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
export function TeamSection({ showHeading = true }) {
    const reduce = useReducedMotion();
    const { ref: gridRef, inView: gridInView } = useRevealInView();
    const [selected, setSelected] = useState(null);
    const [open, setOpen] = useState(false);

    return (
        <section id="team" className="scroll-mt-24 py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                {showHeading ? (
                    <ScrollReveal>
                        <SectionHeader
                            kicker="Team Members"
                            title="Meet Our Professionals"
                            subtitle="Directors leading finance, operations, cyber, product, technology, and marketing."
                        />
                    </ScrollReveal>
                ) : null}
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
                                    staggerChildren: reduce ? 0 : 0.07,
                                },
                            },
                        }}
                    >
                        {teamMembers.map((m) => (
                            <motion.div
                                key={m.email}
                                variants={{
                                    hidden: reduce ? {} : { y: 20 },
                                    show: reduce ? {} : { y: 0 },
                                }}
                            >
                                <TeamCard
                                    member={m}
                                    onSelect={(mem) => {
                                        setSelected(mem);
                                        setOpen(true);
                                    }}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
                <div className="mt-12 flex justify-center">
                    <GlowButton href="/contact" variant="outline">
                        Join Our Team
                    </GlowButton>
                </div>
            </div>
            <TeamMemberModal
                member={selected}
                open={open}
                onClose={() => {
                    setOpen(false);
                    setTimeout(() => setSelected(null), 200);
                }}
            />
        </section>
    );
}
