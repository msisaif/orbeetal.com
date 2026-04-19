import { PageHero } from "@/components/common/PageHero";
import { BlogCard } from "@/components/ui/BlogCard";
import { blogPosts } from "@/data/blog";
import { pages } from "@/data/pages";

export const metadata = pages.blog.metadata;

export default function BlogPage() {
  const { hero } = pages.blog;
  return (
    <>
      <PageHero
        kicker={hero.kicker}
        title={hero.title}
        subtitle={hero.subtitle}
      />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {blogPosts.length === 0 ? (
            <p className="rounded-2xl border border-dashed border-border-subtle bg-bg-card/40 px-6 py-14 text-center text-text-secondary">
              {/* TODO: Blog posts — not found in old site */}
              We have not migrated blog articles yet. Follow our social channels for updates, or reach out for technical deep-dives.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
