import styles from "./AsideFilters.module.scss";

const AsideFilters = () => {
  return (
    <aside className={styles.aside}>
      <select name="#" id="English">
        English
      </select>

      <label htmlFor="zip">
        <span>ZIP code or City</span>
        <input id="zip" type="text" />
      </label>

      <div className={styles.genderWrapper}>
        <h4>Gender Preference</h4>
        <input type="radio" />
        <label htmlFor="">Male</label>
        <input type="radio" />
        <label htmlFor="">Female</label>
      </div>

      <div className={styles.ageWrapper}>
        <h4>Age</h4>
        <div className={styles.ageInner}>
          <input type="radio" />
          <label htmlFor="">Under 18</label>
        </div>
        <div className={styles.ageInner}>
          <input type="radio" />
          <label htmlFor="">31 — 50</label>
        </div>
        <div className={styles.ageInner}>
          <input type="radio" />
          <label htmlFor="">18 — 30</label>
        </div>
        <div className={styles.ageInner}>
          <input type="radio" />
          <label htmlFor="">51+</label>
        </div>
      </div>

      <div className={styles.insuranceWrapper}>
        <select name="" id="">
          UnitedHealthcare
        </select>
      </div>

      <div className={styles.showResults}>
        <h4>Show Results</h4>
        <label htmlFor="">
          <input type="radio" />
          <span>Doctors</span>
        </label>
        <label htmlFor="">
          <input type="radio" />
          <span>Clinics</span>
        </label>
      </div>

      <div className={styles.specialtyWrapper}>
        <h4>Specialty</h4>
        <select name="" id="">
          Pediatric Rehab Physician
        </select>
      </div>

      <div className={styles.consultationFormatWrapper}>
        <h4>Consultation Format</h4>
        <div className={styles.inputWrapper}>
          <input type="radio" />
          <label htmlFor="">Online (Video visit)</label>
        </div>
        <div className={styles.inputWrapper}>
          <input type="radio" />
          <label htmlFor="">In-person (Clinic visit)</label>
        </div>
      </div>

      <div className={styles.availabilityWrapper}>
        <h4>Availability</h4>
        <div className={styles.inputWrapper}>
          <input type="radio" />
          <label htmlFor="">Today</label>
        </div>
        <div className={styles.inputWrapper}>
          <input type="radio" />
          <label htmlFor="">This week</label>
        </div>
        <div className={styles.inputWrapper}>
          <input type="radio" />
          <label htmlFor="">Tomorrow</label>
        </div>
        <div className={styles.inputWrapper}>
          <input type="radio" />
          <label htmlFor="">All time</label>
        </div>
      </div>

      <div className={styles.programType}>
        <h4>Program Type</h4>
        <div className={styles.inputWrapper}>
          <input type="radio" />
          <label htmlFor="">Short-term</label>
        </div>
        <div className={styles.inputWrapper}>
          <input type="radio" />
          <label htmlFor="">Long-term</label>
        </div>
        <div className={styles.inputWrapper}>
          <input type="radio" />
          <label htmlFor="">Intensive</label>
        </div>
        <div className={styles.inputWrapper}>
          <input type="radio" />
          <label htmlFor="">Not specified</label>
        </div>
      </div>

      <div className={styles.wrapper}>
        <h4>Price Range</h4>
        <button>From</button>
        <button>To</button>
      </div>
    </aside>
  );
};

export default AsideFilters;
