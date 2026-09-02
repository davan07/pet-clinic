"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Calendar, Phone, Heart, Footprints } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/siteConfig";
import { AppointmentModal } from "@/components/shared/AppointmentModal";

export const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-24 border-b border-[#e0f7f5]">
        {/* Floating Paw Watermark Background Icons */}
        <div className="absolute top-10 right-12 text-[#ccfbf1] opacity-60 pointer-events-none transform rotate-12">
          <Footprints className="w-16 h-16 sm:w-24 sm:h-24" />
        </div>
        <div className="absolute bottom-16 right-36 text-[#ccfbf1] opacity-50 pointer-events-none transform -rotate-12">
          <Footprints className="w-14 h-14 sm:w-20 sm:h-20" />
        </div>
        <div className="absolute top-1/2 right-4 text-[#ccfbf1] opacity-40 pointer-events-none transform rotate-45">
          <Footprints className="w-10 h-10 sm:w-16 sm:h-16" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Organic Teal Blob with Pet Photo (Matching Reference UI) */}
            <div className="lg:col-span-5 relative order-2 lg:order-1 flex justify-center">
              {/* Organic Deep Teal Blob Frame */}
              <div className="relative w-[280px] h-[340px] sm:w-[360px] sm:h-[430px] lg:w-[420px] lg:h-[500px] bg-[#007799] blob-shape-1 shadow-[0_20px_50px_rgba(0,119,153,0.3)] flex items-center justify-center p-3 sm:p-4">
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl">
                  <Image
                    src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnsLpzabHPpDwwKc5h-Rv6fXn-BNFWa2K0_tjZ8O8v7uElyViMcEFnRm1PwDX1TfKk69lAG8d5aiYs4G2YXn8wFU3TcBdf8wMZ9ZVGOD-JJzZOHazIKwVP5CnAzFX60Px_y9yWhB4xJYPdM=w408-h474-k-no"
                    alt="Shree Pet Hospital Mysore"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Small Floating Heart Badge */}
              <div className="absolute -bottom-2 right-4 bg-white p-3 rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.12)] border border-[#e0f7f5] flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#e0f7f5] text-[#007799] flex items-center justify-center">
                  <Heart className="w-4 h-4 fill-current" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-extrabold text-[#0f2942]">24/7 Care</p>
                  <p className="text-[10px] text-[#476582]">Mysore, Karnataka</p>
                </div>
              </div>
            </div>

            {/* Right Column: Welcome Copy with 3D Depth Typography (Matching Reference UI) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e0f7f5] border border-[#b2ebe5] text-[#007799] text-xs sm:text-sm font-extrabold tracking-wide shadow-2xs">
                <Footprints className="w-4 h-4 text-[#007799]" />
                <span>Estd. 2017 • 24/7 Emergency Veterinary Hospital</span>
              </div>

              {/* 3D Depth Heading Block */}
              <div className="space-y-1 sm:space-y-2">
                <p className="text-lg sm:text-2xl lg:text-3xl font-black tracking-[0.14em] text-[#0f2942] uppercase text-depth-welcome">
                  WELCOME TO
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-depth-heading tracking-tight leading-[1.05] uppercase">
                  SHREE PET HOSPITAL
                </h1>
              </div>

              <p className="text-base sm:text-lg lg:text-xl text-[#476582] font-semibold leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Providing compassionate 24-hour healthcare, emergency triage, soft tissue surgery, diagnostic investigations, and professional pet grooming for dogs, cats, and small animals in Vijayanagar 4th Stage, Mysuru.
              </p>

              {/* Action Buttons (Matching Reference UI: Solid Teal + Outline Teal) */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Button
                  variant="primary"
                  size="lg"
                  icon={<Calendar className="w-5 h-5" />}
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto text-base sm:text-lg px-8 py-4"
                >
                  Book Appointment
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  icon={<Phone className="w-5 h-5" />}
                  className="w-full sm:w-auto text-base sm:text-lg px-8 py-4"
                >
                  Call Hospital
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
