import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";
import { clipMetaDescription } from "@/data/pages";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post" };
  const full = (post.body ?? [post.excerpt]).join(" ");
  return {
    title: post.title,
    description: clipMetaDescription(full || post.excerpt),
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-24 lg:px-10">
      <p className="text-sm font-semibold text-secondary">{post.category}</p>
      <h1 className="font-heading mt-2 text-4xl font-bold text-text-primary">
        {post.title}
      </h1>
      <p className="mt-4 text-text-secondary">
        {post.author} · {post.date}
      </p>
      <div className="mt-10 space-y-6 text-lg leading-relaxed text-text-secondary">
        {(post.body ?? [post.excerpt]).map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </article>
  );
}
