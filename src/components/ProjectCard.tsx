import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { truncateText } from "@/src/utils/textUtils";
import React from "react";

interface Project {
  image: string;
  video?: string;
  date: string;
  title: string;
  difficulty: string;
  slug: string;
  tags: string[];
  stack: string;
  link: string | { demo?: string; sourcecode?: string };
  description: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Use slug from data for project page URL
  const projectPageUrl = `/projects/${project.slug}`;

  const stackList = project.stack.split(",").map((s) => s.trim());
  const maxBadges = 7;
  const visibleStack = stackList.slice(0, maxBadges);
  const extraCount = stackList.length - maxBadges;

  function isLinkObject(
    link: unknown
  ): link is { demo?: string; sourcecode?: string } {
    return typeof link === "object" && link !== null;
  }

  return (
    <motion.div className="flex flex-col h-full cursor-default">
      <motion.div
        className="overflow-hidden rounded-xl mb-3 sm:mb-4 aspect-[16/11] relative cursor-pointer"
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        onMouseEnter={() => {
          if (index === 0) setIsHovered(true);
          setHoveredProject(index);
        }}
        onMouseLeave={() => {
          if (index === 0) setIsHovered(false);
          setHoveredProject(null);
        }}
        onClick={() => window.open(projectPageUrl, "_self")}
      >
        {index === 0 && isHovered && project.video ? (
          <video
            src={project.video}
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full"
          />
        ) : (
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={800}
            className="object-cover w-full h-full"
          />
        )}

        {/* Demo & Source Code Buttons */}
        <motion.div
          className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 flex gap-2 cursor-pointer"
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: hoveredProject === index ? 1 : 0,
            y: hoveredProject === index ? 0 : 10,
          }}
          transition={{ duration: 0.2 }}
        >
          {/* Demo Button */}
          {isLinkObject(project.link) && project.link.demo && (
            <button
              className="bg-blue-500/90 cursor-pointer backdrop-blur-sm text-white px-4 py-1 sm:py-1.5 sm:px-6 rounded-full flex items-center justify-center gap-1 sm:gap-2 hover:bg-blue-600 hover:scale-105 transition-all duration-200 shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                window.open(
                  (project.link as { demo?: string; sourcecode?: string }).demo,
                  "_blank"
                );
              }}
            >
              <span className="text-xs sm:text-sm font-medium">Demo</span>
              <ArrowUpRight size={14} className="sm:w-4 sm:h-4" />
            </button>
          )}
          {typeof project.link === "string" && project.link && (
            <button
              className="bg-blue-500/90 cursor-pointer backdrop-blur-sm text-white px-4 py-1 sm:py-1.5 sm:px-6 rounded-full flex items-center justify-center gap-1 sm:gap-2 hover:bg-blue-600 hover:scale-105 transition-all duration-200 shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.link as string, "_blank");
              }}
            >
              <span className="text-xs sm:text-sm font-medium">Demo</span>
              <ArrowUpRight size={14} className="sm:w-4 sm:h-4" />
            </button>
          )}
          {/* Source Code Button */}
          {isLinkObject(project.link) && project.link.sourcecode && (
            <button
              className="bg-blue-500/90 cursor-pointer backdrop-blur-sm text-white px-4 py-1 sm:py-1.5 sm:px-6 rounded-full flex items-center justify-center gap-1 sm:gap-2 hover:bg-blue-600 hover:scale-105 transition-all duration-200 shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                window.open(
                  (project.link as { demo?: string; sourcecode?: string })
                    .sourcecode,
                  "_blank"
                );
              }}
            >
              <span className="text-xs sm:text-sm font-medium">
                Source Code
              </span>
              <ArrowUpRight size={14} className="sm:w-4 sm:h-4" />
            </button>
          )}
        </motion.div>
      </motion.div>

      <div className="text-[#4F576C] text-[11px] sm:text-[12px] text-normal mb-1 ">
        {project.date}
      </div>

      <motion.h3
        className="font-bold text-base sm:text-[18px] text-[#070B28] mb-1 hover:underline transition-all duration-300 cursor-pointer"
        onClick={() => window.open(projectPageUrl, "_self")}
        title={project.title}
      >
        {truncateText(project.title, 30)}
      </motion.h3>

      {/* Tags */}
      <div className="mb-2 flex flex-wrap gap-1.5 items-center">
        {project.tags.map((tag, index) => (
          <React.Fragment key={index}>
            <span
              className={`py-[2px] rounded-md text-[9px] sm:text-[10px] font-medium text-blue-500 uppercase`}
            >
              {tag}
            </span>
            {index < project.tags.length - 1 && (
              <span className="text-gray-400 text-[8px]">|</span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Stack below title */}
      <div className="mb-2 flex flex-wrap gap-1">
        {visibleStack.map((tech, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md text-[8px] sm:text-[9px] font-normal tracking-wide uppercase"
          >
            {tech}
          </span>
        ))}
        {extraCount > 0 && (
          <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md text-[8px] sm:text-[9px] font-normal tracking-wide uppercase">
            +{extraCount} more
          </span>
        )}
      </div>

      <p className="text-[#4F576C] text-[11px] sm:text-[12px] text-normal mb-2 flex-1">
        {truncateText(project.description, 100)}
      </p>
    </motion.div>
  );
}
