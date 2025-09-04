import { MemorialContainer } from "@/components/layout/MemorialContainer";
import { MemorialFooter } from "@/components/layout/MemorialFooter";
import { MemorialLayout } from "@/components/layout/MemorialLayout";
import { MemorialNav } from "@/components/layout/MemorialNav";
import Image from "next/image";
import { BookOpen } from "lucide-react";

type Chapter = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  thumbnail: string;
  readTime: number;
};

const chapters: Chapter[] = [
  {
    slug: "dedication",
    title: "Dedication",
    subtitle: "A note of love and purpose",
    summary:
      "Dedicating this collection to the people who have brought joy to my life.",
    thumbnail:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1200&h=675&q=80",
    readTime: 1,
  },
  {
    slug: "introduction",
    title: "Introduction",
    subtitle: "Wilfred's oldest son",
    summary: "My name is Eugene 'Gene' Wilfred Gadd and this is my story.",
    thumbnail:
      "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=1200&h=675&q=80",
    readTime: 1,
  },
  {
    slug: "chapter-1-my-family",
    title: "My Family",
    subtitle: "Roots, relationships, and home",
    summary:
      "An introduction to the family at the heart of these stories—spouses, children, and loved ones who made every chapter meaningful.",
    thumbnail:
      "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1200&h=675&q=80",
    readTime: 2,
  },
  {
    slug: "chapter-2-paternal-relatives",
    title: "Paternal Relatives",
    subtitle: "The Gadd lineage",
    summary:
      "Stories and anecdotes from the paternal side—heritage, character, and the traditions passed down through generations.",
    thumbnail:
      "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?auto=format&fit=crop&w=1200&h=675&q=80",
    readTime: 3,
  },
  {
    slug: "chapter-3-maternal-relatives",
    title: "Maternal Relatives",
    subtitle: "Strengths of the Turner side",
    summary:
      "Memories from the maternal branches of the family tree—warmth, resilience, and the stories that shaped our values.",
    thumbnail:
      "https://images.unsplash.com/photo-1455815152231-be9c88eb7468?auto=format&fit=crop&w=1200&h=675&q=80",
    readTime: 4,
  },
  {
    slug: "chapter-4-wonder-years",
    title: "Wonder Years",
    subtitle: "Childhood discoveries",
    summary:
      "Early adventures, lessons learned, and the playful curiosity that set the stage for everything that followed.",
    thumbnail:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&h=675&q=80",
    readTime: 5,
  },
  {
    slug: "chapter-5-mersington",
    title: "Mersington",
    subtitle: "A neighborhood that raised us",
    summary:
      "Life in Mersington—neighbors, routines, and the places that became landmarks of our family story.",
    thumbnail:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1200&h=675&q=80",
    readTime: 6,
  },
  {
    slug: "chapter-6-adolescence",
    title: "Adolescence",
    subtitle: "Becoming and belonging",
    summary:
      "High school years, friendships, teams, and the everyday moments that tested limits and built character.",
    thumbnail:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&h=675&q=80",
    readTime: 7,
  },
  {
    slug: "chapter-7-us-navy",
    title: "US Navy",
    subtitle: "Service and brotherhood",
    summary:
      "From deck to duty—discipline, camaraderie, and the unforgettable experiences that come with serving at sea.",
    thumbnail:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&h=675&q=80",
    readTime: 8,
  },
  {
    slug: "chapter-8-return-to-civilian-life",
    title: "Return to Civilian Life",
    subtitle: "New rhythms onshore",
    summary:
      "Transitioning from military precision to everyday life—work, community, and the steady building of a future.",
    thumbnail:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&h=675&q=80",
    readTime: 9,
  },
  {
    slug: "chapter-9-growing-the-family",
    title: "Growing the Family",
    subtitle: "Welcoming new life",
    summary:
      "Marriage, babies, and the beautiful chaos of a home filled with laughter, love, and late-night feedings.",
    thumbnail:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&h=675&q=80",
    readTime: 10,
  },
  {
    slug: "chapter-10-the-start-of-something-great",
    title: "The Start of Something Great",
    subtitle: "A vision takes shape",
    summary:
      "Dreams, risks, and those first sparks of momentum—the beginnings that would grow into lasting impact.",
    thumbnail:
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1200&h=675&q=80",
    readTime: 11,
  },
  {
    slug: "chapter-11-mitzie-and-the-boys",
    title: "Mitzie and the Boys",
    subtitle: "The heart of our home",
    summary:
      "Everyday moments with Mitzie and the boys—humor, teamwork, and love woven through busy family life.",
    thumbnail:
      "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=1200&h=675&q=80",
    readTime: 12,
  },
  {
    slug: "chapter-12-valley-christian",
    title: "Valley Christian",
    subtitle: "Faith, service, community",
    summary:
      "Serving, leading, and investing in the next generation—memories from the seasons at Valley Christian.",
    thumbnail:
      "https://images.unsplash.com/photo-1502209524164-acea936639a2?auto=format&fit=crop&w=1200&h=675&q=80",
    readTime: 13,
  },
  {
    slug: "chapter-13-then-and-now",
    title: "Then and Now",
    subtitle: "Looking back with gratitude",
    summary:
      "Reflections on change and continuity—what time has taught us and what has remained constant.",
    thumbnail:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&h=675&q=80",
    readTime: 14,
  },
  {
    slug: "chapter-14-retirement-years",
    title: "Retirement Years",
    subtitle: "Rest, joy, and presence",
    summary:
      "A slower pace filled with travel, grandkids, and savoring the simple gifts of everyday life.",
    thumbnail:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=675&q=80",
    readTime: 15,
  },
  {
    slug: "chapter-15-conclusion",
    title: "Conclusion",
    subtitle: "Closing the book with thanks",
    summary:
      "A final reflection on legacy—faith, family, and the enduring lessons that carry forward.",
    thumbnail:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0ea?auto=format&fit=crop&w=1200&h=675&q=80",
    readTime: 16,
  },
];

export default function MemoriesPage() {
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
          {chapters.map((ch, i) => (
            <a
              key={ch.slug}
              href={`/memories/${ch.slug}`}
              className="group overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10"
            >
              {/* 16:9 thumbnail without aspect-ratio plugin */}
              <div className="relative w-full pt-[56.25%]">
                <Image
                  src={ch.thumbnail}
                  alt={ch.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-90 transition duration-300 group-hover:scale-[1.03]"
                  width={320}
                  height={240}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <div className="absolute right-0 bottom-0 left-0 p-4">
                  <div className="text-xs text-white/70">
                    {i > 1 ? `Chapter ${i - 1}` : ""}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {ch.title}
                  </h3>
                  {ch.subtitle && (
                    <p className="text-sm text-white/60">{ch.subtitle}</p>
                  )}
                </div>
              </div>
              <div className="p-4 text-sm text-white/70">{ch.summary}</div>
              <div className="flex items-center justify-between px-4 pb-4 text-xs text-white/60">
                <span className="inline-flex items-center gap-2">
                  <BookOpen className="h-4 w-4" /> {ch.readTime} min read
                </span>
                <span className="opacity-60">Read →</span>
              </div>
            </a>
          ))}
        </div>
      </MemorialContainer>

      <MemorialFooter />
    </MemorialLayout>
  );
}
