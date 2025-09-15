// shared/mocks/mockData.ts

export interface AvailabilitySlot {
  time: string;
  startISO: string;
  endISO: string;
  status: string;
}

export interface AvailabilityDay {
  date: string;
  weekday: string;
  slots: AvailabilitySlot[];
}

export interface AvailabilityResponse {
  doctorId: string;
  type: string;
  days: AvailabilityDay[];
}

export const mockAvailability: AvailabilityResponse = {
  doctorId: "doc_1",
  type: "in-person",
  days: [
    // --- Неделя 1 (8–14 сентября) ---
    {
      date: "2025-09-08",
      weekday: "Mon",
      slots: [
        {
          time: "10:00",
          startISO: "2025-09-08T10:00:00Z",
          endISO: "2025-09-08T11:00:00Z",
          status: "open",
        },
        {
          time: "11:00",
          startISO: "2025-09-08T11:00:00Z",
          endISO: "2025-09-08T12:00:00Z",
          status: "open",
        },
        {
          time: "12:00",
          startISO: "2025-09-08T12:00:00Z",
          endISO: "2025-09-08T13:00:00Z",
          status: "booked",
        },
        {
          time: "13:00",
          startISO: "2025-09-08T13:00:00Z",
          endISO: "2025-09-08T14:00:00Z",
          status: "open",
        },
        {
          time: "14:00",
          startISO: "2025-09-08T14:00:00Z",
          endISO: "2025-09-08T15:00:00Z",
          status: "open",
        },
        {
          time: "15:00",
          startISO: "2025-09-08T15:00:00Z",
          endISO: "2025-09-08T16:00:00Z",
          status: "booked",
        },
      ],
    },
    {
      date: "2025-09-09",
      weekday: "Tue",
      slots: [
        {
          time: "10:00",
          startISO: "2025-09-09T10:00:00Z",
          endISO: "2025-09-09T11:00:00Z",
          status: "booked",
        },
        {
          time: "11:00",
          startISO: "2025-09-09T11:00:00Z",
          endISO: "2025-09-09T12:00:00Z",
          status: "open",
        },
        {
          time: "12:00",
          startISO: "2025-09-09T12:00:00Z",
          endISO: "2025-09-09T13:00:00Z",
          status: "open",
        },
        {
          time: "13:00",
          startISO: "2025-09-09T13:00:00Z",
          endISO: "2025-09-09T14:00:00Z",
          status: "booked",
        },
        {
          time: "14:00",
          startISO: "2025-09-09T14:00:00Z",
          endISO: "2025-09-09T15:00:00Z",
          status: "open",
        },
        {
          time: "15:00",
          startISO: "2025-09-09T15:00:00Z",
          endISO: "2025-09-09T16:00:00Z",
          status: "open",
        },
      ],
    },
    {
      date: "2025-09-10",
      weekday: "Wed",
      slots: [
        {
          time: "10:00",
          startISO: "2025-09-10T10:00:00Z",
          endISO: "2025-09-10T11:00:00Z",
          status: "open",
        },
        {
          time: "11:00",
          startISO: "2025-09-10T11:00:00Z",
          endISO: "2025-09-10T12:00:00Z",
          status: "booked",
        },
        {
          time: "12:00",
          startISO: "2025-09-10T12:00:00Z",
          endISO: "2025-09-10T13:00:00Z",
          status: "open",
        },
        {
          time: "13:00",
          startISO: "2025-09-10T13:00:00Z",
          endISO: "2025-09-10T14:00:00Z",
          status: "open",
        },
        {
          time: "14:00",
          startISO: "2025-09-10T14:00:00Z",
          endISO: "2025-09-10T15:00:00Z",
          status: "booked",
        },
        {
          time: "15:00",
          startISO: "2025-09-10T15:00:00Z",
          endISO: "2025-09-10T16:00:00Z",
          status: "open",
        },
      ],
    },
    {
      date: "2025-09-11",
      weekday: "Thu",
      slots: [
        {
          time: "10:00",
          startISO: "2025-09-11T10:00:00Z",
          endISO: "2025-09-11T11:00:00Z",
          status: "open",
        },
        {
          time: "11:00",
          startISO: "2025-09-11T11:00:00Z",
          endISO: "2025-09-11T12:00:00Z",
          status: "open",
        },
        {
          time: "12:00",
          startISO: "2025-09-11T12:00:00Z",
          endISO: "2025-09-11T13:00:00Z",
          status: "booked",
        },
        {
          time: "13:00",
          startISO: "2025-09-11T13:00:00Z",
          endISO: "2025-09-11T14:00:00Z",
          status: "open",
        },
        {
          time: "14:00",
          startISO: "2025-09-11T14:00:00Z",
          endISO: "2025-09-11T15:00:00Z",
          status: "open",
        },
        {
          time: "15:00",
          startISO: "2025-09-11T15:00:00Z",
          endISO: "2025-09-11T16:00:00Z",
          status: "booked",
        },
      ],
    },
    {
      date: "2025-09-12",
      weekday: "Fri",
      slots: [
        {
          time: "10:00",
          startISO: "2025-09-12T10:00:00Z",
          endISO: "2025-09-12T11:00:00Z",
          status: "open",
        },
        {
          time: "11:00",
          startISO: "2025-09-12T11:00:00Z",
          endISO: "2025-09-12T12:00:00Z",
          status: "open",
        },
        {
          time: "12:00",
          startISO: "2025-09-12T12:00:00Z",
          endISO: "2025-09-12T13:00:00Z",
          status: "open",
        },
        {
          time: "13:00",
          startISO: "2025-09-12T13:00:00Z",
          endISO: "2025-09-12T14:00:00Z",
          status: "booked",
        },
        {
          time: "14:00",
          startISO: "2025-09-12T14:00:00Z",
          endISO: "2025-09-12T15:00:00Z",
          status: "open",
        },
        {
          time: "15:00",
          startISO: "2025-09-12T15:00:00Z",
          endISO: "2025-09-12T16:00:00Z",
          status: "open",
        },
      ],
    },
    { date: "2025-09-13", weekday: "Sat", slots: [] },
    { date: "2025-09-14", weekday: "Sun", slots: [] },

    // --- Неделя 2 (15–21 сентября) ---
    {
      date: "2025-09-15",
      weekday: "Mon",
      slots: [
        {
          time: "10:00",
          startISO: "2025-09-15T10:00:00Z",
          endISO: "2025-09-15T11:00:00Z",
          status: "booked",
        },
        {
          time: "11:00",
          startISO: "2025-09-15T11:00:00Z",
          endISO: "2025-09-15T12:00:00Z",
          status: "open",
        },
        {
          time: "12:00",
          startISO: "2025-09-15T12:00:00Z",
          endISO: "2025-09-15T13:00:00Z",
          status: "open",
        },
        {
          time: "13:00",
          startISO: "2025-09-15T13:00:00Z",
          endISO: "2025-09-15T14:00:00Z",
          status: "booked",
        },
        {
          time: "14:00",
          startISO: "2025-09-15T14:00:00Z",
          endISO: "2025-09-15T15:00:00Z",
          status: "open",
        },
        {
          time: "15:00",
          startISO: "2025-09-15T15:00:00Z",
          endISO: "2025-09-15T16:00:00Z",
          status: "open",
        },
      ],
    },
    {
      date: "2025-09-16",
      weekday: "Tue",
      slots: [
        {
          time: "10:00",
          startISO: "2025-09-16T10:00:00Z",
          endISO: "2025-09-16T11:00:00Z",
          status: "open",
        },
        {
          time: "11:00",
          startISO: "2025-09-16T11:00:00Z",
          endISO: "2025-09-16T12:00:00Z",
          status: "booked",
        },
        {
          time: "12:00",
          startISO: "2025-09-16T12:00:00Z",
          endISO: "2025-09-16T13:00:00Z",
          status: "open",
        },
        {
          time: "13:00",
          startISO: "2025-09-16T13:00:00Z",
          endISO: "2025-09-16T14:00:00Z",
          status: "open",
        },
        {
          time: "14:00",
          startISO: "2025-09-16T14:00:00Z",
          endISO: "2025-09-16T15:00:00Z",
          status: "booked",
        },
        {
          time: "15:00",
          startISO: "2025-09-16T15:00:00Z",
          endISO: "2025-09-16T16:00:00Z",
          status: "open",
        },
      ],
    },
    {
      date: "2025-09-17",
      weekday: "Wed",
      slots: [
        /* ... */
      ],
    },
    {
      date: "2025-09-18",
      weekday: "Thu",
      slots: [
        /* ... */
      ],
    },
    {
      date: "2025-09-19",
      weekday: "Fri",
      slots: [
        /* ... */
      ],
    },
    { date: "2025-09-20", weekday: "Sat", slots: [] },
    { date: "2025-09-21", weekday: "Sun", slots: [] },

    // --- Неделя 3 (22–28 сентября) ---
    {
      date: "2025-09-22",
      weekday: "Mon",
      slots: [
        /* ... */
      ],
    },
    {
      date: "2025-09-23",
      weekday: "Tue",
      slots: [
        /* ... */
      ],
    },
    {
      date: "2025-09-24",
      weekday: "Wed",
      slots: [
        /* ... */
      ],
    },
    {
      date: "2025-09-25",
      weekday: "Thu",
      slots: [
        /* ... */
      ],
    },
    {
      date: "2025-09-26",
      weekday: "Fri",
      slots: [
        /* ... */
      ],
    },
    { date: "2025-09-27", weekday: "Sat", slots: [] },
    { date: "2025-09-28", weekday: "Sun", slots: [] },
  ],
};

export interface Appointments {
  id: string;
  doctor: string;
  specialty: string;
  date: string;
  format: string;
  length: string;
  fee: string;
  receipt: string;
  actions: string[];
  status: "upcoming" | "past" | "cancelled";
}

export const mockAppointments: Appointments[] = [
  // 🔹 UPCOMING (10)
  {
    id: "apt_1",
    doctor: "Dr. John Smith, MD",
    specialty: "Pediatric Rehab Physician",
    date: "August 25, 2025 at 10:30 AM",
    format: "Online (Video visit)",
    length: "45 min",
    fee: "$80 – Paid",
    receipt: "payment_receipt_1.pdf",
    actions: ["Join", "Reschedule", "Cancel"],
    status: "upcoming",
  },
  {
    id: "apt_2",
    doctor: "Dr. Anna Brown, MD",
    specialty: "Cardiologist",
    date: "August 26, 2025 at 12:00 PM",
    format: "In-Person, Bishkek City Hospital",
    length: "30 min",
    fee: "$100 – Paid",
    receipt: "payment_receipt_2.pdf",
    actions: ["Join", "Cancel"],
    status: "upcoming",
  },
  {
    id: "apt_3",
    doctor: "Dr. Michael Lee, MD",
    specialty: "Neurologist",
    date: "August 27, 2025 at 09:15 AM",
    format: "Online (Video visit)",
    length: "60 min",
    fee: "$120 – Paid",
    receipt: "payment_receipt_3.pdf",
    actions: ["Join", "Reschedule", "Cancel"],
    status: "upcoming",
  },
  {
    id: "apt_4",
    doctor: "Dr. Sarah Kim, MD",
    specialty: "Dermatologist",
    date: "August 28, 2025 at 15:45 PM",
    format: "In-Person, Central Clinic",
    length: "40 min",
    fee: "$75 – Paid",
    receipt: "payment_receipt_4.pdf",
    actions: ["Join", "Cancel"],
    status: "upcoming",
  },
  {
    id: "apt_5",
    doctor: "Dr. Alex Johnson, MD",
    specialty: "Orthopedic Surgeon",
    date: "August 29, 2025 at 11:00 AM",
    format: "Online (Video visit)",
    length: "50 min",
    fee: "$150 – Paid",
    receipt: "payment_receipt_5.pdf",
    actions: ["Join", "Reschedule", "Cancel"],
    status: "upcoming",
  },
  {
    id: "apt_6",
    doctor: "Dr. Maria Garcia, MD",
    specialty: "Endocrinologist",
    date: "August 30, 2025 at 13:30 PM",
    format: "In-Person, Bishkek Medical Center",
    length: "45 min",
    fee: "$90 – Paid",
    receipt: "payment_receipt_6.pdf",
    actions: ["Join", "Cancel"],
    status: "upcoming",
  },
  {
    id: "apt_7",
    doctor: "Dr. David Wilson, MD",
    specialty: "Oncologist",
    date: "August 31, 2025 at 08:00 AM",
    format: "Online (Video visit)",
    length: "60 min",
    fee: "$200 – Paid",
    receipt: "payment_receipt_7.pdf",
    actions: ["Join", "Reschedule", "Cancel"],
    status: "upcoming",
  },
  {
    id: "apt_8",
    doctor: "Dr. Emily Davis, MD",
    specialty: "Ophthalmologist",
    date: "September 1, 2025 at 10:45 AM",
    format: "In-Person, Eye Care Clinic",
    length: "30 min",
    fee: "$60 – Paid",
    receipt: "payment_receipt_8.pdf",
    actions: ["Join", "Cancel"],
    status: "upcoming",
  },
  {
    id: "apt_9",
    doctor: "Dr. Robert Martinez, MD",
    specialty: "Pulmonologist",
    date: "September 2, 2025 at 14:15 PM",
    format: "Online (Video visit)",
    length: "50 min",
    fee: "$110 – Paid",
    receipt: "payment_receipt_9.pdf",
    actions: ["Join", "Reschedule", "Cancel"],
    status: "upcoming",
  },
  {
    id: "apt_10",
    doctor: "Dr. Olivia Clark, MD",
    specialty: "Psychiatrist",
    date: "September 3, 2025 at 16:00 PM",
    format: "In-Person, Mental Health Center",
    length: "45 min",
    fee: "$130 – Paid",
    receipt: "payment_receipt_10.pdf",
    actions: ["Join", "Cancel"],
    status: "upcoming",
  },

  // 🔹 PAST (10)
  {
    id: "apt_11",
    doctor: "Dr. Ethan White, MD",
    specialty: "General Practitioner",
    date: "July 25, 2025 at 09:30 AM",
    format: "Online (Video visit)",
    length: "20 min",
    fee: "$50 – Paid",
    receipt: "payment_receipt_11.pdf",
    actions: ["Book Again", "Review"],
    status: "past",
  },
  {
    id: "apt_12",
    doctor: "Dr. Sophia Lopez, MD",
    specialty: "Pediatrician",
    date: "July 26, 2025 at 11:15 AM",
    format: "In-Person, Children's Hospital",
    length: "30 min",
    fee: "$70 – Paid",
    receipt: "payment_receipt_12.pdf",
    actions: ["Book Again", "Review"],
    status: "past",
  },
  {
    id: "apt_13",
    doctor: "Dr. James Hall, MD",
    specialty: "ENT Specialist",
    date: "July 27, 2025 at 14:00 PM",
    format: "Online (Video visit)",
    length: "40 min",
    fee: "$85 – Paid",
    receipt: "payment_receipt_13.pdf",
    actions: ["Book Again", "Review"],
    status: "past",
  },
  {
    id: "apt_14",
    doctor: "Dr. Mia Allen, MD",
    specialty: "Rheumatologist",
    date: "July 28, 2025 at 10:00 AM",
    format: "In-Person, Central Hospital",
    length: "50 min",
    fee: "$140 – Paid",
    receipt: "payment_receipt_14.pdf",
    actions: ["Book Again", "Review"],
    status: "past",
  },
  {
    id: "apt_15",
    doctor: "Dr. William Scott, MD",
    specialty: "Gastroenterologist",
    date: "July 29, 2025 at 13:00 PM",
    format: "Online (Video visit)",
    length: "60 min",
    fee: "$160 – Paid",
    receipt: "payment_receipt_15.pdf",
    actions: ["Book Again", "Review"],
    status: "past",
  },
  {
    id: "apt_16",
    doctor: "Dr. Isabella Young, MD",
    specialty: "Allergist",
    date: "July 30, 2025 at 09:45 AM",
    format: "In-Person, Allergy Clinic",
    length: "25 min",
    fee: "$55 – Paid",
    receipt: "payment_receipt_16.pdf",
    actions: ["Book Again", "Review"],
    status: "past",
  },
  {
    id: "apt_17",
    doctor: "Dr. Benjamin King, MD",
    specialty: "Urologist",
    date: "July 31, 2025 at 15:30 PM",
    format: "Online (Video visit)",
    length: "45 min",
    fee: "$100 – Paid",
    receipt: "payment_receipt_17.pdf",
    actions: ["Book Again", "Review"],
    status: "past",
  },
  {
    id: "apt_18",
    doctor: "Dr. Charlotte Wright, MD",
    specialty: "Hematologist",
    date: "August 1, 2025 at 12:30 PM",
    format: "In-Person, Hematology Center",
    length: "50 min",
    fee: "$180 – Paid",
    receipt: "payment_receipt_18.pdf",
    actions: ["Book Again", "Review"],
    status: "past",
  },
  {
    id: "apt_19",
    doctor: "Dr. Henry Green, MD",
    specialty: "Nephrologist",
    date: "August 2, 2025 at 08:30 AM",
    format: "Online (Video visit)",
    length: "45 min",
    fee: "$125 – Paid",
    receipt: "payment_receipt_19.pdf",
    actions: ["Book Again", "Review"],
    status: "past",
  },
  {
    id: "apt_20",
    doctor: "Dr. Amelia Baker, MD",
    specialty: "Gynecologist",
    date: "August 3, 2025 at 17:00 PM",
    format: "In-Person, Women’s Health Clinic",
    length: "60 min",
    fee: "$150 – Paid",
    receipt: "payment_receipt_20.pdf",
    actions: ["Book Again", "Review"],
    status: "past",
  },

  // 🔹 CANCELLED (10)
  {
    id: "apt_21",
    doctor: "Dr. Chris Brown, MD",
    specialty: "Dermatologist",
    date: "July 10, 2025 at 10:00 AM",
    format: "Online (Video visit)",
    length: "40 min",
    fee: "$100 – Paid",
    receipt: "payment_receipt_21.pdf",
    actions: ["Book Again", "Review"],
    status: "cancelled",
  },
  {
    id: "apt_22",
    doctor: "Dr. Laura Lee, MD",
    specialty: "Cardiologist",
    date: "July 11, 2025 at 11:30 AM",
    format: "In-Person, Central Hospital",
    length: "30 min",
    fee: "$90 – Paid",
    receipt: "payment_receipt_22.pdf",
    actions: ["Book Again", "Review"],
    status: "cancelled",
  },
  {
    id: "apt_23",
    doctor: "Dr. Kevin Adams, MD",
    specialty: "Psychiatrist",
    date: "July 12, 2025 at 09:45 AM",
    format: "Online (Video visit)",
    length: "50 min",
    fee: "$120 – Paid",
    receipt: "payment_receipt_23.pdf",
    actions: ["Book Again", "Review"],
    status: "cancelled",
  },
  {
    id: "apt_24",
    doctor: "Dr. Emma Stone, MD",
    specialty: "Neurologist",
    date: "July 13, 2025 at 14:15 PM",
    format: "In-Person, Neuro Center",
    length: "45 min",
    fee: "$140 – Paid",
    receipt: "payment_receipt_24.pdf",
    actions: ["Book Again", "Review"],
    status: "cancelled",
  },
  {
    id: "apt_25",
    doctor: "Dr. Daniel White, MD",
    specialty: "Oncologist",
    date: "July 14, 2025 at 15:30 PM",
    format: "Online (Video visit)",
    length: "60 min",
    fee: "$200 – Paid",
    receipt: "payment_receipt_25.pdf",
    actions: ["Book Again", "Review"],
    status: "cancelled",
  },
  {
    id: "apt_26",
    doctor: "Dr. Sophia Adams, MD",
    specialty: "Endocrinologist",
    date: "July 15, 2025 at 13:00 PM",
    format: "In-Person, Endocrine Center",
    length: "40 min",
    fee: "$110 – Paid",
    receipt: "payment_receipt_26.pdf",
    actions: ["Book Again", "Review"],
    status: "cancelled",
  },
  {
    id: "apt_27",
    doctor: "Dr. Ryan King, MD",
    specialty: "Pulmonologist",
    date: "July 16, 2025 at 12:15 PM",
    format: "Online (Video visit)",
    length: "45 min",
    fee: "$95 – Paid",
    receipt: "payment_receipt_27.pdf",
    actions: ["Book Again", "Review"],
    status: "cancelled",
  },
  {
    id: "apt_28",
    doctor: "Dr. Olivia Carter, MD",
    specialty: "Ophthalmologist",
    date: "July 17, 2025 at 10:30 AM",
    format: "In-Person, Eye Clinic",
    length: "30 min",
    fee: "$85 – Paid",
    receipt: "payment_receipt_28.pdf",
    actions: ["Book Again", "Review"],
    status: "cancelled",
  },
  {
    id: "apt_29",
    doctor: "Dr. Jason Miller, MD",
    specialty: "Orthopedic Surgeon",
    date: "July 18, 2025 at 11:45 AM",
    format: "Online (Video visit)",
    length: "50 min",
    fee: "$150 – Paid",
    receipt: "payment_receipt_29.pdf",
    actions: ["Book Again", "Review"],
    status: "cancelled",
  },
  {
    id: "apt_30",
    doctor: "Dr. Linda Brown, MD",
    specialty: "Psychologist",
    date: "July 19, 2025 at 16:00 PM",
    format: "In-Person, Mental Health Center",
    length: "45 min",
    fee: "$100 – Paid",
    receipt: "payment_receipt_30.pdf",
    actions: ["Book Again", "Review"],
    status: "cancelled",
  },
];
