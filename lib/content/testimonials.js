import { adapter } from "./client.js";
import { validateData } from "@/lib/validateData.js";
import { testimonialSchema } from "@/lib/schemas.js";

export async function getTestimonials() {
  const data = await adapter().getTestimonials();
  return validateData(testimonialSchema.array(), data, "testimonials");
}
