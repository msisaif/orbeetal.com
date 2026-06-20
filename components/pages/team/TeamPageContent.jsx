import { TeamGrid } from "@/components/shared/TeamGrid";
import { TeamStatsSection } from "@/components/pages/team/TeamStatsSection";

export function TeamPageContent({ teamMembers, stats }) {
  return (
    <>
      <section className="py-20 relative z-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <TeamGrid teamMembers={teamMembers} />
        </div>
      </section>

      <TeamStatsSection stats={stats} />
    </>
  );
}
