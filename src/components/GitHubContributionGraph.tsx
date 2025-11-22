"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface GitHubContributionGraphProps {
  username: string;
}

export function GitHubContributionGraph({
  username,
}: GitHubContributionGraphProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-12 sm:mt-16 lg:mt-20"
    >
      <h2 className="text-2xl sm:text-3xl lg:text-[30px] font-medium text-[#070B28] mb-6 sm:mb-8">
        GitHub Contribution
      </h2>
      <div className="relative w-full overflow-hidden rounded-lg">
        <div
          className="absolute inset-0 rounded-lg"
          style={{
            background:
              "linear-gradient(140deg, rgb(241 245 249 / 0.8) 0%, rgb(241 245 249 / 0.5) 100%)",
          }}
        />
        <div className="relative w-full overflow-x-auto p-4 flex justify-center">
          <Image
            src="/github/contributions.png"
            alt={`GitHub contribution graph for ${username}`}
            width={800}
            height={200}
            className="w-full max-w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </motion.div>
  );
}
