import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import IdeaContestLanding from "@/components/sections/IdeaContestLanding";
import { ideaContestPageMeta } from "@/data/ideaContest.js";
import { activeHero } from "@/data/siteConfig.js";

export const metadata = ideaContestPageMeta;

export default function IdeaContestPage() {
  if (activeHero && activeHero === "idea-contest") {
    return (
      <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/30 selection:text-white">
        <Navbar />
        <IdeaContestLanding />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/30 selection:text-white">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">Idea Contest is not active</h1>
        <p className="text-lg text-muted-foreground">
          Please check back later for updates on the Idea Contest.
        </p>
      </div>
      <Footer />
    </div>
  );
}
