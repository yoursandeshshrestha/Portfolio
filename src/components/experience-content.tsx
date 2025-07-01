import Link from "next/link";
import experienceData from "@/data/experience.json";

interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  link: string;
}

interface ExperienceContentProps {
  experiences: Experience[];
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function ExperienceContent({
  experiences = experienceData.experiences,
}: ExperienceContentProps) {
  return (
    <div>
      {experiences.map((exp) => (
        <div key={exp.id} className="flex flex-col space-y-1 mb-4">
          <div className="w-full flex items-center space-x-2">
            <Link href={exp.link} className="hover:underline" target="_blank">
              <p className="text-neutral-900 tracking-tight">
                {exp.role} at {exp.company}
              </p>
            </Link>

            <p className="text-neutral-700 text-nowrap tabular-nums">
              {formatDate(exp.period)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
