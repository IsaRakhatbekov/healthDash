import { useEffect, useState } from "react";
import DoctorCard from "../../components/Doctor/DoctorCard";
import PatientHeader from "../../components/PatientHeader/PatientHeader";
import type { Doctor } from "../../shared/types/doctor";
import styles from "./PatientPage.module.scss";
import { fetchDoctors } from "../../shared/api/doctors";
import AsideFilters from "../../components/AsideFilters/AsideFilters";
import Select, { type StylesConfig } from "react-select";

type OptionType = {
  value: string;
  label: string;
};

const PatientPage = () => {
  const [allDoctors, setAllDoctors] = useState<Doctor[]>([]); // все карточки
  const [doctors, setDoctors] = useState<Doctor[]>([]); // видимые карточки
  const [offset, setOffset] = useState(2); // сколько карточек показываем
  // кастомные стили react-select
  const customStyles: StylesConfig<OptionType, false> = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: "6px",
      borderColor: state.isFocused ? "#3b82f6" : "#cbd5e1",
      boxShadow: state.isFocused ? "0 0 0 1px #3b82f6" : "none",
      "&:hover": {
        borderColor: "#3b82f6",
      },
      padding: "2px 4px",
      minHeight: "40px",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#94a3b8",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#1e293b",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#64748b",
      "&:hover": {
        color: "#3b82f6",
      },
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
  };

  const sortBy = [
    { value: "Relevance-1", label: "Relevance-1" },
    { value: "Relevance-2", label: "Relevance-2" },
    { value: "Relevance-3", label: "Relevance-3" },
  ];
  const tags = [
    { value: "Top Rated 1", label: "Top Rated 1" },
    { value: "Top Rated 2", label: "Top Rated 2" },
    { value: "Top Rated 3", label: "Top Rated 3" },
  ];

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
        <div className={styles.matchWraapper}>
          <span>12 results match your preferences</span>
          <div className={styles.matchInner}>
            <Select options={sortBy} styles={customStyles} />
            <Select options={tags} styles={customStyles} />
            <div className={styles.inpurWrapper}>
              <span className={styles.searchIcon}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.97269 13.839C5.02441 13.839 3.37517 13.1632 2.025 11.8116C0.674999 10.46 0 8.82927 0 6.91948C0 5.00968 0.675798 3.37899 2.02739 2.02739C3.37881 0.675798 5.01394 0 6.93278 0C8.85144 0 10.482 0.675798 11.8246 2.02739C13.1673 3.37899 13.8387 5.01101 13.8387 6.92347C13.8387 7.69203 13.7177 8.42787 13.4758 9.13098C13.2338 9.8341 12.8709 10.4939 12.3871 11.1105L17.7286 16.3991C17.9095 16.5763 18 16.7959 18 17.0579C18 17.32 17.9095 17.5416 17.7286 17.7225C17.5456 17.9075 17.3224 18 17.0592 18C16.7962 18 16.5782 17.9075 16.4052 17.7225L11.0903 12.4137C10.5624 12.8617 9.94513 13.2112 9.23847 13.4622C8.53181 13.7134 7.77655 13.839 6.97269 13.839ZM6.94821 12.026C8.36242 12.026 9.56227 11.5272 10.5478 10.5297C11.5333 9.53212 12.026 8.32872 12.026 6.91948C12.026 5.51023 11.5329 4.30684 10.5467 3.30928C9.56067 2.31172 8.36118 1.81295 6.94821 1.81295C5.52052 1.81295 4.30763 2.31172 3.30955 3.30928C2.31164 4.30684 1.81268 5.51023 1.81268 6.91948C1.81268 8.32872 2.31137 9.53212 3.30875 10.5297C4.30613 11.5272 5.51928 12.026 6.94821 12.026Z"
                    fill="#646464"
                  />
                </svg>
              </span>
              <input
                className={styles.searchInput}
                type="text"
                id="search"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
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
