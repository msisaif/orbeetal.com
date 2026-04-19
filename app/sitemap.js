import { expertiseServices, serviceOfferings } from "@/data/services";
import { projects } from "@/data/projects";
import { products } from "@/data/products";
import { blogPosts } from "@/data/blog";

const base = "https://orbeetal.com";

export default function sitemap() {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/products",
    "/projects",
    "/team",
    "/blog",
    "/contact",
    "/faq",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceSlugs = new Set();
  expertiseServices.forEach((e) => serviceSlugs.add(e.slug));
  serviceOfferings.forEach((o) => serviceSlugs.add(o.slug));

  const services = Array.from(serviceSlugs).map((slug) => ({
    url: `${base}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const projectUrls = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  const productUrls = products.map((p) => ({
    url: `${base}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  const blogUrls = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...services, ...projectUrls, ...productUrls, ...blogUrls];
}
