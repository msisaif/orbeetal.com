'use client';

import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { company } from '@/data/company';
import { testimonials } from '@/data/testimonials';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

export function TestimonialsSection() {
    const reduce = useReducedMotion();
    const [i, setI] = useState(0);
    const [direction, setDirection] = useState(0);
    const n = testimonials.length;

    const goTo = useCallback((idx, dir = 0) => {
        setDirection(dir);
        setI(idx);
    }, []);

    const next = useCallback(() => {
        setDirection(1);
        setI((v) => (v + 1) % n);
    }, [n]);

    const prev = useCallback(() => {
        setDirection(-1);
        setI((v) => (v - 1 + n) % n);
    }, [n]);

    useEffect(() => {
        if (reduce || n < 2) return;
        const id = setInterval(() => {
            setDirection(1);
            setI((v) => (v + 1) % n);
        }, 5000);
        return () => clearInterval(id);
    }, [reduce, n]);

    const t = testimonials[i];

    return (
        <section className="relative overflow-hidden py-16 md:py-24">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/15 blur-[100px]" />
            <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
                <ScrollReveal>
                    <SectionHeader
                        kicker={company.testimonials.kicker}
                        title={company.testimonials.title}
                        subtitle={company.testimonials.subtitle}
                    />
                </ScrollReveal>
                {t ? (
                    <div className="mx-auto max-w-3xl">
                        <div className="flex items-center justify-between gap-4">
                            <button
                                type="button"
                                onClick={prev}
                                className="rounded-full border border-border-subtle bg-bg-card p-3 text-text-primary hover:border-secondary transition-colors"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>
                            <div className="flex-1 overflow-hidden">
                                <AnimatePresence mode="wait" initial={false}>
                                    <motion.div
                                        key={i}
                                        initial={
                                            reduce
                                                ? false
                                                : {
                                                      opacity: 0,
                                                      x:
                                                          direction > 0
                                                              ? 50
                                                              : -50,
                                                  }
                                        }
                                        animate={
                                            reduce
                                                ? false
                                                : { opacity: 1, x: 0 }
                                        }
                                        exit={
                                            reduce
                                                ? false
                                                : {
                                                      opacity: 0,
                                                      x:
                                                          direction > 0
                                                              ? -50
                                                              : 50,
                                                  }
                                        }
                                        transition={{ duration: 0.3 }}
                                    >
                                        <TestimonialCard testimonial={t} />
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                            <button
                                type="button"
                                onClick={next}
                                className="rounded-full border border-border-subtle bg-bg-card p-3 text-text-primary hover:border-secondary transition-colors"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </div>
                        <div className="mt-6 flex justify-center gap-2">
                            {testimonials.map((testimonial, idx) => (
                                <button
                                    key={testimonial.id}
                                    type="button"
                                    onClick={() => goTo(idx, idx > i ? 1 : -1)}
                                    className={`h-2.5 w-2.5 rounded-full transition-colors ${
                                        idx === i
                                            ? 'bg-accent'
                                            : 'bg-border-subtle hover:bg-text-secondary'
                                    }`}
                                    aria-label={`Go to testimonial ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                ) : null}
            </div>
        </section>
    );
}
