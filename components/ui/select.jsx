import * as React from "react";
import { cn } from "@/lib/utils";

export const selectClassName =
  "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary/60 transition-colors appearance-none cursor-pointer";

const Select = React.forwardRef(({ className, children, ...props }, ref) => (
  <select className={cn(selectClassName, className)} ref={ref} {...props}>
    {children}
  </select>
));
Select.displayName = "Select";

export { Select };
