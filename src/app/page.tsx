import Link from "next/link";
import experienceData from "@/data/experience.json";
import { ExperienceContent } from "@/components/experience-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Sandesh Shrestha",
  description:
    "Software Development Engineer specializing in full-stack development and team leadership.",
  openGraph: {
    title: "Sandesh Shrestha - Software Development Engineer",
    description:
      "Software Development Engineer specializing in full-stack development and team leadership.",
    type: "website",
    url: "https://www.sandeshshrestha.tech",
  },
};

// Define the JSON-LD script as a string
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sandesh Shrestha",
  jobTitle: "Software Development Engineer",
  url: "https://www.sandeshshrestha.tech",
  sameAs: [
    "https://www.linkedin.com/in/sandeshshresthadev",
    "https://github.com/yoursandeshshrestha",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Fordel Studio",
    url: "https://fordelstudios.com",
  },
  description:
    "Software Development Engineer specializing in full-stack development and team leadership.",
  knowsAbout: [
    "Software Development",
    "Full Stack Development",
    "Team Leadership",
    "System Architecture",
    "React",
    "Node.js",
    "TypeScript",
    "Next.js",
  ],
  dateModified: new Date().toISOString(),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
            Beyond coding, I contribute to open source projects and share
            insights through technical writing on microservices architecture and
            clean code principles. I'm passionate about creating solutions that
            make a meaningful impact while maintaining the highest standards of
            technical excellence.
          </p>
        </div>

        <div className="mt-8">
          <ExperienceContent experiences={experienceData.experiences} />
        </div>
      </div>
    </>
  );
}
