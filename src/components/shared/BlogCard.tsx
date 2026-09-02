import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight, User } from "lucide-react";
import { Article } from "@/config/blogData";

interface BlogCardProps {
  article: Article;
}

export const BlogCard: React.FC<BlogCardProps> = ({ article }) => {
  return (
    <div className="group bg-white rounded-[2.25rem] overflow-hidden border border-[#e8e2d6] shadow-[0_4px_20px_rgba(20,61,43,0.03)] hover:shadow-[0_20px_40px_-8px_rgba(20,61,43,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#f4efe6]">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#143d2b] border border-[#e8e2d6] shadow-sm">
            {article.category}
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-4 text-xs font-semibold text-[#526056] mb-3">
            <span className="flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-[#143d2b]" />
              {article.authorPlaceholder}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#143d2b]" />
              {article.readTime}
            </span>
          </div>

          <h3 className="text-lg font-extrabold text-[#14241b] group-hover:text-[#143d2b] transition-colors line-clamp-2 mb-2.5 leading-snug">
            {article.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#4b5950] line-clamp-3 leading-relaxed mb-4">
            {article.summary}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 pt-2 border-t border-[#f4efe6]">
        <Link
          href={`/blog/${article.slug}`}
          className="inline-flex items-center gap-2 text-sm font-bold text-[#143d2b] group-hover:text-[#d97706] transition-colors"
        >
          <span>Read Full Article</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
