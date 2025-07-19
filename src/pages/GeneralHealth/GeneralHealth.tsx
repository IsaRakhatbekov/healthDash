import { useEffect, useState } from "react";
import styles from "./GeneralHealth.module.scss";
import Loader from "../../components/Loader/Loader";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const GeneralHealth = () => {
  const [healthData, setHealthData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const weightData = [
    { date: "Пн", weight: 72, fat: 18 },
    { date: "Вт", weight: 71.8, fat: 17.9 },
    { date: "Ср", weight: 71.6, fat: 1.7 },
    { date: "Чт", weight: 71.5, fat: 10.6 },
    { date: "Пт", weight: 71.3, fat: 30.4 },
    { date: "Сб", weight: 71.2, fat: 107.3 },
    { date: "Вс", weight: 71, fat: 1.2 },
  ];

  // Имитация загрузки данных (позже заменим на fetch с бэка или mock)
  useEffect(() => {
    setTimeout(() => {
      setHealthData({
        weight: 72,
        bmi: 22.5,
        sleepHours: 7.2,
        activityMinutes: 45,
        insights: [
          "Ваш вес стабилен в течение последних 7 дней",
          "Рекомендуется увеличить физическую активность хотя бы до 60 минут в день",
        ],
      });
      setLoading(false);
    }, 10); // загрузка 1 секунда
  }, []);

  if (loading) return <Loader />;

  return (
    <div className={styles.generalHealth}>
      <h1>Общий обзор здоровья</h1>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={weightData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorFat" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis dataKey="date" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />

          <Area
            type="monotone"
            dataKey="weight"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorWeight)"
            name="Вес"
          />
          <Area
            type="monotone"
            dataKey="fat"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorFat)"
            name="Процент жира"
          />
        </AreaChart>
      </ResponsiveContainer>

      <section className={styles.metrics}>
        <div className={styles.card}>
          <h3>Вес</h3>
          <p>{healthData.weight} кг</p>
        </div>
        <div className={styles.card}>
          <h3>ИМТ</h3>
          <p>{healthData.bmi}</p>
        </div>
        <div className={styles.card}>
          <h3>Сон</h3>
          <p>{healthData.sleepHours} ч/день</p>
        </div>
        <div className={styles.card}>
          <h3>Физическая активность</h3>
          <p>{healthData.activityMinutes} мин/день</p>
        </div>
      </section>

      <section className={styles.insights}>
        <h2>ИИ-Инсайты</h2>
        <ul>
          {healthData.insights.map((insight: string, i: number) => (
            <li key={i}>{insight}</li>
          ))}
        </ul>
      </section>

      {/* позже добавим графики */}
    </div>
  );
};

export default GeneralHealth;
