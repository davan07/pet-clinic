import React from "react";
import Image from "next/image";
import { DoctorProfile } from "@/config/doctorsData";
import { Award, GraduationCap, Clock, Stethoscope } from "lucide-react";

interface DoctorCardProps {
  doctor: DoctorProfile;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="relative h-64 w-full bg-gray-100">
          <Image
            src={doctor.image}
            alt={doctor.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
          />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-semibold text-[#1b4332]">
            Veterinary Care Team
          </div>
        </div>

        <div className="p-6 sm:p-7">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
          <p className="text-sm font-medium text-[#d97706] mb-4">{doctor.designation}</p>

          <div className="space-y-2.5 text-xs sm:text-sm text-gray-600 mb-5">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#1b4332] shrink-0" />
              <span><strong>Qualification:</strong> {doctor.qualification}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#1b4332] shrink-0" />
              <span><strong>Experience:</strong> {doctor.experience}</span>
            </div>
            <div className="flex items-start gap-2">
              <Stethoscope className="w-4 h-4 text-[#1b4332] shrink-0 mt-0.5" />
              <span><strong>Expertise:</strong> {doctor.specialization.join(", ")}</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-gray-500 italic border-t border-gray-100 pt-4 leading-relaxed">
            &quot;{doctor.bio}&quot;
          </p>
        </div>
      </div>
    </div>
  );
};
