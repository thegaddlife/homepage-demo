"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  GalleryHorizontalEnd,
  MessageSquareHeart,
  Play,
} from "lucide-react";

// Minimal button component (shadcn/ui-compatible API without dependency)
function Button({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-5 py-3 text-sm font-medium tracking-wide text-white ring-1 ring-white/10 backdrop-blur-md transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
    >
      {children}
    </a>
  );
}

export default function MemorialHomepage() {
  return (
    <div className="relative min-h-[100dvh] w-full overflow-hidden bg-neutral-950 text-neutral-200 antialiased">
      {/* Soft radial vignette + subtle grid */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(90rem_90rem_at_50%_10%,rgba(255,255,255,0.06),transparent_60%),radial-gradient(40rem_40rem_at_10%_80%,rgba(255,255,255,0.05),transparent_60%),radial-gradient(30rem_30rem_at_90%_50%,rgba(255,255,255,0.05),transparent_60%)]" />
      <svg
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="dot"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot)" />
      </svg>

      {/* Top Nav */}
      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-white/10 ring-1 ring-white/20" />
          <span className="text-sm tracking-widest text-white/70">
            IN LOVING MEMORY
          </span>
        </div>
        <nav className="hidden gap-6 md:flex">
          <Link
            className="text-sm text-white/70 hover:text-white"
            href="/obituary"
          >
            Obituary
          </Link>
          <a className="text-sm text-white/70 hover:text-white" href="#gallery">
            Gallery
          </a>
          <a className="text-sm text-white/70 hover:text-white" href="#service">
            Service
          </a>
          <a
            className="text-sm text-white/70 hover:text-white"
            href="#guestbook"
          >
            Guestbook
          </a>
        </nav>
      </header>

      {/* Hero */}
      <main className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 pt-8 md:grid-cols-12 md:pt-14">
        {/* Left text block */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-5"
        >
          <h1 className="text-5xl font-extrabold tracking-tight text-white md:text-6xl">
            Eugene “Gene” Gadd
          </h1>
          <p className="mt-3 text-lg text-white/70">1949 — 2025</p>
          <div className="mt-6 h-px w-28 bg-white/15" />
          <p className="mt-6 max-w-md text-balance text-white/70">
            A beloved father, friend, and quiet craftsman whose warmth, wit, and
            steady kindness shaped every room he entered. This page collects
            memories, photos, and details to celebrate a life well lived.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="#obituary">
              <BookOpen size={16} /> Read Obituary
            </Button>
            <Button href="#gallery">
              <GalleryHorizontalEnd size={16} /> View Gallery
            </Button>
            <a
              href="#video"
              className="group inline-flex items-center gap-2 px-3 py-2 text-sm text-white/70 hover:text-white"
            >
              <span className="grid h-9 w-9 place-content-center rounded-full bg-white/5 ring-1 ring-white/15 transition group-hover:bg-white/10">
                <Play size={16} />
              </span>
              Watch Tribute Reel
            </a>
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
                src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=1200&auto=format&fit=crop"
                className="h-full w-full object-cover opacity-80 mix-blend-screen"
                width={540}
                height={540}
              />
            </div>

            {/* Soft fog / glow */}
            <div className="absolute -inset-6 -z-0 rounded-full blur-3xl [background:radial-gradient(35rem_35rem_at_50%_60%,rgba(255,255,255,0.16),transparent_60%)]" />
          </div>

          {/* Right-side quick facts */}
          <div className="mx-auto mt-8 grid max-w-[486px] grid-cols-2 gap-3 text-sm text-white/70 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <Calendar className="mb-2 h-4 w-4" />
              Celebration of Life
              <div className="mt-1 text-white">May 18, 2025</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <MessageSquareHeart className="mb-2 h-4 w-4" />
              Share a Memory
              <div className="mt-1 text-white">Open Guestbook</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <ArrowRight className="mb-2 h-4 w-4" />
              Directions
              <div className="mt-1 text-white">Map to Service</div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mx-auto max-w-6xl px-6 pt-16 pb-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} The Gadd Family
          </p>
          <div className="flex items-center gap-4 text-xs text-white/50">
            <a href="#privacy" className="hover:text-white/80">
              Privacy
            </a>
            <span className="opacity-40">•</span>
            <a href="#contact" className="hover:text-white/80">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
