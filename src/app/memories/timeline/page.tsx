import { MemorialContainer } from "@/components/layout/MemorialContainer";
import { MemorialFooter } from "@/components/layout/MemorialFooter";
import { MemorialLayout } from "@/components/layout/MemorialLayout";
import { MemorialNav } from "@/components/layout/MemorialNav";
import { Clock } from "lucide-react";
import { FamilyTimeline } from "./components/family-timeline";

export default function TimelinePage() {
  return (
    <MemorialLayout>
      <MemorialNav variant="timeline" />

      <MemorialContainer>
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-3">
            <Clock className="h-8 w-8 text-white/60" />
            <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Family Timeline
          </h1>
          <p className="mt-2 text-base text-white/70">of Eugene W. Gadd</p>
          <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-white/70">
              A chronological view of important family milestones and memories
              spanning Gene&apos;s life.
            </p>
          </div>
        </div>
      </MemorialContainer>

      <FamilyTimeline />
      <MemorialFooter />
    </MemorialLayout>
  );
}
