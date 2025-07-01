"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
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
    // Cycle through greetings
    const greetingTimer = setInterval(() => {
      setCurrentGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 300); // Show each greeting for 300ms (much faster)

    // Start the animation after showing all greetings
    const animationTimer = setTimeout(() => {
      clearInterval(greetingTimer);
      setStartAnimation(true);
      // Call onComplete immediately when animation starts
      onComplete();
      // Hide splash screen after animation completes
      setTimeout(() => {
        setIsVisible(false);
      }, 750); // Match the animation duration exactly
    }, 1500); // Show greetings for 1.5 seconds total (much faster)

    return () => {
      clearInterval(greetingTimer);
      clearTimeout(animationTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Add missing dependencies

  const SVG = ({ height, width }: { height: number; width: number }) => {
    const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `;

    const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

    return (
      <motion.svg
        initial={{ top: "-300px" }}
        animate={
          startAnimation
            ? {
                top: "-100vh",
                transition: {
                  duration: 0.75,
                  ease: [0.76, 0, 0.24, 1],
                },
              }
            : {}
        }
        style={{
          position: "fixed",
          height: "calc(100vh + 600px)",
          width: "100vw",
          pointerEvents: "none",
          left: 0,
          zIndex: 60,
        }}
      >
        <motion.path
          initial={{ d: initialPath }}
          animate={
            startAnimation
              ? {
                  d: targetPath,
                  transition: {
                    duration: 0.75,
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
            className="fixed inset-0 flex items-center justify-center z-70"
            style={{ zIndex: 70 }}
            initial={{ y: 0 }}
            animate={
              startAnimation
                ? {
                    y: "-100vh",
                    transition: {
                      duration: 0.75,
                      ease: [0.76, 0, 0.24, 1],
                    },
                  }
                : {}
            }
          >
            <div className="text-center">
              <div className="text-4xl font-normal text-white">
                • {greetings[currentGreetingIndex]}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
