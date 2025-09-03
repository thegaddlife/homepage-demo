import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface MemorialNavProps {
  variant?: "home" | "obituary";
}

export function MemorialNav({ variant = "home" }: MemorialNavProps) {
  return (
    <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
      <div className="flex items-center gap-3">
        {variant === "home" ? (
          <>
            <div className="h-8 w-8 rounded-full bg-white/10 ring-1 ring-white/20" />
            <span className="text-sm tracking-widest text-white/70">
              IN LOVING MEMORY
            </span>
          </>
        ) : (
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-white/70 hover:text-white"
          >
            <span className="grid h-8 w-8 place-content-center rounded-full bg-white/5 ring-1 ring-white/20 transition group-hover:bg-white/10">
              <ArrowLeft size={16} />
            </span>
            <span className="text-sm tracking-widest">HOME</span>
          </Link>
        )}
      </div>
    </header>
  );
}
