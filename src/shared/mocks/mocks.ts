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
