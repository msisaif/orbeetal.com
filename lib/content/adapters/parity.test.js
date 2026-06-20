import { describe, it, expect } from "vitest";
import * as staticAdapter from "./static.js";
import * as laravelAdapter from "./laravel.js";

const ADAPTER_METHODS = [
  "getServices",
  "getServicesPageMeta",
  "getDepartments",
  "getDepartmentsPageMeta",
  "getTeamMembers",
  "getTeamMember",
  "getTeamPageMeta",
  "getPortfolioProjects",
  "getPortfolioPageMeta",
  "getTestimonials",
  "getClients",
  "getProcessSteps",
  "getAboutContent",
  "getAboutPageMeta",
  "getContactInfo",
  "getContactPageMeta",
  "getNavLinks",
  "getSiteConfig",
  "getIdeaContestBannerContent",
  "getCvSubmitBannerContent",
  "getIdeaContestContent",
  "getCvSubmitContent",
  "getLegalTerms",
  "getLegalPrivacy",
  "getLegalCookies",
  "getRuetDepartments",
];

describe("adapter parity contract", () => {
  it("static and laravel adapters export the same methods", () => {
    for (const method of ADAPTER_METHODS) {
      expect(typeof staticAdapter[method]).toBe("function");
      expect(typeof laravelAdapter[method]).toBe("function");
    }
  });
});
