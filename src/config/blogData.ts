export interface Article {
  slug: string;
  title: string;
  category: "Vaccination" | "Health & Wellness" | "Grooming" | "Cat Care" | "Emergency Advice";
  publishDatePlaceholder: string;
  readTime: string;
  authorPlaceholder: string;
  summary: string;
  content: {
    heading: string;
    body: string;
  }[];
  faqs?: { question: string; answer: string }[];
  seoTitle: string;
  seoDescription: string;
  image: string;
}

export const blogArticles: Article[] = [
  {
    slug: "dog-vaccination-schedule-mysore",
    title: "Dog Vaccination Schedule: What Every Pet Owner in Mysore Should Know",
    category: "Vaccination",
    publishDatePlaceholder: "[Article Date]",
    readTime: "5 min read",
    authorPlaceholder: "Shree Pet Hospital Medical Team",
    summary: "A comprehensive guide to core and non-core dog vaccines, puppy immunization timelines, and booster protocols recommended in Mysore.",
    content: [
      {
        heading: "Why Dog Vaccination is Essential in Mysore",
        body: "Vaccinating your dog is the most reliable way to protect them against dangerous infectious diseases like Rabies, Canine Parvovirus, Canine Distemper, Leptospirosis, and Hepatitis. In a warm climate like Mysore, viral organisms and waterborne bacteria can spread easily without proper immunization."
      },
      {
        heading: "Puppy Vaccination Timeline (6 Weeks to 16 Weeks)",
        body: "Puppies inherit maternal antibodies that gradually decrease during their first few weeks of life. Starting vaccinations at the right time ensures continuous immune protection:\n\n• 6 to 8 Weeks: First combination vaccine (DHPP / 7-in-1 or 9-in-1 core vaccine).\n• 10 to 12 Weeks: Second combination booster dose.\n• 14 to 16 Weeks: Third combination booster + Anti-Rabies Vaccine (ARV).\n\nMaintaining strict adherence to booster dates is essential for building robust long-term immunity."
      },
      {
        heading: "Adult Dog Booster Vaccines",
        body: "Adult dogs require periodic booster doses to maintain antibody levels. The Anti-Rabies vaccine is administered annually, alongside the core multi-component booster as advised by your veterinarian."
      },
      {
        heading: "Post-Vaccination Care",
        body: "After receiving a vaccine, your dog may feel slightly sleepy or have minor tenderness at the injection site for 24 hours. Ensure comfortable rest, fresh drinking water, and avoid strenuous exercise on vaccination day."
      }
    ],
    faqs: [
      {
        question: "Can I bathe my puppy immediately after vaccination?",
        answer: "It is best to wait 48 to 72 hours after vaccination before bathing your puppy to avoid subjecting them to extra temperature changes or mild stress."
      }
    ],
    seoTitle: "Dog Vaccination Schedule Mysore | Complete Puppy & Adult Guide",
    seoDescription: "Learn the recommended dog vaccination schedule in Mysore. Core puppy vaccines, Rabies shots, 7-in-1 boosters, and post-vaccination care tips.",
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "signs-your-dog-needs-veterinary-care",
    title: "10 Warning Signs Your Dog Needs Veterinary Care",
    category: "Health & Wellness",
    publishDatePlaceholder: "[Article Date]",
    readTime: "6 min read",
    authorPlaceholder: "Shree Pet Hospital Medical Team",
    summary: "Recognize early subtle signs of illness in dogs to seek timely veterinary advice before symptoms worsen.",
    content: [
      {
        heading: "Understanding Subtle Behavioral & Physical Changes",
        body: "Dogs are resilient animals that often hide discomfort or illness in early stages. As a pet owner, recognizing early clinical signs can prevent mild health issues from becoming serious emergencies."
      },
      {
        heading: "Key Symptoms to Watch For",
        body: "1. Loss of Appetite or Refusing Water: Skipping meals for over 24 hours warrants veterinary assessment.\n2. Lethargy or Sudden Weakness: Uncharacteristic reluctance to play, walk, or greet family members.\n3. Repeated Vomiting or Diarrhea: Severe or blood-tinged gastrointestinal upset requires immediate evaluation.\n4. Labored Breathing or Persistent Coughing: Heavy panting, wheezing, or coughing while resting.\n5. Changes in Urination: Frequent straining, inability to urinate, or blood in urine.\n6. Excessive Scratching or Hair Loss: Persistent itching, redness, or skin inflammation.\n7. Stiffness or Limping: Difficulty standing up or reluctance to climb stairs.\n8. Sudden Weight Loss or Unexplained Weight Gain.\n9. Eye Cloudiness or Discharge.\n10. Whining, Aggression, or Restlessness When Touched."
      },
      {
        heading: "When to Seek Immediate Emergency Attention",
        body: "If your dog exhibits collapse, pale or bluish gums, severe bleeding, suspected poisoning, bloat (distended hard abdomen), or seizures, seek immediate emergency veterinary assistance."
      }
    ],
    seoTitle: "10 Signs Your Dog Needs Veterinary Care | Shree Pet Hospital",
    seoDescription: "Discover key symptoms indicating your dog needs a veterinary checkup. From lethargy to breathing changes, protect your dog's health early.",
    image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "how-often-should-you-groom-your-dog",
    title: "How Often Should You Groom Your Dog? A Guide by Breed & Coat Type",
    category: "Grooming",
    publishDatePlaceholder: "[Article Date]",
    readTime: "4 min read",
    authorPlaceholder: "Shree Pet Hospital Grooming Team",
    summary: "Discover ideal grooming frequencies, coat care routines, and bathing guidelines for short-haired, double-coated, and long-haired dogs in Mysore.",
    content: [
      {
        heading: "The Role of Grooming in Overall Pet Health",
        body: "Grooming is more than just cosmetic styling; it is essential for maintaining healthy skin, preventing matted fur, reducing shedding, and controlling external parasites."
      },
      {
        heading: "Grooming Schedules by Coat Type",
        body: "• Short-Haired Breeds (e.g., Beagles, Labradors, Boxers): Bathing every 3 to 4 weeks, with weekly brushing to remove dead hair.\n• Long-Haired or Curly Breeds (e.g., Shih Tzus, Poodles, Golden Retrievers): Professional grooming and haircut every 4 to 6 weeks, alongside daily home brushing to prevent mats.\n• Double-Coated Breeds (e.g., Huskies, German Shepherds): Deshedding baths every 4 to 6 weeks, especially during seasonal coat blows."
      },
      {
        heading: "Essential Routine Checks During Grooming",
        body: "Every grooming session at Shree Pet Hospital includes checking nail length to prevent joint stress, gentle ear cleaning to avoid infection, and inspecting paw pads."
      }
    ],
    seoTitle: "How Often to Groom Your Dog | Dog Grooming Frequency Guide Mysore",
    seoDescription: "Learn how frequently to bath, brush, and cut your dog's hair based on breed and coat type. Expert grooming advice from Shree Pet Hospital Mysore.",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "common-health-problems-in-cats",
    title: "Common Health Problems in Cats & How to Spot Them Early",
    category: "Cat Care",
    publishDatePlaceholder: "[Article Date]",
    readTime: "5 min read",
    authorPlaceholder: "Shree Pet Hospital Medical Team",
    summary: "An informative overview of common feline ailments including lower urinary tract disease, hairballs, dental issues, and feline viral infections.",
    content: [
      {
        heading: "Understanding Feline Health Vulnerabilities",
        body: "Cats are masters of masking pain and illness. Recognizing small subtle shifts in feline behavior—such as hiding or litter box changes—helps identify medical concerns early."
      },
      {
        heading: "Top Feline Health Conditions",
        body: "1. Feline Lower Urinary Tract Disease (FLUTD): Straining in the litter box, vocalizing while urinating, or urinating outside the litter box. Male cats experiencing urinary blockage require immediate emergency care.\n2. Dental & Periodontal Disease: Red gums, bad breath, and dropping dry kibble.\n3. Hairball Ingestion & Digestive Upset: Frequent dry heaving or vomiting hairballs.\n4. Flea Infestations & Allergic Dermatitis: Over-grooming, skin scabs, or hair loss around the tail base.\n5. Feline Upper Respiratory Infections: Sneezing, eye discharge, and congestion."
      },
      {
        heading: "Preventative Recommendations for Cat Parents",
        body: "Provide ample fresh drinking water (or feline water fountains), feed high-quality wet and dry food, schedule annual health checkups, and keep indoor litter boxes clean."
      }
    ],
    seoTitle: "Common Cat Health Problems & Symptoms | Feline Veterinary Care Mysore",
    seoDescription: "Learn about common health issues in cats, including FLUTD, dental disease, and respiratory infections. Professional cat care tips at Shree Pet Hospital.",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "what-to-do-when-your-pet-stops-eating",
    title: "What to Do When Your Pet Stops Eating (Anorexia in Pets)",
    category: "Emergency Advice",
    publishDatePlaceholder: "[Article Date]",
    readTime: "5 min read",
    authorPlaceholder: "Shree Pet Hospital Medical Team",
    summary: "Step-by-step guidance on evaluating sudden appetite loss in dogs and cats and when to contact a veterinarian.",
    content: [
      {
        heading: "Why Appetite Loss (Anorexia) Requires Attention",
        body: "A sudden refusal to eat is one of the most common early indicators that a pet is experiencing physical illness, pain, digestive distress, or fever."
      },
      {
        heading: "Possible Causes of Inappetence",
        body: "• Oral or dental pain making chewing uncomfortable\n• Gastrointestinal upset, gastritis, or dietary indiscretion\n• Fever, systemic infection, or viral illnesses\n• Environmental stress or severe weather changes\n• Ingestion of a foreign body or toxic substance"
      },
      {
        heading: "Immediate Steps for Pet Owners",
        body: "1. Check for companion symptoms like vomiting, fever, lethargy, or diarrhea.\n2. Ensure fresh clean water is accessible.\n3. Do not force-feed your pet unless directed by a vet.\n4. If a cat stops eating for more than 24 hours or a dog refuses food for over 24-36 hours, schedule a veterinary consultation."
      }
    ],
    seoTitle: "What to Do When Your Pet Stops Eating | Pet Appetite Loss Advice",
    seoDescription: "Is your dog or cat refusing food? Learn potential causes of pet appetite loss and when to visit Shree Pet Hospital in Mysore.",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "preventive-healthcare-for-dogs-and-cats",
    title: "Preventive Healthcare for Dogs and Cats: A Year-Round Blueprint",
    category: "Health & Wellness",
    publishDatePlaceholder: "[Article Date]",
    readTime: "6 min read",
    authorPlaceholder: "Shree Pet Hospital Medical Team",
    summary: "Essential preventive health steps including regular deworming, tick prevention, balanced nutrition, and annual health screenings.",
    content: [
      {
        heading: "Building a Foundation for Lifelong Pet Vitality",
        body: "Preventive healthcare focuses on proactive measures that safeguard your pet against preventable diseases, parasites, and age-related ailments."
      },
      {
        heading: "Core Pillars of Preventive Care",
        body: "1. Timely Immunizations: Maintaining active vaccine coverage.\n2. Parasite Protection: Regular deworming and continuous tick/flea prevention.\n3. Balanced Nutrition: Feeding species-appropriate diets tailored to age and activity level.\n4. Routine Health Assessments: Professional checkups every 6 to 12 months."
      },
      {
        heading: "Caring for Senior Pets in Mysore",
        body: "As pets reach 7+ years of age, regular blood panels and joint evaluations help maintain their comfort and vitality during their golden years."
      }
    ],
    seoTitle: "Preventive Pet Healthcare Blueprint | Dog & Cat Wellness Mysore",
    seoDescription: "Discover essential preventive healthcare steps for dogs and cats in Mysore. Immunizations, parasite control, and nutrition advice from Shree Pet Hospital.",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1200&q=80"
  }
];
