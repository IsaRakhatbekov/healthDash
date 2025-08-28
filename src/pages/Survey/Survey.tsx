import { useState } from "react";
import Language from "../../components/Language/Language";
import Step1 from "./Steps/Step1/Step1";
import styles from "./Survey.module.scss";
import ProgressBar from "./ProgressBar/ProgressBar";
import Step2 from "./Steps/Step2/Step2";
import Step3 from "./Steps/Step3/Step3";

const Survey = () => {
  const [step, setStep] = useState<number>(0);

  const stepNext = () => setStep((prev) => prev + 1);
  const stepBack = () => setStep((prev) => Math.max(prev - 1, 0));

  return (
    <div className={styles.survey}>
      <div className={styles.leftSide}>
        <div className={styles.head}>
          <Language />
        </div>

        {step === 0 ? (
          <>
            <h2 className={styles.leftSideTitle}>Tell us more about you</h2>
            <p className={styles.leftSideSubtitle}>
              Answer a few questions to find the best rehab centers.
            </p>
            <button className={styles.surveyBtn} onClick={stepNext}>
              Start
            </button>
          </>
        ) : (
          <ProgressBar step={step} />
        )}
      </div>
      <div className={styles.rightSide}>
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step > 0 && (
          <div className={styles.buttonSWrapper}>
            <button className={styles.stepBackBtn} onClick={stepBack}>
              Back
            </button>
            <button className={styles.nextStepBtn} onClick={stepNext}>
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Survey;
