import { useNavigate } from "react-router-dom";
import styles from "./NotFoundPage.module.scss";
import { useAuth } from "../../context/AuthContext";

const NotFoundPage = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    if (isLoggedIn) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  };

  return (
    <div className={styles.error}>
      <p>404 — Page not found</p>
      <button className={styles.goHomeBtn} onClick={handleClick}>
        Go Home
      </button>
    </div>
  );
};

export default NotFoundPage;
