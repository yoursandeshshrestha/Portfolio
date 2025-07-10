import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, ArrowUpRight, Clock } from "lucide-react";
import { truncateText } from "@/src/utils/textUtils";

interface Article {
  image: string;
  date: string;
  tag: string;
  title: string;
  slug: string;
  link: string;
  readTime: string;
  description: string;
}

interface ArticleCardProps {
  article: Article;
  index: number;
}

export default function ArticleCard({ article, index }: ArticleCardProps) {
  const [hoveredArticle, setHoveredArticle] = useState<number | null>(null);

  // Use slug from data for blog page URL
  const articlePageUrl = `/articles/${article.slug}`;

  return (
    <motion.div className="flex flex-col h-full cursor-default">
      <motion.div
        className="overflow-hidden rounded-xl mb-3 sm:mb-4 aspect-[16/11] relative bg-gray-100 cursor-pointer"
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        onMouseEnter={() => {
          setHoveredArticle(index);
        }}
        onMouseLeave={() => {
          setHoveredArticle(null);
        }}
        onClick={() => window.open(articlePageUrl, "_self")}
      >
        <Image
          src={article.image}
          alt={article.title}
          width={600}
          height={800}
          className="object-cover w-full h-full"
        />

        {/* Read Button */}
        <motion.div
          className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 cursor-pointer"
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: hoveredArticle === index ? 1 : 0,
            y: hoveredArticle === index ? 0 : 10,
          }}
          transition={{ duration: 0.2 }}
        >
          <button
            className="bg-blue-500/90 cursor-pointer backdrop-blur-sm text-white px-4 py-1 sm:py-1.5 sm:px-6 rounded-full flex items-center justify-center gap-1 sm:gap-2 hover:bg-blue-600 hover:scale-105 transition-all duration-200 shadow-lg"
            onClick={(e) => {
              e.stopPropagation();
              window.open(articlePageUrl, "_self");
            }}
          >
            <span className="text-xs sm:text-sm font-medium">Read</span>
            <ArrowUpRight size={14} className="sm:w-4 sm:h-4" />
          </button>
        </motion.div>
      </motion.div>

      <div className="text-gray-500 text-[11px] sm:text-[12px] text-normal mb-1 flex items-center gap-2 sm:gap-3">
        <div className="flex items-center gap-1">
          <BookOpen size={11} className="sm:w-3 sm:h-3" />
          {article.date}
        </div>
        <div className="flex items-center gap-1">
          <Clock size={11} className="sm:w-3 sm:h-3" />
          {article.readTime}
        </div>
      </div>

      <motion.h3
        className="font-bold text-base sm:text-[18px] text-gray-900 mb-2 hover:underline transition-all duration-300 cursor-pointer"
        onClick={() => window.open(articlePageUrl, "_self")}
      >
        {article.title}
      </motion.h3>

      {/* Tag below title */}
      <div className="mb-2">
        <span className="bg-gray-100 text-[#4F576C] px-2 py-1 rounded-xl text-[9px] sm:text-[10px] font-normal">
          {article.tag}
        </span>
      </div>

      <p className="text-gray-600 text-[11px] sm:text-[12px] text-normal mb-2 flex-1">
        {truncateText(article.description)}
      </p>
    </motion.div>
  );
}
