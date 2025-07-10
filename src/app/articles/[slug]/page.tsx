"use client";

import React from "react";
import { useParams } from "next/navigation";
import { articles } from "@/src/data/articles";
import { StaggeredContainer } from "@/src/animation/StaggeredContainer";
import { BookOpen, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXProvider } from "@mdx-js/react";
import { MDXComponents } from "@/src/components/MDXComponents";

// Import the MDX content
import DontWaitForTickets from "@/src/mdx/articles/dont-wait-for-tickets.mdx";
import HowMuchAI from "@/src/mdx/articles/how-much-ai-is-too-much.mdx";
import StayOutOfTheNoise from "@/src/mdx/articles/stay-out-of-the-noise.mdx";
import ItsFineIfItsUgly from "@/src/mdx/articles/its-fine-if-its-ugly.mdx";

// Map of slug to MDX component
const mdxComponents: Record<string, React.ComponentType> = {
  "dont-wait-for-tickets": DontWaitForTickets,
  "how-much-ai-is-too-much": HowMuchAI,
  "stay-out-of-the-noise": StayOutOfTheNoise,
  "its-fine-if-its-ugly": ItsFineIfItsUgly,
};

export default function ArticlePage() {
  const params = useParams();
  const slug = params.slug as string;

  const article = articles.find((article) => article.slug === slug);

  if (!article) {
    notFound();
  }

  const MDXComponent = mdxComponents[slug];

  return (
    <>
      <StaggeredContainer
        animationType="fade"
        delay={0.2}
        direction="down"
        staggerDelay={0.15}
      >
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors mb-6"
        >
          <ArrowLeft size={16} />
          Back to Articles
        </Link>

        <div className="mb-6">
          <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
            <div className="flex items-center gap-1">
              <BookOpen size={14} />
              {article.date}
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              {article.readTime}
            </div>
            <span className="bg-gray-100 text-[#4F576C] px-3 py-1 rounded-xl text-xs font-normal">
              {article.tag}
            </span>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[hsl(var(--foreground))] font-bold mb-2 leading-tight">
          {article.title}
        </h1>

        <p className="text-lg text-[hsl(var(--muted-foreground))] mb-12 leading-relaxed font-normal">
          {article.description}
        </p>
      </StaggeredContainer>

      <StaggeredContainer
        animationType="slideUp"
        delay={0.3}
        direction="down"
        staggerDelay={0.15}
        className="max-w-none"
      >
        {MDXComponent ? (
          <div className="article-content prose prose-lg">
            <MDXProvider components={MDXComponents}>
              <MDXComponent />
            </MDXProvider>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">Article content not found.</p>
          </div>
        )}
      </StaggeredContainer>
    </>
  );
}
