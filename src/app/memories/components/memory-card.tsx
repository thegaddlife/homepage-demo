"use client";

import { Post } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export const MemoryCard = ({
  chapter,
  i,
  timeToRead,
}: {
  chapter: Post;
  i: number;
  timeToRead: string;
}) => {
  return (
    <motion.div
      key={chapter.slug}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
    >
      <Link
        key={chapter.slug}
        href={chapter.slug}
        className="group overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10"
      >
        {/* 16:9 thumbnail without aspect-ratio plugin */}
        <div className="relative w-full pt-[56.25%]">
          <Image
            src={chapter.thumbnail}
            alt={chapter.title}
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
              {chapter.title}
            </h3>
            {chapter.subtitle && (
              <p className="text-sm text-white/60">{chapter.subtitle}</p>
            )}
          </div>
        </div>
        <div className="p-4 text-sm text-white/70">{chapter.summary}</div>
        <div className="flex items-center justify-between px-4 pb-4 text-xs text-white/60">
          <span className="inline-flex items-center gap-2">
            <BookOpen className="h-4 w-4" /> {timeToRead}
          </span>
          <span className="opacity-60">Read →</span>
        </div>
      </Link>
    </motion.div>
  );
};
