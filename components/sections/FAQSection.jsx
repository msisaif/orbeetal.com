'use client';

import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { faqItems } from '@/data/faq';
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/react';
import { ChevronDown } from 'lucide-react';

export function FAQSection({ showHeading = true }) {
    return (
        <section id="faq" className="scroll-mt-24 py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                {showHeading ? (
                    <ScrollReveal>
                        <SectionHeader
                            kicker="FAQ"
                            title="Frequently Asked Questions"
                            subtitle="Find quick answers to the most common questions about our services and processes. Can't find what you're looking for? Contact us anytime."
                        />
                    </ScrollReveal>
                ) : null}
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    {faqItems.map((faq, idx) => (
                        <ScrollReveal key={faq.question} delay={idx * 0.03}>
                            <Disclosure>
                                <div className="rounded-2xl border border-border-subtle bg-bg-card overflow-hidden">
                                    <DisclosureButton className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-text-primary hover:bg-bg-surface/40 transition-colors">
                                        {faq.question}
                                        <ChevronDown className="h-5 w-5 shrink-0 text-secondary transition-transform group-data-[open]:rotate-180" />
                                    </DisclosureButton>
                                    <DisclosurePanel className="border-t border-border-subtle px-5 py-4 text-sm leading-relaxed text-text-secondary">
                                        {faq.answer}
                                    </DisclosurePanel>
                                </div>
                            </Disclosure>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
