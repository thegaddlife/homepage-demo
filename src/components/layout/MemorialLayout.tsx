import { ReactNode } from "react";

interface MemorialLayoutProps {
  children: ReactNode;
}

export function MemorialLayout({ children }: MemorialLayoutProps) {
  return (
    <div className="relative min-h-[100dvh] w-full overflow-hidden text-neutral-200 antialiased">
      {/* Soft radial vignette + subtle grid */}
      <div className="pointer-events-none absolute inset-0 will-change-transform [background:radial-gradient(100rem_100rem_at_50%_10%,rgba(255,255,255,0.18),rgba(255,255,255,0.08)_40%,transparent_70%),radial-gradient(50rem_50rem_at_10%_80%,rgba(255,255,255,0.12),rgba(255,255,255,0.06)_35%,transparent_65%),radial-gradient(40rem_40rem_at_90%_50%,rgba(255,255,255,0.12),rgba(255,255,255,0.05)_35%,transparent_65%)]" />
      <svg
        className="pointer-events-none absolute inset-8 opacity-[0.15] will-change-transform"
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

      {children}
    </div>
  );
}
