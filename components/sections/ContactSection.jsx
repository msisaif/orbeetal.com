'use client';

import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { company } from '@/data/company';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

export function ContactSection() {
    return (
        <section id="contact" className="scroll-mt-24 py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
                    <ScrollReveal>
                        <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
                            Get In Touch
                        </p>
                        <h2 className="font-heading mt-3 text-4xl font-bold text-text-primary">
                            Any question? Please Feel Free to Contact Us
                        </h2>
                        <div className="section-divider mt-5 max-w-xs" />
                        <div className="mt-10 flex flex-col gap-4 text-text-secondary">
                            {company.contact.supportBullets.map((b) => (
                                <p
                                    key={b}
                                    className="font-medium text-text-primary"
                                >
                                    {b}
                                </p>
                            ))}
                        </div>
                        <p className="mt-6 text-sm leading-relaxed text-text-secondary">
                            {company.contact.contactBlurb}
                        </p>
                        <div className="mt-10 flex items-center gap-4">
                            <div className="grid h-16 w-16 place-items-center rounded-xl bg-secondary/20 text-accent">
                                <FiPhone className="h-7 w-7" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-text-primary">
                                    Call to ask any Question
                                </p>
                                <p className="text-lg font-bold text-text-primary">
                                    {company.contact.phone}
                                </p>
                            </div>
                        </div>
                        <div className="mt-6 flex items-center gap-4">
                            <div className="grid h-16 w-16 place-items-center rounded-xl bg-secondary/20 text-accent">
                                <FiMail className="h-7 w-7" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-text-primary">
                                    Email Us
                                </p>
                                <p className="text-lg font-bold text-text-primary">
                                    {company.contact.emailDisplay}
                                </p>
                            </div>
                        </div>
                        <div className="mt-6 flex items-center gap-4">
                            <div className="grid h-16 w-16 place-items-center rounded-xl bg-secondary/20 text-accent">
                                <FiMapPin className="h-7 w-7" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-text-primary">
                                    Location
                                </p>
                                <p className="text-lg font-bold text-text-primary">
                                    Dhaka, Bangladesh
                                </p>
                            </div>
                        </div>
                        <div className="mt-8 flex gap-4">
                            {company.social.map((s) => (
                                <a
                                    key={s.href}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-text-secondary transition-colors hover:text-accent"
                                    aria-label={s.label}
                                >
                                    {s.label === 'LinkedIn' ? (
                                        <FaLinkedin size={24} />
                                    ) : s.label === 'Facebook' ? (
                                        <FaFacebook size={24} />
                                    ) : (
                                        <FaTwitter size={24} />
                                    )}
                                </a>
                            ))}
                        </div>
                    </ScrollReveal>
                    <ScrollReveal>
                        <div className="rounded-2xl border border-border-subtle bg-bg-card p-4 md:p-6 h-full min-h-[400px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.15093170265!2d90.34928590365932!3d23.78062084382443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbddf5908c!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1703000000000!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{
                                    border: 0,
                                    minHeight: '400px',
                                    borderRadius: '1rem',
                                }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Orbeetal Location"
                                className="rounded-xl"
                            />
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
