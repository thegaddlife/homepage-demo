import { MemorialContainer } from "@/components/layout/MemorialContainer";
import { MemorialFooter } from "@/components/layout/MemorialFooter";
import { MemorialHeading } from "@/components/layout/MemorialHeading";
import { MemorialLayout } from "@/components/layout/MemorialLayout";
import { MemorialNav } from "@/components/layout/MemorialNav";
import { Clock } from "lucide-react";
import { FamilyTimeline } from "./components/family-timeline";

export default function TimelinePage() {
  return (
    <MemorialLayout>
      <MemorialNav variant="timeline" />

      <MemorialContainer>
        <MemorialHeading
          icon={Clock}
          title="Family Timeline"
          subtitle="of Eugene W. Gadd"
          description="A chronological view of important family milestones and memories spanning Gene's life."
        />
      </MemorialContainer>

      <FamilyTimeline />
      <MemorialFooter />
    </MemorialLayout>
  );
}
