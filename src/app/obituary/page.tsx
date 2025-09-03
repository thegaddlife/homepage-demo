"use client";

import { MemorialContainer } from "@/components/layout/MemorialContainer";
import { MemorialFooter } from "@/components/layout/MemorialFooter";
import { MemorialLayout } from "@/components/layout/MemorialLayout";
import { MemorialNav } from "@/components/layout/MemorialNav";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  HeartHandshake,
  MapPin,
  MessagesSquare,
} from "lucide-react";

export default function ObituaryPage() {
  return (
    <MemorialLayout>
      <MemorialNav variant="obituary" />

      {/* Title block */}
      <MemorialContainer className="pt-2 md:pt-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs tracking-[0.25em] text-white/50">OBITUARY</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Eugene “Gene” Wilfred Gadd
          </h1>
          <p className="mt-2 text-base text-white/70">1931 — 2012</p>
          <div className="mt-6 h-px w-28 bg-white/15" />
        </motion.div>
      </MemorialContainer>

      {/* Content grid */}
      <MemorialContainer className="grid w-full grid-cols-1 gap-10 pt-8 pb-20 md:grid-cols-12">
        {/* Obituary text */}
        <motion.article
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="md:col-span-8"
        >
          <div className="space-y-6 leading-relaxed text-white/80">
            <p>
              Eugene “Gene” Gadd passed away peacefully in 2025, surrounded by
              family. He will be remembered for his quiet strength, dry humor,
              and the way he always made time for people—never in a hurry when
              someone needed a listening ear.
            </p>
            <h2 className="mt-8 text-xl font-semibold tracking-tight text-white">
              Early Life
            </h2>
            <p>
              Born in 1949, Gene grew up with a love of making and fixing
              things. From an early age he had a craftsman’s patience and a
              teacher’s heart—traits that shaped his work and the way he cared
              for others.
            </p>
            <h2 className="mt-8 text-xl font-semibold tracking-tight text-white">
              Family & Work
            </h2>
            <p>
              Gene found his greatest joy in his family. He approached work with
              integrity and humility, mentoring many along the way. His
              colleagues knew him as dependable and generous; his friends knew
              him as steady and kind.
            </p>
            <h2 className="mt-8 text-xl font-semibold tracking-tight text-white">
              Legacy
            </h2>
            <p>
              Gene leaves behind a legacy of faithfulness, craftsmanship, and
              care. The fingerprints of his life remain on the people and places
              he served, and his stories live on in those who loved him.
            </p>
            <p className="mt-8 text-white/70">
              The family invites you to share memories, photos, and messages in
              the guestbook below.
            </p>
          </div>
        </motion.article>

        {/* Sidebar cards */}
        <aside className="space-y-4 md:col-span-4">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
              <Calendar size={16} /> Celebration of Life
            </div>
            <div className="space-y-2 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Clock size={16} className="opacity-70" /> May 18, 2025 • 2:00
                PM
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 opacity-70" /> 123 Chapel
                Lane, Sacramento, CA
              </div>
            </div>
            <div className="mt-4">
              <Button asChild>
                <Link href="#map">Open Map</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
              <HeartHandshake size={16} /> In Lieu of Flowers
            </div>
            <p className="text-sm text-white/80">
              Please consider a donation to a favorite charity in Gene’s honor.
              Your kindness continues his spirit of generosity.
            </p>
            <div className="mt-4 flex gap-3">
              <Button asChild>
                <Link href="#donate">Donate</Link>
              </Button>
              <a
                href="#program"
                className="inline-flex items-center rounded-2xl px-4 py-2 text-sm text-white/70 ring-1 ring-white/10 hover:bg-white/10"
              >
                Download Program (PDF)
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
              <MessagesSquare size={16} /> Guestbook
            </div>
            <p className="text-sm text-white/80">
              Share a story, photo, or message for the family.
            </p>
            <div className="mt-4">
              <Button asChild>
                <Link href="#guestbook">Open Guestbook</Link>
              </Button>
            </div>
          </motion.div>
        </aside>
      </MemorialContainer>

      {/* Optional photo strip */}
      <MemorialContainer id="gallery" className="mb-16">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1200&auto=format&fit=crop",
          ].map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="overflow-hidden rounded-2xl ring-1 ring-white/10"
            >
              <img
                src={src}
                alt="Memory"
                className="h-40 w-full object-cover grayscale transition hover:grayscale-0"
              />
            </motion.div>
          ))}
        </div>
      </MemorialContainer>

      <MemorialFooter variant="obituary" />
    </MemorialLayout>
  );
}
