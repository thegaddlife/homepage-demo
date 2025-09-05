import ErrorComponent from "@/components/error-component";
import { MemorialContainer } from "@/components/layout/MemorialContainer";
import { MemorialFooter } from "@/components/layout/MemorialFooter";
import { MemorialLayout } from "@/components/layout/MemorialLayout";
import { MemorialNav } from "@/components/layout/MemorialNav";
import { getMarkdownFromSlug } from "@/lib/file";
import { components } from "@/mdxComponents";
import { MDXRemote, MDXRemoteOptions } from "next-mdx-remote-client/rsc";
import { notFound } from "next/navigation";
import { readingTime } from "reading-time-estimator";
import { ObituaryAside } from "./components/ObituaryAside";
import { ObituaryHeading } from "./components/ObituaryHeading";

export default async function ObituaryPage() {
  const result = await getMarkdownFromSlug("obituary");

  if (!result) {
    return notFound();
  }

  const options: MDXRemoteOptions = {
    disableImports: true,
    parseFrontmatter: true,
    scope: {
      readingTime: readingTime(result.source, 200).text,
    },
  };

  return (
    <MemorialLayout>
      <MemorialNav variant="obituary" />

      {/* Title block */}
      <MemorialContainer className="pt-2 md:pt-6">
        <ObituaryHeading />
      </MemorialContainer>

      <MemorialContainer className="grid w-full grid-cols-1 gap-10 pt-8 pb-20 md:grid-cols-12">
        <article className="md:col-span-8">
          <div className="space-y-6 leading-relaxed text-white/80">
            <MDXRemote
              source={result.source}
              options={options}
              components={components}
              onError={ErrorComponent}
            />
          </div>
        </article>

        <ObituaryAside />
      </MemorialContainer>

      <MemorialFooter />
    </MemorialLayout>
  );
}
