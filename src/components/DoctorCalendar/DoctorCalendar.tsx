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
  >("videoCall");
  const days = availability ? availability.days : [];
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
  };

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

      {typeOfConsultation === "videoCall" ? (
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
                  {day.slots.length > 0 ? (
                    day.slots.map((slot) =>
                      slot.status === "open" ? (
                        <button
                          key={slot.startISO}
                          className={styles.slotOpen}
                          disabled={false}
                        >
                          {slot.time}
                        </button>
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
                      )
                    )
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
      ) : (
        <div className={styles.mapWrapper}>
          <h3>
            <span>
              <svg
                width="24"
                height="28"
                viewBox="0 0 24 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 11.8182C22 19.4545 12 26 12 26C12 26 2 19.4545 2 11.8182C2 9.21424 3.05357 6.71695 4.92893 4.87568C6.8043 3.03441 9.34784 2 12 2C14.6522 2 17.1957 3.03441 19.0711 4.87568C20.9464 6.71695 22 9.21424 22 11.8182Z"
                  stroke="#646464"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 15.0909C13.8409 15.0909 15.3333 13.6257 15.3333 11.8182C15.3333 10.0107 13.8409 8.54545 12 8.54545C10.1591 8.54545 8.66667 10.0107 8.66667 11.8182C8.66667 13.6257 10.1591 15.0909 12 15.0909Z"
                  stroke="#646464"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            123 Sunset Blvd, Beverly Hills, CA
          </h3>
        </div>
      )}

      <button className={styles.bookBtn}>Book Consultation</button>
    </div>
  );
};

export default DoctorCalendar;
