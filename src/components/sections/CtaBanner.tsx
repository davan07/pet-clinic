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
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#1b4332] to-[#0f281e] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block px-3.5 py-1 mb-4 text-xs font-semibold tracking-wider uppercase bg-white/10 text-amber-300 rounded-full border border-white/10">
            Convenient Pet Care in Mysore
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 max-w-3xl mx-auto leading-tight">
            Schedule Your Pet&apos;s Health Checkup or Grooming Session Today
          </h2>

          <p className="text-emerald-100/90 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
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
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold px-6 py-3 rounded-full transition-all text-base shadow-sm"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      </section>

      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
