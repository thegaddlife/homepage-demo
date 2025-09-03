interface MemorialFooterProps {
  variant?: "home" | "obituary";
}

export function MemorialFooter({ variant = "home" }: MemorialFooterProps) {
  return (
    <footer className="relative z-10 mx-auto max-w-6xl px-6 pb-12">
      {variant === "home" ? (
        <div className="flex justify-center pt-28">
          <p className="text-xs text-white/50">
            Built with 💙 by his family in {new Date().getFullYear()}
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} The Gadd Family
          </p>
          <div className="flex items-center gap-4 text-xs text-white/50">
            <a href="#privacy" className="hover:text-white/80">
              Privacy
            </a>
            <span className="opacity-40">•</span>
            <a href="#contact" className="hover:text-white/80">
              Contact
            </a>
          </div>
        </div>
      )}
    </footer>
  );
}
