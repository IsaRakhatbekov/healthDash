import { useEffect, useState } from "react";
import styles from "./DoctorCalendar.module.scss";
import {
  mockAvailability,
  type AvailabilityResponse,
} from "../../shared/mocks/mocks";

const DoctorCalendar = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [availability, setAvailability] = useState<AvailabilityResponse | null>(
    null
  );
  const [typeOfConsultation, setTypeOfConsultation] = useState<
    "inPerson" | "videoCall"
  >("inPerson");
  const days = availability ? availability.days : [];
  const slots = days.map((el) => el.slots);
  const weeksDay = days.map((el) => el.weekday);
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
  };
  const formattedDates = days.map((el) => {
    const dateObj = new Date(el.date);
    console.log(dateObj);
    return dateObj.toLocaleDateString("en-US", options);
  });

  const visibleDays = days.slice(startIndex, startIndex + 7);

  useEffect(() => {
    setAvailability(mockAvailability);
  });

  return (
    <div className={styles.doctorCalendar}>
      <h2 className={styles.title}>Schedule Consultation</h2>

      {/* переключение */}
      <div className={styles.topBtnWrapper}>
        <button
          onClick={() => setTypeOfConsultation("inPerson")}
          className={`${styles.btnInPerson} ${
            typeOfConsultation === "inPerson" ? styles.activeTopBtn : ""
          }`}
        >
          In-person visits
        </button>
        <button
          onClick={() => setTypeOfConsultation("videoCall")}
          className={`${styles.btnVideoVisit} ${
            typeOfConsultation === "videoCall" ? styles.activeTopBtn : ""
          }`}
        >
          Video visits
        </button>
      </div>
      <div className={styles.calendarInner}>
        <button
          className={styles.prevBtn}
          onClick={() => setStartIndex(startIndex - 7)}
          disabled={startIndex === 0}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="32" height="32" rx="16" fill="#DCDCDC" />
            <path
              d="M18 11L13.7071 15.2929C13.3166 15.6834 13.3166 16.3166 13.7071 16.7071L18 21"
              stroke="#969696"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>
        {/* заголовки дней */}
        <div className={styles.head}>
          <div className={styles.daysGrid}>
            {visibleDays.map((el, index) => (
              <span className={styles.date} key={index}>
                {el.weekday}
                <br />
                {new Date(el.date).toLocaleDateString("en-US", options)}
              </span>
            ))}
          </div>
          {/* сетка слотов */}
          <div className={styles.slotsGrid}>
            {visibleDays.map((day) => (
              <div className={styles.slotColumn} key={day.date}>
                {day.slots.length ? (
                  day.slots.map((slot) => (
                    <button
                      key={slot.startISO}
                      className={
                        slot.status === "open"
                          ? styles.slotOpen
                          : styles.slotBooked
                      }
                      disabled={slot.status !== "open"}
                    >
                      {slot.time}
                    </button>
                  ))
                ) : (
                  <span className={styles.noSlots}>
                    <svg
                      width="22"
                      height="2"
                      viewBox="0 0 22 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1H21"
                        stroke="#C8C8C8"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <button
          className={styles.nextBtn}
          onClick={() => setStartIndex(startIndex + 7)}
          disabled={startIndex + 7 >= days.length}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="32"
              height="32"
              rx="16"
              transform="matrix(-1 0 0 1 32 0)"
              fill="#DCDCDC"
            />
            <path
              d="M14 11L18.2929 15.2929C18.6834 15.6834 18.6834 16.3166 18.2929 16.7071L14 21"
              stroke="#969696"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <button className={styles.bookBtn}>Book Consultation</button>
    </div>
  );
};

export default DoctorCalendar;
