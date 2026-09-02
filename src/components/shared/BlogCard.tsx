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
    <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-gray-100">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-semibold text-[#1b4332]">
            {article.category}
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
            <span className="flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-[#1b4332]" />
              {article.authorPlaceholder}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#1b4332]" />
              {article.readTime}
            </span>
          </div>

          <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#1b4332] transition-colors line-clamp-2 mb-2.5 leading-snug">
            {article.title}
          </h3>

          <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 leading-relaxed mb-6">
            {article.summary}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6">
        <Link
          href={`/blog/${article.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#1b4332] group-hover:text-[#d97706] transition-colors"
        >
          <span>Read Full Article</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
