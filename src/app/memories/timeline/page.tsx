import { MemorialFooter } from "@/components/layout/MemorialFooter";
import { MemorialLayout } from "@/components/layout/MemorialLayout";
import { MemorialNav } from "@/components/layout/MemorialNav";
import { FamilyTimeline } from "./components/family-timeline";

export default function TimelinePage() {
  return (
    <MemorialLayout>
      <MemorialNav variant="timeline" />
      <FamilyTimeline />
      <MemorialFooter />
    </MemorialLayout>
  );
}
