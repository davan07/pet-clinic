import React from "react";
import { Star, Quote } from "lucide-react";
import { ReviewItem } from "@/config/reviewsData";

interface ReviewCardProps {
  review: ReviewItem;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-800 text-xs font-semibold rounded-full border border-amber-200">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2 C6.721,2,2,6.721,2,12.545s4.721,10.545,10.545,10.545c6.155,0,10.239-4.329,10.239-10.422c0-0.781-0.076-1.536-0.218-2.261 H12.545z" />
            </svg>
            {review.source}
          </span>
          <div className="flex items-center gap-1 text-amber-400">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
        </div>

        <Quote className="w-8 h-8 text-emerald-100 mb-2" />

        <p className="text-sm text-gray-700 leading-relaxed mb-6 italic">
          {review.commentPlaceholder}
        </p>
      </div>

      <div className="border-t border-gray-100 pt-4 flex items-center justify-between text-xs text-gray-500">
        <div>
          <span className="font-semibold text-gray-900 block text-sm">{review.authorPlaceholder}</span>
          <span>{review.petTypePlaceholder}</span>
        </div>
        <span>{review.datePlaceholder}</span>
      </div>
    </div>
  );
};
