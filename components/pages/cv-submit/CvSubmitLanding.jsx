import { CvSubmitForm } from "@/components/pages/cv-submit/CvSubmitForm";
import { CvSubmitClosingSection } from "@/components/pages/cv-submit/CvSubmitClosingSection";
import { CvSubmitHero } from "@/components/pages/cv-submit/CvSubmitHero";
import { EventCriteriaList } from "@/components/event/EventCriteriaList";
import { EventInfoCardGrid } from "@/components/event/EventInfoCardGrid";
import { EventStepsList } from "@/components/event/EventStepsList";

export function CvSubmitLanding({ content, ruetDepartments }) {
  const { meta, infoCards, steps, benefits } = content;

  return (
    <main className="bg-background text-foreground pt-12">
      <CvSubmitHero meta={meta} />
      <EventInfoCardGrid cards={infoCards} />
      <EventStepsList
        tagline="Process"
        title="How to"
        titleHighlight="Submit?"
        items={steps}
        accent="primary"
        showStepNumber
      />
      <EventCriteriaList tagline="Benefits" title="Why" titleHighlight="Attend?" items={benefits} />
      <CvSubmitForm ruetDepartments={ruetDepartments} />
      <CvSubmitClosingSection meta={meta} />
    </main>
  );
}
