import { slugify } from "@/lib/utils";

/** Homepage “Our Expertise” grid — from `ExpertiseSection.jsx` */
export const expertiseServices = [
  {
    slug: slugify("App Development"),
    title: "App Development",
    shortDescription:
      "We build high-performance, scalable, and user-friendly mobile applications tailored to your business needs. From concept to deployment, our team ensures seamless design, robust functionality, and smooth user experience across iOS and Android platforms.",
    highlights: [
      "Native and cross-platform options matched to your budget and timeline.",
      "Offline-first patterns, push notifications, and store submission support.",
      "Instrumentation for crashes and usage so you can iterate after launch.",
    ],
    icon: "/images/mobile-development.png",
  },
  {
    slug: slugify("UI/UX Design"),
    title: "UI/UX Design",
    shortDescription:
      "We craft interfaces that feel obvious in the moment and hold up as your product grows — research-backed flows, accessible components, and visual systems your team can extend.",
    highlights: [
      "User journeys, wireframes, and high-fidelity UI aligned to your brand.",
      "Design systems and component libraries for consistent shipping.",
      "Usability review and iteration with developers in the loop.",
    ],
    icon: "/images/ui-ux.svg",
  },
  {
    slug: slugify("Web Development"),
    title: "Web Development",
    shortDescription:
      "From marketing sites to complex web apps, we build fast, secure experiences on modern stacks — with SEO, performance, and maintainability treated as features, not afterthoughts.",
    highlights: [
      "Responsive front ends and robust APIs or CMS integrations.",
      "Performance budgets, Core Web Vitals, and production monitoring hooks.",
      "Clear handover docs so your team can own the codebase confidently.",
    ],
    icon: "/images/web-development.svg",
  },
  {
    slug: slugify("Cyber Security"),
    title: "Cyber Security",
    shortDescription:
      "We help you reduce risk with practical security architecture — hardening, monitoring, and response patterns suited to your threat model and compliance needs.",
    highlights: [
      "Threat modeling and secure configuration for apps and infrastructure.",
      "Guidance on access control, secrets, and dependency hygiene.",
      "Incident-ready logging and playbooks your operators can run.",
    ],
    icon: "/images/cyber-security.svg",
  },
  {
    slug: slugify("Digital Marketing"),
    title: "Digital Marketing",
    shortDescription:
      "We connect product launches to demand — search, content, campaigns, and analytics — so growth work ties back to measurable outcomes, not vanity metrics.",
    highlights: [
      "SEO and content strategy grounded in your service lines.",
      "Paid and organic campaigns with clear attribution.",
      "Reporting dashboards your leadership can actually use.",
    ],
    icon: "/images/digital-marketing.svg",
  },
  {
    slug: slugify("AI Powered Solutions"),
    title: "AI Powered Solutions",
    shortDescription:
      "Harness the power of Artificial Intelligence to transform your business. We deliver intelligent solutions such as predictive analytics, natural language processing, computer vision, and automation that drive smarter decisions, improve efficiency, and unlock new opportunities for growth.",
    highlights: [
      "Use-case discovery: where models help versus where rules suffice.",
      "MLOps-minded delivery with evaluation sets and monitoring hooks.",
      "Integration with your existing data stores and product surfaces.",
    ],
    icon: "/images/ai.png",
  },
];

/** Services page tabs — from `ServicesSection.jsx` (slugs explicit to avoid clashes with expertise) */
export const serviceOfferings = [
  {
    slug: "software-development",
    name: "Software Development",
    description:
      "Transform your digital landscape with our custom software solutions that put your business ahead of the curve.",
    bullets: [
      "Leveraging technologies like .NET, Java, PHP, Python, Ruby, and MySQL.",
      "Agile methodology for flexibility and rapid development.",
      "Scalable, secure, and high-performing software.",
      "Quality assurance and timely delivery.",
    ],
    image: "/images/software.png",
  },
  {
    slug: "ai-solutions",
    name: "AI Solutions",
    relatedExpertiseSlug: slugify("AI Powered Solutions"),
    description:
      "Leverage artificial intelligence to enhance your business operations and drive innovation.",
    bullets: [
      "Machine learning to improve data insights.",
      "Natural language processing for better user interaction.",
      "Data analytics to help make data-driven decisions.",
      "Enhance efficiency and innovation.",
    ],
    image: "/images/chatbot.png",
  },
  {
    slug: "digital-marketing-services",
    name: "Digital Marketing",
    relatedExpertiseSlug: slugify("Digital Marketing"),
    description:
      "Boost your online presence with targeted digital marketing strategies designed to grow your brand.",
    bullets: [
      "SEO and SEM for better search rankings.",
      "Social media marketing to increase engagement.",
      "Content creation to drive traffic and awareness.",
      "Strategies to improve brand visibility and sales.",
    ],
    image: "/images/dig.png",
  },
  {
    slug: "product-design",
    name: "Product Design",
    description:
      "Create innovative, user-centered designs that drive customer satisfaction and business success.",
    bullets: [
      "End-to-end product design from wireframing to testing.",
      "User testing and implementation for seamless user experiences.",
      "Prototyping to validate concepts.",
    ],
    image: "/images/product-design.jpg",
  },
  {
    slug: "web-development-services",
    name: "Web Development",
    relatedExpertiseSlug: slugify("Web Development"),
    description:
      "Build responsive, high-performance websites that engage your audience and drive conversions.",
    bullets: [
      "Front-end and back-end development for a full-stack solution.",
      "E-commerce integration to boost sales.",
      "CMS integration for easy content management.",
      "SEO optimization to ensure search engine visibility.",
    ],
    image: "/images/web-development.svg",
  },
  {
    slug: "cyber-security-services",
    name: "Cyber Security",
    relatedExpertiseSlug: slugify("Cyber Security"),
    description:
      "Protect your business with comprehensive cyber security solutions tailored to your needs.",
    bullets: [
      "Risk assessments to identify vulnerabilities.",
      "Threat detection and response systems.",
      "Compliance with industry regulations.",
    ],
    image: "/images/cyber.png",
  },
];

export function getExpertiseBySlug(slug) {
  return expertiseServices.find((s) => s.slug === slug);
}

export function getOfferingBySlug(slug) {
  return serviceOfferings.find((s) => s.slug === slug);
}

/** Supports `/services/[slug]` for both expertise cards and offerings tabs */
export function resolveServicePage(slug) {
  const offering = getOfferingBySlug(slug);
  if (offering) {
    const expertise = offering.relatedExpertiseSlug
      ? expertiseServices.find((e) => e.slug === offering.relatedExpertiseSlug)
      : undefined;
    return { offering, expertise };
  }
  const expertise = getExpertiseBySlug(slug);
  if (expertise) {
    const linkedOffering = serviceOfferings.find(
      (o) => o.relatedExpertiseSlug === expertise.slug
    );
    return { expertise, offering: linkedOffering };
  }
  return undefined;
}

/** Homepage “Learn more” → prefer full offering URL when linked */
export function getExpertiseHref(expertiseSlug) {
  const linked = serviceOfferings.find(
    (o) => o.relatedExpertiseSlug === expertiseSlug
  );
  if (linked) return `/services/${linked.slug}`;
  return `/services/${expertiseSlug}`;
}
