import { EventCriteriaList } from "@/components/event/EventCriteriaList";
import { EventInfoCardGrid } from "@/components/event/EventInfoCardGrid";
import { EventStepsList } from "@/components/event/EventStepsList";
import { IdeaContestClosingSection } from "@/components/pages/idea-contest/IdeaContestClosingSection";
import { IdeaContestEligibilitySection } from "@/components/pages/idea-contest/IdeaContestEligibilitySection";
import { IdeaContestHero } from "@/components/pages/idea-contest/IdeaContestHero";

export function IdeaContestLanding({ content }) {
  const { meta, infoCards, submitItems, criteria } = content;

  return (
    <main className="bg-background text-foreground pt-12">
      <IdeaContestHero meta={meta} />
      <EventInfoCardGrid cards={infoCards} />
      <EventStepsList
        tagline="Submission Guidelines"
        title="What to"
        titleHighlight="Submit?"
        items={submitItems}
        accent="amber"
      />
      <EventCriteriaList
        tagline="Judging"
        title="Evaluation"
        titleHighlight="Criteria"
        items={criteria}
      />
      <IdeaContestEligibilitySection />
      <IdeaContestClosingSection meta={meta} />
    </main>
  );
}
