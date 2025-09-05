"use client";

import { motion } from "framer-motion";

export const ObituaryHeading = () => {
  return (
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
  );
};
