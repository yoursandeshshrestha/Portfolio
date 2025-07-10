import { useState } from "react";

interface UseSplashAnimationReturn {
  contentVisible: boolean;
  pageDirection: string;
  handleSplashComplete: () => void;
  getPageAnimation: () => {
    initial: {
      x?: string;
      y?: string;
      opacity: number;
      scale?: number;
      rotate?: number;
      skewX?: number;
      skewY?: number;
    };
    animate: {
      x?: number;
      y?: number;
      opacity: number;
      scale?: number;
      rotate?: number;
      skewX?: number;
      skewY?: number;
      transition: {
        duration: number;
        ease: number[];
        delay?: number;
        type?: string;
        stiffness?: number;
        damping?: number;
      };
    };
  };
}

export const useSplashAnimation = (): UseSplashAnimationReturn => {
  const [contentVisible, setContentVisible] = useState(false);
  const [pageDirection, setPageDirection] = useState<string>("up");

  const handleSplashComplete = () => {
    setPageDirection("up");
    setContentVisible(true);
  };

  const getPageAnimation = () => {
    // Default to "up" animation
    return {
      initial: {
        y: "120vh",
        opacity: 0,
        scale: 0.7,
        rotate: 8,
        skewX: 5,
        skewY: 2,
      },
      animate: {
        y: 0,
        opacity: 1,
        scale: 1,
        rotate: 0,
        skewX: 0,
        skewY: 0,
        transition: {
          duration: 1.4,
          ease: [0.68, -0.55, 0.265, 1.55],
          delay: 0.2,
          type: "spring",
          stiffness: 100,
          damping: 15,
        },
      },
    };
  };

  return {
    contentVisible,
    pageDirection,
    handleSplashComplete,
    getPageAnimation,
  };
};
