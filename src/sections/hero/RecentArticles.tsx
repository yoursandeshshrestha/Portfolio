import Link from "next/link";
import ArticleCard from "@/src/components/ArticleCard";
import { articles } from "@/src/data/articles";

export default function RecentArticles() {
  return (
    <section className="mt-20 sm:mt-32 lg:mt-40" id="articles">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 gap-2 sm:gap-0">
        <h2 className="text-2xl sm:text-3xl lg:text-[30px] font-medium text-[#070B28]">
          Recent Articles I wrote
        </h2>
        <Link
          href="/articles"
          className="text-[#4479E2] font-medium text-sm sm:text-[16px] hover:underline"
        >
          See All
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {articles.slice(0, 3).map((article, idx) => (
          <ArticleCard key={idx} article={article} index={idx} />
        ))}
      </div>
    </section>
  );
}
