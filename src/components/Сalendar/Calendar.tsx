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
  const [currentYear, setCurrentYear] = useState(getDate.getFullYear());

  // const handleChangeMonthFoward = () => {
  //   setCurrentMonth((prevMonth) => {
  //     if (prevMonth === 11) {
  //       setCurrentYear((prevYear) => prevYear + 1);
  //       return 0;
  //     } else {
  //       return prevMonth + 1;
  //     }
  //   });
  // };

  const handleChangeMonthFoward = () => {
    setCurrentMonth((prevMonth) => {
      const newMonth = (prevMonth + 1) % 12;
      if (prevMonth === 11) {
        setCurrentYear((prevYear) => prevYear + 1);
      }
      return newMonth;
    });
  };

  const handleChangeMonthBack = () => {
    setCurrentMonth((prevMonth) => {
      if (prevMonth === 0) {
        setCurrentYear((prevYear) => prevYear - 1);
        return 11;
      } else {
        return prevMonth - 1;
      }
    });
  };

  return (
    <div className={styles.calendar}>
      <div className={styles.calendarHead}>
        <button onClick={handleChangeMonthBack}>left</button>
        <span>{months[currentMonth]}</span>
        <span>{currentYear}</span>
        <button onClick={handleChangeMonthFoward}>right</button>
      </div>
      <div className={styles.calendarBody}>
        <span>{currentDay}</span>
      </div>
    </div>
  );
};

export default Calendar;
