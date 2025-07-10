import React from "react";
import { motion } from "framer-motion";

interface StaggeredContainerProps {
  children: React.ReactNode;
  animationType?:
    | "fade"
    | "slide"
    | "scale"
    | "bounce"
    | "elastic"
    | "flip"
    | "zoom"
    | "slideUp"
    | "social";
  direction?: "up" | "down" | "left" | "right";
  staggerDelay?: number;
  delay?: number;
  className?: string;
}

export const StaggeredContainer: React.FC<StaggeredContainerProps> = ({
  children,
  animationType = "fade",
  direction = "up",
  staggerDelay = 0.1,
  delay = 0,
  className = "",
}) => {
  // Container variants for stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  // Get direction values based on direction prop
  const getDirectionValues = () => {
    switch (direction) {
      case "up":
        return { y: 20, x: 0 };
      case "down":
        return { y: -20, x: 0 };
      case "left":
        return { y: 0, x: 20 };
      case "right":
        return { y: 0, x: -20 };
      default:
        return { y: 20, x: 0 };
    }
  };

  // Different animation variants for children
  const getChildVariants = () => {
    const dirValues = getDirectionValues();

    switch (animationType) {
      case "fade":
        return {
          hidden: {
            opacity: 0,
            y: dirValues.y,
            x: dirValues.x,
          },
          visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          },
        };
      case "slide":
        return {
          hidden: {
            opacity: 0,
            x:
              direction === "left"
                ? -50
                : direction === "right"
                ? 50
                : dirValues.x,
            y:
              direction === "up"
                ? 50
                : direction === "down"
                ? -50
                : dirValues.y,
          },
          visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
              duration: 0.7,
              ease: [0.175, 0.885, 0.32, 1.275],
            },
          },
        };
      case "scale":
        return {
          hidden: {
            opacity: 0,
            scale: 0.8,
            rotate: -5,
            y: dirValues.y,
            x: dirValues.x,
          },
          visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            y: 0,
            x: 0,
            transition: {
              duration: 0.8,
              ease: [0.68, -0.55, 0.265, 1.55],
            },
          },
        };
      case "bounce":
        return {
          hidden: {
            opacity: 0,
            y:
              direction === "up"
                ? 50
                : direction === "down"
                ? -50
                : dirValues.y,
            x:
              direction === "left"
                ? 50
                : direction === "right"
                ? -50
                : dirValues.x,
            scale: 0.8,
          },
          visible: {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            transition: {
              duration: 0.9,
              ease: [0.68, -0.55, 0.265, 1.55],
              type: "spring",
              stiffness: 100,
              damping: 12,
            },
          },
        };
      case "elastic":
        return {
          hidden: {
            opacity: 0,
            x:
              direction === "left"
                ? -80
                : direction === "right"
                ? 80
                : dirValues.x,
            y:
              direction === "up"
                ? 80
                : direction === "down"
                ? -80
                : dirValues.y,
            scale: 0.9,
            rotate: -8,
          },
          visible: {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotate: 0,
            transition: {
              duration: 1.0,
              ease: [0.175, 0.885, 0.32, 1.275],
              type: "spring",
              stiffness: 120,
              damping: 10,
            },
          },
        };
      case "flip":
        return {
          hidden: {
            opacity: 0,
            rotateY: 45,
            scale: 0.9,
            y: dirValues.y,
            x: dirValues.x,
          },
          visible: {
            opacity: 1,
            rotateY: 0,
            scale: 1,
            y: 0,
            x: 0,
            transition: {
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          },
        };
      case "zoom":
        return {
          hidden: {
            opacity: 0,
            scale: 0.5,
            y: dirValues.y,
            x: dirValues.x,
          },
          visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            x: 0,
            transition: {
              duration: 0.7,
              ease: [0.68, -0.55, 0.265, 1.55],
            },
          },
        };
      case "slideUp":
        return {
          hidden: {
            opacity: 0,
            y:
              direction === "up"
                ? 40
                : direction === "down"
                ? -40
                : dirValues.y,
            x:
              direction === "left"
                ? 10
                : direction === "right"
                ? -10
                : dirValues.x,
          },
          visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          },
        };
      case "social":
        return {
          hidden: {
            opacity: 0,
            y: dirValues.y,
            x: dirValues.x,
          },
          visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
              duration: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          },
        };
      default:
        return {
          hidden: {
            opacity: 0,
            y: dirValues.y,
            x: dirValues.x,
          },
          visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          },
        };
    }
  };

  const childVariants = getChildVariants();

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={childVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};
