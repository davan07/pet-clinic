"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Footprints, Activity, Smile, Scissors, Truck, Syringe, HeartPulse, Microscope, ShieldAlert } from "lucide-react";

export const QuickServices: React.FC = () => {
  const leftServices = [
    {
      title: "Surgery",
      href: "/services/surgery",
      description: "Skilled surgical care from routine procedures to advanced treatments.",
      icon: Activity,
    },
    {
      title: "Dental Care",
      href: "/services/dental-care",
      description: "Comprehensive dental services for healthy teeth and gums.",
      icon: Smile,
    },
    {
      title: "Grooming",
      href: "/grooming",
      description: "Professional grooming to keep your pet clean and comfortable.",
      icon: Scissors,
    },
    {
      title: "Pet Ambulance",
      href: "/services/pet-ambulance",
      description: "24/7 emergency pet transport and mobile assistance.",
      icon: Truck,
    },
  ];

  const rightServices = [
    {
      title: "Vaccinations",
      href: "/services/vaccination",
      description: "Essential vaccinations to protect your pet from diseases.",
      icon: Syringe,
    },
    {
      title: "Preventive Care",
      href: "/services/preventive-care",
      description: "Prevention and treatment to keep your pet parasite-free.",
      icon: HeartPulse,
    },
    {
      title: "Diagnostics & Lab",
      href: "/services/diagnostics",
      description: "In-house blood chemistry tests, digital X-rays, and screening.",
      icon: Microscope,
    },
    {
      title: "Emergency Care",
      href: "/services/emergency-care",
      description: "24/7 urgent medical attention when every minute counts.",
      icon: ShieldAlert,
    },
  ];

  const allServices = [...leftServices, ...rightServices];

  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-white overflow-hidden border-b border-[#e0f7f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 sm:mb-12 border-b border-[#e0f7f5] pb-6">
          <div>
            <div className="flex items-center gap-2 text-[#d97706] font-bold text-xs uppercase tracking-widest mb-1">
              <Footprints className="w-4 h-4" />
              <span>Veterinary & Grooming Wing</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#0f2942]">
              Explore Our Pet Care Services
            </h2>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-bold text-sm sm:text-base text-[#d97706] hover:text-[#b45309] transition-colors group"
          >
            <span>See All Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

        {/* --- MOBILE / PHONE VIEW (< lg) --- */}
        <div className="block lg:hidden space-y-8">
          {/* Centered Dog & Cat Showcase Image */}
          <div className="flex justify-center my-4">
            <div className="relative w-[240px] h-[300px] sm:w-[300px] sm:h-[380px]">
              <Image
                src="/images/dog-and-cats-middle-showcase.jpg"
                alt="Shree Pet Hospital Dog and Cats Care Services"
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 33vw"
                className="object-contain object-center drop-shadow-xl"
              />
            </div>
          </div>

          {/* Touch-Friendly Mobile Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {allServices.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  className="group bg-[#fcfaf6] p-4 sm:p-5 rounded-2xl border border-[#e0f7f5] shadow-xs hover:shadow-md hover:bg-white transition-all flex items-start gap-3.5"
                >
                  <div className="w-10 h-10 rounded-full bg-[#f59e0b] text-white flex items-center justify-center shrink-0 shadow-[0_4px_10px_rgba(245,158,11,0.3)] group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-[#0f2942] group-hover:text-[#007799] transition-colors flex items-center gap-1.5">
                      <span>{item.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#d97706]" />
                    </h3>
                    <p className="text-xs text-[#476582] font-medium leading-relaxed mt-1">
                      {item.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* --- DESKTOP VIEW (>= lg) --- */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-6 items-center">
          {/* Left Services Flank */}
          <div className="lg:col-span-4 space-y-10 order-1">
            {leftServices.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  className="group flex flex-col items-end text-right transition-transform hover:-translate-y-1 block"
                >
                  <div className="flex items-center flex-row-reverse gap-3 mb-1.5">
                    <div className="w-10 h-10 rounded-full bg-[#f59e0b] text-white flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(245,158,11,0.35)] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-extrabold text-[#0f2942] group-hover:text-[#007799] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#476582] font-medium leading-relaxed max-w-sm">
                    {item.description}
                  </p>
                </Link>
              );
            })}
          </div>

          {/* Center Dog & Cat Portrait Column */}
          <div className="lg:col-span-4 flex justify-center order-2">
            <div className="relative w-[360px] h-[480px]">
              <Image
                src="/images/dog-and-cats-middle-showcase.jpg"
                alt="Shree Pet Hospital Dog and Cats Care Services"
                fill
                priority
                sizes="33vw"
                className="object-contain object-center drop-shadow-xl"
              />
            </div>
          </div>

          {/* Right Services Flank */}
          <div className="lg:col-span-4 space-y-10 order-3">
            {rightServices.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  className="group flex flex-col items-start text-left transition-transform hover:-translate-y-1 block"
                >
                  <div className="flex items-center gap-3 mb-1.5">
                    <h3 className="text-xl font-extrabold text-[#0f2942] group-hover:text-[#007799] transition-colors">
                      {item.title}
                    </h3>
                    <div className="w-10 h-10 rounded-full bg-[#f59e0b] text-white flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(245,158,11,0.35)] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <p className="text-sm text-[#476582] font-medium leading-relaxed max-w-sm">
                    {item.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
