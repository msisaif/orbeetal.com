import * as React from "react";
import { cn } from "@/lib/utils";

export const inputClassName =
  "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/60 focus:bg-white/8 transition-colors";

const Input = React.forwardRef(({ className, type, ...props }, ref) => (
  <input type={type} className={cn(inputClassName, className)} ref={ref} {...props} />
));
Input.displayName = "Input";

export { Input };
