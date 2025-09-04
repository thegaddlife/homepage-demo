import { MemorialLayout } from "@/components/layout/MemorialLayout";
import { ChapterNavigation } from "../components/chapter-navigation";

export default function MemoriesPartsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MemorialLayout>
      <ChapterNavigation />
      <div className="h-24" />
      <main className="relative z-10 mx-auto max-w-3xl px-6 pt-8 pb-24">
        <article className="space-y-6 leading-relaxed text-white/80">
          {children}
        </article>
      </main>
    </MemorialLayout>
  );
}
