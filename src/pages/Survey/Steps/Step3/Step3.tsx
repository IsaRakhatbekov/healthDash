import styles from "./Step3.module.scss";

const Step3 = () => {
  return (
    <div className={styles.stepThree}>
      <div className={styles.blocks}>
        <div className={styles.imagesWrapper}>
          <label className={styles.imgLbl}>
            <input
              className={`${styles.input} ${styles.inputForImg}`}
              type="file"
            />
            <span>Pediatric rehabilitation</span>
          </label>
          <label className={styles.imgLbl}>
            <input
              className={`${styles.input} ${styles.inputForImg}`}
              type="file"
            />
            <span>Chronic pain</span>
          </label>
          <label className={styles.imgLbl}>
            <input
              className={`${styles.input} ${styles.inputForImg}`}
              type="file"
            />
            <span>Neurological conditions</span>
          </label>
          <label className={styles.imgLbl}>
            <input
              className={`${styles.input} ${styles.inputForImg}`}
              type="file"
            />
            <span>Addiction (alcohol, drugs)</span>
          </label>
          <label className={styles.imgLbl}>
            <input
              className={`${styles.input} ${styles.inputForImg}`}
              type="file"
            />
            <span>Post - surgery recovery</span>
          </label>
          <label className={styles.imgLbl}>
            <input
              className={`${styles.input} ${styles.inputForImg}`}
              type="file"
            />
            <span>Orthopedic issues</span>
          </label>
        </div>
      </div>
      <div className={`${styles.blocks} ${styles.age}`}>
        <h2>What’s your main goal?</h2>
        <label className={styles.label}>
          <input
            className={styles.input}
            type="radio"
            name="age"
            value="Get check and diagnosis"
          />
          <span>Get check and diagnosis</span>
        </label>
        <label className={styles.label}>
          <input
            className={styles.input}
            type="radio"
            name="age"
            value="Long - term rehab program"
          />
          <span>Long - term rehab program</span>
        </label>
        <label className={styles.label}>
          <input
            className={styles.input}
            type="radio"
            name="age"
            value="One - time consultation"
          />
          <span>One - time consultation</span>
        </label>
        <label className={styles.label}>
          <input
            className={styles.input}
            type="radio"
            name="age"
            value="Other"
          />
          <span>Other</span>
        </label>
      </div>
    </div>
  );
};

export default Step3;
