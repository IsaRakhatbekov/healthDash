// src/shared/api/doctors.ts
import type { Doctor } from "../types/doctor";

const API_URL = "http://localhost:3001/api";

type DoctorsResponse = {
  total: number;
  page: number;
  pageSize: number;
  results: Doctor[];
};

export async function fetchDoctors(): Promise<DoctorsResponse> {
  const res = await fetch(`${API_URL}/doctors`);
  if (!res.ok) throw new Error("Failed to fetch doctors");
  return res.json();
}
