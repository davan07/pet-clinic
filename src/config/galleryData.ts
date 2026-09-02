export interface GalleryItem {
  id: string;
  title: string;
  category: "Hospital" | "Doctors" | "Treatment" | "Grooming" | "Pets" | "Facilities";
  image: string;
  altText: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "Hospital Reception Lobby & Waiting Area",
    category: "Facilities",
    image: "/images/reception-lobby.jpg",
    altText: "Bright modern reception lobby at Shree Pet Hospital Mysore"
  },
  {
    id: "g2",
    title: "Clinical Support & Nursing Staff",
    category: "Doctors",
    image: "/images/nursing-staff.jpg",
    altText: "Shree Pet Hospital nursing and clinical support staff in blue scrubs"
  },
  {
    id: "g3",
    title: "Shree Pet Hospital Clinical & Grooming Team",
    category: "Doctors",
    image: "/images/hospital-team.jpg",
    altText: "Shree Pet Hospital veterinary and grooming team in Mysore with patient"
  },
  {
    id: "g4",
    title: "Professional Grooming & Breed Styling",
    category: "Grooming",
    image: "/images/groomer-styling.jpg",
    altText: "Shree Pet Grooming Spa professional groomer styling a Shih Tzu"
  },
  {
    id: "g5",
    title: "Playful Shih Tzu Puppies at Clinic",
    category: "Pets",
    image: "/images/shih-tzu-puppies.jpg",
    altText: "Cute Shih Tzu puppies visiting Shree Pet Hospital Mysore"
  },
  {
    id: "g6",
    title: "Poodle Consultation & Wellness Check",
    category: "Treatment",
    image: "/images/poodle-examination.jpg",
    altText: "Poodle receiving wellness evaluation on examination table"
  },
  {
    id: "g7",
    title: "Consultation & Examination Room",
    category: "Facilities",
    image: "/images/about-facility.jpg",
    altText: "Modern consultation room and electric examination table at Shree Pet Hospital Mysore"
  },
  {
    id: "g8",
    title: "Shree Pet Hospital Welcome Desk",
    category: "Hospital",
    image: "/images/reception-wall.jpg",
    altText: "Reception desk with wooden slat wall backdrop and logo at Shree Pet Hospital Mysore"
  },
  {
    id: "g9",
    title: "In-House Pet Pharmacy & Supplies Wing",
    category: "Facilities",
    image: "/images/pet-store-pharmacy.jpg",
    altText: "Well-stocked pet pharmacy, food, and supply store at Shree Pet Hospital Mysore"
  },
  {
    id: "g10",
    title: "Pet Accessories, Collars & Leashes Section",
    category: "Facilities",
    image: "/images/pet-accessories-store.jpg",
    altText: "Pet collars, leashes, harnesses, and beds display section at Shree Pet Hospital"
  },
  {
    id: "g11",
    title: "Shree Pet Hospital Building & Entrance",
    category: "Hospital",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnsLpzabHPpDwwKc5h-Rv6fXn-BNFWa2K0_tjZ8O8v7uElyViMcEFnRm1PwDX1TfKk69lAG8d5aiYs4G2YXn8wFU3TcBdf8wMZ9ZVGOD-JJzZOHazIKwVP5CnAzFX60Px_y9yWhB4xJYPdM=w408-h474-k-no",
    altText: "Shree Pet Hospital exterior in Mysore"
  }
];
