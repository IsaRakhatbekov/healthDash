import { useEffect, useState } from "react";
import styles from "./GeneralHealth.module.scss";
import Loader from "../../components/Loader/Loader";

const GeneralHealth = () => {
  const [healthData, setHealthData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

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
    }, 1000); // загрузка 1 секунда
  }, []);

  if (loading) return <Loader />;

  return (
    <div className={styles.generalHealth}>
      <h1>Общий обзор здоровья</h1>

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
