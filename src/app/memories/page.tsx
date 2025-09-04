"use client";

import { MemorialContainer } from "@/components/layout/MemorialContainer";
import { MemorialFooter } from "@/components/layout/MemorialFooter";
import { MemorialLayout } from "@/components/layout/MemorialLayout";
import { MemorialNav } from "@/components/layout/MemorialNav";
import { chapters } from "@/lib/chapter-utils";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

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
            <motion.div
              key={ch.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={`/memories/${ch.slug}`}
                className="group overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10"
              >
                {/* 16:9 thumbnail without aspect-ratio plugin */}
                <div className="relative w-full pt-[56.25%]">
                  <Image
                    src={ch.thumbnail}
                    alt={ch.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-90 grayscale transition duration-300 group-hover:scale-[1.03] group-hover:grayscale-25"
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
              </Link>
            </motion.div>
          ))}
        </div>
      </MemorialContainer>

      <MemorialFooter />
    </MemorialLayout>
  );
}
