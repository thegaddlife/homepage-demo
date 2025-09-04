import type { Frontmatter, Post } from "@/types";
import { getFrontmatter } from "next-mdx-remote-client/utils";
import fs from "fs";
import path from "path";

export const RE = /\.mdx?$/; // Only .md(x) files
// text.replace(RE, "")

export const getSource = async (
  filename: string
): Promise<string | undefined> => {
  const sourcePath = path.join(process.cwd(), "mdx-data", filename);
  if (!fs.existsSync(sourcePath)) return;
  return await fs.promises.readFile(sourcePath, "utf8");
};

export const getSourceSync = (filename: string): string | undefined => {
  const sourcePath = path.join(process.cwd(), "mdx-data", filename);
  if (!fs.existsSync(sourcePath)) return;
  return fs.readFileSync(sourcePath, "utf8");
};

/**
 * get the markdown file list
 */
export const getMarkdownFiles = (): string[] => {
  const mdxDataPath = path.join(process.cwd(), "mdx-data");

  const getAllMarkdownFiles = (dir: string): string[] => {
    const files: string[] = [];
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        // Recursively search subdirectories
        const subFiles = getAllMarkdownFiles(fullPath);
        files.push(...subFiles);
      } else if (RE.test(item)) {
        // Get relative path from mdx-data directory
        const relativePath = path.relative(mdxDataPath, fullPath);
        files.push(relativePath);
      }
    }

    return files;
  };

  return getAllMarkdownFiles(mdxDataPath);
};

/**
 * get the source and format from a slug !
 */
export const getMarkdownFromSlug = async (
  slug: string
): Promise<
  | {
      source: string;
    }
  | undefined
> => {
  if (!/-mdx?$/.test(slug)) return;

  // replace the last dash with dot in the slug for filename
  const filename = slug.replace(/-(?=[^-]*$)/, ".") as `${string}.mdx`;

  const fullPath = path.join(process.cwd(), "data", filename);

  if (fs.existsSync(fullPath)) {
    const source = await getSource(filename);

    if (!source) return;

    return {
      source,
    };
  }
};

/**
 * get the frontmatter and slug of a file
 */
export const getPostInformation = (filename: string): Post | undefined => {
  const source = getSourceSync(filename);

  if (!source) return;

  const frontmatter = getFrontmatter<Frontmatter>(source).frontmatter;

  const post: Post = {
    ...frontmatter,
    // replace the last dot with dash in the filename for slug
    slug: filename.replace(/\.(?=[^.]*$)/, "-"),
  };

  return post;
};
