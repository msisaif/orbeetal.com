import dynamic from "next/dynamic";
import { getTestimonials } from "@/lib/content/testimonials.js";

const TestimonialsContent = dynamic(
  () => import("./TestimonialsContent").then((m) => m.TestimonialsContent),
  { ssr: true }
);

export async function Testimonials() {
  const testimonials = await getTestimonials();
  return <TestimonialsContent testimonials={testimonials} />;
}
