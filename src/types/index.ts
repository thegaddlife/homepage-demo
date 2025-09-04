export type Frontmatter = {
  title: string;
  subtitle: string;
  author: string;
  date: Date;
  summary: string;
  thumbnail: string;
};

export type Post = Frontmatter & { slug: string };

export type Scope = {
  readingTime: string;
};
