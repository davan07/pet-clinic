"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Calendar, Phone, ShieldCheck, Heart, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/siteConfig";
import { AppointmentModal } from "@/components/shared/AppointmentModal";

export const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-[#faf8f5] via-[#f4efe6] to-[#faf8f5] py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f0f7f4] border border-[#2d6a4f]/20 text-[#1b4332] text-xs sm:text-sm font-semibold tracking-wide shadow-2xs">
                <Heart className="w-4 h-4 text-amber-500 fill-current" />
                <span>Estd. 2017 • Open 24/7 Emergency Veterinary Care in Mysore</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
                24/7 Complete Veterinary Care for Your Pets in Mysore
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-gray-700 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Compassionate 24-hour healthcare, emergency triage, surgery, diagnostics, and pet grooming in Vijayanagar 4th Stage, Mysuru.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  icon={<Calendar className="w-5 h-5" />}
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto"
                >
                  Book an Appointment
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  icon={<Phone className="w-5 h-5" />}
                  className="w-full sm:w-auto"
                >
                  Call Now
                </Button>
              </div>

              {/* Trust Indicators (Non-exaggerated) */}
              <div className="pt-6 sm:pt-8 border-t border-gray-200/80 grid grid-cols-3 gap-4 max-w-xl mx-auto lg:mx-0">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="flex items-center gap-1 text-[#1b4332] font-semibold text-sm sm:text-base">
                    <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Sterile Standards</span>
                  </div>
                  <span className="text-xs text-gray-500 mt-0.5">Safe Surgical Room</span>
                </div>

                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="flex items-center gap-1 text-[#1b4332] font-semibold text-sm sm:text-base">
                    <Award className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Full Wellness</span>
                  </div>
                  <span className="text-xs text-gray-500 mt-0.5">Vaccines & Care</span>
                </div>

                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="flex items-center gap-1 text-[#1b4332] font-semibold text-sm sm:text-base">
                    <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Pet Grooming</span>
                  </div>
                  <span className="text-xs text-gray-500 mt-0.5">Hygienic Bath & Cut</span>
                </div>
              </div>
            </div>

            {/* Right Media Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[1/1]">
                <Image
                  src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnsLpzabHPpDwwKc5h-Rv6fXn-BNFWa2K0_tjZ8O8v7uElyViMcEFnRm1PwDX1TfKk69lAG8d5aiYs4G2YXn8wFU3TcBdf8wMZ9ZVGOD-JJzZOHazIKwVP5CnAzFX60Px_y9yWhB4xJYPdM=w408-h474-k-no"
                  alt="Shree Pet Hospital Mysore"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-gray-100 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#f0f7f4] text-[#1b4332] flex items-center justify-center font-bold">
                      📍
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900">Shree Pet Hospital</p>
                      <p className="text-[11px] text-gray-500">Mysore, Karnataka, India</p>
                    </div>
                  </div>
                  <a
                    href={siteConfig.location.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#1b4332] hover:text-[#d97706] underline"
                  >
                    Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
