"use client";

import { MemorialFooter } from "@/components/layout/MemorialFooter";
import { MemorialLayout } from "@/components/layout/MemorialLayout";
import { chapters, getCurrentChapter } from "@/lib/chapter-utils";
import { usePathname } from "next/navigation";
import { ChapterFooterNavigation } from "../components/chapter-footer-navigation";
import { ChapterNavigation } from "../components/chapter-navigation";

export default function MemoriesPartsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const chapter = getCurrentChapter(pathname);
  const idx = chapters.findIndex((c) => c.slug === chapter?.slug);
  return (
    <MemorialLayout>
      <ChapterNavigation />
      <div className="h-24" />
      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pt-6 text-center">
        <p className="text-xs tracking-[0.25em] text-white/50">
          {idx > 1 ? `CHAPTER ${idx - 1}` : ""}
        </p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
          {chapter?.title}
        </h1>
        {chapter?.subtitle && (
          <p className="mt-2 text-base text-white/70">{chapter?.subtitle}</p>
        )}
        <div className="mx-auto mt-6 h-px w-28 bg-white/15" />
      </section>
      <main className="relative z-10 mx-auto max-w-3xl px-6 pt-8 pb-24">
        <article className="space-y-6 leading-relaxed text-white/80">
          {children}
        </article>
        <ChapterFooterNavigation />
      </main>
      <MemorialFooter />
    </MemorialLayout>
  );
}
