"use client";

import Image from "next/image";
import hackathon1 from "@/../public/hackthon-one.jpg";
import hackathon2 from "@/../public/hackthon-two.jpg";
import hackathon3 from "@/../public/hackthon-three.jpg";
import { motion } from "framer-motion";

export default function HackathonAchievementPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
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

  return (
    <motion.main
      className="flex flex-col relative pb-20 md:pb-0"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="max-w-2xl sticky top-10 md:top-20"
        variants={itemVariants}
      >
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-[hsl(var(--foreground))]">
          Top 5 in East India&apos;s Largest Hackathon
        </h1>
        <p className="text-md text-[hsl(var(--muted-foreground))] mb-6">
          Out of 135+ teams, our team secured a top 5 position in the East
          India&apos;s Largest Hackathon 2025. We built an innovative platform
          that leverages AI to solve real-world problems in sustainability. The
          event was a great opportunity to collaborate, learn, and showcase our
          skills among the best talents in the country.
        </p>
        <ul className="list-disc pl-6 mb-6 text-[hsl(var(--muted-foreground))]">
          <li>135+ teams participated from across the country</li>
          <li>24-hour coding marathon</li>
          <li>Presented to a panel of industry experts</li>
          <li>Built a mobile app with AI integration</li>
        </ul>
      </motion.div>
      <motion.div
        className="flex gap-4 flex-col h-full pb-13 "
        variants={containerVariants}
      >
        <motion.div
          className="max-w-2xl h-50 md:h-100 sticky top-[340px] md:top-98 rounded overflow-hidden border border-[hsl(var(--border))] "
          variants={itemVariants}
        >
          <Image
            src={hackathon1}
            alt="Hackathon Team"
            className="object-cover"
          />
        </motion.div>
        <motion.div
          className="max-w-2xl h-50 md:h-100 sticky top-[340px] md:top-98 rounded overflow-hidden border border-[hsl(var(--border))]"
          variants={itemVariants}
        >
          <Image
            src={hackathon2}
            alt="Hackathon Presentation"
            className="object-cover"
          />
        </motion.div>
        <motion.div
          className="max-w-2xl h-50 md:h-100 sticky top-[370px] md:top-98 rounded overflow-hidden border border-[hsl(var(--border))]"
          variants={itemVariants}
        >
          <Image
            src={hackathon3}
            alt="Hackathon Presentation"
            className="object-cover"
          />
        </motion.div>
      </motion.div>
    </motion.main>
  );
}
