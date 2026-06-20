import { z } from "zod";

export const pageMetaSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  openGraph: z
    .object({
      title: z.string().optional(),
      description: z.string().optional(),
      type: z.string().optional(),
      images: z
        .array(
          z.object({
            url: z.string(),
            width: z.number().optional(),
            height: z.number().optional(),
            alt: z.string().optional(),
          })
        )
        .optional(),
    })
    .optional(),
  twitter: z
    .object({
      card: z.string().optional(),
      title: z.string().optional(),
      description: z.string().optional(),
      images: z.array(z.string()).optional(),
    })
    .optional(),
});

export const statSchema = z.object({
  label: z.string().min(1),
  value: z.string().min(1),
});

export const whyChooseUsItemSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
});

export const missionVisionSchema = z.object({
  title: z.string().min(1),
  text: z.string().min(1),
});

export const serviceSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  icon: z.string().min(1),
  image: z.string().min(1),
});

export const departmentSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  icon: z.string().min(1),
  gradient: z.string().min(1),
});

export const testimonialSchema = z.object({
  name: z.string().min(1),
  role: z.string().min(1),
  initials: z.string().min(1),
  color: z.string().min(1),
  quote: z.string().min(1),
});

export const teamMemberSchema = z.object({
  name: z.string().min(1),
  role: z.string().min(1),
  initials: z.string().min(1),
  gradient: z.string().min(1),
  slug: z.string().min(1),
  quote: z.string().min(1),
  bio: z.string().min(1),
  expertise: z.array(z.string().min(1)).min(1),
  stats: z.array(statSchema).min(1),
  highlights: z.array(z.string().min(1)).min(1),
  social: z.record(z.string(), z.string()).optional(),
});

export const navLinkSchema = z.object({
  name: z.string().min(1),
  route: z.string().min(1),
});

export const contactInfoSchema = z.object({
  email: z.string().email(),
  whatsapp: z.object({
    number: z.string().min(1),
    url: z.string().url(),
  }),
  linkedin: z.object({
    label: z.string().min(1),
    url: z.string().url(),
  }),
  facebook: z.object({
    label: z.string().min(1),
    url: z.string().url(),
  }),
  mapEmbed: z.string().url(),
  location: z.string().min(1),
});

export const siteConfigSchema = z.object({
  features: z.object({
    ideaContest: z.boolean(),
    cvSubmit: z.boolean(),
  }),
  activeHero: z.enum(["hero", "idea-contest", "cv-submit"]),
  activeTopBanner: z.union([
    z.literal(false),
    z.enum(["idea-contest", "cv-submit", "custom"]),
  ]),
  customBannerContent: z.object({
    label: z.string().min(1),
    highlight: z.string().min(1),
    detail: z.string().min(1),
    href: z.string().min(1),
    cta: z.string().min(1),
    icon: z.string().min(1),
  }),
});

export const legalSectionSchema = z.object({
  title: z.string().min(1),
  body: z.string().min(1),
});

export const bannerContentSchema = z.object({
  label: z.string().min(1),
  highlight: z.string().min(1),
  detail: z.string().min(1),
  href: z.string().min(1),
  cta: z.string().min(1),
});

export const eventStatSchema = z.object({
  icon: z.string().min(1),
  label: z.string().min(1),
  value: z.string().min(1),
  amber: z.boolean().optional(),
});

export const eventInfoCardSchema = z.object({
  icon: z.string().min(1),
  label: z.string().min(1),
  value: z.string().min(1),
  sub: z.string().min(1),
});

export const eventSubmitItemSchema = z.object({
  icon: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
});

export const eventCriteriaItemSchema = z.object({
  label: z.string().min(1),
  desc: z.string().min(1),
});

export const eventMetaSchema = z.object({
  submitFormUrl: z.string().url(),
  eventDate: z.string().min(1),
  deadline: z.string(),
  organizer: z.string().min(1),
  venue: z.string().min(1),
  prize: z.string().optional(),
  edition: z.string().optional(),
});
