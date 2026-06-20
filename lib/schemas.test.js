import { describe, it, expect } from "vitest";
import { statSchema, teamMemberSchema, contactInfoSchema } from "@/lib/schemas";

describe("data schemas", () => {
  it("validates stat objects", () => {
    const result = statSchema.safeParse({ label: "Clients", value: "10+" });
    expect(result.success).toBe(true);
  });

  it("rejects invalid stats", () => {
    const result = statSchema.safeParse({ label: "", value: "10+" });
    expect(result.success).toBe(false);
  });

  it("validates team member shape", () => {
    const result = teamMemberSchema.safeParse({
      name: "Test User",
      role: "Director",
      initials: "TU",
      gradient: "from-blue-500 to-cyan-400",
      slug: "test-user",
      quote: "A test quote.",
      bio: "Bio text.",
      expertise: ["Strategy"],
      stats: [{ label: "Projects", value: "5+" }],
      highlights: ["Did something great."],
    });
    expect(result.success).toBe(true);
  });

  it("validates contact info", () => {
    const result = contactInfoSchema.safeParse({
      email: "support@orbeetal.com",
      whatsapp: { number: "+880", url: "https://wa.me/880" },
      linkedin: { label: "linkedin", url: "https://linkedin.com/company/orbeetal" },
      facebook: { label: "facebook", url: "https://facebook.com/Orbeetal" },
      mapEmbed: "https://www.google.com/maps/embed?pb=test",
      location: "Dhaka, Bangladesh",
    });
    expect(result.success).toBe(true);
  });
});
