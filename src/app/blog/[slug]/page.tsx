import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogArticles, Article } from "@/config/blogData";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { BlogCard } from "@/components/shared/BlogCard";
import { FAQSection } from "@/components/shared/FAQSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { User, Clock, Calendar } from "lucide-react";
import { JsonLd } from "@/components/shared/JsonLd";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = blogArticles.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: article.seoTitle,
    description: article.seoDescription,
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
    openGraph: {
      title: article.seoTitle,
      description: article.seoDescription,
      images: [{ url: article.image }],
    },
  };
}

export default async function SingleBlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = blogArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2);

  const articleSchemaData = {
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.summary,
    "image": [article.image],
    "author": {
      "@type": "Organization",
      "name": article.authorPlaceholder,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Shree Pet Hospital",
      "logo": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=800&q=80",
      },
    },
  };

  return (
    <div className="bg-[#faf8f5]">
      <JsonLd type="Article" data={articleSchemaData} />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#f0f7f4] to-[#faf8f5] py-12 sm:py-16 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: article.title },
            ]}
          />
          <div className="space-y-4">
            <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider text-[#1b4332] uppercase bg-white rounded-full border border-[#2d6a4f]/20">
              {article.category}
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-600 pt-2 border-t border-gray-200/80">
              <span className="flex items-center gap-1.5 font-medium">
                <User className="w-4 h-4 text-[#1b4332]" />
                {article.authorPlaceholder}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#1b4332]" />
                {article.publishDatePlaceholder}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#1b4332]" />
                {article.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Article */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-xs space-y-8">
            <div className="relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover"
              />
            </div>

            <div className="p-4 bg-[#f0f7f4] border border-[#2d6a4f]/20 rounded-2xl text-sm sm:text-base text-[#1b4332] font-medium leading-relaxed">
              <strong>Summary:</strong> {article.summary}
            </div>

            {/* Content Sections */}
            <div className="space-y-8 prose max-w-none text-gray-800">
              {article.content.map((sec, i) => (
                <div key={i} className="space-y-3">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {sec.heading}
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed whitespace-pre-line">
                    {sec.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Article FAQs */}
      {article.faqs && article.faqs.length > 0 && (
        <FAQSection
          title="Related Article FAQs"
          faqs={article.faqs}
          className="bg-white"
        />
      )}

      {/* Related Articles */}
      <section className="py-12 sm:py-16 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Pet Care Articles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {relatedArticles.map((rel) => (
              <BlogCard key={rel.slug} article={rel} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
