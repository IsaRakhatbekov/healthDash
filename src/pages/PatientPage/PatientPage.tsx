import PatientHeader from "../../components/PatientHeader/PatientHeader";
import styles from "./PatientPage.module.scss";
import AsideFilters from "../../components/AsideFilters/AsideFilters";
import { Outlet, useLocation } from "react-router-dom";

const PatientPage = () => {
  const location = useLocation();

  const showAside = ["/patientPage", "/patientPage/clinics"].includes(
    location.pathname
  );

  return (
    <div
      className={`${styles.patientPage} ${
        showAside ? styles.withAside : styles.noAside
      }`}
    >
      <div className={styles.header}>
        <PatientHeader />
      </div>

      {showAside && (
        <div className={styles.aside}>
          <AsideFilters />
        </div>
      )}

      <div className={styles.main}>
        <Outlet />
      </div>
    </div>
  );
};

export default PatientPage;
