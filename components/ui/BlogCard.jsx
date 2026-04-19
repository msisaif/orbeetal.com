import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { Badge } from "./Badge";

export function BlogCard({ post }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border-subtle bg-bg-card p-6 transition-shadow glow-hover">
      <Badge className="w-fit border-accent/25 bg-accent/10 text-accent">
        {post.category}
      </Badge>
      <h3 className="font-heading mt-4 text-xl font-bold text-text-primary">
        <Link href={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
          {post.title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-sm text-text-secondary leading-relaxed">
        {post.excerpt}
      </p>
      <div className="mt-4 flex flex-wrap gap-3 text-xs text-text-secondary/80">
        <span>{post.author}</span>
        <span>·</span>
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span>·</span>
        <span>{post.readMinutes} min read</span>
      </div>
    </article>
  );
}
