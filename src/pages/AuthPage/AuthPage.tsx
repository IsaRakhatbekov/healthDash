import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./AuthPage.module.scss";
import RegisterPage from "../RegisterPage/RegisterPage";

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

  const handleClickGoBack = () => {
    setSelectedRole(null);
  };

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
          <div className={styles.languageWrapper}>English</div>
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
                  onClick={() => setSelectedRole("patient")}
                >
                  Patient / Parent
                </motion.button>

                <motion.button
                  className={styles.roleBtn}
                  variants={itemVariants}
                  onClick={() => setSelectedRole("clinic")}
                >
                  Center / Clinic
                </motion.button>

                <motion.button
                  className={styles.roleBtn}
                  variants={itemVariants}
                  onClick={() => setSelectedRole("doctor")}
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
              <RegisterPage />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AuthPage;
