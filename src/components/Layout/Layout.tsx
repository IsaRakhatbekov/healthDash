// Layout.tsx
import Header from "../Header/Header";
import Aside from "../Aside/Aside";
import { Outlet, useLocation } from "react-router-dom";
import styles from "./Layout.module.scss";

const Layout = () => {
  const location = useLocation();
  const isCollapsed = location.pathname === "/dashboard";

  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={`${styles.aside} ${isCollapsed ? styles.collapsed : ""}`}>
        <Aside />
      </div>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
