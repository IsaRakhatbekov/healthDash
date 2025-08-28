import styles from "./Step1.module.scss";

const Step1 = () => {
  return (
    <form className={styles.stepOne}>
      <div className={`${styles.blocks} ${styles.age}`}>
        <h2>Age</h2>
        <label className={styles.label}>
          <input
            className={styles.input}
            type="radio"
            name="age"
            value="under18"
          />
          <span>Under 18</span>
        </label>

        <label className={styles.label}>
          <input
            className={styles.input}
            type="radio"
            name="age"
            value="18-30"
          />
          <span>18 — 30</span>
        </label>

        <label className={styles.label}>
          <input
            className={styles.input}
            type="radio"
            name="age"
            value="31-50"
          />
          <span>31 — 50</span>
        </label>

        <label className={styles.label}>
          <input className={styles.input} type="radio" name="age" value="51+" />
          <span>51+</span>
        </label>
      </div>
      <div className={`${styles.blocks} ${styles.gender}`}>
        <h2>Gender</h2>
        <label className={styles.label}>
          <input
            className={styles.input}
            type="radio"
            name="gender"
            value="Male"
          />
          <span>Male</span>
        </label>
        <label className={styles.label}>
          <input
            className={styles.input}
            type="radio"
            name="gender"
            value="Female"
          />
          <span>Female</span>
        </label>
        <label className={styles.label}>
          <input
            className={styles.input}
            type="radio"
            name="gender"
            value="Other"
          />
          <span>Other</span>
        </label>
        <label className={styles.label}>
          <input
            className={styles.input}
            type="radio"
            name="gender"
            value="Prefer not to say"
          />
          <span>Prefer not to say</span>
        </label>
      </div>
      <div className={`${styles.blocks} ${styles.pregnancy}`}>
        <h2>Are you pregnant or planning to be?</h2>

        <div className={styles.pregnancyInner}>
          <label className={styles.label}>
            <input
              className={styles.input}
              type="radio"
              name="pregnancy"
              value="Yes"
            />
            <span>Yes</span>
          </label>
          <label className={styles.label}>
            <input
              className={styles.input}
              type="radio"
              name="pregnancy"
              value="No"
            />
            <span>No</span>
          </label>
          <label className={styles.label}>
            <input
              className={styles.input}
              type="radio"
              name="pregnancy"
              value="Prefer not to say"
            />
            <span>Prefer not to say</span>
          </label>
        </div>
      </div>
    </form>
  );
};

export default Step1;
