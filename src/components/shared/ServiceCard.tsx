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
    <div className="group bg-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="w-14 h-14 rounded-2xl bg-[#f0f7f4] text-[#1b4332] flex items-center justify-center mb-6 group-hover:bg-[#1b4332] group-hover:text-white transition-colors duration-300">
          <IconComponent className="w-7 h-7" />
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2.5 group-hover:text-[#1b4332] transition-colors">
          {service.title}
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed mb-6">
          {service.shortDescription}
        </p>
      </div>

      <Link
        href={href}
        className="inline-flex items-center gap-2 text-sm font-semibold text-[#1b4332] group-hover:text-[#d97706] transition-colors"
      >
        <span>Explore Service</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};
