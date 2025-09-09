// src/shared/types/doctor.ts

export type Rating = { score: number; reviewsCount: number };
export type Price = { amount: number; currency: string };
export type Clinic = {
  name: string;
  address: string;
  city: string;
  zip: string;
};

export type Doctor = {
  id: string;
  fullName: string;
  specialization: string;
  clinic: Clinic;
  bio: string;
  experienceYears: number;
  tags: string[];
  profileImage: string | null;
  insuranceNetworks: string[];
  price: Price;
  rating: Rating;
  nextAvailable?: {
    inPerson?: string | null;
    video?: string | null;
  };
};
