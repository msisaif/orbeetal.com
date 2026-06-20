import { PageLayout } from "@/components/layout/PageLayout";
import { Hero } from "@/components/home/Hero";
import { IdeaContest } from "@/components/home/IdeaContest";
import { CvSubmit } from "@/components/home/CvSubmit";
import { ClientsBar } from "@/components/shared/ClientsBar";
import { Services } from "@/components/home/Services";
import { Departments } from "@/components/home/Departments";
import { Portfolio } from "@/components/home/Portfolio";
import { Testimonials } from "@/components/home/Testimonials";
import { Team } from "@/components/home/Team";
import { About } from "@/components/home/About";
import { Process } from "@/components/home/Process";
import { Contact } from "@/components/home/Contact";
import { BasisBadge } from "@/components/common/BasisBadge";
import { getSiteConfig } from "@/lib/content/siteConfig.js";
import { resolveActiveHero } from "@/lib/siteFeatures.js";
import { getClients } from "@/lib/content/clients.js";

const heroComponents = {
  hero: Hero,
  "idea-contest": IdeaContest,
  "cv-submit": CvSubmit,
};

export default async function Home() {
  const [siteConfig, clients] = await Promise.all([getSiteConfig(), getClients()]);
  const heroKey = resolveActiveHero(siteConfig);
  const HeroComponent = heroComponents[heroKey] ?? Hero;

  return (
    <PageLayout>
      <HeroComponent />
      <div className="py-8 flex justify-center border-b border-white/5 bg-white/1 border-t">
        <BasisBadge />
      </div>
      <ClientsBar clients={clients} />
      <Services />
      <Departments />
      <Portfolio />
      <Testimonials />
      <Team />
      <About />
      <Process />
      <Contact />
    </PageLayout>
  );
}
