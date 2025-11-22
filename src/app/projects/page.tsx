"use client";

import React from "react";
import { projects } from "@/src/data/projects";
import ProjectCard from "@/src/components/ProjectCard";
import { StaggeredContainer } from "@/src/animation/StaggeredContainer";

function Projects() {
  return (
    <>
      <StaggeredContainer
        animationType="fade"
        delay={0.2}
        direction="down"
        staggerDelay={0.15}
      >
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-[39px] text-[hsl(var(--foreground))] font-medium mb-6 sm:mb-8">
            Projects
          </h1>
        </div>
      </StaggeredContainer>

      {/* Projects Grid */}
      <StaggeredContainer
        animationType="slideUp"
        delay={0.3}
        direction="down"
        staggerDelay={0.1}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={index}
          />
        ))}
      </StaggeredContainer>
    </>
  );
}

export default Projects;
