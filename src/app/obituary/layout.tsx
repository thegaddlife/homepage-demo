"use client";

import { MemorialContainer } from "@/components/layout/MemorialContainer";
import { MemorialFooter } from "@/components/layout/MemorialFooter";
import { MemorialLayout } from "@/components/layout/MemorialLayout";
import { MemorialNav } from "@/components/layout/MemorialNav";
import dadImage1 from "@/images/obituary/dad-1.jpg";
import dadImage2 from "@/images/obituary/dad-2.jpg";
import dadImage3 from "@/images/obituary/dad-3.jpg";
import dadImage4 from "@/images/obituary/dad-4.jpg";
import dadImage5 from "@/images/obituary/dad-5.jpg";
import { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, HeartHandshake, MapPin } from "lucide-react";

export default function ObituaryPage({ children }: { children: ReactNode }) {
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
            {children}
          </div>
        </motion.article>

        {/* Sidebar cards */}
        <aside className="space-y-4 md:col-span-4">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            <Image
              src={dadImage4}
              alt="Eugene Gadd"
              className="aspect-[3/4] w-full object-cover opacity-90"
              style={{ objectPosition: "45% center" }}
              priority
            />
          </motion.div>

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
                <Clock size={16} className="opacity-70" /> Sep 29, 2012 • 1:00
                PM
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 opacity-70" /> Valley
                Christian, Dublin, CA
              </div>
            </div>
            <div className="mt-4">
              <a
                href="/files/EWG.Program.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-2xl px-4 py-2 text-sm text-white/70 ring-1 ring-white/10 hover:bg-white/10"
              >
                Download Program (PDF)
              </a>
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
              Gene&apos;s family asked friends to shoot a couple of free throws
              in his memory, and/or make a donation to the Valley Christian
              Athletic Department.
            </p>
          </motion.div>
        </aside>
      </MemorialContainer>

      {/* Optional photo strip */}
      <MemorialContainer id="gallery" className="mb-16">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {[dadImage1, dadImage2, dadImage3, dadImage5].map((src, i) => (
            <motion.div
              key={src.src}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="overflow-hidden rounded-2xl ring-1 ring-white/10"
            >
              <Image
                src={src}
                alt="Memory"
                className="h-40 w-full object-cover grayscale transition hover:grayscale-0"
                width={320}
                height={240}
              />
            </motion.div>
          ))}
        </div>
      </MemorialContainer>

      <MemorialFooter />
    </MemorialLayout>
  );
}
