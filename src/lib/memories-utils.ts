import { Post } from "@/types";
import { getMarkdownFiles, getPostInformation } from "./file";

export const getMemoriesSorted = () => {
  const files = getMarkdownFiles();
  const memoriesFilter = (f: string) => f.includes("memories");

  const posts = files
    .filter(memoriesFilter)
    .map(getPostInformation)
    .filter((post): post is Post => post !== undefined);

  // start with dedication, introduction, then the rest alphabetically (numeric aware)
  const sortedPosts = posts.sort((a, b) => {
    const getBaseName = (slug: string) => {
      const last = slug.split("/").pop() || slug; // e.g., "dedication-mdx"
      return last.replace(/-mdx?$/, ""); // e.g., "dedication"
    };

    const aName = getBaseName(a.slug);
    const bName = getBaseName(b.slug);

    const rank = (name: string) => {
      if (name === "dedication") return 0;
      if (name === "introduction") return 1;
      return 2;
    };

    const ra = rank(aName);
    const rb = rank(bName);
    if (ra !== rb) return ra - rb;

    return aName.localeCompare(bName, undefined, {
      numeric: true,
      sensitivity: "base",
    });
  });

  return sortedPosts;
};
