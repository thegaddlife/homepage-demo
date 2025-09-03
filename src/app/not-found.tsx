"use client";

import { MemorialContainer } from "@/components/layout/MemorialContainer";
import { MemorialFooter } from "@/components/layout/MemorialFooter";
import { MemorialLayout } from "@/components/layout/MemorialLayout";
import { MemorialNav } from "@/components/layout/MemorialNav";
import { Button } from "@/components/ui/button";
import dadImage from "@/images/dad.jpg";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HomeIcon } from "lucide-react";

export default function NotFound() {
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
            404 - Page not found
          </h1>
          <div className="mt-6 h-px w-28 bg-white/15" />

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button variant="secondary" asChild>
              <Link href="/">
                <HomeIcon size={16} /> Go to Home
              </Link>
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

      <MemorialFooter />
    </MemorialLayout>
  );
}
