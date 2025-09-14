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
}

export const mockAppointments: Appointments[] = [
  {
    id: "apt_1",
    doctor: "Dr. John Smith, MD",
    specialty: "Pediatric Rehab Physician",
    date: "August 5, 2025 at 10:30 AM",
    format: "Online (link will be available before the session)",
    length: "45 min",
    fee: "$80 – Paid",
    receipt: "payment_receipt_1.pdf",
    actions: ["Join", "Reschedule", "Cancel"],
  },
  {
    id: "apt_2",
    doctor: "Dr. Anna Brown, MD",
    specialty: "Cardiologist",
    date: "August 6, 2025 at 12:00 PM",
    format: "In-Person, Bishkek City Hospital",
    length: "30 min",
    fee: "$100 – Paid",
    receipt: "payment_receipt_2.pdf",
    actions: ["Join", "Cancel"],
  },
  {
    id: "apt_3",
    doctor: "Dr. Michael Lee, MD",
    specialty: "Neurologist",
    date: "August 7, 2025 at 09:15 AM",
    format: "Online (link will be available before the session)",
    length: "60 min",
    fee: "$120 – Paid",
    receipt: "payment_receipt_3.pdf",
    actions: ["Join", "Reschedule", "Cancel"],
  },
  {
    id: "apt_4",
    doctor: "Dr. Sarah Kim, MD",
    specialty: "Dermatologist",
    date: "August 7, 2025 at 15:45 PM",
    format: "In-Person, Central Clinic",
    length: "40 min",
    fee: "$75 – Paid",
    receipt: "payment_receipt_4.pdf",
    actions: ["Join", "Cancel"],
  },
  {
    id: "apt_5",
    doctor: "Dr. Alex Johnson, MD",
    specialty: "Orthopedic Surgeon",
    date: "August 8, 2025 at 11:00 AM",
    format: "Online (link will be available before the session)",
    length: "50 min",
    fee: "$150 – Paid",
    receipt: "payment_receipt_5.pdf",
    actions: ["Join", "Reschedule", "Cancel"],
  },
  {
    id: "apt_6",
    doctor: "Dr. Maria Garcia, MD",
    specialty: "Endocrinologist",
    date: "August 9, 2025 at 13:30 PM",
    format: "In-Person, Bishkek Medical Center",
    length: "45 min",
    fee: "$90 – Paid",
    receipt: "payment_receipt_6.pdf",
    actions: ["Join", "Cancel"],
  },
  {
    id: "apt_7",
    doctor: "Dr. David Wilson, MD",
    specialty: "Oncologist",
    date: "August 10, 2025 at 08:00 AM",
    format: "Online (link will be available before the session)",
    length: "60 min",
    fee: "$200 – Paid",
    receipt: "payment_receipt_7.pdf",
    actions: ["Join", "Reschedule", "Cancel"],
  },
  {
    id: "apt_8",
    doctor: "Dr. Emily Davis, MD",
    specialty: "Ophthalmologist",
    date: "August 11, 2025 at 10:45 AM",
    format: "In-Person, Eye Care Clinic",
    length: "30 min",
    fee: "$60 – Paid",
    receipt: "payment_receipt_8.pdf",
    actions: ["Join", "Cancel"],
  },
  {
    id: "apt_9",
    doctor: "Dr. Robert Martinez, MD",
    specialty: "Pulmonologist",
    date: "August 12, 2025 at 14:15 PM",
    format: "Online (link will be available before the session)",
    length: "50 min",
    fee: "$110 – Paid",
    receipt: "payment_receipt_9.pdf",
    actions: ["Join", "Reschedule", "Cancel"],
  },
  {
    id: "apt_10",
    doctor: "Dr. Olivia Clark, MD",
    specialty: "Psychiatrist",
    date: "August 13, 2025 at 16:00 PM",
    format: "In-Person, Mental Health Center",
    length: "45 min",
    fee: "$130 – Paid",
    receipt: "payment_receipt_10.pdf",
    actions: ["Join", "Cancel"],
  },
  {
    id: "apt_11",
    doctor: "Dr. Ethan White, MD",
    specialty: "General Practitioner",
    date: "August 14, 2025 at 09:30 AM",
    format: "Online (link will be available before the session)",
    length: "20 min",
    fee: "$50 – Paid",
    receipt: "payment_receipt_11.pdf",
    actions: ["Join", "Reschedule", "Cancel"],
  },
  {
    id: "apt_12",
    doctor: "Dr. Sophia Lopez, MD",
    specialty: "Pediatrician",
    date: "August 15, 2025 at 11:15 AM",
    format: "In-Person, Children's Hospital",
    length: "30 min",
    fee: "$70 – Paid",
    receipt: "payment_receipt_12.pdf",
    actions: ["Join", "Cancel"],
  },
  {
    id: "apt_13",
    doctor: "Dr. James Hall, MD",
    specialty: "ENT Specialist",
    date: "August 16, 2025 at 14:00 PM",
    format: "Online (link will be available before the session)",
    length: "40 min",
    fee: "$85 – Paid",
    receipt: "payment_receipt_13.pdf",
    actions: ["Join", "Reschedule", "Cancel"],
  },
  {
    id: "apt_14",
    doctor: "Dr. Mia Allen, MD",
    specialty: "Rheumatologist",
    date: "August 17, 2025 at 10:00 AM",
    format: "In-Person, Central Hospital",
    length: "50 min",
    fee: "$140 – Paid",
    receipt: "payment_receipt_14.pdf",
    actions: ["Join", "Cancel"],
  },
  {
    id: "apt_15",
    doctor: "Dr. William Scott, MD",
    specialty: "Gastroenterologist",
    date: "August 18, 2025 at 13:00 PM",
    format: "Online (link will be available before the session)",
    length: "60 min",
    fee: "$160 – Paid",
    receipt: "payment_receipt_15.pdf",
    actions: ["Join", "Reschedule", "Cancel"],
  },
  {
    id: "apt_16",
    doctor: "Dr. Isabella Young, MD",
    specialty: "Allergist",
    date: "August 19, 2025 at 09:45 AM",
    format: "In-Person, Allergy Clinic",
    length: "25 min",
    fee: "$55 – Paid",
    receipt: "payment_receipt_16.pdf",
    actions: ["Join", "Cancel"],
  },
  {
    id: "apt_17",
    doctor: "Dr. Benjamin King, MD",
    specialty: "Urologist",
    date: "August 20, 2025 at 15:30 PM",
    format: "Online (link will be available before the session)",
    length: "45 min",
    fee: "$100 – Paid",
    receipt: "payment_receipt_17.pdf",
    actions: ["Join", "Reschedule", "Cancel"],
  },
  {
    id: "apt_18",
    doctor: "Dr. Charlotte Wright, MD",
    specialty: "Hematologist",
    date: "August 21, 2025 at 12:30 PM",
    format: "In-Person, Hematology Center",
    length: "50 min",
    fee: "$180 – Paid",
    receipt: "payment_receipt_18.pdf",
    actions: ["Join", "Cancel"],
  },
  {
    id: "apt_19",
    doctor: "Dr. Henry Green, MD",
    specialty: "Nephrologist",
    date: "August 22, 2025 at 08:30 AM",
    format: "Online (link will be available before the session)",
    length: "45 min",
    fee: "$125 – Paid",
    receipt: "payment_receipt_19.pdf",
    actions: ["Join", "Reschedule", "Cancel"],
  },
  {
    id: "apt_20",
    doctor: "Dr. Amelia Baker, MD",
    specialty: "Gynecologist",
    date: "August 23, 2025 at 17:00 PM",
    format: "In-Person, Women’s Health Clinic",
    length: "60 min",
    fee: "$150 – Paid",
    receipt: "payment_receipt_20.pdf",
    actions: ["Join", "Cancel"],
  },
];
