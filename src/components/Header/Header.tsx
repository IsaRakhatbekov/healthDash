import { useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logout();
    navigate("/");
  };
  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <nav className={styles.nav}>
          <div className={styles.searchWrapper}>
            <input type="text" />
          </div>
          <button className={styles.link} onClick={handleLogOut}>
            Выйти
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
