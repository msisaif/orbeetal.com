import { cn } from "@/lib/utils";
export function Badge({ children, className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-accent backdrop-blur-md",
        className
      )}
    >
      {children}
    </span>
  );
}
