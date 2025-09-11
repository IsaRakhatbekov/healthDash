import type { SlotsResponse } from "../types/calendar";

const BASE = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

export async function fetchSlots(params: {
  doctorId: string;
  from: string; // ISO UTC
  to: string; // ISO UTC
  channel?: "in_person" | "video";
}): Promise<SlotsResponse> {
  const u = new URL("/api/calendar/slots", BASE);
  u.searchParams.set("doctorId", params.doctorId);
  u.searchParams.set("from", params.from);
  u.searchParams.set("to", params.to);
  if (params.channel) u.searchParams.set("channel", params.channel);

  const res = await fetch(u.toString());
  if (!res.ok) throw new Error("Failed to fetch slots");
  return res.json();
}
