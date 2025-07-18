import { useNavigate } from "react-router-dom";
import styles from "./DashboardPage.module.scss";

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.main}>
      <button
        className={styles.card}
        onClick={() => navigate("/generalHealth")}
      >
        GeneralHealth
      </button>
      <button className={styles.card}></button>
      <button className={styles.card}></button>
      <button className={styles.card}></button>
      <button className={styles.card}></button>
      <button className={styles.card}></button>
      <button className={styles.card}></button>
    </div>
  );
};

export default DashboardPage;
