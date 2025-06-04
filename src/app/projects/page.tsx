import Link from "next/link";
import projectsData from "@/data/projects.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Sandesh Shrestha",
  description:
    "Featured projects developed by Sandesh Shrestha, showcasing expertise in full-stack development.",
  openGraph: {
    title: "Projects - Sandesh Shrestha",
    description:
      "Featured projects developed by Sandesh Shrestha, showcasing expertise in full-stack development.",
    type: "website",
    url: "https://www.sandeshshrestha.tech/projects",
  },
};

// Define the JSON-LD script as a string
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Projects - Sandesh Shrestha",
  description: "Featured projects developed by Sandesh Shrestha",
  url: "https://www.sandeshshrestha.tech/projects",
  author: {
    "@type": "Person",
    name: "Sandesh Shrestha",
    url: "https://www.sandeshshrestha.tech",
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: projectsData.projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://www.sandeshshrestha.tech/projects/${project.id}`,
      name: project.title,
    })),
  },
  dateModified: new Date().toISOString(),
};

export default function Projects() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="max-w-2xl mx-auto mb-6">
        <div className="space-y-12">
          {projectsData.projects.map((project) => (
            <Link
              href={`/projects/${project.id}`}
              key={project.id}
              className="group block"
              aria-label={`View details about ${project.title}`}
            >
              <article className="space-y-2">
                <h2 className="text-base font-normal text-neutral-900 group-hover:underline decoration-neutral-900 underline-offset-4">
                  {project.title}
                </h2>
                <p className="text-base text-neutral-700 leading-relaxed">
                  {project.description}
                </p>
                <div className="text-sm text-neutral-600">
                  {project.tech.map((tech, index) => (
                    <span key={tech} className="inline-block">
                      {index > 0 && <span className="mx-1.5">·</span>}
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
