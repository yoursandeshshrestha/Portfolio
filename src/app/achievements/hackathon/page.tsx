"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import hackathon1 from "@/../public/hackthon-one.jpg";
import hackathon2 from "@/../public/hackthon-two.jpg";
import hackathon3 from "@/../public/hackthon-three.jpg";
import { SplashScreen } from "@/components/SplashScreen";

export default function HackathonAchievementPage() {
  const [contentVisible, setContentVisible] = useState(false);

  const handleSplashComplete = () => {
    // Start showing content immediately when splash transition begins
    setContentVisible(true);
  };

  return (
    <>
      <SplashScreen
        onComplete={handleSplashComplete}
        customText="India's Largest Hackathon"
      />

      <AnimatePresence>
        {contentVisible && (
          <motion.main
            className="flex flex-col relative pb-20 md:pb-0"
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
          >
            <div className="max-w-2xl sticky top-10 md:top-20">
              <h1 className="text-2xl md:text-3xl font-normal mb-6 text-[hsl(var(--foreground))]">
                India&apos;s Largest Hackathon
              </h1>
              <p className="text-base  mb-6">
                Out of 135+ teams, our team secured a top 5 position in the East
                India&apos;s Largest Hackathon 2025. We built an innovative
                platform that leverages AI to solve real-world problems in
                sustainability. The event was a great opportunity to
                collaborate, learn, and showcase our skills among the best
                talents in the country.
              </p>
              <ul className="list-disc text-base pl-6 mb-6 ">
                <li>135+ teams participated from across the country</li>
                <li>24-hour coding marathon</li>
                <li>Presented to a panel of industry experts</li>
                <li>Built a mobile app with AI integration</li>
              </ul>
            </div>
            <div className="flex gap-4 flex-col h-full pb-13">
              <div className="max-w-2xl h-50 md:h-100 sticky top-[340px] md:top-98 rounded overflow-hidden border border-[hsl(var(--border))]">
                <Image
                  src={hackathon1}
                  alt="Hackathon Team"
                  className="object-cover"
                />
              </div>
              <div className="max-w-2xl h-50 md:h-100 sticky top-[340px] md:top-98 rounded overflow-hidden border border-[hsl(var(--border))]">
                <Image
                  src={hackathon2}
                  alt="Hackathon Presentation"
                  className="object-cover"
                />
              </div>
              <div className="max-w-2xl h-50 md:h-100 sticky top-[370px] md:top-98 rounded overflow-hidden border border-[hsl(var(--border))]">
                <Image
                  src={hackathon3}
                  alt="Hackathon Presentation"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
