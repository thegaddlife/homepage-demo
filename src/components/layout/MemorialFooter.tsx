"use client";

import { useEffect, useRef } from "react";
import twemoji from "twemoji";

export function MemorialFooter() {
  const heartRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (heartRef.current) {
      heartRef.current.innerHTML = twemoji.parse("💙", {
        folder: "svg",
        ext: ".svg",
      });
    }
  }, []);

  return (
    <footer className="relative z-10 mx-auto max-w-6xl px-6 pb-12">
      <div className="flex justify-center pt-28">
        <p className="text-base text-white/50">
          Built with{" "}
          <span ref={heartRef} className="inline-block h-4 w-4"></span> by his
          family in {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
