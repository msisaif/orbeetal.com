import { validateData } from "@/lib/validateData";
import {
  pageMetaSchema,
  statSchema,
  whyChooseUsItemSchema,
  missionVisionSchema,
  serviceSchema,
  departmentSchema,
  testimonialSchema,
  teamMemberSchema,
  navLinkSchema,
  contactInfoSchema,
  siteConfigSchema,
  legalSectionSchema,
  bannerContentSchema,
  eventStatSchema,
  eventInfoCardSchema,
  eventSubmitItemSchema,
  eventCriteriaItemSchema,
  eventMetaSchema,
  portfolioProjectSchema,
  clientSchema,
  processStepSchema,
} from "@/lib/schemas";

import { services, servicesPageMeta } from "./services.js";
import { departments, departmentsPageMeta } from "./departments.js";
import { teamMembers, teamPageMeta } from "./team/index.js";
import { portfolioProjects, portfolioPageMeta } from "./portfolio.js";
import { testimonials } from "./testimonials.js";
import { clients } from "./clients.js";
import { processSteps } from "./process.js";
import {
  stats,
  whyChooseUs,
  aboutIntro,
  aboutPageExtra,
  mission,
  vision,
  aboutPageMeta,
} from "./about.js";
import { contactInfo, contactPageMeta } from "./contact.js";
import {
  ideaContestMeta,
  ideaContestBannerContent,
  ideaContestPageMeta,
  ideaContestStats,
  ideaContestInfoCards,
  ideaContestSubmitItems,
  ideaContestCriteria,
} from "./ideaContest.js";
import {
  cvSubmitMeta,
  cvSubmitBannerContent,
  cvSubmitPageMeta,
  cvSubmitStats,
  cvSubmitInfoCards,
  cvSubmitSteps,
  cvSubmitBenefits,
} from "./cvSubmit.js";
import {
  features,
  activeHero,
  activeTopBanner,
  customBannerContent,
} from "./siteConfig.js";
import { navLinks } from "./navigation.js";
import {
  termsPageMeta,
  termsSections,
  privacyPageMeta,
  privacySections,
  cookiesPageMeta,
  cookiesSections,
} from "./legal/index.js";

validateData(pageMetaSchema, servicesPageMeta, "servicesPageMeta");
validateData(serviceSchema.array(), services, "services");

validateData(pageMetaSchema, departmentsPageMeta, "departmentsPageMeta");
validateData(departmentSchema.array(), departments, "departments");

validateData(pageMetaSchema, teamPageMeta, "teamPageMeta");
validateData(teamMemberSchema.array(), teamMembers, "teamMembers");

validateData(pageMetaSchema, portfolioPageMeta, "portfolioPageMeta");

validateData(testimonialSchema.array(), testimonials, "testimonials");

validateData(statSchema.array(), stats, "stats");
validateData(whyChooseUsItemSchema.array(), whyChooseUs, "whyChooseUs");
validateData(missionVisionSchema, mission, "mission");
validateData(missionVisionSchema, vision, "vision");
validateData(pageMetaSchema, aboutPageMeta, "aboutPageMeta");

if (!aboutIntro || !aboutPageExtra) {
  throw new Error('Data validation failed for "aboutIntro/aboutPageExtra": must be non-empty strings');
}

validateData(pageMetaSchema, contactPageMeta, "contactPageMeta");
validateData(contactInfoSchema, contactInfo, "contactInfo");

validateData(siteConfigSchema, { features, activeHero, activeTopBanner, customBannerContent }, "siteConfig");

validateData(navLinkSchema.array(), navLinks, "navLinks");

validateData(pageMetaSchema, termsPageMeta, "termsPageMeta");
validateData(legalSectionSchema.array(), termsSections, "termsSections");
validateData(pageMetaSchema, privacyPageMeta, "privacyPageMeta");
validateData(legalSectionSchema.array(), privacySections, "privacySections");
validateData(pageMetaSchema, cookiesPageMeta, "cookiesPageMeta");
validateData(legalSectionSchema.array(), cookiesSections, "cookiesSections");

validateData(eventMetaSchema, ideaContestMeta, "ideaContestMeta");
validateData(bannerContentSchema, ideaContestBannerContent, "ideaContestBannerContent");
validateData(pageMetaSchema, ideaContestPageMeta, "ideaContestPageMeta");
validateData(eventStatSchema.array(), ideaContestStats, "ideaContestStats");
validateData(eventInfoCardSchema.array(), ideaContestInfoCards, "ideaContestInfoCards");
validateData(eventSubmitItemSchema.array(), ideaContestSubmitItems, "ideaContestSubmitItems");
validateData(eventCriteriaItemSchema.array(), ideaContestCriteria, "ideaContestCriteria");

validateData(eventMetaSchema, cvSubmitMeta, "cvSubmitMeta");
validateData(bannerContentSchema, cvSubmitBannerContent, "cvSubmitBannerContent");
validateData(pageMetaSchema, cvSubmitPageMeta, "cvSubmitPageMeta");
validateData(eventStatSchema.array(), cvSubmitStats, "cvSubmitStats");
validateData(eventInfoCardSchema.array(), cvSubmitInfoCards, "cvSubmitInfoCards");
validateData(eventSubmitItemSchema.array(), cvSubmitSteps, "cvSubmitSteps");
validateData(eventCriteriaItemSchema.array(), cvSubmitBenefits, "cvSubmitBenefits");

validateData(portfolioProjectSchema.array(), portfolioProjects, "portfolioProjects");
validateData(clientSchema.array(), clients, "clients");
validateData(processStepSchema.array(), processSteps, "processSteps");
