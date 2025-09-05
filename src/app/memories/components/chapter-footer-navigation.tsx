"use client";

import { Post } from "@/types";

export function ChapterFooterNavigation({
  chapters,
  chapter,
}: {
  chapters: Post[];
  chapter: Post;
}) {
  const idx = chapters.findIndex((c) => c.slug === chapter.slug);
  const previous = chapters[idx - 1];
  const next = chapters[idx + 1];

  return (
    <div className="mt-10 flex items-center justify-between text-sm text-white/60">
      <span>
        Chapter {idx + 1} of {chapters.length}
      </span>
      <div className="flex items-center gap-2">
        {previous && (
          <a
            href={`/${previous.slug}`}
            className="rounded-xl px-3 py-2 ring-1 ring-white/10 hover:bg-white/10"
          >
            ← {previous.title}
          </a>
        )}
        {next && (
          <a
            href={`/${next.slug}`}
            className="rounded-xl px-3 py-2 ring-1 ring-white/10 hover:bg-white/10"
          >
            {next.title} →
          </a>
        )}
      </div>
    </div>
  );
}
