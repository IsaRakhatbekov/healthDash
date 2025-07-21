import styles from "./DashboardPage.module.scss";
import HealthSections from "../../components/HealthSections/HealthSections";
import { useLocation } from "react-router-dom";

const DashboardPage = () => {
  const location = useLocation();

  const showAside = location.pathname !== "/dashboard";
  return (
    <div className={styles.main}>
      <HealthSections mode={showAside ? "dashboard" : "aside"} />
    </div>
  );
};

export default DashboardPage;
