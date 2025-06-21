"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import fordel from "../../public/fordel.jpg";
import bluestock from "../../public/bluestock.avif";
import sandesh from "../../public/sandesh.jpg";

interface BlogPost {
  title: string;
  description: string;
  date: string;
  readTime: string;
  image: string | StaticImageData;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Building Modern Web Apps with Next.js 14",
    description:
      "Exploring the latest features and best practices in Next.js 14 for building scalable web applications.",
    date: "Mar 2024",
    readTime: "5 min",
    image: fordel,
    link: "#",
  },
  {
    title: "Mastering React Hooks",
    description:
      "A deep dive into React Hooks and how they can improve your component architecture.",
    date: "Feb 2024",
    readTime: "4 min",
    image: bluestock,
    link: "#",
  },
  {
    title: "TypeScript Best Practices",
    description:
      "Learn how to leverage TypeScript to write more maintainable and type-safe code.",
    date: "Jan 2024",
    readTime: "6 min",
    image: sandesh,
    link: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function Blog() {
  return (
    <motion.div
      className="flex flex-col items-start gap-6 mt-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {blogPosts.map((post, index) => (
        <motion.div
          key={index}
          className="w-full group"
          variants={itemVariants}
          whileHover={{ x: 10 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <motion.a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between gap-3 w-full cursor-pointer"
          >
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Image
                src={post.image}
                alt="Blog Post Thumbnail"
                width={40}
                height={40}
                className="rounded object-cover mt-1"
              />
            </motion.div>
            <div className="flex-1 flex justify-between">
              <div className="flex flex-col w-[70%]">
                <h3 className="font-medium text-[hsl(var(--foreground))]">
                  {post.title}
                </h3>
                <span className="text-[hsl(var(--muted-foreground))] text-sm">
                  {post.description}
                </span>
              </div>
              <div className="text-[hsl(var(--muted-foreground))] text-sm flex flex-col items-end">
                <span>{post.date}</span>
                <span>{post.readTime} read</span>
              </div>
            </div>
          </motion.a>
        </motion.div>
      ))}
    </motion.div>
  );
}
