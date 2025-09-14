import { useNavigate } from "react-router-dom";
import styles from "./MyAppointments.module.scss";

const MyAppointments = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.myAppointments}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <h2>My Appointments</h2>
          <h3 className={styles.subtitle}>
            Your appointment history and schedule
          </h3>
        </div>
        <div className={styles.headerBtnWRapper}>
          <button
            className={`${styles.surveyBtn} ${styles.btn}`}
            onClick={() => navigate("/survey")}
          >
            Take the survey
          </button>
          <button
            className={`${styles.bookBtn} ${styles.btn}`}
            onClick={() => navigate("/patientPage")}
          >
            <span>
              <svg
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 8C15 8.55228 14.5523 9 14 9H9V14C9 14.5523 8.55228 15 8 15C7.44771 15 7 14.5523 7 14V9H2C1.44772 9 1 8.55228 1 8C1 7.44771 1.44772 7 2 7H7V2C7 1.44772 7.44771 1 8 1C8.55228 1 9 1.44772 9 2V7H14C14.5523 7 15 7.44771 15 8Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </svg>
            </span>
            Book Appointment
          </button>
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <div className={styles.tableHeader}></div>
        <div className={styles.tableBody}></div>
      </div>
    </div>
  );
};

export default MyAppointments;
