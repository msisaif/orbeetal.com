import { cn } from "@/lib/utils";
export function GlassCard({
  children,
  className,
  hoverLift = true,
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md",
        hoverLift && "transition-transform duration-300 hover:-translate-y-2",
        className
      )}
    >
      {children}
    </div>
  );
}
