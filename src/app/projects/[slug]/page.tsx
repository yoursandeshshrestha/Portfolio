"use client";

import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { projects } from "@/src/data/projects";
import { author } from "@/src/data/data";
import { ArrowLeft, Circle } from "lucide-react";
import ProjectLinkButton from "../../../components/ProjectLinkButton";
import Image from "next/image";
import { MDXProvider } from "@mdx-js/react";
import { MDXComponents } from "@/src/components/MDXComponents";
import FormulaCaseStudy from "@/src/mdx/formula/formula.mdx";
import WordImpactNetworkBackendCaseStudy from "@/src/mdx/win/word-impact-network-backend.mdx";
import DevOpsProjectCaseStudy from "@/src/mdx/devops/devops.mdx";
import React from "react";
import { StaggeredContainer } from "@/src/animation/StaggeredContainer";

const projectCaseStudies: Record<string, React.ComponentType> = {
  formula: FormulaCaseStudy,
  "word-impact-network-backend": WordImpactNetworkBackendCaseStudy,
  "devops-project": DevOpsProjectCaseStudy,
};

export default function ProjectDetailPage() {
  const router = useRouter();
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="p-8 text-center text-gray-500">Project not found.</div>
    );
  }

  return (
    <>
      <StaggeredContainer
        animationType="fade"
        delay={0.2}
        direction="down"
        staggerDelay={0.15}
      >
        {/* Back nav */}
        <button
          className="flex items-center text-gray-500 hover:text-black mb-8 cursor-pointer"
          onClick={() => router.back()}
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span className="text-base">Projects</span>
        </button>

        {/* Author & meta */}
        <div className="flex items-center gap-4 mb-6">
          <Image
            src={author.avatar}
            alt={author.name}
            width={64}
            height={64}
            className="rounded-full object-cover w-12 h-12"
          />
          <div>
            <div className="font-normal text-[16px]">{author.name}</div>
            <div className="text-gray-500 text-[12px] text-normal flex items-center gap-2">
              <span>{project.date}</span>
              <span className="mx-1">/</span>
              <Circle className="w-2 h-2 text-red-800 mx-1" fill="red" />
              <span>{project.difficulty}</span>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-4 mb-8">
          {project.link.demo && (
            <ProjectLinkButton href={project.link.demo}>
              Live Demo
            </ProjectLinkButton>
          )}
          {project.link.sourcecode && (
            <ProjectLinkButton href={project.link.sourcecode}>
              Source code
            </ProjectLinkButton>
          )}
        </div>
      </StaggeredContainer>

      {/* Project Case Study (MDX) */}
      {projectCaseStudies[project.slug] && (
        <StaggeredContainer
          animationType="slideUp"
          delay={0.3}
          direction="down"
          staggerDelay={0.15}
        >
          <section className="mb-10 p-0">
            <MDXProvider components={MDXComponents}>
              {React.createElement(projectCaseStudies[project.slug])}
            </MDXProvider>
          </section>
        </StaggeredContainer>
      )}
    </>
  );
}
