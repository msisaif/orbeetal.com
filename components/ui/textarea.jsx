import * as React from "react";
import { cn } from "@/lib/utils";
import { inputClassName } from "./input";

const Textarea = React.forwardRef(({ className, ...props }, ref) => (
  <textarea
    className={cn(inputClassName, "resize-none", className)}
    ref={ref}
    {...props}
  />
));
Textarea.displayName = "Textarea";

export { Textarea };
