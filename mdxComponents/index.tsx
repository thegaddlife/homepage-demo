import type { MDXComponents } from "next-mdx-remote-client/rsc";
import Image from "next/image";
import Link from "next/link";

export const components: MDXComponents = {
  strong: (props: React.ComponentPropsWithoutRef<"strong">) => (
    <strong className="custom-strong" {...props} />
  ),
  wrapper: (props: React.ComponentPropsWithoutRef<"div">) => {
    return <div id="mdx-layout">{props.children}</div>;
  },
  Image,
  Link,
};
