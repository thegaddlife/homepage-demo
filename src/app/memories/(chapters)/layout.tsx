import { MemorialLayout } from "@/components/layout/MemorialLayout";

export default function MemoriesPartsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MemorialLayout>{children}</MemorialLayout>;
}
