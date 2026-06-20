"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function MotionFadeIn({
  children,
  className,
  delay = 0,
  duration = 0.5,
  x = 0,
  y = 20,
  as = "div",
}) {
  const Component = motion[as] ?? motion.div;

  return (
    <Component
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration, delay }}
      className={cn(className)}
    >
      {children}
    </Component>
  );
}
