export interface ServiceDetail {
  slug: string;
  title: string;
  category: "Medical" | "Wellness" | "Grooming" | "Emergency";
  iconName: string;
  shortDescription: string;
  heroSubtitle: string;
  detailedExplanation: string[];
  benefits: string[];
  whatToExpect: string[];
  faqs: { question: string; answer: string }[];
  seoTitle: string;
  seoDescription: string;
  image: string;
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "pet-ambulance",
    title: "24/7 Pet Ambulance",
    category: "Emergency",
    iconName: "Truck",
    shortDescription: "24/7 emergency pet transport and mobile assistance across Mysore for critical, non-ambulatory, or trauma cases.",
    heroSubtitle: "Rapid 24-hour emergency pet transport equipped for safe patient transfer to Shree Pet Hospital in Mysore.",
    detailedExplanation: [
      "When a pet suffers severe trauma, sudden collapse, bloat, or acute medical distress, transporting them safely to a veterinary facility without causing further injury is critical.",
      "Shree Pet Hospital provides a dedicated 24/7 Pet Ambulance service across Mysore. Our emergency transport unit is equipped with stretchers, oxygen support, and basic stabilization equipment to transport sick or injured dogs, cats, and companion animals safely."
    ],
    benefits: [
      "24/7 emergency availability for urgent home pickups in Mysore",
      "Oxygen support and emergency stabilization during transit",
      "Safe, comfortable stretchers for large or non-ambulatory dogs",
      "Direct priority triage and admission upon arrival at Shree Pet Hospital"
    ],
    whatToExpect: [
      "Call our emergency helpline (+91 94807 02704 / +91 97312 21312) to dispatch the pet ambulance",
      "Provide your exact location landmark and brief description of your pet's condition",
      "Our trained paramedic/driver arrives to assist in loading and securing your pet comfortably",
      "Continuous communication with the hospital triage team during transit"
    ],
    faqs: [
      {
        question: "Is the pet ambulance service available 24 hours a day in Mysore?",
        answer: "Yes! Our pet ambulance is available 24/7 for emergency pickups across Mysore city and surrounding localities."
      },
      {
        question: "How do I request an emergency pet ambulance pickup?",
        answer: "Call our emergency numbers (+91 94807 02704 / +91 97312 21312) immediately or send an urgent WhatsApp location ping to +91 63628 55844."
      }
    ],
    seoTitle: "24/7 Pet Ambulance in Mysore | Emergency Pet Transport Service",
    seoDescription: "24/7 emergency pet ambulance service in Mysore by Shree Pet Hospital. Rapid 24-hour transport and oxygen-assisted transfer for critical pets.",
    image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "consultation",
    title: "Veterinary Consultation",
    category: "Medical",
    iconName: "Stethoscope",
    shortDescription: "Comprehensive health evaluations, routine wellness checks, and tailored medical advice for dogs, cats, and small pets.",
    heroSubtitle: "Thorough health assessments and personalized veterinary care for your beloved companion in Mysore.",
    detailedExplanation: [
      "At Shree Pet Hospital, our general veterinary consultations form the cornerstone of preventative and curative animal healthcare. Regular physical exams allow us to detect health issues early before they develop into serious clinical conditions.",
      "During a consultation, our veterinary doctors perform a nose-to-tail check-up, examining your pet's eyes, ears, coat, joints, cardiovascular health, temperature, weight, and dental status. We listen carefully to your observations about your pet's appetite, energy, and behavior."
    ],
    benefits: [
      "Early detection of underlying systemic conditions",
      "Customized dietary and nutrition plans",
      "Behavioral advice and lifestyle recommendations",
      "Personalized parasite prevention schedules",
      "Stress-free handling techniques tailored to timid pets"
    ],
    whatToExpect: [
      "A friendly welcoming greeting for your pet in our examination area",
      "A full clinical physical examination by our veterinarian",
      "Discussion of your pet's medical history, diet, and daily routine",
      "Clear explanation of findings and recommended treatments or tests"
    ],
    faqs: [
      {
        question: "How often should I bring my dog or cat for a routine consultation?",
        answer: "We recommend an annual consultation for healthy adult pets. Senior pets (aged 7 years and older) or pets with chronic health conditions benefit from bi-annual check-ups."
      },
      {
        question: "What should I bring to my pet's consultation?",
        answer: "Please bring any previous vaccination records, medical history documents, current medication details, and a list of questions you have for the veterinarian."
      }
    ],
    seoTitle: "Veterinary Consultation in Mysore | Comprehensive Pet Health Checks",
    seoDescription: "Book a professional veterinary consultation at Shree Pet Hospital Mysore. Thorough health exams, nutritional guidance, and preventive care for dogs and cats.",
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "vaccination",
    title: "Pet Vaccination",
    category: "Wellness",
    iconName: "Syringe",
    shortDescription: "Core and non-core immunization programs for puppies, kittens, and adult dogs and cats to protect against fatal infectious diseases.",
    heroSubtitle: "Protecting pets across Mysore against rabies, parvovirus, distemper, feline panleukopenia, and contagious viruses.",
    detailedExplanation: [
      "Vaccinations are vital for building your pet's immune system against dangerous and highly contagious viral infections. Protecting your pet through timely vaccinations is essential for lifelong health.",
      "We follow evidence-based vaccination protocols adapted to local epidemiological factors in Mysore and Karnataka. Every vaccine administered at Shree Pet Hospital is maintained under strict cold-chain storage conditions."
    ],
    benefits: [
      "Protection against fatal diseases like Rabies, Parvovirus, and Distemper",
      "Compliance with local pet licensing and travel health rules",
      "Safeguarding public health against zoonotic infections",
      "Official vaccination booklet and digital record keeping"
    ],
    whatToExpect: [
      "Pre-vaccination health check to ensure your pet is fit for immunization",
      "Gentle administration of high-quality, cold-chain certified vaccines",
      "Post-vaccination monitoring guidance for home care",
      "Reminders for booster dosages"
    ],
    faqs: [
      {
        question: "At what age should puppies and kittens start vaccinations?",
        answer: "Puppy and kitten vaccination series typically begin at 6 to 8 weeks of age, followed by booster doses every 3-4 weeks until around 16 weeks of age."
      },
      {
        question: "Are annual boosters necessary for adult pets?",
        answer: "Yes, adult dogs and cats require periodic booster vaccines (such as Rabies and Multi-component core vaccines) to maintain protective antibody levels."
      }
    ],
    seoTitle: "Dog & Cat Vaccination in Mysore | Pet Immunization Clinic",
    seoDescription: "Complete pet vaccination services in Mysore for puppies, kittens, dogs, and cats. Protect against Rabies, Parvovirus, and Distemper at Shree Pet Hospital.",
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "surgery",
    title: "Pet Surgery",
    category: "Medical",
    iconName: "Activity",
    shortDescription: "Soft tissue surgeries, spay & neuter procedures, wound repairs, and minor surgical care performed with strict sterile protocol.",
    heroSubtitle: "Modern veterinary surgical care prioritizing safety, pain management, and aseptic standards in Mysore.",
    detailedExplanation: [
      "When surgical intervention is required, Shree Pet Hospital provides a sterile environment, monitored anesthesia, and dedicated pre-op and post-op care protocols.",
      "We perform routine elective procedures such as spaying and neutering, as well as soft tissue surgeries, laceration repairs, mass removals, and emergency surgical interventions."
    ],
    benefits: [
      "Pre-anesthetic blood testing to evaluate organ function prior to surgery",
      "Continuous monitoring of vitals (heart rate, respiration, oxygen levels)",
      "Structured multi-modal pain management before, during, and after surgery",
      "Detailed post-operative wound care instructions and follow-up visits"
    ],
    whatToExpect: [
      "Pre-surgical consultation and health evaluation",
      "Fasting guidelines provided prior to the procedure day",
      "Comfortable recovery monitoring until your pet is fully alert for discharge",
      "Clear home medication and activity restriction instructions"
    ],
    faqs: [
      {
        question: "Why is spaying or neutering recommended?",
        answer: "Spaying and neutering prevent unwanted litters, reduce roaming behaviors, and eliminate or lower the risk of severe reproductive cancers and pyometra infections."
      },
      {
        question: "How long does post-surgery recovery take?",
        answer: "Most routine soft-tissue surgical incisions heal within 10 to 14 days. We schedule a suture-removal or wound check appointment to ensure complete healing."
      }
    ],
    seoTitle: "Veterinary Pet Surgery in Mysore | Spay, Neuter & Surgical Care",
    seoDescription: "Professional veterinary surgery at Shree Pet Hospital Mysore. Sterile surgical protocols, spay/neuter, soft tissue procedures, and post-op monitoring.",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "diagnostics",
    title: "Pet Diagnostics",
    category: "Medical",
    iconName: "Microscope",
    shortDescription: "In-house laboratory tests, digital X-rays, blood profiles, skin scrapings, and diagnostic evaluations for accurate clinical insights.",
    heroSubtitle: "Advanced diagnostic imaging and lab testing to pinpoint medical conditions swiftly.",
    detailedExplanation: [
      "Accurate diagnosis is essential for effective medical treatment. Shree Pet Hospital utilizes modern diagnostic modalities to investigate illnesses quickly and accurately.",
      "Our diagnostic services include blood chemistry panels, complete blood counts (CBC), urinalysis, skin cytology, digital radiography (X-Ray), and parasite microscopic screening."
    ],
    benefits: [
      "Fast turnaround time for critical diagnostic blood results",
      "Non-invasive imaging to assess internal organs, bones, and tissues",
      "Clear clinical diagnosis guiding targeted medical treatment plans",
      "Comprehensive senior pet health screening panels"
    ],
    whatToExpect: [
      "Gentle sample collection (blood, urine, or skin swab) with minimal discomfort",
      "Prompt analysis conducted by trained technical staff",
      "Transparent explanation of diagnostic findings by our veterinarian"
    ],
    faqs: [
      {
        question: "Should my pet fast before blood tests or imaging?",
        answer: "For certain blood chemistry panels or abdominal diagnostic imaging, an 8-12 hour fast may be recommended. We will inform you in advance during appointment confirmation."
      }
    ],
    seoTitle: "Pet Diagnostics & X-Ray in Mysore | Veterinary Lab Services",
    seoDescription: "Diagnostic lab tests, digital X-ray, and blood investigations for pets in Mysore at Shree Pet Hospital. Rapid, accurate health screening.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "dental-care",
    title: "Pet Dental Care",
    category: "Wellness",
    iconName: "Smile",
    shortDescription: "Oral hygiene assessments, ultrasonic scaling, polishing, tooth extractions, and preventative dental hygiene guidance.",
    heroSubtitle: "Protecting your pet's oral health, preventing periodontal disease, and eliminating bad breath.",
    detailedExplanation: [
      "Dental health directly impacts your pet's overall wellbeing. Untreated periodontal disease can lead to oral pain, tooth loss, and systemic bacteria affecting kidney and heart health.",
      "Shree Pet Hospital provides veterinary dental care including oral examinations, tartar removal, ultrasonic dental scaling, tooth polishing, and treatment of infected gums."
    ],
    benefits: [
      "Relief from chronic mouth pain and chewing discomfort",
      "Prevention of severe gum disease and premature tooth loss",
      "Fresh breath and improved overall hygiene",
      "Protection against systemic bacterial spread to internal organs"
    ],
    whatToExpect: [
      "Visual assessment of teeth, gums, and oral cavity",
      "Professional ultrasonic cleaning under controlled, safe conditions if scaling is needed",
      "Practical home dental hygiene advice (brushing, dental chews, oral rinses)"
    ],
    faqs: [
      {
        question: "What are signs that my dog or cat has dental problems?",
        answer: "Common indicators include persistent foul breath, yellow-brown tartar build-up, bleeding or swollen gums, dropping food while eating, and reluctance to chew toys."
      }
    ],
    seoTitle: "Pet Dental Care & Scaling in Mysore | Veterinary Dentistry",
    seoDescription: "Keep your pet's teeth healthy with professional pet dental care, ultrasonic scaling, and oral hygiene treatment at Shree Pet Hospital Mysore.",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "emergency-care",
    title: "Emergency Care",
    category: "Emergency",
    iconName: "ShieldAlert",
    shortDescription: "Urgent 24/7 medical attention for trauma, acute toxicities, breathing difficulties, heatstroke, severe infections, and sudden illnesses.",
    heroSubtitle: "Rapid triage, stabilization, and urgent critical care 24 hours a day when every minute counts.",
    detailedExplanation: [
      "Medical emergencies can occur suddenly at any hour. Shree Pet Hospital is equipped to provide 24/7 immediate triage, stabilization, and emergency medical management for critical pets.",
      "Common emergencies include road accidents, dog fights, poisoning/ingestion of toxic substances, acute bloat, severe allergic reactions, urinary blockage in cats, and heatstroke."
    ],
    benefits: [
      "24/7 rapid clinical assessment and immediate stabilization protocol",
      "Oxygen therapy, fluid resuscitation, and critical pain management",
      "Equipped for wound debridement, hemorrhage control, and emergency care",
      "Compassionate support for anxious pet parents during crisis situations"
    ],
    whatToExpect: [
      "Immediate triage upon arrival — critical patients receive immediate care",
      "Urgent stabilization measures (IV fluids, oxygen, pain control)",
      "Continuous communication regarding diagnostic steps and prognosis"
    ],
    faqs: [
      {
        question: "What should I do if my pet ingests something poisonous?",
        answer: "Call us immediately at +91 94807 02704 / +91 97312 21312 before coming. Do not attempt to induce vomiting at home unless explicitly instructed by a veterinarian."
      }
    ],
    seoTitle: "24/7 Emergency Pet Hospital in Mysore | Urgent Veterinary Clinic",
    seoDescription: "24/7 emergency veterinary care for pets in Mysore. Triage, trauma care, stabilization, and critical medical support at Shree Pet Hospital.",
    image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "preventive-care",
    title: "Preventive Care",
    category: "Wellness",
    iconName: "HeartPulse",
    shortDescription: "Deworming, flea & tick prevention, nutritional consultation, weight management, and senior pet wellness screening.",
    heroSubtitle: "Proactive healthcare plans designed to ensure a long, energetic, and happy life for your pet.",
    detailedExplanation: [
      "Preventive medicine is the best approach to ensuring your pet enjoys a long and active life. By anticipating potential health risks, we can prevent illnesses before they start.",
      "Our preventive care plans encompass routine internal parasite control (deworming), external parasite treatments (fleas, ticks, mites), tailored nutrition planning, and senior pet wellness monitoring."
    ],
    benefits: [
      "Prevention of tick-borne diseases (Ehrlichiosis, Anaplasmosis)",
      "Control of intestinal worms that can pose risks to human family members",
      "Optimal weight management preventing joint strain and diabetes",
      "Customized care plans for growing puppies, adult pets, and senior animals"
    ],
    whatToExpect: [
      "Assessment of lifestyle, environment, and specific risk factors",
      "Custom parasite control schedule tailored to your pet's weight and age",
      "Nutritional recommendations suitable for your pet's breed and activity level"
    ],
    faqs: [
      {
        question: "How often should I deworm my pet in Mysore?",
        answer: "Puppies and kittens require frequent deworming every few weeks initially, while adult pets in Mysore typically need preventive deworming every 3 months."
      }
    ],
    seoTitle: "Preventive Pet Healthcare in Mysore | Deworming & Wellness Care",
    seoDescription: "Preventive pet healthcare programs in Mysore. Flea & tick control, deworming, senior pet checks, and nutrition advice at Shree Pet Hospital.",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "grooming",
    title: "Pet Grooming",
    category: "Grooming",
    iconName: "Scissors",
    shortDescription: "Professional hygienic grooming, medicated baths, breed cuts, nail trimming, ear cleaning, and coat conditioning in a clean environment.",
    heroSubtitle: "Gentle, hygienic, and styling pet grooming services in Mysore for dogs and cats of all breeds.",
    detailedExplanation: [
      "Regular grooming is an indispensable component of pet hygiene and coat maintenance. At Shree Pet Hospital's dedicated grooming wing, we offer gentle, professional grooming tailored to your pet's breed, coat type, and skin condition.",
      "From warm relaxing baths with hypoallergenic shampoos to precision breed trimming, nail clipping, and ear canal cleaning, our groomers treat every pet with patience and care."
    ],
    benefits: [
      "Prevents painful coat matting and excessive hair shedding",
      "Early identification of skin infections, lumps, or parasite infestations",
      "Medicated bath treatments for sensitive skin and dermatitis",
      "Stress-free handling in a clean, sanitized grooming space"
    ],
    whatToExpect: [
      "Initial coat and skin inspection by our groomer",
      "Relaxing bath with pet-safe coat-nourishing products",
      "Gentle blow-dry, brush out, and breed-appropriate hair haircut/trim",
      "Nail clipping, paw pad trimming, and ear cleaning"
    ],
    faqs: [
      {
        question: "Do you groom cats as well as dogs?",
        answer: "Yes! We offer specialized, quiet, and gentle grooming sessions for cats to keep them comfortable throughout the process."
      },
      {
        question: "Can I get a medicated bath for my pet's skin condition?",
        answer: "Absolutely. If prescribed by our veterinarian or requested for skin relief, we perform medicated baths using specialized anti-fungal or anti-bacterial shampoos."
      }
    ],
    seoTitle: "Pet Grooming in Mysore | Professional Dog & Cat Grooming",
    seoDescription: "Premium pet grooming services in Mysore. Bathing, haircut, hair trimming, nail clipping, ear cleaning, and medicated baths at Shree Pet Hospital.",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1200&q=80"
  }
];
