import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./AuthPage.module.scss";
import RegisterPage from "../RegisterPage/RegisterPage";
import LoginPage from "../LoginPage/LoginPage";
import Language from "../../components/Language/Language";
import { useNavigate } from "react-router-dom";

// Анимации для списка и элементов
const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // задержка между кнопками
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AuthPage = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [mode, setMode] = useState<"register" | "login">("register");

  useEffect(() => {
    const savedRole = localStorage.getItem("selectedRole");

    if (savedRole) {
      setSelectedRole(savedRole);
    }
  });

  const handleSelectRole = (role: string) => {
    setSelectedRole(role);
    localStorage.setItem("selectedRole", role);
  };

  const handleClickGoBack = () => {
    setSelectedRole(null);
    localStorage.removeItem("selectedRole");
  };

  const navigate = useNavigate();

  return (
    <div className={styles.authPage}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.logoWrapper}>
            {selectedRole ? (
              <button onClick={handleClickGoBack}>
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="22" cy="22" r="21.5" stroke="black" />
                  <path
                    d="M21.4956 30.6422C21.0363 31.1194 20.2914 31.1191 19.832 30.6422L12.3446 22.8641C11.8851 22.3868 11.8851 21.6132 12.3446 21.1359L19.832 13.3578C20.2914 12.8809 21.0363 12.8806 21.4956 13.3578C21.9549 13.8349 21.9547 14.6087 21.4956 15.086L16.0165 20.7778L30.8235 20.7778C31.4733 20.7778 32 21.325 32 22C32 22.675 31.4733 23.2222 30.8235 23.2222L16.0165 23.2222L21.4956 28.914C21.9547 29.3913 21.9549 30.1651 21.4956 30.6422Z"
                    fill="black"
                  />
                </svg>
              </button>
            ) : (
              "Rehub Logo"
            )}
          </div>
          <button
            className={styles.patientPageBtn}
            onClick={() => navigate("/patientPage")}
          >
            patient Page
          </button>
          <Language />
        </div>

        <AnimatePresence mode="wait">
          {!selectedRole ? (
            <motion.div
              key="role"
              className={styles.inner}
              initial={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <h1 className={styles.title}>
                Hello, <span>Welcome!</span>
              </h1>
              <p className={styles.subTitle}>
                Let’s start by selecting your role on the platform.
              </p>

              {/* список кнопок с анимацией */}
              <motion.div
                className={styles.btnWrapper}
                variants={listVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.button
                  className={styles.roleBtn}
                  variants={itemVariants}
                  onClick={() => {
                    handleSelectRole("Patient / Parent");
                  }}
                >
                  Patient / Parent
                </motion.button>

                <motion.button
                  className={styles.roleBtn}
                  variants={itemVariants}
                  onClick={() => handleSelectRole("Center / Clinic")}
                >
                  Center / Clinic
                </motion.button>

                <motion.button
                  className={styles.roleBtn}
                  variants={itemVariants}
                  onClick={() => handleSelectRole("Doctor / Specialist")}
                >
                  Doctor / Specialist
                </motion.button>
              </motion.div>

              {/* Guest тоже с анимацией */}
              <motion.button
                className={styles.guestBtn}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                onClick={() => setSelectedRole("guest")}
              >
                Continue as Guest
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="register"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {mode === "register" ? (
                <>
                  <RegisterPage role={selectedRole} />
                  <div className={styles.bottomText}>
                    <span>Already have an account?</span>{" "}
                    <button onClick={() => setMode("login")}>Log in</button>
                  </div>
                  <div className={styles.methodWrapper}>
                    <div className={styles.methodTitle}>Or sign up with</div>
                    <div className={styles.method}>
                      <button>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.23731 0.656959C5.76086 1.49866 3.62517 3.09623 2.14395 5.21501C0.662724 7.33379 -0.0859639 9.86211 0.00785455 12.4286C0.101673 14.9951 1.03305 17.4644 2.66519 19.474C4.29733 21.4835 6.54419 22.9273 9.07575 23.5933C11.1281 24.1121 13.2784 24.1349 15.3418 23.6597C17.211 23.2483 18.9391 22.3684 20.357 21.1061C21.8327 19.7522 22.9038 18.0299 23.4552 16.1243C24.0543 14.0519 24.161 11.8727 23.7669 9.7537H12.2417C12.2417 11.315 12.2417 12.8764 12.2417 14.4377H18.9163C18.7829 15.1848 18.4971 15.8978 18.0759 16.5341C17.6546 17.1704 17.1067 17.7169 16.4649 18.1409C15.65 18.6693 14.7311 19.0248 13.7676 19.1843C12.8012 19.3604 11.81 19.3604 10.8436 19.1843C9.86415 18.9861 8.93757 18.5901 8.12306 18.0214C6.81437 17.1138 5.83172 15.8244 5.31534 14.3372C4.79037 12.8221 4.79037 11.1796 5.31534 9.66453C5.68291 8.60255 6.29055 7.63562 7.09292 6.83591C8.01112 5.90394 9.1736 5.23776 10.4528 4.91047C11.732 4.58318 13.0785 4.60741 14.3446 4.98052C15.3337 5.27784 16.2381 5.79757 16.9858 6.49822C17.7384 5.76467 18.4897 5.02921 19.2397 4.29186C19.627 3.89536 20.0491 3.51783 20.4306 3.11185C19.2892 2.0713 17.9494 1.26158 16.4881 0.72905C13.827 -0.217637 10.9152 -0.243078 8.23731 0.656959Z"
                            fill="#646464"
                          />
                        </svg>
                      </button>
                      <button>
                        <svg
                          width="20"
                          height="24"
                          viewBox="0 0 20 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.0351 2.08854C12.647 0.0101326 14.8879 0 14.8879 0C14.8879 0 15.2212 1.95405 13.6199 3.83643C11.91 5.84639 9.96657 5.5175 9.96657 5.5175C9.96657 5.5175 9.60164 3.93673 11.0351 2.08854ZM10.1716 6.88631C11.0008 6.88631 12.5399 5.77117 14.5432 5.77117C17.9915 5.77117 19.348 8.17157 19.348 8.17157C19.348 8.17157 16.6948 9.49863 16.6948 12.7187C16.6948 16.3511 20 17.603 20 17.603C20 17.603 17.6896 23.9648 14.5688 23.9648C13.1355 23.9648 12.0212 23.0198 10.5109 23.0198C8.97188 23.0198 7.4446 24 6.44987 24C3.60017 24.0001 0 17.9653 0 13.1143C0 8.3417 3.0473 5.83804 5.90555 5.83804C7.76367 5.83804 9.20559 6.88631 10.1716 6.88631Z"
                            fill="#646464"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <LoginPage />
                  <div className={styles.bottomText}>
                    <span>Don’t have an account?</span>
                    <button onClick={() => setMode("register")}>Sign up</button>
                  </div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AuthPage;
