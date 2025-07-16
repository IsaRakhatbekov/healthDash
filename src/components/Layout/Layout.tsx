import Header from "../Header/Header";
import Aside from "../Aside/Aside";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <div className={styles.layout}>
      {/* Обёртка для Aside с возможностью ресайза */}
      <div className={styles.aside}>
        <Aside />
      </div>
      <div className={styles.header}>
        <Header />
      </div>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
