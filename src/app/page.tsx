"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hero } from "@/src/sections/hero/Hero";
import RecentProjects from "@/src/sections/hero/RecentProjects";
import RecentArticles from "@/src/sections/hero/RecentArticles";
import WorkExperience from "@/src/components/WorkExperience";
import { SplashScreen } from "@/src/animation/SplashScreen";

export default function Home() {
  const [contentVisible, setContentVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Reset scroll position when component mounts
    if (typeof window !== "undefined") {
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
      });
    }
  }, []);

  const handleSplashComplete = () => {
    setContentVisible(true);
    // Ensure page is scrolled to top after splash screen
    window.scrollTo(0, 0);
  };

  return (
    <>
      {isClient && <SplashScreen onComplete={handleSplashComplete} />}

      <AnimatePresence>
        {contentVisible && (
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
              position: "relative",
              zIndex: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.75,
                delay: 0,
                ease: [0.76, 0, 0.24, 1],
              },
            }}
            className="space-y-8"
          >
            <Hero />
            <WorkExperience />
            <RecentProjects />
            <RecentArticles />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
