"use client";

import React from "react";
import WorkExperience from "@/src/components/WorkExperience";
import { StaggeredContainer } from "@/src/animation/StaggeredContainer";
import { experienceStats } from "@/src/data/experience";

function Experience() {
  return (
    <>
      <StaggeredContainer
        animationType="fade"
        delay={0.2}
        direction="down"
        staggerDelay={0.15}
      >
        <h1 className="text-2xl sm:text-3xl lg:text-[39px] text-[hsl(var(--foreground))] font-medium mb-4 sm:mb-6">
          Work Experience
        </h1>
        <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-2 sm:gap-4 text-[11px] sm:text-[12px] text-[#4F576C] mb-6 sm:mb-8">
          <span className="flex items-center gap-2">
            <span>•</span>
            {experienceStats.totalYears}+ Years of Total Experience
          </span>

          <span className="flex items-center gap-2">
            <span>•</span>
            {experienceStats.totalFreelanceProjects}+ Freelance Projects
          </span>

          <span className="flex items-center gap-2">
            <span>•</span>
            {experienceStats.totalCompanyProjects}+ Company (Confidential)
            Projects
          </span>

          <span className="flex items-center gap-2">
            <span>•</span>
            {experienceStats.totalCodingHours}+ Hours of Coding{" "}
            {experienceStats.CodingDate}
          </span>

          <span className="flex items-center gap-2">
            <span>•</span> {experienceStats.totalGitHubContributions}+ GitHub
            Contributions
          </span>
        </div>
      </StaggeredContainer>

      <StaggeredContainer
        animationType="slideUp"
        delay={0.3}
        direction="down"
        staggerDelay={0.15}
      >
        <WorkExperience showHeader={false} showAll={true} />
      </StaggeredContainer>
    </>
  );
}

export default Experience;
