import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <nav className={styles.nav}>
          <a className={styles.link} href="">
            LogIn
          </a>
          <a className={styles.link} href="">
            Regis
          </a>
          <a className={styles.link} href="">
            Some
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
