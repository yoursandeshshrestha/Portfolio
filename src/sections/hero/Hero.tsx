import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import sandesh from "@/public/personal/sandesh-two.png";
import blob from "@/public/blob/blob-4.png";
import { SocialLinks } from "@/src/components/SocialLinks";
import { ImageModal } from "@/src/components/ImageModal";
// import ButtonGroup from "@/src/components/ButtonGroup";

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

export const Hero = () => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row gap-1 sm:gap-6 items-start sm:items-end mb-4 sm:mb-5"
      >
        <Image
          src={sandesh}
          alt="Sandesh Shrestha"
          width={200}
          height={200}
          className="rounded-md w-16 h-16 cursor-pointer hover:scale-105 transition-transform"
          onClick={() => setIsImageModalOpen(true)}
        />
        <SocialLinks />
      </motion.div>

      <ImageModal
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        src={sandesh.src}
        alt="Sandesh Shrestha"
      />

      <motion.h1
        variants={itemVariants}
        className="text-2xl sm:text-3xl lg:text-[39px] text-[hsl(var(--foreground))] font-medium mb-4 sm:mb-6 leading-tight"
      >
        Welcome to my portfolio
        <Image
          src={blob}
          alt="Sandesh Shrestha"
          width={15}
          height={15}
          className="inline align-middle mx-1 sm:mx-2 sm:w-[15px] sm:h-[15px] md:w-[20px] md:h-[20px] lg:w-[30px] lg:h-[30px]"
        />
        I am Sandesh Shrestha and here I document my latest information and
        explorations.
      </motion.h1>
      <motion.p
        variants={itemVariants}
        className="text-[hsl(var(--muted-foreground))] leading-relaxed text-base sm:text-lg "
      >
        Cracked Developer who lives and breathes code 12 to 18 hours a day,
        3000+ GitHub commits in 2025, and zero excuses. Currently Software
        Developement Engineer{" "}
        <a
          href="https://fordelstudios.com"
          target="_blank"
          rel="noopener noreferrer"
          className=" font-medium hover:text-[hsl(var(--primary))] transition-colors underline decoration-[hsl(var(--border))] hover:decoration-[hsl(var(--primary))] underline-offset-4"
        >
          @Fordel
        </a>{" "}
        and running{" "}
        <a
          href="https://workwith.sandeshshrestha.tech"
          target="_blank"
          rel="noopener noreferrer"
          className=" font-medium hover:text-[hsl(var(--primary))] transition-colors underline decoration-[hsl(var(--border))] hover:decoration-[hsl(var(--primary))] underline-offset-4"
        >
          @workwith.sandeshshrestha (my freelace company)
        </a>
      </motion.p>
      {/* <ButtonGroup
        buttons={[
          { label: "More about me", href: "/more-about-sandesh" },
          { label: "Work Experience", href: "/experience" },
          { label: "Projects", href: "/projects" },
          { label: "Articles", href: "/articles" },
        ]}
      /> */}
    </motion.div>
  );
};
