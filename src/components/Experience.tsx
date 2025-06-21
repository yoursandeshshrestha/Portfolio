import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import fordel from "../../public/fordel.jpg";
import bluestock from "../../public/bluestock.jpg";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  image: string | StaticImageData;
  link: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer",
    company: "Fordel",
    period: "2024 - Present",
    image: fordel,
    link: "https://fordelstudios.com/",
  },
  {
    title: "Backend Engineer",
    company: "Bluestock",
    period: "2024",
    image: bluestock,
    link: "https://bluestock.in/",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const Experience = () => {
  return (
    <motion.div
      className="flex flex-col items-start gap-6 mt-10 md:mt-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          className="w-full group"
          variants={itemVariants}
          whileHover={{ x: 10 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <motion.a
            href={exp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between gap-3 w-full cursor-pointer"
          >
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Image
                src={exp.image}
                alt="Company Logo"
                width={40}
                height={40}
                className="rounded object-cover mt-1"
              />
            </motion.div>
            <div className="flex-1 flex justify-between">
              <div className="flex flex-col">
                <h3 className="font-medium text-[hsl(var(--foreground))]">
                  {exp.title}
                </h3>
                <span className="text-[hsl(var(--muted-foreground))] text-sm">
                  {exp.company}
                </span>
              </div>
              <div className="text-[hsl(var(--muted-foreground))] text-sm">
                {exp.period}
              </div>
            </div>
          </motion.a>
        </motion.div>
      ))}
    </motion.div>
  );
};
