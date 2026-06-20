import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumb({ items }) {
  if (!items?.length) return null;

  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-body-muted mb-8">
      {items.map((crumb, i) => (
        <span key={crumb.label} className="flex items-center gap-1.5">
          {i > 0 && <ChevronRight className="w-3 h-3" aria-hidden="true" />}
          {crumb.href ? (
            <Link href={crumb.href} className="hover:text-white/80 transition-colors">
              {crumb.label}
            </Link>
          ) : (
            <span className="text-body-muted" aria-current="page">
              {crumb.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
