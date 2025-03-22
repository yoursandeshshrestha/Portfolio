import Link from "next/link";
import experienceData from "@/data/experience.json";

import { ExperienceContent } from "@/components/experience-content";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-4 text-gray-400">
        <h1 className="text-base text-gray-600 dark:text-gray-300 mb-4">
          Sandesh Shrestha - Software Development Engineer
        </h1>
        <p>
          <Link
            href={"https://www.mapsofindia.com/"}
            className="text-white hover:underline"
            target="_blank"
          >
            Based in India,
          </Link>{" "}
          specializing in building clean, scalable web applications. Currently
          leading frontend development at{" "}
          <Link
            href={"https://fordelstudios.com"}
            className="text-white hover:underline"
            target="_blank"
          >
            Fordel Studio
          </Link>
          , My approach to development centers on simplicity and
          maintainability, writing code that solves problems elegantly without
          unnecessary complexity.
        </p>
        <p>
          Beyond coding, I contribute to open source projects and share insights
          through technical writing on microservices architecture and clean code
          principles. I'm passionate about creating solutions that make a
          meaningful impact while maintaining the highest standards of technical
          excellence.
        </p>
      </div>

      <div className="mt-8">
        <ExperienceContent experiences={experienceData.experiences} />
      </div>
    </div>
  );
}
