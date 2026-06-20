import * as LucideIcons from "lucide-react";

export function resolveIcon(name) {
  return LucideIcons[name] ?? null;
}
