import dynamic from "next/dynamic";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { WhatWeDoSection } from "@/components/sections/WhatWeDoSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ClientsMarqueeSection } from "@/components/sections/ClientsMarqueeSection";
import { CTASection } from "@/components/sections/CTASection";
import { pages } from "@/data/pages";
export const metadata = pages.home.metadata;

const TestimonialsSection = dynamic(
  () =>
    import("@/components/sections/TestimonialsSection").then((m) => ({
      default: m.TestimonialsSection,
    })),
  { loading: () => <div className="h-40" aria-hidden /> }
);

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <AboutSection />
      <WhyChooseSection />
      <WhatWeDoSection />
      <ProjectsSection />
      <ProductsSection />
      <TeamSection />
      <TestimonialsSection />
      <BlogSection />
      <FAQSection />
      <ContactSection />
      <ClientsMarqueeSection />
      <CTASection />
    </>
  );
}
