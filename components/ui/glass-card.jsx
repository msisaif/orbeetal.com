import { cn } from "@/lib/utils";

export function GlassCard({ className, children, as: Component = "div", ...props }) {
  return (
    <Component className={cn("glass-panel", className)} {...props}>
      {children}
    </Component>
  );
}

export function StatCard({ value, label, className }) {
  return (
    <GlassCard
      className={cn(
        "p-8 rounded-card border-t-2 border-t-primary/50 flex flex-col justify-center",
        className
      )}
    >
      <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{value}</div>
      <div className="text-sm text-body-muted uppercase tracking-wider">{label}</div>
    </GlassCard>
  );
}
