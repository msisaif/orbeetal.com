import { blogPosts } from "@/data/blog";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BlogCard } from "@/components/ui/BlogCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Link from "next/link";

export function BlogSection() {
  const latest = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal>
          <SectionHeader
            kicker="Insights"
            title="From the blog"
            subtitle="Ideas on building reliable software and growing digital products."
            action={
              <Link
                href="/blog"
                className="text-sm font-semibold text-accent hover:text-secondary"
              >
                View all posts →
              </Link>
            }
          />
        </ScrollReveal>
        {latest.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-border-subtle bg-bg-card/50 px-6 py-12 text-center text-text-secondary">
            {/* TODO: Blog posts — not found in old site */}
            New articles are on the way. Check back soon or reach out for engineering notes from our team.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {latest.map((post) => (
              <ScrollReveal key={post.slug}>
                <BlogCard post={post} />
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
