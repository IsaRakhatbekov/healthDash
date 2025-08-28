import styles from "./Step2.module.scss";

const Step2 = () => {
  return (
    <div className={styles.stepTwo}>
      <div className={`${styles.blocks} ${styles.age}`}>
        <h2>Do you have health insurance?</h2>
        <label className={styles.label}>
          <input
            className={styles.input}
            type="radio"
            name="age"
            value="Yes, I have insurance"
          />
          <span>Yes, I have insurance</span>
        </label>

        <label className={styles.label}>
          <input
            className={styles.input}
            type="radio"
            name="age"
            value="No, I don’t have insurance"
          />
          <span>No, I don’t have insurance</span>
        </label>

        <label className={styles.label}>
          <input
            className={styles.input}
            type="radio"
            name="age"
            value="Not sure"
          />
          <span>Not sure</span>
        </label>
        <label className={styles.label}>
          <input
            className={styles.input}
            type="radio"
            name="age"
            value="Select your insurance provider"
          />
          <span>Select your insurance provider</span>
        </label>
      </div>

      <div className={styles.blocks}>
        <h2>Upload insurance card (Optional)</h2>

        <label>
          <input type="file" />
          <span>Upload File (JPG, PNG, PDF)</span>
        </label>

        <p>
          Front side is usually enough. Uploading helps clinics verify your
          coverage faster.
        </p>
      </div>
    </div>
  );
};

export default Step2;
