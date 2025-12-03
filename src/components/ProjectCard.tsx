import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowUpRightIcon, CalendarIcon, LockIcon } from "@/src/components/Icons";
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
  link: string | { demo?: string; sourcecode?: string | null; confidential?: boolean };
  description: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  showTags?: boolean;
}

const getDifficultyColor = (difficulty: string): string => {
  const lower = difficulty.toLowerCase();
  if (lower === "beginner") return "bg-green-100 text-green-700 border-green-200";
  if (lower === "intermediate") return "bg-yellow-100 text-yellow-700 border-yellow-200";
  if (lower === "advanced") return "bg-red-100 text-red-700 border-red-200";
  return "bg-gray-100 text-gray-700 border-gray-200";
};

export default function ProjectCard({ project, index, showTags = true }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const router = useRouter();

  const projectPageUrl = `/projects/${project.slug}`;

  const stackList = project.stack.split(",").map((s) => s.trim());
  const maxBadges = 6;
  const visibleStack = stackList.slice(0, maxBadges);
  const extraCount = stackList.length - maxBadges;

  function isLinkObject(
    link: unknown
  ): link is { demo?: string; sourcecode?: string | null; confidential?: boolean } {
    return typeof link === "object" && link !== null;
  }

  const hasDemo = isLinkObject(project.link) 
    ? project.link.demo !== undefined 
    : typeof project.link === "string" && project.link !== "";
  const hasSourceCode = isLinkObject(project.link) && 
    project.link.sourcecode !== undefined && 
    project.link.sourcecode !== null &&
    !project.link.confidential;
  const isConfidential = isLinkObject(project.link) && project.link.confidential === true;

  return (
    <motion.div 
      className="flex flex-col h-full cursor-default group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <motion.div
        className="overflow-hidden rounded-xl mb-4 aspect-[16/11] relative cursor-pointer bg-gray-100"
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        onMouseEnter={() => {
          setIsHovered(true);
          setHoveredProject(index);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          setHoveredProject(null);
        }}
        onClick={() => router.push(projectPageUrl)}
      >
        {isHovered && project.video ? (
          <video
            src={project.video}
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full transition-opacity duration-300"
          />
        ) : (
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={800}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
        )}

        {/* Overlay gradient on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />

        {/* Demo & Source Code Buttons */}
        <motion.div
          className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 flex gap-2 cursor-pointer z-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: hoveredProject === index ? 1 : 0,
            y: hoveredProject === index ? 0 : 10,
          }}
          transition={{ duration: 0.2 }}
        >
          {hasDemo && (
            <button
              className="bg-blue-500/95 cursor-pointer backdrop-blur-sm text-white px-3 py-1.5 sm:py-2 sm:px-5 rounded-lg flex items-center justify-center gap-1.5 sm:gap-2 hover:bg-blue-600 hover:scale-105 transition-all duration-200 shadow-lg text-xs sm:text-sm font-medium"
              onClick={(e) => {
                e.stopPropagation();
                const demoUrl = isLinkObject(project.link) 
                  ? project.link.demo 
                  : project.link as string;
                window.open(demoUrl, "_blank");
              }}
            >
              <span>Demo</span>
              <ArrowUpRightIcon size={14} className="sm:w-4 sm:h-4" />
            </button>
          )}
          {hasSourceCode && (
            <button
              className="bg-gray-800/95 cursor-pointer backdrop-blur-sm text-white px-3 py-1.5 sm:py-2 sm:px-5 rounded-lg flex items-center justify-center gap-1.5 sm:gap-2 hover:bg-gray-900 hover:scale-105 transition-all duration-200 shadow-lg text-xs sm:text-sm font-medium"
              onClick={(e) => {
                e.stopPropagation();
                if (isLinkObject(project.link) && project.link.sourcecode) {
                  window.open(project.link.sourcecode, "_blank");
                }
              }}
            >
              <span>Code</span>
              <ArrowUpRightIcon size={14} className="sm:w-4 sm:h-4" />
            </button>
          )}
        </motion.div>
      </motion.div>

      {/* Date and Difficulty */}
      <div className="flex items-center justify-between mb-2">
        <div className="text-gray-500 text-[11px] sm:text-[12px] flex items-center gap-1.5">
          <CalendarIcon size={12} className="sm:w-3.5 sm:h-3.5" />
          <span>{project.date}</span>
        </div>
        <span className={`px-2 py-0.5 rounded-md text-[9px] sm:text-[10px] font-medium border ${getDifficultyColor(project.difficulty)}`}>
          {project.difficulty}
        </span>
      </div>

      {/* Title */}
      <motion.h3
        className="font-bold text-base sm:text-[18px] text-[#070B28] mb-2 hover:text-blue-600 transition-colors duration-200 cursor-pointer line-clamp-2"
        onClick={() => router.push(projectPageUrl)}
        title={project.title}
      >
        {project.title}
      </motion.h3>

      {/* Tags */}
      {showTags && (
        <div className="mb-3 flex flex-wrap gap-1.5 items-center">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded-md text-[9px] sm:text-[10px] font-medium uppercase tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Description */}
      <p className="text-gray-600 text-[12px] sm:text-[13px] leading-relaxed mb-3 flex-1 line-clamp-3">
        {project.description}
      </p>

      {/* Confidential Badge */}
      {isConfidential && (
        <div className="mb-2 flex items-center gap-1.5 text-gray-600 text-[10px] sm:text-[11px] font-medium">
          <LockIcon className="w-3 h-3" size={12} />
          <span>Codebase is confidential</span>
        </div>
      )}

      {/* Stack */}
      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-100 mb-4">
        {visibleStack.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="bg-gray-50 text-gray-600 px-2 py-1 rounded-md text-[8px] sm:text-[9px] font-normal tracking-wide border border-gray-100"
          >
            {tech}
          </span>
        ))}
        {extraCount > 0 && (
          <span className="bg-gray-50 text-gray-500 px-2 py-1 rounded-md text-[8px] sm:text-[9px] font-normal border border-gray-100">
            +{extraCount}
          </span>
        )}
      </div>

      {/* View Full Detail Link */}
      <Link
        href={projectPageUrl}
        className="mt-auto group/link"
      >
        <motion.div
          className="flex items-center gap-2 text-blue-600 text-xs sm:text-sm font-medium group-hover/link:gap-3 transition-all duration-200"
          whileHover={{ x: 2 }}
        >
          <span>View full detail</span>
          <ArrowUpRightIcon size={14} className="sm:w-4 sm:h-4" variant="black" />
        </motion.div>
      </Link>
    </motion.div>
  );
}
