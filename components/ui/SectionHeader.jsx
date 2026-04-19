export function SectionHeader({
  kicker,
  title,
  subtitle,
  align = "center",
  action,
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div
      className={`mb-10 md:mb-14 max-w-3xl ${alignCls} ${action ? "flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:max-w-none" : ""}`}
    >
      <div>
        {kicker ? (
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-2">
            {kicker}
          </p>
        ) : null}
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary leading-tight">
          <span className="text-gradient">{title}</span>
        </h2>
        {subtitle ? (
          <p className="mt-4 text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        ) : null}
        <div className="section-divider mt-6 max-w-xs opacity-80" />
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
