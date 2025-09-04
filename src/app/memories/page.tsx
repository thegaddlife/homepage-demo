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
  content: string[];
};

const chapters: Chapter[] = [
  {
    slug: "intro-dedication",
    title: "Introduction & Dedication",
    subtitle: "Dedicated to Kids and Grandkids",
    summary:
      "Born into a world of newfound possibilities, where radio waves carried music and Model T's carried dreams.",
    thumbnail:
      "https://images.unsplash.com/photo-1580300213830-0d6e6fb51e45?q=80&w=1600&auto=format&fit=crop",
    content: [
      "The 1920s brought jazz, prosperity, and a sense that anything was possible.",
      "Young Gene entered a world where technology was changing everything, and family values remained constant.",
    ],
  },
  {
    slug: "chapter-2-childhood",
    title: "Childhood Adventures",
    subtitle: "Growing Up Strong (1930s)",
    summary:
      "Through the Great Depression, a boy learned the value of hard work and the strength found in family bonds.",
    thumbnail:
      "https://images.unsplash.com/photo-1616012319219-12fda20be89c?q=80&w=1600&auto=format&fit=crop",
    content: [
      "The Depression taught lessons that would last a lifetime: resourcefulness, resilience, and the importance of community.",
      "Every penny mattered, every skill learned was a treasure, and every family meal was a celebration.",
    ],
  },
  {
    slug: "chapter-3-teenage-years",
    title: "Coming of Age",
    subtitle: "Building Character (1940s)",
    summary:
      "War changed the world, but couldn't change the fundamental goodness of a young man finding his way.",
    thumbnail:
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?q=80&w=1600&auto=format&fit=crop",
    content: [
      "The 1940s demanded sacrifice and service. Gene learned what it meant to contribute to something bigger than himself.",
      "Victory gardens, rationing, and community spirit shaped a generation that would rebuild the world.",
    ],
  },
  {
    slug: "chapter-4-young-adulthood",
    title: "New Beginnings",
    subtitle: "Finding Purpose (1950s)",
    summary:
      "Post-war optimism opened doors to careers, family life, and the American Dream realized through honest work.",
    thumbnail:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop",
    content: [
      "The 1950s promised prosperity and delivered it to those willing to work for it.",
      "Gene established his career, his values, and his vision for the family he would build.",
    ],
  },
  {
    slug: "chapter-5-marriage",
    title: "Love Found",
    subtitle: "Building a Life Together (1950s)",
    summary:
      "Two hearts joined in matrimony, creating a partnership that would weather every storm and celebrate every victory.",
    thumbnail:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1600&auto=format&fit=crop",
    content: [
      "Marriage wasn't just a ceremony; it was a daily choice to build something beautiful together.",
      "Through the honeymoon period and into the reality of shared life, love grew deeper with each passing season.",
    ],
  },
  {
    slug: "chapter-6-fatherhood",
    title: "Becoming Dad",
    subtitle: "The Greatest Role (1960s)",
    summary:
      "Nothing could prepare him for the joy, responsibility, and pure wonder of holding his first child.",
    thumbnail:
      "https://images.unsplash.com/photo-1567696153798-96e3dbdc1f38?q=80&w=1600&auto=format&fit=crop",
    content: [
      "The 1960s brought revolution to the world and revelation to a new father.",
      "Every milestone, every bedtime story, every scraped knee taught him what unconditional love really meant.",
    ],
  },
  {
    slug: "chapter-7-career-growth",
    title: "Professional Life",
    subtitle: "Work with Purpose (1960s-70s)",
    summary:
      "A career built on integrity, dedication, and the belief that honest work was a form of service to others.",
    thumbnail:
      "https://images.unsplash.com/photo-1541480601022-2308c0f02487?q=80&w=1600&auto=format&fit=crop",
    content: [
      "Gene approached work like everything else: with commitment, skill, and respect for those around him.",
      "Colleagues became friends, projects became achievements, and work became a way to provide for what mattered most.",
    ],
  },
  {
    slug: "chapter-8-family-traditions",
    title: "Family Traditions",
    subtitle: "Creating Memories (1970s)",
    summary:
      "Holiday gatherings, summer vacations, and Sunday dinners became the rhythm of a life well-lived.",
    thumbnail:
      "https://images.unsplash.com/photo-1516450137517-162bfbeb8dba?q=80&w=1600&auto=format&fit=crop",
    content: [
      "The 1970s brought disco and change, but family traditions remained constant.",
      "Every Christmas morning, every birthday cake, every family photo captured moments that would become treasures.",
    ],
  },
  {
    slug: "chapter-9-community-service",
    title: "Giving Back",
    subtitle: "Service to Community (1970s-80s)",
    summary:
      "True wealth was measured not in what you accumulated, but in what you contributed to the world around you.",
    thumbnail:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1600&auto=format&fit=crop",
    content: [
      "Church committees, neighborhood projects, and quiet acts of kindness defined Gene's approach to community.",
      "He believed that a strong community was built one helpful act at a time.",
    ],
  },
  {
    slug: "chapter-10-craftsmanship",
    title: "Master Craftsman",
    subtitle: "Hands to Work (1980s)",
    summary:
      "Every project was an opportunity to create something lasting, beautiful, and useful for those he loved.",
    thumbnail:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1600&auto=format&fit=crop",
    content: [
      "The workshop was Gene's sanctuary, where wood became furniture and problems became solutions.",
      "Each piece he created carried his signature: attention to detail, quality materials, and love built into every joint.",
    ],
  },
  {
    slug: "chapter-11-grandparenthood",
    title: "Becoming Grandpa",
    subtitle: "New Adventures (1980s)",
    summary:
      "Grandchildren brought a special kind of joy: all the love of parenting with the wisdom of experience.",
    thumbnail:
      "https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=1600&auto=format&fit=crop",
    content: [
      "As a grandfather, Gene discovered he had even more love to give than he'd imagined.",
      "Story time, teaching moments, and spoiling privileges created bonds that would last for generations.",
    ],
  },
  {
    slug: "chapter-12-wisdom-years",
    title: "Wisdom Shared",
    subtitle: "Life Lessons (1990s)",
    summary:
      "The lessons learned through decades of living became gifts freely shared with family and friends.",
    thumbnail:
      "https://images.unsplash.com/photo-1502810365585-56ffa361fdde?q=80&w=1600&auto=format&fit=crop",
    content: [
      "The 1990s brought new technology and old wisdom together in Gene's approach to life.",
      "He had stories for every situation and advice born from experience, not theory.",
    ],
  },
  {
    slug: "chapter-13-mentorship",
    title: "Teaching Others",
    subtitle: "Passing It Forward (1990s-2000s)",
    summary:
      "The greatest teachers are those who lead by example and share their knowledge generously.",
    thumbnail:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1600&auto=format&fit=crop",
    content: [
      "Gene took pride in teaching skills, sharing techniques, and showing younger generations how things were done right.",
      "His workshop became a classroom where patience and expertise created new craftsmen.",
    ],
  },
  {
    slug: "chapter-14-golden-years",
    title: "Golden Years",
    subtitle: "Harvest Time (2000s)",
    summary:
      "The fruits of a life well-lived: strong family bonds, lasting friendships, and a legacy of love.",
    thumbnail:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop",
    content: [
      "These were the years for enjoying what had been built: relationships, memories, and the satisfaction of work well done.",
      "Every day was a gift to be savored, every visit from family a celebration.",
    ],
  },
  {
    slug: "chapter-15-legacy",
    title: "Lasting Legacy",
    subtitle: "What Remains (2012 and Beyond)",
    summary:
      "The true measure of a life isn't in years lived, but in love given and memories created.",
    thumbnail:
      "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?q=80&w=1600&auto=format&fit=crop",
    content: [
      "Gene's legacy lives on in every family tradition, every skill he taught, and every life he touched.",
      "The fingerprints he left on hearts and minds continue to shape the world long after his earthly journey ended.",
    ],
  },
];

export default function MemoriesPage() {
  return (
    <MemorialLayout>
      <MemorialNav variant="memories" />

      <MemorialContainer>
        <div className="mb-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Select a Chapter
          </h1>
          <p className="mt-3 max-w-2xl text-white/70">
            Browse the chapters below. Each card offers a small preview. Click a
            card to begin reading.
          </p>
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
                  <div className="text-xs text-white/70">Chapter {i + 1}</div>
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
                  <BookOpen className="h-4 w-4" /> Preview
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
