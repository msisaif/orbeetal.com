import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import IdeaContestLanding from "@/components/sections/IdeaContestLanding";
import { ideaContestPageMeta } from "@/data/ideaContest.js";

export const metadata = ideaContestPageMeta;

export default function IdeaContestPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/30 selection:text-white">
      <Navbar />
      <IdeaContestLanding />
      <Footer />
    </div>
  );
}
