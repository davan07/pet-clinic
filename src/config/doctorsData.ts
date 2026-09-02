export interface DoctorProfile {
  id: string;
  name: string;
  designation: string;
  qualification: string;
  experience: string;
  specialization: string[];
  bio: string;
  image: string;
}

export const doctorsData: DoctorProfile[] = [
  {
    id: "doctor-1",
    name: "Veterinary Medical Officers",
    designation: "Chief Veterinary Surgeon & Officers",
    qualification: "B.V.Sc & A.H / M.V.Sc",
    experience: "9+ Years of Clinical Practice (Estd. 2017)",
    specialization: ["Small Animal Medicine", "Soft Tissue Surgery", "24/7 Emergency Triage"],
    bio: "Dedicated veterinary practitioners providing high-quality, compassionate clinical diagnostics and medical treatment for pets in Mysore.",
    image: "/images/poodle-examination.jpg"
  },
  {
    id: "doctor-2",
    name: "Grooming & Hospital Care Staff",
    designation: "Certified Pet Groomers & Hospital Staff",
    qualification: "Professional Pet Styling & Spa Care",
    experience: "Experienced Salon & Grooming Team",
    specialization: ["Breed-Specific Haircuts", "Medicated Skin Baths", "Hygienic Care"],
    bio: "Trained, affectionate pet groomers and hospital staff handling dogs and cats with gentle care, patience, and hygienic excellence.",
    image: "/images/hospital-team.jpg"
  },
  {
    id: "doctor-3",
    name: "Veterinary Nursing & Lab Assistants",
    designation: "Clinical Care Assistants & Technicians",
    qualification: "Veterinary Nursing & Diagnostics",
    experience: "In-Patient ICU & Lab Care",
    specialization: ["Pre/Post-Operative Care", "Diagnostic Screening", "Vital Signs Monitoring"],
    bio: "Attentive clinical assistants supporting surgeries, administering medications, and monitoring recovery for in-patient pets.",
    image: "/images/nursing-staff.jpg"
  }
];
