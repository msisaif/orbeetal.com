import { company, whyChooseItems } from "@/data/company";
import { serviceOfferings } from "@/data/services";

const offeringNames = serviceOfferings.map((s) => s.name).join(", ");

export const blogPosts = [
  {
    slug: "who-we-are",
    title: "Who We Are",
    category: "Company",
    author: company.name,
    date: "2026-01-10",
    readMinutes: 3,
    excerpt:
      "A concise overview of Orbeetal’s mission and the problems we set out to solve with software.",
    body: [
      company.aboutBody,
      `${company.shortDescription} Our work spans web, mobile, security, and marketing so teams can ship one coherent digital presence instead of juggling disconnected vendors.`,
    ],
  },
  {
    slug: "what-we-do",
    title: company.whatWeDoTitle,
    category: "Company",
    author: company.name,
    date: "2026-01-18",
    readMinutes: 4,
    excerpt:
      "How we turn ideas into products — and how our approach stays consistent across industries.",
    body: [
      company.whatWeDoBody,
      company.approachDescription,
      company.expertiseHighlightDescription,
    ],
  },
  {
    slug: "service-lines-overview",
    title: "Service Lines Overview",
    category: "Services",
    author: company.name,
    date: "2026-02-02",
    readMinutes: 5,
    excerpt:
      "A map of our formal service offerings and how they relate to the expertise you see on the homepage.",
    body: [
      `On the Services page we organize delivery into: ${offeringNames}. Each line has defined outcomes—whether you need a greenfield build, a redesign, or ongoing optimization.`,
      "Offerings that list a related expertise card (for example Web Development or AI) link the high-level commercial package to the same themes we showcase on the home page.",
    ],
  },
  {
    slug: "why-teams-work-with-us",
    title: "Why Teams Work With Us",
    category: "Culture",
    author: company.name,
    date: "2026-02-14",
    readMinutes: 4,
    excerpt:
      "Themes from our “Why Choose Us” section—written for stakeholders evaluating a long-term partner.",
    body: whyChooseItems.map(
      (item) => `${item.title}: ${item.description}`
    ),
  },
  {
    slug: "support-and-response-times",
    title: "Support and Response Times",
    category: "Operations",
    author: company.name,
    date: "2026-03-01",
    readMinutes: 3,
    excerpt:
      "What we communicate about quotes, support channels, and how to reach us.",
    body: [
      company.contact.contactBlurb,
      `Reach us at ${company.contact.phone} or ${company.contact.emailDisplay}. ${company.contact.supportBullets.join(" ")}`,
    ],
  },
  {
    slug: "stats-and-track-record",
    title: "By the Numbers",
    category: "Company",
    author: company.name,
    date: "2026-03-12",
    readMinutes: 2,
    excerpt:
      "How we present public milestones—clients, deliveries, active work, and practice breadth.",
    body: [
      `On the site we highlight: ${company.stats
        .map((s) => `${s.label}: ${s.value ?? "—"}${s.suffix ?? ""}`)
        .join("; ")}. These figures summarize the portfolio and homepage expertise grid rather than speculative growth claims.`,
    ],
  },
];
