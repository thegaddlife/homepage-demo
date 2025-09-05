import { ReactNode } from "react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface MemorialHeadingProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  actionButton?: {
    href: string;
    icon: LucideIcon;
    text: string;
  };
  children?: ReactNode;
}

export function MemorialHeading({
  icon: Icon,
  title,
  subtitle,
  description,
  actionButton,
  children,
}: MemorialHeadingProps) {
  return (
    <div className="mb-8">
      <div className="mb-4 flex items-center gap-3">
        <Icon className="h-8 w-8 text-white/60" />
        <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
        {actionButton && (
          <Link
            href={actionButton.href}
            className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/80 transition-colors hover:bg-white/20 hover:text-white"
          >
            <actionButton.icon className="h-4 w-4" />
            {actionButton.text}
          </Link>
        )}
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
        {title}
      </h1>
      <p className="mt-2 text-base text-white/70">{subtitle}</p>

      {/* Optional children prop for additional content */}
      {children && <div className="mt-4">{children}</div>}
      <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
        <p className="text-white/70">{description}</p>
      </div>
    </div>
  );
}
