import { ReactNode } from "react";

interface MemorialLayoutProps {
  children: ReactNode;
}

export function MemorialLayout({ children }: MemorialLayoutProps) {
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

      {children}
    </div>
  );
}