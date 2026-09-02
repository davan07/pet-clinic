import React from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
  variant?: "button" | "floating";
  label?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message = siteConfig.whatsappPrefillMsg,
  className = "",
  variant = "button",
  label = "WhatsApp Us",
}) => {
  const number = siteConfig.contact.whatsappRaw;
  const encodedMsg = encodeURIComponent(message);
  const href = `https://wa.me/${number}?text=${encodedMsg}`;

  if (variant === "floating") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Shree Pet Hospital on WhatsApp"
        className="fixed bottom-20 right-5 z-40 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#20ba5a] hover:shadow-xl transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="font-semibold text-sm hidden sm:inline">{label}</span>
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-medium px-5 py-2.5 rounded-full hover:bg-[#20ba5a] transition-all duration-200 shadow-sm ${className}`}
    >
      <MessageCircle className="w-5 h-5 fill-current" />
      <span>{label}</span>
    </a>
  );
};
