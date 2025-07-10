"use client";

import React from "react";
import { StaggeredContainer } from "@/src/animation/StaggeredContainer";
import { SocialLinks } from "@/src/components/SocialLinks";

function MoreAboutSandesh() {
  return (
    <>
      <StaggeredContainer
        animationType="fade"
        delay={0.2}
        direction="down"
        staggerDelay={0.15}
      >
        <h1 className="text-2xl sm:text-3xl lg:text-[39px] text-[hsl(var(--foreground))] font-medium mb-4 sm:mb-6">
          More About Sandesh
        </h1>
      </StaggeredContainer>

      <StaggeredContainer
        animationType="slideUp"
        delay={0.3}
        direction="down"
        staggerDelay={0.15}
        className="space-y-6 sm:space-y-8"
      >
        <div className="prose prose-gray max-w-none">
          <p className="text-base sm:text-lg text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
            I&apos;m a passionate software engineer with a deep love for
            creating innovative solutions that make a difference. My journey in
            technology started with curiosity and has evolved into a career
            filled with continuous learning and growth.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-[hsl(var(--foreground))] mt-8 mb-4">
            My Approach to Development
          </h2>
          <p className="text-base sm:text-lg text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
            I believe in writing clean, maintainable code that not only solves
            immediate problems but also scales for future needs. My development
            philosophy centers around user experience, performance, and
            accessibility.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-[hsl(var(--foreground))] mt-8 mb-4">
            Beyond Code
          </h2>
          <p className="text-base sm:text-lg text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
            When I&apos;m not coding, you&apos;ll find me exploring new
            technologies, contributing to open-source projects, or sharing
            knowledge through writing and mentoring. I&apos;m passionate about
            giving back to the developer community and helping others grow in
            their careers.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-[hsl(var(--foreground))] mt-8 mb-4">
            Continuous Learning
          </h2>
          <p className="text-base sm:text-lg text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
            Technology evolves rapidly, and I make it a priority to stay current
            with the latest trends and best practices. Whether it&apos;s through
            online courses, conferences, or hands-on experimentation, I&apos;m
            always expanding my skill set.
          </p>
        </div>
      </StaggeredContainer>

      <div className="pt-8 border-t border-gray-200">
        <SocialLinks />
      </div>
    </>
  );
}

export default MoreAboutSandesh;
