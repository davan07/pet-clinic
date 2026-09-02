import React from "react";
import Image from "next/image";
import { DoctorProfile } from "@/config/doctorsData";
import { GraduationCap, Clock, Stethoscope } from "lucide-react";

interface DoctorCardProps {
  doctor: DoctorProfile;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-[#b2ebe5] shadow-[0_8px_30px_rgba(0,119,153,0.06)] hover:shadow-[0_20px_40px_rgba(0,119,153,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center p-6 sm:p-7">
      {/* Circular Doctor Avatar matching Pawcare "Our Super Team" UI */}
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-[#e0f7f5] overflow-hidden shadow-md mb-4 shrink-0 bg-[#e0f7f5]">
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          sizes="(max-width: 768px) 100vw, 30vw"
          className="object-cover object-center"
        />
      </div>

      <h3 className="text-xl font-extrabold text-[#0f2942] mb-1">{doctor.name}</h3>
      
      {/* Category Pill Tag */}
      <span className="inline-block px-3.5 py-1 mb-4 text-xs font-extrabold tracking-wide text-[#007799] bg-[#e0f7f5] rounded-full border border-[#b2ebe5]">
        {doctor.designation}
      </span>

      <div className="space-y-2 text-xs text-[#476582] w-full text-left mb-4 bg-[#f4fbfb] p-3.5 rounded-2xl border border-[#e0f7f5]">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-[#007799] shrink-0" />
          <span><strong>Qual:</strong> {doctor.qualification}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-[#007799] shrink-0" />
          <span><strong>Exp:</strong> {doctor.experience}</span>
        </div>
        <div className="flex items-start gap-2">
          <Stethoscope className="w-4 h-4 text-[#007799] shrink-0 mt-0.5" />
          <span><strong>Expertise:</strong> {doctor.specialization.join(", ")}</span>
        </div>
      </div>

      <p className="text-xs text-[#476582] italic border-t border-[#e0f7f5] pt-3 leading-relaxed w-full">
        &quot;{doctor.bio}&quot;
      </p>
    </div>
  );
};
