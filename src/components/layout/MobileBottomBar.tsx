"use client";

import React, { useState } from "react";
import { Phone, MessageCircle, Navigation, Calendar } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { AppointmentModal } from "@/components/shared/AppointmentModal";

export const MobileBottomBar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const phoneHref = `tel:${siteConfig.contact.phoneRaw}`;
  const whatsappHref = `https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(
    siteConfig.whatsappPrefillMsg
  )}`;
  const directionsHref = siteConfig.location.googleMapsDirectionsUrl;

  return (
    <>
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl py-2 px-3">
        <div className="grid grid-cols-4 gap-1 text-center">
          {/* Call */}
          <a
            href={phoneHref}
            className="flex flex-col items-center justify-center py-1 text-xs font-semibold text-gray-700 hover:text-[#1b4332] active:scale-95 transition-all"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-50 text-[#1b4332] flex items-center justify-center mb-0.5">
              <Phone className="w-4 h-4" />
            </div>
            <span>Call</span>
          </a>

          {/* WhatsApp */}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1 text-xs font-semibold text-gray-700 hover:text-[#25D366] active:scale-95 transition-all"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-50 text-[#25D366] flex items-center justify-center mb-0.5">
              <MessageCircle className="w-4 h-4 fill-current" />
            </div>
            <span>WhatsApp</span>
          </a>

          {/* Directions */}
          <a
            href={directionsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1 text-xs font-semibold text-gray-700 hover:text-[#d97706] active:scale-95 transition-all"
          >
            <div className="w-8 h-8 rounded-full bg-amber-50 text-[#d97706] flex items-center justify-center mb-0.5">
              <Navigation className="w-4 h-4" />
            </div>
            <span>Directions</span>
          </a>

          {/* Book */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex flex-col items-center justify-center py-1 text-xs font-bold text-white bg-[#1b4332] rounded-2xl active:scale-95 transition-all shadow-xs"
          >
            <Calendar className="w-4 h-4 mb-0.5" />
            <span>Book</span>
          </button>
        </div>
      </div>

      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
