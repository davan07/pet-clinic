import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Heart, ShieldCheck, Sparkles, Award, CheckCircle2 } from "lucide-react";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "About Us | Shree Pet Hospital Mysore",
  description: "Learn about Shree Pet Hospital in Mysore. Our mission, compassionate veterinary team, modern clinic facilities, and commitment to pet health.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      desc: "Every dog, cat, and small companion animal is treated with gentle patience, empathy, and respect."
    },
    {
      icon: ShieldCheck,
      title: "Clinical Standards",
      desc: "We follow evidence-based veterinary practices, sterile surgical protocols, and careful diagnostic evaluations."
    },
    {
      icon: Sparkles,
      title: "Clean & Safe Environment",
      desc: "Our consultation rooms, surgical room, and grooming wing are sanitized regularly to prevent cross-contamination."
    },
    {
      icon: Award,
      title: "Transparent Communication",
      desc: "We believe in explaining diagnosis, treatment options, and preventive care clearly to pet parents."
    }
  ];

  return (
    <div className="bg-[#faf8f5]">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#f0f7f4] to-[#faf8f5] py-12 sm:py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "About Us" }]} />
          <div className="max-w-3xl">
            <span className="inline-block px-3.5 py-1 mb-3 text-xs font-semibold tracking-wider text-[#1b4332] uppercase bg-white rounded-full border border-[#2d6a4f]/20">
              Our Hospital Story
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Caring for Pets, Supporting Their Families in Mysore
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              Dedicated to delivering compassionate veterinary healthcare and hygienic pet grooming under one roof.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16 sm:mb-24">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug">
                Providing Reliable Veterinary Medicine to Pet Owners
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                {siteConfig.name} was established with a clear objective: to provide companion animals in Mysore with high-quality medical care, preventative wellness plans, and stress-free grooming.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Whether your puppy requires their first vaccination series, an aging dog needs senior wellness screening, or your cat needs gentle grooming, our team approaches every case with diligence and clinical focus.
              </p>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
                <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider text-[#1b4332]">
                  Our Facility Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1b4332] shrink-0" />
                    <span>Clean Examination Area</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1b4332] shrink-0" />
                    <span>Cold-chain Vaccines</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1b4332] shrink-0" />
                    <span>Digital X-Ray & Diagnostics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1b4332] shrink-0" />
                    <span>Sanitized Grooming Salon</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto rounded-3xl overflow-hidden shadow-xl aspect-[4/3] border-4 border-white">
                <Image
                  src="/images/about-facility.jpg"
                  alt="Shree Pet Hospital Mysore modern consultation and examination room"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Core Values */}
          <SectionHeading
            badge="Guiding Principles"
            title="Our Core Values"
            subtitle="The principles that guide our clinical practice and pet interactions every day."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="bg-white p-7 rounded-3xl border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 rounded-2xl bg-[#f0f7f4] text-[#1b4332] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
