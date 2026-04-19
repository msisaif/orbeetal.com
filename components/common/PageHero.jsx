"use client";

export function PageHero({ title, subtitle, kicker }) {
  return (
    <section className="relative overflow-hidden border-b border-border-subtle bg-bg-surface/50 pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-secondary/10" />
      <div className="relative mx-auto max-w-6xl px-6 text-center md:px-10">
        {kicker ? (
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
            {kicker}
          </p>
        ) : null}
        <h1 className="font-heading mt-3 text-4xl font-bold text-text-primary md:text-5xl">
          <span className="text-gradient">{title}</span>
        </h1>
        {subtitle ? (
          <p className="mx-auto mt-4 max-w-2xl text-text-secondary md:text-lg">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
