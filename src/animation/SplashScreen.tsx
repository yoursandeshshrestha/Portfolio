"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SplashScreenProps {
  onComplete: () => void;
  customText?: string;
  duration?: number; // Duration in milliseconds before animation starts
  animationDuration?: number; // Duration of the animation itself
}

export function SplashScreen({
  onComplete,
  customText,
  duration = 1000,
  animationDuration = 1000,
}: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [startAnimation, setStartAnimation] = useState(false);
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
  const [dimensions, setDimensions] = useState<{
    width: number | null;
    height: number | null;
  }>({
    width: null,
    height: null,
  });

  const greetings = [
    "Hello",
    "Ciao",
    "Hola",
    "Bonjour",
    "Namaste",
    "Hallo",
    "Ahoj",
    "Olá",
  ];

  // Get animation values based on direction (default to "up")
  const getAnimationValues = () => {
    return {
      initial: { top: "-100px" },
      animate: { top: "-130vh" },
      textInitial: { y: 0 },
      textAnimate: { y: "-100vh" },
      svgStyle: { left: 0, top: 0 },
    };
  };

  const animationValues = getAnimationValues();

  // Get SVG paths based on direction (default to "up")
  const getSVGPaths = (height: number, width: number) => {
    // Adjust curve size based on screen size for smoother animation
    const curveSize = width < 768 ? 150 : 300;
    const extraSize = width < 768 ? 300 : 600;

    return {
      initialPath: `
        M0 0 
        L${width} 0
        L${width} ${height + curveSize}
        Q${width / 2} ${height + extraSize} 0 ${height + curveSize}
        L0 0
      `,
      targetPath: `
        M0 0
        L${width} 0
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
      `,
    };
  };

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    if (customText) {
      // If custom text is provided, show it for specified duration then start animation
      const animationTimer = setTimeout(() => {
        setStartAnimation(true);
        onComplete();
        setTimeout(() => {
          setIsVisible(false);
        }, animationDuration);
      }, duration);

      return () => {
        clearTimeout(animationTimer);
      };
    } else {
      // Original rotating greetings logic
      const greetingTimer = setInterval(() => {
        setCurrentGreetingIndex((prev) => (prev + 1) % greetings.length);
      }, 300);

      const animationTimer = setTimeout(() => {
        clearInterval(greetingTimer);
        setStartAnimation(true);
        onComplete();
        setTimeout(() => {
          setIsVisible(false);
        }, animationDuration);
      }, duration);

      return () => {
        clearInterval(greetingTimer);
        clearTimeout(animationTimer);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customText, duration, animationDuration]);

  const SVG = ({ height, width }: { height: number; width: number }) => {
    const { initialPath, targetPath } = getSVGPaths(height, width);

    // Determine SVG dimensions based on direction (default to "up")
    const svgDimensions = { width: "120vw", height: "calc(120vh + 1200px)" };

    return (
      <motion.svg
        initial={animationValues.initial}
        animate={startAnimation ? animationValues.animate : {}}
        transition={{
          duration: animationDuration / 1000,
          ease: [0.76, 0, 0.24, 1],
        }}
        style={{
          position: "fixed",
          ...svgDimensions,
          pointerEvents: "none",
          ...animationValues.svgStyle,
          zIndex: 80,
        }}
      >
        <motion.path
          initial={{ d: initialPath }}
          animate={
            startAnimation
              ? {
                  d: targetPath,
                  transition: {
                    duration: animationDuration / 1000,
                    ease: [0.76, 0, 0.24, 1],
                  },
                }
              : {}
          }
          fill="black"
        />
      </motion.svg>
    );
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="curve">
          {dimensions.width != null && dimensions.height != null && (
            <SVG width={dimensions.width} height={dimensions.height} />
          )}

          {/* Greeting Text */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-[80]"
            style={{ zIndex: 80 }}
            initial={animationValues.textInitial}
            animate={
              startAnimation
                ? {
                    ...animationValues.textAnimate,
                    transition: {
                      duration: animationDuration / 1000,
                      ease: [0.76, 0, 0.24, 1],
                    },
                  }
                : {}
            }
          >
            <div className="text-center">
              <div className="text-4xl font-normal text-white">
                • {customText || greetings[currentGreetingIndex]}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
