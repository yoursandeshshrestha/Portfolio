import Image from "next/image";
import { motion } from "framer-motion";
import sandesh from "../../public/sandesh.jpg";

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const Header = () => {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <motion.div variants={itemVariants}>
        <Image
          src={sandesh}
          alt="Sandesh Shrestha"
          width={64}
          height={64}
          className="rounded-md mb-6"
        />
      </motion.div>
      <motion.h1
        variants={itemVariants}
        className="text-4xl text-[hsl(var(--foreground))] font-medium mb-3"
      >
        Sandesh Shrestha
      </motion.h1>
      <motion.p
        variants={itemVariants}
        className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-4"
      >
        Developer building the future. Currently Software Engineer @Fordel
      </motion.p>
    </motion.div>
  );
};
