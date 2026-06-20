import { cn } from "@/lib/utils";

export function FieldLabel({ htmlFor, children, required, className }) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn("block text-sm font-medium text-foreground/80 mb-1.5", className)}
    >
      {children}
      {required && <span className="text-red-400 ml-1">*</span>}
    </label>
  );
}
