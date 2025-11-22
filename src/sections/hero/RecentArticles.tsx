import ArticleCard from "@/src/components/ArticleCard";
import { articles } from "@/src/data/articles";

export default function RecentArticles() {
  return (
    <section className="mt-20 sm:mt-32 lg:mt-40" id="articles">
      <div className="mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-[30px] font-medium text-[#070B28]">
          Recent Articles I wrote
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:gap-8">
        {articles.map((article, idx) => {
          return (
            <ArticleCard key={idx} article={article} index={idx} isLast={idx === articles.length - 1} />
          );
        })}
      </div>
    </section>
  );
}
