import { company } from "@/data/company";

export function clipMetaDescription(s, max = 158) {
  if (!s || s.length <= max) return s;
  const cut = s.slice(0, max);
  const i = cut.lastIndexOf(" ");
  return (i > 40 ? cut.slice(0, i) : cut).trimEnd() + "…";
}

/**
 * Central copy for App Router pages — heroes, section intros, and metadata.
 */
export const pages = {
  home: {
    metadata: {
      title: company.metadataTitle,
      description: company.metadataDescription,
    },
  },
  about: {
    metadata: {
      title: "About",
      description: clipMetaDescription(
        `${company.aboutBody} ${company.whatWeDoBody} ${company.approachDescription}`
      ),
    },
    hero: {
      kicker: "About",
      title: "About Orbeetal",
      subtitle: company.aboutBody,
    },
    departments: {
      titleBefore: "Our ",
      titleAccent: "Departments",
      subtitle:
        "Cross-functional teams led by directors who own delivery, quality, and long-term outcomes for every engagement.",
    },
  },
  contact: {
    metadata: {
      title: "Contact",
      description: clipMetaDescription(
        `Reach ${company.name} at ${company.contact.phone} or ${company.contact.emailDisplay}. ${company.shortDescription}`
      ),
    },
    hero: {
      kicker: "Contact",
      title: "Work with Orbeetal",
      subtitle:
        "Tell us about your product, timeline, and success criteria. We will reply with a clear next step — usually a short discovery call or a written scope outline.",
    },
  },
  faq: {
    metadata: {
      title: "FAQ",
      description: clipMetaDescription(
        `Common questions about ${company.name} services, delivery, support, security practices, and how we run projects from kickoff to launch.`
      ),
    },
    hero: {
      kicker: "FAQ",
      title: "Frequently Asked Questions",
      subtitle:
        "Practical answers about how we scope work, communicate, ship quality software, and support you after go-live.",
    },
  },
  team: {
    metadata: {
      title: "Team",
      description: clipMetaDescription(
        `Meet ${company.name} directors across finance, operations, cyber, planning, IT, product, and marketing — the people accountable for delivery.`
      ),
    },
    hero: {
      kicker: "Team",
      title: "Meet Our Professionals",
      subtitle:
        "Department directors who combine strategy with hands-on ownership of roadmaps, security, infrastructure, and go-to-market.",
    },
  },
  products: {
    metadata: {
      title: "Products",
      description: clipMetaDescription(
        `${company.productsHome.title} — internal platforms and tools built end-to-end by ${company.name}, from concept to production.`
      ),
    },
    hero: {
      kicker: company.productsHome.kicker,
      title: company.productsHome.title,
      subtitle:
        "In-house products we design, build, and evolve — the same engineering discipline we bring to client work.",
    },
  },
  services: {
    metadata: {
      title: "Services",
      description: clipMetaDescription(
        `${company.whatWeDoBody} Explore software, AI, web, security, marketing, and product design offerings.`
      ),
    },
    hero: {
      kicker: "Services",
      title: "What we build with you",
      subtitle: company.whatWeDoBody,
    },
  },
  blog: {
    metadata: {
      title: "Blog",
      description: clipMetaDescription(
        `Notes and summaries drawn from ${company.name} public positioning — company story, services, and how we work.`
      ),
    },
    hero: {
      kicker: "Blog",
      title: "Insights",
      subtitle:
        "Short articles compiled from our on-site copy — useful for sharing context before a discovery call.",
    },
  },
  projects: {
    metadata: {
      title: "Projects",
      description: clipMetaDescription(
        `${company.portfolio.pageIntro.description} Client platforms, joint ventures, and Orbeetal originals.`
      ),
    },
    hero: {
      kicker: "Portfolio",
      title: company.portfolio.clientProjects.title,
      subtitle: company.portfolio.clientProjects.subtitle,
    },
  },
};
