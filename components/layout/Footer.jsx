'use client';

import { company } from '@/data/company';
import { expertiseServices, getExpertiseHref } from '@/data/services';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';

export function Footer() {
    const [email, setEmail] = useState('');
    const year = new Date().getFullYear();

    return (
        <footer className="relative bg-bg-surface text-text-secondary">
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-accent via-secondary to-primary" />

            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <Image
                            src="/logo.png"
                            alt="Orbeetal"
                            width={160}
                            height={48}
                            className="mb-6 h-10 w-auto"
                        />
                        <p className="text-sm leading-relaxed">
                            {company.tagline}
                        </p>
                        <div className="mt-6 flex gap-4">
                            {company.social.map((s) => (
                                <Link
                                    key={s.href}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    className="text-text-secondary transition-colors hover:text-accent"
                                >
                                    {s.label === 'LinkedIn' ? (
                                        <FaLinkedin size={22} />
                                    ) : s.label === 'Facebook' ? (
                                        <FaFacebook size={22} />
                                    ) : (
                                        <FaTwitter size={22} />
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h5 className="mb-5 font-heading text-lg font-semibold text-text-primary">
                            Quick Links
                        </h5>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link
                                    href="/about"
                                    className="hover:text-accent transition-colors"
                                >
                                    About Orbeetal
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/products"
                                    className="hover:text-accent transition-colors"
                                >
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/projects"
                                    className="hover:text-accent transition-colors"
                                >
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/faq"
                                    className="hover:text-accent transition-colors"
                                >
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="mb-5 font-heading text-lg font-semibold text-text-primary">
                            Services
                        </h5>
                        <ul className="space-y-3 text-sm">
                            {expertiseServices.slice(0, 6).map((s) => (
                                <li key={s.slug}>
                                    <Link
                                        href={getExpertiseHref(s.slug)}
                                        className="hover:text-accent transition-colors"
                                    >
                                        {s.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h5 className="mb-5 font-heading text-lg font-semibold text-text-primary">
                            Contact
                        </h5>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2">
                                <FiPhone className="text-accent" />
                                <span>{company.contact.phone}</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FiMail className="text-accent" />
                                <Link
                                    href={`mailto:${company.contact.emailMailto}`}
                                    className="hover:text-accent transition-colors"
                                >
                                    {company.contact.emailDisplay}
                                </Link>
                            </li>
                        </ul>
                        <form
                            className="mt-6"
                            onSubmit={(e) => {
                                e.preventDefault();
                                setEmail('');
                            }}
                        >
                            <label
                                htmlFor="newsletter-email"
                                className="sr-only"
                            >
                                Newsletter email
                            </label>
                            <div className="flex flex-col gap-2 sm:flex-row">
                                <input
                                    id="newsletter-email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Newsletter email"
                                    className="flex-1 rounded-xl border border-border-subtle bg-bg-card px-4 py-2.5 text-sm text-text-primary placeholder:text-text-secondary/60 focus:border-secondary focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    className="rounded-xl bg-gradient-to-r from-primary to-secondary px-4 py-2.5 text-sm font-semibold text-white"
                                >
                                    Subscribe
                                </button>
                            </div>
                            <p className="mt-2 text-xs text-text-secondary/70">
                                Updates about Orbeetal — we respect your inbox.
                            </p>
                        </form>
                    </div>
                </div>
            </div>

            <div className="border-t border-border-subtle py-6 text-center text-sm text-text-secondary/80">
                © {year} Orbeetal. All rights reserved.
            </div>
        </footer>
    );
}
