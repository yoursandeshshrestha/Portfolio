import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  workExperience,
  WorkExperience as WorkExperienceType,
} from "../data/experience";

// Icon component for SVG icons
const Icon: React.FC<{
  src: string;
  alt: string;
  className?: string;
}> = ({ src, alt, className = "w-3.5 h-3.5" }) => {
  return (
    <Image src={src} alt={alt} width={14} height={14} className={className} />
  );
};

const WorkExperienceItem: React.FC<{
  experience: WorkExperienceType;
  index: number;
  showAll?: boolean;
}> = ({ experience, index, showAll = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-start gap-4 sm:gap-6 pb-8 sm:pb-10 last:pb-0"
    >
      {/* Company logo */}
      <div className="flex-shrink-0 pt-1">
        <Image
          src={experience.image}
          alt={`${experience.company} logo`}
          width={40}
          height={40}
          className="rounded-lg object-cover w-10 h-10 sm:w-12 sm:h-12"
        />
      </div>

      <div className="flex-1 min-w-0">
        {/* Header */}
        <div className="mb-3">
          <div className="flex flex-wrap items-baseline gap-2 mb-1.5">
            <h3 className="text-base sm:text-lg font-semibold text-[#070B28]">
              {experience.title}
            </h3>
            {experience.company && (
              <span className="text-[#4F576C] text-xs sm:text-sm">
                at{" "}
                <a
                  href={experience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#070B28] hover:underline transition-colors"
                >
                  {experience.company}
                </a>
              </span>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs text-[#4F576C]">
            <span className="flex items-center gap-1">
              <Icon src="/icons/calendar.svg" alt="Calendar" />
              {experience.period}
            </span>
            <span className="flex items-center gap-1">
              <Icon src="/icons/location.svg" alt="Location" />
              {experience.location}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-[#4F576C] text-xs sm:text-sm leading-relaxed mb-4">
          {experience.description}
        </p>

        {/* Technologies */}
        {showAll && experience.technologies.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-1.5">
              {experience.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="text-[#4F576C] text-[10px] sm:text-xs"
                >
                  {tech}
                  {techIndex < experience.technologies.length - 1 && (
                    <span className="mx-1">•</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Achievements */}
        {experience.achievements.length > 0 && (
          <div className="space-y-1.5">
            {experience.achievements
              .slice(0, showAll ? undefined : 3)
              .map((achievement, achievementIndex) => (
                <div
                  key={achievementIndex}
                  className="text-[#4F576C] text-xs sm:text-sm"
                >
                  • {achievement}
                </div>
              ))}
            {!showAll && experience.achievements.length > 3 && (
              <a
                href="/experience"
                className="text-blue-500 text-xs sm:text-sm hover:text-blue-600 transition-colors inline-block"
              >
                See {experience.achievements.length - 3} more →
              </a>
            )}
          </div>
        )}

        {/* Process */}
        {experience.process && (
          <div className="mt-4">
            <h4 className="text-[10px] sm:text-[11px] font-semibold text-[#070B28] mb-2 uppercase tracking-wide">
              My Process
            </h4>
            <div className="space-y-1">
              {experience.process
                .slice(0, showAll ? undefined : 3)
                .map((step, stepIndex) => (
                  <div
                    key={stepIndex}
                    className="text-[#4F576C] text-xs sm:text-sm"
                  >
                    {stepIndex + 1}. {step}
                  </div>
                ))}
              {!showAll && experience.process.length > 3 && (
                <a
                  href="/experience"
                  className="text-blue-500 text-xs sm:text-sm hover:text-blue-600 transition-colors inline-block"
                >
                  See full process ({experience.process.length} steps) →
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

interface WorkExperienceProps {
  showHeader?: boolean;
  showAll?: boolean;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({
  showHeader = true,
  showAll = false,
}) => {
  const experiences = workExperience;

  return (
    <section
      className={showHeader ? "mt-20 sm:mt-32 lg:mt-40" : ""}
      id="experience"
    >
      {showHeader && (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 gap-2 sm:gap-0">
          <h2 className="text-2xl sm:text-3xl lg:text-[30px] font-medium text-[#070B28]">
            Work Experience
          </h2>
          <a
            href="/experience"
            className="text-[#4479E2] font-medium text-sm sm:text-[16px] hover:underline"
          >
            See All
          </a>
        </div>
      )}

      <div className="space-y-0">
        {experiences.map((experience, index) => (
          <WorkExperienceItem
            key={experience.id}
            experience={experience}
            index={index}
            showAll={showAll}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
