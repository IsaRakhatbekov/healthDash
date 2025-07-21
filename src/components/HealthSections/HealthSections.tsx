import { useNavigate } from "react-router-dom";
import styles from "./HealthSections.module.scss";

type HealthSectionsProps = {
  onClick?: () => void;
  mode?: "dashboard" | "aside";
};

const HealthSections = ({ onClick, mode }: HealthSectionsProps) => {
  const navigate = useNavigate();

  const healthCards = [
    { title: "Общий обзор", path: "/generalHealth" },
    { title: "Сон", path: "/sleep" },
    { title: "Питание", path: "/nutrition" },
    { title: "Физическая активность", path: "/activity" },
    { title: "Вес", path: "/weight" },
    { title: "ИМТ", path: "/bmi" },
    { title: "Пульс", path: "/pulse" },
    { title: "Давление", path: "/pressure" },
    { title: "Вода", path: "/hydration" },
    { title: "Настроение", path: "/mood" },
  ];

  return (
    <div className={styles.healthSections}>
      {healthCards.map((el) => (
        <button
          key={el.path}
          className={mode ? styles.dashboard : styles.aside}
          onClick={() => {
            navigate(el.path);
            onClick?.();
          }}
        >
          {el.title}
        </button>
      ))}
    </div>
  );
};

export default HealthSections;
