import React from "react";
import Link from "next/link";
import { ArrowRight, Stethoscope, Syringe, Activity, Microscope, Smile, ShieldAlert, HeartPulse, Scissors, Truck, LucideIcon } from "lucide-react";
import { ServiceDetail } from "@/config/servicesData";

const iconMap: Record<string, LucideIcon> = {
  Truck,
  Stethoscope,
  Syringe,
  Activity,
  Microscope,
  Smile,
  ShieldAlert,
  HeartPulse,
  Scissors,
};

interface ServiceCardProps {
  service: ServiceDetail;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const IconComponent = iconMap[service.iconName] || Stethoscope;
  const href = service.slug === "grooming" ? "/grooming" : `/services/${service.slug}`;

  return (
    <div className="group bg-white rounded-3xl p-7 sm:p-8 border border-[#b2ebe5] shadow-[0_8px_30px_rgba(0,119,153,0.06)] hover:shadow-[0_20px_40px_rgba(0,119,153,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between items-center text-center">
      <div className="flex flex-col items-center">
        {/* Circular Icon Badge matching Pawcare UI */}
        <div className="w-16 h-16 rounded-full bg-[#007799] text-white shadow-[0_8px_20px_rgba(0,119,153,0.3)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <IconComponent className="w-8 h-8" />
        </div>

        <h3 className="text-xl font-extrabold text-[#0f2942] mb-3 group-hover:text-[#007799] transition-colors">
          {service.title}
        </h3>

        <p className="text-sm text-[#476582] leading-relaxed mb-6">
          {service.shortDescription}
        </p>
      </div>

      <Link
        href={href}
        className="inline-flex items-center gap-2 text-sm font-bold text-[#007799] group-hover:text-[#d97706] transition-colors pt-3 border-t border-[#e0f7f5] w-full justify-center"
      >
        <span>Explore Service</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};
