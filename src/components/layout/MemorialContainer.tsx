import { ReactNode } from "react";

interface MemorialContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function MemorialContainer({
  children,
  className = "",
  id,
}: MemorialContainerProps) {
  return (
    <div
      id={id}
      className={`relative z-10 mx-auto max-w-6xl px-6 ${className}`}
    >
      {children}
    </div>
  );
}