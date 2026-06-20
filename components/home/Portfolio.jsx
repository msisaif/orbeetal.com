import { PortfolioContent } from "@/components/home/PortfolioContent";
import { getPortfolioProjects } from "@/lib/content/portfolio.js";

export async function Portfolio() {
  const projects = await getPortfolioProjects();
  return <PortfolioContent projects={projects} />;
}
