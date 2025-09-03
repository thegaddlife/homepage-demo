"use client";

import { useEffect, useRef, useState } from "react";
import twemoji from "twemoji";

export function MemorialFooter() {
  const heartRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (heartRef.current) {
      heartRef.current.innerHTML = twemoji.parse("💙", {
        folder: "svg",
        ext: ".svg",
      });
    }
    
    // Trigger animation after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className="relative z-10 mx-auto max-w-6xl px-6 pb-12">
      <div className="flex justify-center pt-28">
        <p className="text-base text-white/50">
          Built with{" "}
          <span 
            ref={heartRef} 
            className={`inline-block h-4 w-4 transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          ></span> by his
          family in {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
