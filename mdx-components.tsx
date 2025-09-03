import type { MDXComponents } from "mdx/types";

// This function can be overridden for custom MDX components
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Custom heading styles for autobiography
    h1: ({ children }) => (
      <h1 className="mt-8 text-xl font-semibold tracking-tight text-white">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-8 text-xl font-semibold tracking-tight text-white">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 text-xl font-semibold tracking-tight text-white">
        {children}
      </h3>
    ),
    // Enhanced paragraph styling
    p: ({ children }) => (
      <p className="mb-6 text-base leading-8 text-white">{children}</p>
    ),
    // Custom components available in MDX files
    ...components,
  };
}
