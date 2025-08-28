import { number } from "framer-motion";
import styles from "./ProgressBar.module.scss";
import type { FC } from "react";

type ISteps = {
  step: number;
};

const ProgressBar: FC<ISteps> = ({ step }) => {
  return (
    <div className={styles.progressBar}>
      <div className={styles.lineWrapper}>
        <div
          className={styles.innerLine}
          style={{ width: `${((step - 1) / (5 - 1)) * 100}%` }}
        ></div>
        <span className={`${styles.number} ${step > 1 ? styles.active : ""}`}>
          1
        </span>
        <span className={`${styles.number} ${step > 2 ? styles.active : ""}`}>
          2
        </span>
        <span className={`${styles.number} ${step > 3 ? styles.active : ""}`}>
          3
        </span>
        <span className={`${styles.number} ${step > 4 ? styles.active : ""}`}>
          4
        </span>
        <span className={`${styles.number} ${step > 5 ? styles.active : ""}`}>
          5
        </span>
      </div>
      <h3>Tell us more about you</h3>
    </div>
  );
};

export default ProgressBar;
