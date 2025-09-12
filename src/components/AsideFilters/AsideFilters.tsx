import { useState } from "react";
import Select, { type StylesConfig } from "react-select";
import styles from "./AsideFilters.module.scss";

type OptionType = {
  value: string;
  label: string;
};

const AsideFilters = () => {
  // 👉 Переменные для всех инпутов
  const [zip, setZip] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");

  const [show, setShow] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [consultation, setConsultation] = useState("");
  const [availability, setAvailability] = useState("");
  const [programType, setProgramType] = useState("");
  const [priceRange, setPriceRange] = useState({ from: "", to: "" });
  const [insurance, setInsurance] = useState<OptionType | null>(null);
  const [language, setLanguage] = useState<OptionType | null>(null);

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

  const languageOptions: OptionType[] = [
    { value: "en", label: "English" },
    { value: "ru", label: "Russian" },
    { value: "de", label: "German" },
  ];
  const insuranceOptions: OptionType[] = [
    { value: "test1", label: "test-1" },
    { value: "test2", label: "test-2" },
    { value: "test3", label: "test-3" },
  ];

  return (
    <aside className={styles.aside}>
      <Select
        options={languageOptions}
        styles={customStyles}
        value={language}
        onChange={(selected) => setLanguage(selected)}
        placeholder="Choose language"
      />

      {/* ZIP */}
      <label htmlFor="zip">
        <span>ZIP code or City</span>
        <input
          id="zip"
          type="text"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
        />
      </label>

      {/* Gender */}
      <div className={`${styles.inputsWrapper} ${styles.genderWrapper}`}>
        <h4>Gender Preference</h4>
        <div className={styles.inputWrapper}>
          <input
            id="gender-male"
            type="radio"
            name="gender"
            value={"male"}
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="gender-male">Male</label>
        </div>
        <div className={styles.inputWrapper}>
          <input
            id="gender-female"
            type="radio"
            name="gender"
            value={"female"}
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="gender-female">Female</label>
        </div>
      </div>

      {/* Age */}
      <div className={`${styles.inputsWrapper} ${styles.ageWrapper}`}>
        <h4>Age</h4>
        <div className={styles.inputWrapper}>
          <input
            id="age-under18"
            type="radio"
            name="age"
            value={"Under 18"}
            onChange={(e) => setAge(e.target.value)}
          />
          <label htmlFor="age-under18">Under 18</label>
        </div>
        <div className={styles.inputWrapper}>
          <input
            id="age-18-30"
            type="radio"
            name="age"
            value={"18 — 30"}
            onChange={(e) => setAge(e.target.value)}
          />
          <label htmlFor="age-18-30">18 — 30</label>
        </div>
        <div className={styles.inputWrapper}>
          <input
            id="age-31-50"
            type="radio"
            name="age"
            value={"31 — 50"}
            onChange={(e) => setAge(e.target.value)}
          />
          <label htmlFor="age-31-50">31 — 50</label>
        </div>
        <div className={styles.inputWrapper}>
          <input
            id="age-51plus"
            type="radio"
            name="age"
            value={"51+"}
            onChange={(e) => setAge(e.target.value)}
          />
          <label htmlFor="age-51plus">51+</label>
        </div>
      </div>

      {/* Insurance */}
      <div className={`${styles.inputsWrapper} ${styles.insuranceWrapper}`}>
        <h4>Insurance</h4>
        <Select
          options={insuranceOptions}
          styles={customStyles}
          value={insurance}
          onChange={(selected) => setInsurance(selected)}
          placeholder="Choose insurance"
        />
      </div>

      {/* Show Results */}
      <div className={`${styles.inputsWrapper} ${styles.showResults}`}>
        <h4>Show Results</h4>
        <div className={styles.inputWrapper}>
          <input
            id="show-doctors"
            type="radio"
            name="show"
            value={"Doctors"}
            onChange={(e) => setShow(e.target.value)}
          />
          <label htmlFor="show-doctors">Doctors</label>
        </div>
        <div className={styles.inputWrapper}>
          <input
            id="show-clinics"
            type="radio"
            name="show"
            value={"Clinics"}
            onChange={(e) => setShow(e.target.value)}
          />
          <label htmlFor="show-clinics">Clinics</label>
        </div>
      </div>

      {/* Specialty */}
      <div className={`${styles.inputsWrapper} ${styles.specialtyWrapper}`}>
        <h4>Specialty</h4>
        <Select
          options={insuranceOptions}
          styles={customStyles}
          value={insuranceOptions}
          placeholder={"Insurance type"}
        />
      </div>

      {/* Consultation Format */}
      <div
        className={`${styles.inputsWrapper} ${styles.consultationFormatWrapper}`}
      >
        <h4>Consultation Format</h4>
        <div className={styles.inputWrapper}>
          <input
            id="consult-online"
            type="radio"
            name="consult"
            value={"Online"}
            onChange={(e) => setConsultation(e.target.value)}
          />
          <label htmlFor="consult-online">Online (Video visit)</label>
        </div>
        <div className={styles.inputWrapper}>
          <input
            id="consult-offline"
            type="radio"
            name="consult"
            value={"In-person"}
            onChange={(e) => setConsultation(e.target.value)}
          />
          <label htmlFor="consult-offline">In-person (Clinic visit)</label>
        </div>
      </div>

      {/* Availability */}
      <div className={`${styles.inputsWrapper} ${styles.availabilityWrapper}`}>
        <h4>Availability</h4>
        <div className={styles.inputWrapper}>
          <input
            id="avail-today"
            type="radio"
            name="availability"
            value={"Today"}
            onChange={(e) => setAvailability(e.target.value)}
          />
          <label htmlFor="avail-today">Today</label>
        </div>
        <div className={styles.inputWrapper}>
          <input
            id="avail-tomorrow"
            type="radio"
            name="availability"
            value={"Tomorrow"}
            onChange={(e) => setAvailability(e.target.value)}
          />
          <label htmlFor="avail-tomorrow">Tomorrow</label>
        </div>
        <div className={styles.inputWrapper}>
          <input
            id="avail-week"
            type="radio"
            name="availability"
            value={"This week"}
            onChange={(e) => setAvailability(e.target.value)}
          />
          <label htmlFor="avail-week">This week</label>
        </div>
        <div className={styles.inputWrapper}>
          <input
            id="avail-all"
            type="radio"
            name="availability"
            value={"All time"}
            onChange={(e) => setAvailability(e.target.value)}
          />
          <label htmlFor="avail-all">All time</label>
        </div>
      </div>

      {/* Program Type */}
      <div className={`${styles.inputsWrapper} ${styles.programType}`}>
        <h4>Program Type</h4>
        <div className={styles.inputWrapper}>
          <input
            id="program-short"
            type="radio"
            name="program"
            value={"Short-term"}
            onChange={(e) => setProgramType(e.target.value)}
          />
          <label htmlFor="program-short">Short-term</label>
        </div>
        <div className={styles.inputWrapper}>
          <input
            id="program-long"
            type="radio"
            name="program"
            value={"Long-term"}
            onChange={(e) => setProgramType(e.target.value)}
          />
          <label htmlFor="program-long">Long-term</label>
        </div>
        <div className={styles.inputWrapper}>
          <input
            id="program-intensive"
            type="radio"
            name="program"
            value={"Intensive"}
            onChange={(e) => setProgramType(e.target.value)}
          />
          <label htmlFor="program-intensive">Intensive</label>
        </div>
        <div className={styles.inputWrapper}>
          <input
            id="program-unspecified"
            type="radio"
            name="program"
            value={"Not specified"}
            onChange={(e) => setProgramType(e.target.value)}
          />
          <label htmlFor="program-unspecified">Not specified</label>
        </div>
      </div>

      {/* Price Range */}
      <div className={`${styles.inputsWrapper} ${styles.wrapper}`}>
        <h4>Price Range</h4>
        <input
          type="text"
          value={priceRange.from}
          onChange={(e) =>
            setPriceRange({ ...priceRange, from: e.target.value })
          }
        />
        <input
          type="text"
          value={priceRange.to}
          onChange={(e) => setPriceRange({ ...priceRange, to: e.target.value })}
        />
      </div>
    </aside>
  );
};

export default AsideFilters;
