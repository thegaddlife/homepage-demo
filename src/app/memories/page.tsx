import { MemorialContainer } from "@/components/layout/MemorialContainer";
import { MemorialFooter } from "@/components/layout/MemorialFooter";
import { MemorialLayout } from "@/components/layout/MemorialLayout";
import { MemorialNav } from "@/components/layout/MemorialNav";
import { getMarkdownFromSlug } from "@/lib/file";
import { getMemoriesSorted } from "@/lib/memories-utils";
import { BookOpen } from "lucide-react";
import { readingTime } from "reading-time-estimator";
import { MemoryCard } from "./components/memory-card";

export default async function MemoriesPage() {
  const sortedPosts = getMemoriesSorted();

  return (
    <MemorialLayout>
      <MemorialNav variant="memories" />

      <MemorialContainer>
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-3">
            <BookOpen className="h-8 w-8 text-white/60" />
            <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            My Memories
          </h1>
          <p className="mt-2 text-base text-white/70">By Eugene W. Gadd</p>
          <div className="mt-2 flex items-center gap-2 text-sm text-white/60">
            <div className="h-1 w-1 rounded-full bg-white/40" />
            <span>Originally finished in 1998</span>
            <div className="h-1 w-1 rounded-full bg-white/40" />
            <span>2nd Edition 2025</span>
          </div>
          <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-white/70">
              Browse the chapters below. Click a card to begin reading this
              collection of memories spanning eight decades of life, love, and
              legacy.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sortedPosts.map(async (chapter, i) => {
            const result = await getMarkdownFromSlug(chapter.slug);
            if (!result || !result.source) {
              return null;
            }
            const timeToRead = readingTime(result.source, 200).text;
            return (
              <MemoryCard
                key={chapter.slug}
                chapter={chapter}
                i={i}
                timeToRead={timeToRead}
              />
            );
          })}
        </div>
      </MemorialContainer>

      <MemorialFooter />
    </MemorialLayout>
  );
}
