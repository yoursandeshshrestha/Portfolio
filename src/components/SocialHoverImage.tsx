import React, { useEffect, useState, ReactNode } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion } from "framer-motion";

interface SocialHoverImageProps {
  show: boolean;
  anchorRef: React.RefObject<HTMLElement>;
  imgSrc?: string;
  alt?: string;
  width?: number;
  height?: number;
  children?: ReactNode;
}

export const SocialHoverImage: React.FC<SocialHoverImageProps> = ({
  show,
  anchorRef,
  imgSrc,
  alt,
  width,
  height,
  children,
}) => {
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null);

  useEffect(() => {
    if (show && anchorRef.current) {
      const rect = anchorRef.current.getBoundingClientRect();
      setPos({
        top: rect.bottom + window.scrollY + 8, // 8px below
        left: rect.left + window.scrollX + rect.width / 2, // center horizontally
      });
    } else if (!show) {
      setPos(null);
    }
  }, [show, anchorRef]);

  if (!show || !pos) return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      style={{
        position: "absolute",
        top: pos.top,
        left: pos.left - 50,
        transform: "translateX(-50%)",
        zIndex: 99999,
      }}
      className="bg-white rounded-xl border border-gray-200 shadow-xl flex items-center justify-center"
    >
      {children ? (
        children
      ) : imgSrc ? (
        <Image
          src={imgSrc}
          alt={alt || ""}
          width={width}
          height={height}
          className="rounded-xl border border-gray-200 shadow-xl transition-all duration-200"
          style={{ display: "block", background: "white" }}
        />
      ) : null}
    </motion.div>,
    typeof window !== "undefined" ? document.body : (null as unknown as Element)
  );
};
