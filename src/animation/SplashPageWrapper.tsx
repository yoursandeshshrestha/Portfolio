import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SplashScreen } from "@/src/animation/SplashScreen";
import { useSplashAnimation } from "@/src/hooks/useSplashAnimation";

interface SplashPageWrapperProps {
  children: React.ReactNode;
  splashText: string;
  splashDuration?: number;
  splashAnimationDuration?: number;
}

export const SplashPageWrapper: React.FC<SplashPageWrapperProps> = ({
  children,
  splashText,
  splashDuration = 1000,
  splashAnimationDuration = 700,
}) => {
  const { contentVisible, handleSplashComplete } = useSplashAnimation();

  return (
    <>
      <SplashScreen
        onComplete={handleSplashComplete}
        customText={splashText}
        duration={splashDuration}
        animationDuration={splashAnimationDuration}
      />
      <AnimatePresence>
        {contentVisible && (
          <motion.div
            style={{ position: "relative", zIndex: 50 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
