"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
import { SocialLinks } from "@/components/SocialLinks";
import { Achievements } from "@/components/Achievements";
import { Experience } from "@/components/Experience";
import { SplashScreen } from "@/components/SplashScreen";

export default function Home() {
  const [contentVisible, setContentVisible] = useState(false);

  const handleSplashComplete = () => {
    // Start showing content immediately when splash transition begins
    setContentVisible(true);
  };

  return (
    <>
      <SplashScreen onComplete={handleSplashComplete} />

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
                duration: 0.75, // Match splash screen duration exactly
                delay: 0, // Start immediately when content becomes visible
                ease: [0.76, 0, 0.24, 1], // Match the splash screen easing
              },
            }}
            className="space-y-8"
          >
            <Header />
            <SocialLinks />
            <Achievements />
            <Experience />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
