import "@/data/validateAll.js";
import { services, servicesPageMeta } from "@/data/services.js";
import { departments, departmentsPageMeta } from "@/data/departments.js";
import { teamMembers, teamPageMeta } from "@/data/team/index.js";
import { portfolioProjects, portfolioPageMeta } from "@/data/portfolio.js";
import { testimonials } from "@/data/testimonials.js";
import { clients } from "@/data/clients.js";
import { processSteps } from "@/data/process.js";
import {
  stats,
  whyChooseUs,
  aboutIntro,
  aboutPageExtra,
  mission,
  vision,
  aboutPageMeta,
} from "@/data/about.js";
import { contactInfo, contactPageMeta } from "@/data/contact.js";
import {
  ideaContestMeta,
  ideaContestBannerContent,
  ideaContestPageMeta,
  ideaContestStats,
  ideaContestInfoCards,
  ideaContestSubmitItems,
  ideaContestCriteria,
} from "@/data/ideaContest.js";
import {
  cvSubmitMeta,
  cvSubmitBannerContent,
  cvSubmitPageMeta,
  cvSubmitStats,
  cvSubmitInfoCards,
  cvSubmitSteps,
  cvSubmitBenefits,
} from "@/data/cvSubmit.js";
import {
  features,
  activeHero,
  activeTopBanner,
  customBannerContent,
} from "@/data/siteConfig.js";
import { navLinks } from "@/data/navigation.js";
import {
  termsPageMeta,
  termsHero,
  termsLastUpdated,
  termsSections,
  privacyPageMeta,
  privacyHero,
  privacyLastUpdated,
  privacySections,
  cookiesPageMeta,
  cookiesHero,
  cookiesLastUpdated,
  cookiesSections,
} from "@/data/legal/index.js";
import { ruetDepartments } from "@/data/universities/ruet.js";

export async function getServices() {
  return services;
}

export async function getServicesPageMeta() {
  return servicesPageMeta;
}

export async function getDepartments() {
  return departments;
}

export async function getDepartmentsPageMeta() {
  return departmentsPageMeta;
}

export async function getTeamMembers() {
  return teamMembers;
}

export async function getTeamMember(slug) {
  return teamMembers.find((m) => m.slug === slug) ?? null;
}

export async function getTeamPageMeta() {
  return teamPageMeta;
}

export async function getPortfolioProjects() {
  return portfolioProjects;
}

export async function getPortfolioPageMeta() {
  return portfolioPageMeta;
}

export async function getTestimonials() {
  return testimonials;
}

export async function getClients() {
  return clients;
}

export async function getProcessSteps() {
  return processSteps;
}

export async function getAboutContent() {
  return { stats, whyChooseUs, aboutIntro, aboutPageExtra, mission, vision };
}

export async function getAboutPageMeta() {
  return aboutPageMeta;
}

export async function getContactInfo() {
  return contactInfo;
}

export async function getContactPageMeta() {
  return contactPageMeta;
}

export async function getNavLinks() {
  return navLinks;
}

export async function getSiteConfig() {
  return { features, activeHero, activeTopBanner, customBannerContent };
}

export async function getIdeaContestBannerContent() {
  return ideaContestBannerContent;
}

export async function getCvSubmitBannerContent() {
  return cvSubmitBannerContent;
}

export async function getIdeaContestContent() {
  return {
    meta: ideaContestMeta,
    pageMeta: ideaContestPageMeta,
    stats: ideaContestStats,
    infoCards: ideaContestInfoCards,
    submitItems: ideaContestSubmitItems,
    criteria: ideaContestCriteria,
  };
}

export async function getCvSubmitContent() {
  return {
    meta: cvSubmitMeta,
    pageMeta: cvSubmitPageMeta,
    stats: cvSubmitStats,
    infoCards: cvSubmitInfoCards,
    steps: cvSubmitSteps,
    benefits: cvSubmitBenefits,
  };
}

export async function getLegalTerms() {
  return { pageMeta: termsPageMeta, hero: termsHero, lastUpdated: termsLastUpdated, sections: termsSections };
}

export async function getLegalPrivacy() {
  return { pageMeta: privacyPageMeta, hero: privacyHero, lastUpdated: privacyLastUpdated, sections: privacySections };
}

export async function getLegalCookies() {
  return { pageMeta: cookiesPageMeta, hero: cookiesHero, lastUpdated: cookiesLastUpdated, sections: cookiesSections };
}

export async function getRuetDepartments() {
  return ruetDepartments;
}
