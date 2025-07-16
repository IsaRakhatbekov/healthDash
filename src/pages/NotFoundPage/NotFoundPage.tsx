import { useNavigate } from "react-router-dom";
import styles from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.error}>
      <p>404 — Page not found</p>
      <button className={styles.goHomeBtn} onClick={() => navigate("/")}>
        Go Home
      </button>
    </div>
  );
};

export default NotFoundPage;
