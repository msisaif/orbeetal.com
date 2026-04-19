'use client';

import { SafeImage } from '@/components/common/SafeImage';
import { ScrollReveal, useRevealInView } from '@/components/ui/ScrollReveal';
import { aboutImages, company, whyChooseItems } from '@/data/company';
import { motion, useReducedMotion } from 'framer-motion';
import { FaDesktop } from 'react-icons/fa';

function WhyChooseItem({ item, index }) {
    const reduce = useReducedMotion();
    const { ref, inView } = useRevealInView();
    return (
        <motion.div
            ref={ref}
            className="flex gap-4"
            initial={reduce ? false : { y: 24 }}
            animate={reduce ? { y: 0 } : inView ? { y: 0 } : { y: 24 }}
            transition={{ delay: index * 0.08 }}
        >
            <div className="shrink-0 rounded-lg bg-gradient-to-br from-primary to-secondary p-3 text-white">
                <FaDesktop size={22} />
            </div>
            <div>
                <h3 className="font-heading text-lg font-semibold text-text-primary">
                    {item.title}
                </h3>
                <p className="mt-1 text-sm text-text-secondary">
                    {item.description}
                </p>
            </div>
        </motion.div>
    );
}

function WhyChooseCenterImage() {
    const reduce = useReducedMotion();
    const { ref, inView } = useRevealInView();
    return (
        <motion.div
            ref={ref}
            className="flex-1"
            initial={reduce ? false : { scale: 0.95 }}
            animate={
                reduce ? { scale: 1 } : inView ? { scale: 1 } : { scale: 0.95 }
            }
        >
            <SafeImage
                src={aboutImages.teams2}
                alt="Orbeetal team"
                width={480}
                height={480}
                className="mx-auto w-full max-w-md rounded-2xl border border-border-subtle object-cover"
            />
        </motion.div>
    );
}

export function WhyChooseSection() {
    const left = whyChooseItems.slice(0, 2);
    const right = whyChooseItems.slice(2);

    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <ScrollReveal>
                    <div className="mb-12 text-center">
                        <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
                            {company.whyChooseHeadingKicker}
                        </p>
                        <h2 className="font-heading mt-2 text-3xl font-bold text-text-primary md:text-4xl lg:text-5xl">
                            {company.whyChooseHeading}
                        </h2>
                        <div className="section-divider mx-auto mt-4 max-w-xs" />
                    </div>
                </ScrollReveal>
                <div className="flex flex-col items-stretch gap-10 lg:flex-row lg:items-center lg:gap-12">
                    <div className="flex flex-1 flex-col gap-8">
                        {left.map((item, index) => (
                            <WhyChooseItem
                                key={item.title}
                                item={item}
                                index={index}
                            />
                        ))}
                    </div>
                    <WhyChooseCenterImage />
                    <div className="flex flex-1 flex-col gap-8">
                        {right.map((item, index) => (
                            <WhyChooseItem
                                key={item.title}
                                item={item}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
