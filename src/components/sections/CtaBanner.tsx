"use client";

import React, { useState } from "react";
import { Calendar, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/siteConfig";
import { AppointmentModal } from "@/components/shared/AppointmentModal";

export const CtaBanner: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#143d2b] via-[#0d281c] to-[#071911] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 mb-5 text-xs font-bold tracking-widest uppercase bg-white/10 text-amber-300 rounded-full border border-white/15 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            Convenient Pet Care in Mysore
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 max-w-3xl mx-auto leading-tight">
            Schedule Your Pet&apos;s Health Checkup or Grooming Session Today
          </h2>

          <p className="text-emerald-100/90 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Our veterinary team at Shree Pet Hospital is dedicated to keeping your dogs, cats, and small animals active, happy, and healthy.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="accent"
              size="lg"
              icon={<Calendar className="w-5 h-5" />}
              onClick={() => setIsModalOpen(true)}
            >
              Book an Appointment
            </Button>

            <Button
              variant="secondary"
              size="lg"
              href={`tel:${siteConfig.contact.phoneRaw}`}
              icon={<Phone className="w-5 h-5" />}
            >
              Call Hospital
            </Button>

            <a
              href={`https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(
                siteConfig.whatsappPrefillMsg
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-7 py-3.5 rounded-full transition-all duration-300 text-base shadow-[0_6px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      </section>

      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
