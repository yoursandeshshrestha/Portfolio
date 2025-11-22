"use client";

import React from "react";
import { articles } from "@/src/data/articles";
import ArticleCard from "@/src/components/ArticleCard";
import { StaggeredContainer } from "@/src/animation/StaggeredContainer";

function Articles() {
  return (
    <>
      <StaggeredContainer
        animationType="fade"
        delay={0.2}
        direction="down"
        staggerDelay={0.15}
      >
        <h1 className="text-2xl sm:text-3xl lg:text-[39px] text-[hsl(var(--foreground))] font-medium mb-4 sm:mb-6">
          Articles
        </h1>
      </StaggeredContainer>

      <StaggeredContainer
        animationType="slideUp"
        delay={0.3}
        direction="down"
        staggerDelay={0.15}
        className="grid grid-cols-1 gap-6 sm:gap-8"
      >
        {articles.map((article, index) => (
          <ArticleCard key={index} article={article} index={index} isLast={index === articles.length - 1} />
        ))}
      </StaggeredContainer>
    </>
  );
}

export default Articles;
