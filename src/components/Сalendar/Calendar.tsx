import { useState } from "react";
import styles from "./Calendar.module.scss";

const months = [
  "январь",
  "февраль",
  "март",
  "апрель",
  "май",
  "июнь",
  "июль",
  "август",
  "сентябрь",
  "октябрь",
  "ноябрь",
  "декабрь",
];

const Calendar = () => {
  const getDate = new Date();
  const [currentDay, setCurrentDay] = useState(getDate.getDate());
  const [currentMonth, setCurrentMonth] = useState(getDate.getMonth());

  const handleChangeMonthFowrad = () => {
    setCurrentMonth((prev) => prev + 1);
    if (currentMonth === 13) {
      setCurrentMonth(11);
    }
  };
  const handleChangeMonthBack = () => {
    setCurrentMonth((prev) => prev - 1);
    if (currentMonth === -1) {
      setCurrentMonth(0);
    }
  };

  console.log(currentMonth);

  return (
    <div className={styles.calendar}>
      <div className={styles.calendarHead}>
        <button onClick={handleChangeMonthBack}>left</button>
        <span>{months[currentMonth]}</span>
        <button onClick={handleChangeMonthFowrad}>right</button>
      </div>
      <div className={styles.calendarBody}>
        <span>{currentDay}</span>
      </div>
    </div>
  );
};

export default Calendar;
