import React from "react";
import Link from "next/link";
import ERDSimulator from "./ERDSimulator";

const containsEmoji = (text: string) => {
  const emojiRegex = /[👉✅🔓🧠💪❌]/;
  return emojiRegex.test(text);
};

export const MDXComponents = {
  ERDSimulator,
  h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="text-xl sm:text-2xl font-semibold text-left text-[hsl(var(--foreground))] mt-8 mb-4"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="text-lg sm:text-xl font-semibold text-black mt-8 mb-2 tracking-tight"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="text-base sm:text-lg font-semibold text-left text-[hsl(var(--muted-foreground))] mt-4 mb-1"
      {...props}
    >
      {children}
    </h3>
  ),
  p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
    const content = children?.toString() || "";
    if (containsEmoji(content)) {
      return (
        <p
          className="text-base font-medium text-left text-[hsl(var(--foreground))] mb-3"
          {...props}
        >
          {children}
        </p>
      );
    }
    return (
      <p
        className="text-base text-left text-[hsl(var(--muted-foreground))] mb-3"
        {...props}
      >
        {children}
      </p>
    );
  },
  ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className="list-disc list-inside text-base text-[hsl(var(--muted-foreground))] mb-3 ml-5 space-y-1"
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className="list-decimal list-inside text-base text-[hsl(var(--muted-foreground))] mb-3 ml-5 space-y-1"
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="text-base text-[hsl(var(--muted-foreground))]" {...props}>
      {children}
    </li>
  ),
  blockquote: ({
    children,
    ...props
  }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-2 border-gray-300 pl-3 italic text-xs sm:text-sm text-gray-500 my-3"
      {...props}
    >
      {children}
    </blockquote>
  ),
  code: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded text-xs font-mono"
      {...props}
    >
      {children}
    </code>
  ),
  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="bg-gray-100 p-3 rounded overflow-x-auto mb-4 text-xs font-mono"
      {...props}
    >
      {children}
    </pre>
  ),
  a: ({
    children,
    href,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <Link
      href={href || "#"}
      className="text-blue-600 underline underline-offset-2"
      {...props}
    >
      {children}
    </Link>
  ),
  strong: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-[hsl(var(--foreground))]" {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <em className="italic" {...props}>
      {children}
    </em>
  ),
  hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="border-gray-200 my-8" {...props} />
  ),
};
