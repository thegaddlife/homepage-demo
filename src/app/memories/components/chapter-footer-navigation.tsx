"use client";

import { getAdjacentChapters, getCurrentChapter } from "@/lib/chapter-utils";
import { chapters } from "@/lib/chapter-utils";
import { usePathname } from "next/navigation";

export function ChapterFooterNavigation() {
  const pathname = usePathname();
  const chapter = getCurrentChapter(pathname);
  const { previous, next } = getAdjacentChapters(pathname);
  const idx = chapters.findIndex((c) => c.slug === chapter?.slug);
  return (
    <div className="mt-10 flex items-center justify-between text-sm text-white/60">
      <span>
        Chapter {idx + 1} of {chapters.length}
      </span>
      <div className="flex items-center gap-2">
        {previous && (
          <a
            href={`/memories/${previous.slug}`}
            className="rounded-xl px-3 py-2 ring-1 ring-white/10 hover:bg-white/10"
          >
            ← {previous.title}
          </a>
        )}
        {next && (
          <a
            href={`/memories/${next.slug}`}
            className="rounded-xl px-3 py-2 ring-1 ring-white/10 hover:bg-white/10"
          >
            {next.title} →
          </a>
        )}
      </div>
    </div>
  );
}
