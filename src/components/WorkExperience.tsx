import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  workExperience,
  WorkExperience as WorkExperienceType,
} from "../data/experience";

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
      className="flex items-start gap-3 sm:gap-4 py-4 sm:py-6 border-b border-gray-100 last:border-b-0"
    >
      <Image
        src={experience.image}
        alt={`${experience.company} logo`}
        width={36}
        height={36}
        className="rounded-lg object-cover flex-shrink-0 sm:w-10 sm:h-10"
      />

      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-1 sm:gap-0">
          <div>
            <h3 className="text-base sm:text-[18px] font-bold text-[#070B28] mb-1">
              {experience.title}
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <div className="relative group">
                <a
                  href={experience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 font-medium hover:underline transition-colors text-sm"
                >
                  {experience.company}
                </a>
                {experience.id === "fordel-2024" && (
                  <span className="absolute -top-10 left-0 bg-[#070B28] text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-[9999] shadow-lg border border-gray-200">
                    I designed and coded this website for Fordel btw
                    <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#070B28]"></div>
                  </span>
                )}
              </div>
              <span className="hidden sm:inline text-gray-400">•</span>
              <span className="text-gray-600 text-sm">
                {experience.location}
              </span>
            </div>
          </div>
          <div className="text-left sm:text-right">
            <div className="text-[11px] sm:text-[12px] text-[#4F576C]">
              {experience.period}
            </div>
          </div>
        </div>

        <p className="text-[#4F576C] text-[11px] sm:text-[12px] leading-relaxed mb-3">
          {experience.description}
        </p>

        <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
          {experience.technologies
            .slice(0, showAll ? undefined : 4)
            .map((tech, techIndex) => (
              <span
                key={techIndex}
                className="bg-gray-100 text-[#4F576C] px-2 py-1 rounded-xl text-[9px] sm:text-[10px] font-normal"
              >
                {tech}
              </span>
            ))}
          {!showAll && experience.technologies.length > 4 && (
            <span className="bg-gray-100 text-[#4F576C] px-2 py-1 rounded-xl text-[9px] sm:text-[10px] font-normal">
              +{experience.technologies.length - 4} more
            </span>
          )}
        </div>

        <div className="space-y-2">
          {experience.achievements
            .slice(0, showAll ? undefined : 1)
            .map((achievement, achievementIndex) => (
              <div
                key={achievementIndex}
                className="flex items-start gap-2 text-[11px] sm:text-[12px] text-[#4F576C]"
              >
                <span className="text-gray-500 flex-shrink-0 mt-0.5">•</span>
                <span>{achievement}</span>
              </div>
            ))}
          {!showAll && experience.achievements.length > 1 && (
            <a
              href="/experience"
              className="text-blue-500 text-[11px] sm:text-[12px] font-medium hover:text-blue-600 transition-colors"
            >
              See more achievements →
            </a>
          )}
        </div>

        {experience.process && (
          <div className="mt-4">
            <h4 className="text-[12px] sm:text-[13px] font-semibold text-[#070B28] mb-2">
              My Process:
            </h4>
            <div className="space-y-1">
              {experience.process
                .slice(0, showAll ? undefined : 3)
                .map((step, stepIndex) => (
                  <div
                    key={stepIndex}
                    className="flex items-start gap-2 text-[10px] sm:text-[11px] text-[#4F576C]"
                  >
                    <span className="text-blue-500 flex-shrink-0 mt-0.5 font-medium">
                      {stepIndex + 1}.
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              {!showAll && experience.process.length > 3 && (
                <a
                  href="/experience"
                  className="text-blue-500 text-[10px] sm:text-[11px] font-medium hover:text-blue-600 transition-colors"
                >
                  See full process →
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
