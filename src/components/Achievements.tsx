import { motion } from "framer-motion";
import Link from "next/link";

interface Achievement {
  text: string;
  link?: string;
}

const achievements: Achievement[] = [
  {
    text: "Got top 5 in East India’s Largest Hackathon",
    link: "/achievements/hackathon",
  },
  { text: "Completed 5+ full-stack freelancing projects" },
  { text: "Specializing in building clean, scalable web applications" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export const Achievements = () => {
  return (
    <motion.div
      className="flex flex-col gap-3 gap-y-1 md:gap-y-3 md:mb-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {achievements.map((achievement, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={achievement.link ? { scale: 1.02 } : {}}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className={achievement.link ? "cursor-pointer" : ""}
        >
          {achievement.link ? (
            <Link
              href={achievement.link}
              className="text-[hsl(var(--muted-foreground))] hover:text-black text-base leading-relaxed transition-colors "
            >
              • {achievement.text}
            </Link>
          ) : (
            <div className="text-[hsl(var(--muted-foreground))] text-base leading-relaxed">
              • {achievement.text}
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};
