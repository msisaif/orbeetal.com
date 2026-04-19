import { SafeAvatarImage } from "@/components/common/SafeImage";
import { Star } from "lucide-react";
export function TestimonialCard({
  testimonial,
  className = "",
}) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-2xl border border-border-subtle bg-bg-card p-6 md:p-8 shadow-[0_20px_60px_rgba(8,13,26,0.45)] ${className}`}
    >
      <span className="absolute right-5 top-4 text-4xl text-secondary/25 select-none">
        ”
      </span>
      {typeof testimonial.rating === "number" ? (
        <div className="mb-3 flex gap-0.5 text-accent">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-accent text-accent" />
          ))}
        </div>
      ) : null}
      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-white/10">
          <SafeAvatarImage
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div className="min-w-0">
          <h3 className="font-semibold text-text-primary">{testimonial.name}</h3>
          <p className="text-sm text-text-secondary">{testimonial.role}</p>
        </div>
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-text-secondary md:text-base">
        {testimonial.quote}
      </p>
    </article>
  );
}
