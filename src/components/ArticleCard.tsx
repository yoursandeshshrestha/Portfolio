import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { BookIcon, TimeIcon, ArrowUpRightIcon } from "@/src/components/Icons";

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
  isLast?: boolean;
}

export default function ArticleCard({ article, index, isLast = false }: ArticleCardProps) {
  const articlePageUrl = `/articles/${article.slug}`;
  const router = useRouter();

  return (
    <motion.div 
      className={`group flex flex-col sm:flex-row gap-4 sm:gap-6 py-5 sm:py-6 transition-all duration-300 cursor-pointer ${!isLast ? 'border-b border-gray-200 hover:border-gray-300' : ''}`}
      onClick={() => router.push(articlePageUrl)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      {/* Left side - Meta info */}
      <div className="flex flex-col gap-2 min-w-[140px] sm:min-w-[160px]">
        <div className="flex flex-col gap-2 text-gray-500 text-[11px] sm:text-[12px]">
          <div className="flex items-center gap-1.5">
            <BookIcon size={12} className="sm:w-3.5 sm:h-3.5 flex-shrink-0" />
            <span className="whitespace-nowrap">{article.date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <TimeIcon size={12} className="sm:w-3.5 sm:h-3.5 flex-shrink-0" />
            <span>{article.readTime}</span>
          </div>
        </div>
        <div className="pt-2 border-t border-gray-100">
          <span className="bg-blue-50 text-blue-600 px-2.5 py-1 rounded-md text-[9px] sm:text-[10px] font-medium uppercase tracking-wide">
            {article.tag}
          </span>
        </div>
      </div>

      {/* Right side - Content */}
      <div className="flex-1 flex flex-col">
        <motion.h3
          className="font-bold text-lg sm:text-xl text-[#070B28] mb-2 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2 leading-tight"
          title={article.title}
        >
          {article.title}
        </motion.h3>

        <p className="text-gray-600 text-[13px] sm:text-[14px] leading-relaxed mb-4 flex-1 line-clamp-2">
          {article.description}
        </p>

        <div className="flex items-center gap-2 text-blue-600 text-xs sm:text-sm font-medium group-hover:gap-3 transition-all duration-200">
          <span>Read article</span>
          <ArrowUpRightIcon size={14} className="sm:w-4 sm:h-4" variant="black" />
        </div>
      </div>
    </motion.div>
  );
}
