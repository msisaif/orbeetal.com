import dynamic from "next/dynamic";
import { getPortfolioProjects } from "@/lib/content/portfolio.js";

const PortfolioContent = dynamic(
  () => import("./PortfolioContent").then((m) => m.PortfolioContent),
  { ssr: true }
);

export async function Portfolio() {
  const projects = await getPortfolioProjects();
  return <PortfolioContent projects={projects} />;
}
