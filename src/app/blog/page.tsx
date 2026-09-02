import React from "react";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlogCard } from "@/components/shared/BlogCard";
import { blogArticles } from "@/config/blogData";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Pet Health & Care Blog | Shree Pet Hospital Mysore",
  description: "Educational articles and veterinary advice for pet parents in Mysore. Vaccination schedules, grooming guides, dog & cat health care tips.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="bg-[#faf8f5]">
      <section className="bg-gradient-to-b from-[#f0f7f4] to-[#faf8f5] py-12 sm:py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Blog" }]} />
          <div className="max-w-3xl">
            <span className="inline-block px-3.5 py-1 mb-3 text-xs font-semibold tracking-wider text-[#1b4332] uppercase bg-white rounded-full border border-[#2d6a4f]/20">
              Pet Health Articles
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Veterinary Advice & Pet Care Guide
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              Read practical, veterinarian-guided articles on puppy vaccination, cat health, dog grooming, and preventive medicine in Mysore.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Latest Articles"
            title="Educational Guides for Pet Parents"
            subtitle="Explore our articles covering vaccinations, routine grooming, digestive health, and preventive care."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogArticles.map((article) => (
              <BlogCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
