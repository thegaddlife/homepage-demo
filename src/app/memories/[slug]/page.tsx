import ErrorComponent from "@/components/error-component";
import { MemorialFooter } from "@/components/layout/MemorialFooter";
import { MemorialLayout } from "@/components/layout/MemorialLayout";
import {
  getMarkdownFiles,
  getMarkdownFromSlug,
  getPostInformation,
} from "@/lib/file";
import { plugins } from "@/lib/mdx";
import { components } from "@/mdxComponents";
import { MDXRemote, MDXRemoteOptions } from "next-mdx-remote-client/rsc";
import { notFound } from "next/navigation";
import { readingTime } from "reading-time-estimator";

export default async function MemoriesPartsLayout({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const chapter = await getPostInformation(`memories/${slug}.mdx`);
  const result = await getMarkdownFromSlug(`memories/${slug}`);

  if (!result) {
    return notFound();
  }

  const idx = 1;

  const options: MDXRemoteOptions = {
    disableImports: true, // import statements in MDX don't work in pages router
    parseFrontmatter: true,
    scope: {
      readingTime: readingTime(result.source, 100).text,
    },
    mdxOptions: {
      format: "mdx",
      ...plugins,
      remarkRehypeOptions: undefined,
    },
  };

  return (
    <MemorialLayout>
      <div className="h-24" />
      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pt-6 text-center">
        <p className="text-xs tracking-[0.25em] text-white/50">
          {idx > 1 ? `CHAPTER ${idx - 1}` : ""}
        </p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
          {chapter?.title}
        </h1>
        {chapter?.subtitle && (
          <p className="mt-2 text-base text-white/70">{chapter?.subtitle}</p>
        )}
        <div className="mx-auto mt-6 h-px w-28 bg-white/15" />
      </section>
      <main className="relative z-10 mx-auto max-w-3xl px-6 pt-8 pb-24">
        <article className="space-y-6 leading-relaxed text-white/80">
          <MDXRemote
            source={result.source}
            options={options}
            components={components}
            onError={ErrorComponent}
          />
        </article>
      </main>
      <MemorialFooter />
    </MemorialLayout>
  );
}

export async function generateStaticParams() {
  const files = getMarkdownFiles();

  const article = (f: string) => f.includes("memories");

  return files.filter(article).map((filename) => ({
    // extract just the filename without path and extension
    slug: filename.replace(/^memories\//, "").replace(/\.mdx?$/, ""),
  }));
}
