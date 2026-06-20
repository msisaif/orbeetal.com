import { TestimonialsContent } from "@/components/home/TestimonialsContent";
import { getTestimonials } from "@/lib/content/testimonials.js";

export async function Testimonials() {
  const testimonials = await getTestimonials();
  return <TestimonialsContent testimonials={testimonials} />;
}
