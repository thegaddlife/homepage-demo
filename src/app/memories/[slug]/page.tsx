"use client";

import { MemorialFooter } from "@/components/layout/MemorialFooter";
import { MemorialLayout } from "@/components/layout/MemorialLayout";
import { chapters, getCurrentChapter } from "@/lib/chapter-utils";
import { getMarkdownFiles, getMarkdownFromSlug } from "@/lib/file";
import { notFound, usePathname } from "next/navigation";

export default async function MemoriesPartsLayout({
  params,
}: {
  params: { slug: string };
}) {
  const result = await getMarkdownFromSlug(params.slug);

  if (!result) {
    return notFound();
  }

  const pathname = usePathname();
  const chapter = getCurrentChapter(pathname);
  const idx = chapters.findIndex((c) => c.slug === chapter?.slug);

  return (
    <MemorialLayout>
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
          TODO: content here
        </article>
      </main>
      <MemorialFooter />
    </MemorialLayout>
  );
}

export async function generateStaticParams() {
  const files = getMarkdownFiles();

  const article = (f: string) => f.includes("memories");

  return files.filter(article).map((filename) => ({
    // replace the last dot with dash in the filename for slug
    slug: filename.replace(/\.(?=[^.]*$)/, "-"),
  }));
}
