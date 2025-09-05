import type { MDXComponents } from "next-mdx-remote-client/rsc";
import Image from "next/image";
import Link from "next/link";

export const components: MDXComponents = {
  strong: (props: React.ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-bold" {...props} />
  ),
  p: (props: React.ComponentPropsWithoutRef<"p">) => (
    <p className="mb-6 text-base leading-8 text-white" {...props} />
  ),
  h1: (props: React.ComponentPropsWithoutRef<"h1">) => (
    <h1
      className="mt-8 text-xl font-semibold tracking-tight text-white"
      {...props}
    />
  ),
  h2: (props: React.ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="mt-8 text-xl font-semibold tracking-tight text-white"
      {...props}
    />
  ),
  h3: (props: React.ComponentPropsWithoutRef<"h3">) => (
    <h3
      className="mt-8 text-xl font-semibold tracking-tight text-white"
      {...props}
    />
  ),
  blockquote: (props: React.ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="mt-8 text-xl font-semibold tracking-tight text-white"
      {...props}
    />
  ),

  Image,
  Link,
};
