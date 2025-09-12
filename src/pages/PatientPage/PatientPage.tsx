import { useEffect, useState } from "react";
import DoctorCard from "../../components/Doctor/DoctorCard";
import PatientHeader from "../../components/PatientHeader/PatientHeader";
import type { Doctor } from "../../shared/types/doctor";
import styles from "./PatientPage.module.scss";
import { fetchDoctors } from "../../shared/api/doctors";
import AsideFilters from "../../components/AsideFilters/AsideFilters";

const PatientPage = () => {
  const [allDoctors, setAllDoctors] = useState<Doctor[]>([]); // все карточки
  const [doctors, setDoctors] = useState<Doctor[]>([]); // видимые карточки
  const [offset, setOffset] = useState(2); // сколько карточек показываем

  useEffect(() => {
    fetchDoctors().then((data) => {
      setAllDoctors(data.results); // сохраняем все карточки
      setDoctors(data.results.slice(0, 2)); // показываем первые 2
    });
  }, []);

  const addMoreCards = () => {
    const newOffset = offset + 2; // показываем +2 карточки
    setOffset(newOffset);
    setDoctors(allDoctors.slice(0, newOffset)); // обновляем список
  };

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
        {offset < allDoctors.length && (
          <button className={styles.LoadMoreBtn} onClick={addMoreCards}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default PatientPage;
