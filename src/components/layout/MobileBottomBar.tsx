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
      <div className="md:hidden fixed bottom-3 inset-x-3 z-40 bg-white/85 backdrop-blur-xl border border-white/80 shadow-[0_12px_36px_rgba(20,61,43,0.14)] rounded-full py-2 px-3">
        <div className="grid grid-cols-4 gap-1.5 text-center items-center">
          {/* Call */}
          <a
            href={phoneHref}
            className="flex flex-col items-center justify-center py-1 text-[11px] font-bold text-[#14241b] hover:text-[#143d2b] active:scale-95 transition-all"
          >
            <div className="w-8 h-8 rounded-full bg-[#edf5f0]/90 backdrop-blur-md text-[#143d2b] border border-[#cbe0d3] flex items-center justify-center mb-0.5 shadow-xs">
              <Phone className="w-4 h-4" />
            </div>
            <span>Call</span>
          </a>

          {/* WhatsApp */}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1 text-[11px] font-bold text-[#14241b] hover:text-[#25D366] active:scale-95 transition-all"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-50/90 backdrop-blur-md text-[#25D366] border border-emerald-200/80 flex items-center justify-center mb-0.5 shadow-xs">
              <MessageCircle className="w-4 h-4 fill-current" />
            </div>
            <span>WhatsApp</span>
          </a>

          {/* Directions */}
          <a
            href={directionsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1 text-[11px] font-bold text-[#14241b] hover:text-[#d97706] active:scale-95 transition-all"
          >
            <div className="w-8 h-8 rounded-full bg-amber-50/90 backdrop-blur-md text-[#d97706] border border-amber-200/80 flex items-center justify-center mb-0.5 shadow-xs">
              <Navigation className="w-4 h-4" />
            </div>
            <span>Directions</span>
          </a>

          {/* Book */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex flex-col items-center justify-center py-1 text-[11px] font-bold text-white bg-[#143d2b] rounded-full active:scale-95 transition-all shadow-[0_4px_14px_rgba(20,61,43,0.3)]"
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
