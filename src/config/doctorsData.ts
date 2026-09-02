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
    name: "[Senior Veterinarian Name]",
    designation: "Chief Veterinary Officer & Surgeon",
    qualification: "[B.V.Sc & A.H / M.V.Sc]",
    experience: "[Years of Experience]",
    specialization: ["Small Animal Medicine", "Soft Tissue Surgery", "Preventive Healthcare"],
    bio: "Dedicated veterinary practitioner committed to providing high-quality, compassionate clinical care for pets in Mysore.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "doctor-2",
    name: "[Veterinary Consultant Name]",
    designation: "Consultant Veterinarian",
    qualification: "[B.V.Sc & A.H]",
    experience: "[Years of Experience]",
    specialization: ["Pet Diagnostics", "Feline Medicine", "Dermatology"],
    bio: "Experienced companion animal doctor specializing in preventative health screening, diagnostics, and internal medicine.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80"
  }
];
