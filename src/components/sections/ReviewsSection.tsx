import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ReviewCard } from "@/components/shared/ReviewCard";
import { reviewsData } from "@/config/reviewsData";
import { Button } from "@/components/ui/Button";
import { ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Pet Parent Feedback"
          title="What Pet Parents Say"
          subtitle="Real experiences shared by pet owners visiting Shree Pet Hospital in Mysore."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviewsData.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            href={siteConfig.social.googleReviewUrl}
            external
            icon={<ExternalLink className="w-4 h-4" />}
          >
            See More Reviews on Google
          </Button>
        </div>
      </div>
    </section>
  );
};
