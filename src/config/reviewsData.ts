export interface ReviewItem {
  id: string;
  source: string;
  rating: number;
  authorPlaceholder: string;
  petTypePlaceholder: string;
  commentPlaceholder: string;
  datePlaceholder: string;
}

export const reviewsData: ReviewItem[] = [
  {
    id: "r1",
    source: "Google Review",
    rating: 5,
    authorPlaceholder: "[Pet Parent Name]",
    petTypePlaceholder: "Dog Owner",
    commentPlaceholder: "[Placeholder: Warm testimonial from pet parent regarding compassionate consultation, friendly veterinary staff, and clean hospital environment in Mysore.]",
    datePlaceholder: "[Recent Review]"
  },
  {
    id: "r2",
    source: "Google Review",
    rating: 5,
    authorPlaceholder: "[Pet Parent Name]",
    petTypePlaceholder: "Cat Owner",
    commentPlaceholder: "[Placeholder: Positive feedback regarding gentle pet handling, timely vaccination guidance, and attentive post-treatment advice.]",
    datePlaceholder: "[Recent Review]"
  },
  {
    id: "r3",
    source: "Google Review",
    rating: 5,
    authorPlaceholder: "[Pet Parent Name]",
    petTypePlaceholder: "Pet Parent",
    commentPlaceholder: "[Placeholder: Review appreciating the professional pet grooming service, hygienic bath, nail clipping, and friendly groomers.]",
    datePlaceholder: "[Recent Review]"
  }
];
