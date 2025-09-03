"use client";

import { MemorialContainer } from "@/components/layout/MemorialContainer";
import { MemorialFooter } from "@/components/layout/MemorialFooter";
import { MemorialLayout } from "@/components/layout/MemorialLayout";
import { MemorialNav } from "@/components/layout/MemorialNav";
import { Button } from "@/components/ui/button";
import dadImage from "@/images/dad.jpg";
import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Play } from "lucide-react";

export default function MemorialHomepage() {
  const [open, setOpen] = useState(false);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <MemorialLayout>
      <MemorialNav variant="home" />

      {/* Hero */}
      <MemorialContainer className="grid w-full grid-cols-1 items-center gap-12 pt-8 md:grid-cols-12 md:pt-14">
        {/* Left text block */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-5"
        >
          <h1 className="text-5xl font-extrabold tracking-tight text-white md:text-6xl">
            Eugene &quot;Gene&quot; Wilfred Gadd
          </h1>
          <p className="mt-3 text-lg text-white/70">1931 — 2012</p>
          <div className="mt-6 h-px w-28 bg-white/15" />
          <p className="mt-6 max-w-md text-balance text-white/70">
            A beloved father, husband, grandfather, and friend whose warmth,
            protection, and steady kindness shaped every room he entered. This
            page collects memories, photos, and details to celebrate a life well
            lived.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <Button
              variant="secondary"
              asChild
              className="w-full py-6 sm:w-auto"
            >
              <Link href="/obituary">
                <BookOpen size={16} /> Read Obituary
              </Link>
            </Button>
            <Button
              variant="secondary"
              className="w-full cursor-pointer py-6 sm:w-auto"
              onClick={() => setOpen(true)}
            >
              <Play size={16} /> Watch Tribute Reel
            </Button>
          </div>
        </motion.section>

        {/* Center orb with portrait */}
        <motion.section
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative md:col-span-7"
        >
          <div className="relative mx-auto aspect-square w-full max-w-[486px]">
            {/* Rings */}
            <div className="absolute inset-0 rounded-full ring-1 ring-white/10" />
            <div className="absolute inset-0 -m-6 rounded-full ring-1 ring-white/5" />
            <div className="absolute inset-0 m-6 rounded-full ring-1 ring-white/5" />

            {/* Portrait circle */}
            <div className="relative z-10 h-full w-full overflow-hidden rounded-full bg-gradient-to-b from-white/10 to-white/5 ring-1 ring-white/10">
              <Image
                alt="Portrait"
                src={dadImage}
                className="h-full w-full object-cover opacity-80 mix-blend-screen grayscale"
                style={{ objectPosition: "center 10%" }}
                width={486}
                height={486}
                priority
              />
            </div>

            {/* Soft fog / glow */}
            <div className="absolute -inset-6 -z-0 rounded-full blur-3xl [background:radial-gradient(35rem_35rem_at_50%_60%,rgba(255,255,255,0.16),transparent_60%)]" />
          </div>
        </motion.section>
      </MemorialContainer>

      {/* Tribute Reel Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/80 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative mx-auto w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute -top-12 right-0 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm text-white ring-1 ring-white/20 hover:bg-white/15"
            >
              × Close
            </button>
            <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black ring-1 ring-white/10">
              <iframe
                src="https://player.vimeo.com/video/1115588064?badge=0&autopause=0&autoplay=1&muted=0"
                title="Eugene Gadd Slideshow"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      )}

      <MemorialFooter variant="home" />
    </MemorialLayout>
  );
}
