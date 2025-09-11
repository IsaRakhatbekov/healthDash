import { useEffect, useState } from "react";
import DoctorCard from "../../components/Doctor/DoctorCard";
import PatientHeader from "../../components/PatientHeader/PatientHeader";
import type { Doctor } from "../../shared/types/doctor";
import styles from "./PatientPage.module.scss";
import { fetchDoctors } from "../../shared/api/doctors";
import AsideFilters from "../../components/AsideFilters/AsideFilters";

const PatientPage = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    fetchDoctors().then((data) => {
      setDoctors(data.results);
    });
  }, []);

  return (
    <div className={styles.patientPage}>
      <div className={styles.header}>
        <PatientHeader />
      </div>
      <div className={styles.aside}>
        <AsideFilters />
      </div>
      <div className={styles.main}>
        <h2 className={styles.mainTitle}>Top Specialists for You</h2>
        {doctors.map((doc) => (
          <DoctorCard key={doc.id} doctor={doc} />
        ))}
      </div>
    </div>
  );
};

export default PatientPage;
