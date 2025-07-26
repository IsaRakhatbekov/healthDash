import { useState } from "react";
import styles from "./Calendar.module.scss";

const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

const days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleChangeMonthForward = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };

  const handleChangeMonthBack = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  };

  // Получаем год и месяц из состояния
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Количество дней в текущем месяце
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // День недели первого дня месяца (0 - воскресенье, 6 - суббота)
  const firstDayOfWeek = new Date(year, month, 1).getDay();

  // Количество дней в предыдущем месяце
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  // Создаем массив дней для отображения
  const daysArray = [];

  // Добавляем дни из предыдущего месяца (если месяц начинается не с понедельника)
  const startPrevMonth = daysInPrevMonth - firstDayOfWeek + 2;
  for (let i = startPrevMonth; i <= daysInPrevMonth; i++) {
    daysArray.push({ day: i, isCurrentMonth: false });
  }

  // Добавляем дни текущего месяца
  for (let i = 1; i <= daysInMonth; i++) {
    daysArray.push({ day: i, isCurrentMonth: true });
  }

  // Добавляем дни следующего месяца (чтобы заполнить сетку до 42 ячеек)
  const remainingDays = 42 - daysArray.length;
  for (let i = 1; i <= remainingDays; i++) {
    daysArray.push({ day: i, isCurrentMonth: false });
  }

  return (
    <div className={styles.calendar}>
      <div className={styles.calendarHead}>
        <button onClick={handleChangeMonthBack}>back</button>
        <span>{months[month]}</span>
        <span>{year}</span>
        <button onClick={handleChangeMonthForward}>right</button>
      </div>

      <div className={styles.calendarBody}>
        {/* Заголовки дней недели */}
        <div className={styles.grid}>
          {days.map((day, index) => (
            <div className={styles.weekday} key={index}>
              {day}
            </div>
          ))}
        </div>

        {/* Ячейки с днями */}
        <div className={styles.grid}>
          {daysArray.map(({ day, isCurrentMonth }, index) => {
            const today = new Date();
            const isToday =
              isCurrentMonth &&
              day === today.getDate() &&
              month === today.getMonth() &&
              year === today.getFullYear();

            return (
              <div
                key={index}
                className={`${styles.day} ${
                  !isCurrentMonth ? styles.otherMonth : ""
                } ${isToday ? styles.today : ""}`}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
//
//   Улучшения:
// Единое состояние: Вместо трех отдельных состояний (день, месяц, год) теперь используется одно состояние currentDate типа Date. Это предотвращает рассинхронизацию.
// Более надежное изменение месяца: Используется встроенный метод Date, который автоматически корректирует год при переходе через декабрь/январь.
// Автоматическая корректировка дня: Если в новом месяце нет текущего дня (например, 31 февраля), Date автоматически скорректирует это.
// Заглавные буквы в месяцах: Названия месяцев теперь начинаются с заглавной буквы.

//   <div className={styles.calendar}>
//   <div className={styles.calendarHead}>
//     <button onClick={handleChangeMonthBack}>back</button>
//     <span>{months[currentDate.getMonth()]}</span>
//     <span>{currentDate.getFullYear()}</span>
//     <button onClick={handleChangeMonthForward}>right</button>
//   </div>
//   <div className={styles.calendarBody}>
//     <span>{currentDate.getDate()}</span>
//   </div>
// </div>
// это для того примера который закоментирован
