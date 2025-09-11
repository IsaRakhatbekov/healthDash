export type Channel = "in_person" | "video";

export interface Money {
  amount: number;
  currency: "USD" | "KGS" | "EUR";
}

export interface Slot {
  id: string;
  start: string; // ISO UTC
  end: string; // ISO UTC
  channel: Channel;
  isBooked: boolean;
  price: Money;
  // можно добавить позже: location, duration, meta и т.п.
}

export interface SlotsResponse {
  doctor: { id: string; fullName: string };
  range: { from: string; to: string };
  slots: Slot[];
}
