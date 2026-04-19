'use client';

import { SafeImage } from '@/components/common/SafeImage';
import { serviceOfferings } from '@/data/services';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export function ServicesTabs() {
    const [active, setActive] = useState(serviceOfferings[0]);

    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="flex flex-wrap justify-center gap-3">
                    {serviceOfferings.map((s) => (
                        <button
                            key={s.slug}
                            type="button"
                            onClick={() => setActive(s)}
                            className={cn(
                                'rounded-xl border px-4 py-2 text-sm font-semibold transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-secondary/50',
                                active.slug === s.slug
                                    ? 'border-secondary bg-secondary/15 text-accent'
                                    : 'border-border-subtle bg-bg-card text-text-secondary hover:border-secondary/40'
                            )}
                        >
                            {s.name}
                        </button>
                    ))}
                </div>
                <div className="mt-12 flex flex-col items-stretch gap-10 md:flex-row md:items-start">
                    <div className="flex-1">
                        <h2 className="font-heading text-3xl font-bold text-text-primary">
                            {active.name}
                        </h2>
                        <p className="mt-2 text-lg text-text-secondary">
                            {active.description}
                        </p>
                        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {active.bullets.map((point) => (
                                <div
                                    key={point}
                                    className="rounded-xl border border-border-subtle bg-bg-card p-4 text-sm text-text-primary"
                                >
                                    {point}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative mx-auto h-72 w-full max-w-md md:h-96">
                        <SafeImage
                            src={active.image}
                            alt=""
                            fill
                            className="rounded-2xl border border-border-subtle bg-bg-card object-contain p-4"
                            sizes="(max-width:768px) 100vw, 400px"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
