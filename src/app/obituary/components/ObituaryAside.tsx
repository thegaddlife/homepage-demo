"use client";

import dadImage4 from "@/images/obituary/dad-4.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, HeartHandshake, MapPin } from "lucide-react";

export const ObituaryAside = () => {
  return (
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
            <Clock size={16} className="opacity-70" /> Sep 29, 2012 • 1:00 PM
          </div>
          <div className="flex items-start gap-2">
            <MapPin size={16} className="mt-0.5 opacity-70" /> Valley Christian,
            Dublin, CA
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
          Gene&apos;s family asked friends to shoot a couple of free throws in
          his memory, and/or make a donation to the Valley Christian Athletic
          Department.
        </p>
      </motion.div>
    </aside>
  );
};
