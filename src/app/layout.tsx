import "@/styles/globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Next 15 Template",
  description: "Good starter for Next.js 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <body className="bg-zinc-100 antialiased dark:bg-slate-900">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
