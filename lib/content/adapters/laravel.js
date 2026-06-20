const BASE = () => process.env.BACKEND_API_URL;

async function fetchContent(path) {
  const res = await fetch(`${BASE()}/api/content/${path}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error(`Failed to fetch content: ${path}`);
  return res.json();
}

export async function getServices() {
  return fetchContent("services");
}

export async function getServicesPageMeta() {
  return fetchContent("services/meta");
}

export async function getDepartments() {
  return fetchContent("departments");
}

export async function getDepartmentsPageMeta() {
  return fetchContent("departments/meta");
}

export async function getTeamMembers() {
  return fetchContent("team");
}

export async function getTeamMember(slug) {
  return fetchContent(`team/${slug}`);
}

export async function getTeamPageMeta() {
  return fetchContent("team/meta");
}

export async function getPortfolioProjects() {
  return fetchContent("portfolio");
}

export async function getPortfolioPageMeta() {
  return fetchContent("portfolio/meta");
}

export async function getTestimonials() {
  return fetchContent("testimonials");
}

export async function getClients() {
  return fetchContent("clients");
}

export async function getProcessSteps() {
  return fetchContent("process");
}

export async function getAboutContent() {
  return fetchContent("about");
}

export async function getAboutPageMeta() {
  return fetchContent("about/meta");
}

export async function getContactInfo() {
  return fetchContent("contact");
}

export async function getContactPageMeta() {
  return fetchContent("contact/meta");
}

export async function getNavLinks() {
  return fetchContent("navigation");
}

export async function getSiteConfig() {
  return fetchContent("site-config");
}

export async function getIdeaContestBannerContent() {
  return fetchContent("idea-contest/banner");
}

export async function getCvSubmitBannerContent() {
  return fetchContent("cv-submit/banner");
}

export async function getIdeaContestContent() {
  return fetchContent("idea-contest");
}

export async function getCvSubmitContent() {
  return fetchContent("cv-submit");
}

export async function getLegalTerms() {
  return fetchContent("legal/terms");
}

export async function getLegalPrivacy() {
  return fetchContent("legal/privacy");
}

export async function getLegalCookies() {
  return fetchContent("legal/cookies");
}

export async function getRuetDepartments() {
  return fetchContent("universities/ruet/departments");
}
