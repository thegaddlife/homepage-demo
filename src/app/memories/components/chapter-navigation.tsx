"use client";

import { Post } from "@/types";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Home, List } from "lucide-react";

export function ChapterNavigation({
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
    <div className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 w-[min(96%,_1120px)] rounded-2xl border border-white/10 bg-black/50 px-3 py-2 backdrop-blur-md">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Link
              href="/memories"
              className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-white/80 ring-1 ring-white/10 hover:bg-white/10"
              aria-label="Back to chapter list"
            >
              <Home className="h-4 w-4" /> Back to Chapters
            </Link>
          </div>

          {/* Chapter Select */}
          <div className="flex items-center gap-2 text-sm">
            <List className="h-4 w-4 opacity-70" />
            <label className="sr-only" htmlFor="chapter-select">
              Select chapter
            </label>
            <select
              id="chapter-select"
              value={chapter?.slug}
              onChange={(e) =>
                (window.location.href = `/${e.currentTarget.value}`)
              }
              className="rounded-xl bg-white/5 px-3 py-2 text-white/90 ring-1 ring-white/10 hover:bg-white/10 focus:outline-none"
            >
              {chapters.map((c, i) => (
                <option key={c.slug} value={c.slug} className="bg-neutral-900">
                  {i > 1 ? `Chapter ${i - 1} — ${c.title}` : c.title}
                </option>
              ))}
            </select>
          </div>
          {/* Prev / Next */}
          <div className="flex items-center gap-2">
            <Link
              aria-disabled={!previous}
              href={previous ? `/${previous.slug}` : "#"}
              className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm ring-1 ring-white/10 ${
                previous
                  ? "text-white/90 hover:bg-white/10"
                  : "pointer-events-none text-white/30"
              }`}
            >
              <ChevronLeft className="h-4 w-4" /> Prev
            </Link>
            <Link
              aria-disabled={!next}
              href={next ? `/${next.slug}` : "#"}
              className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm ring-1 ring-white/10 ${
                next
                  ? "text-white/90 hover:bg-white/10"
                  : "pointer-events-none text-white/30"
              }`}
            >
              Next <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
