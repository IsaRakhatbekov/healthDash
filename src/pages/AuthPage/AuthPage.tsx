import { useState } from "react";
import styles from "./AuthPage.module.scss";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";

const AuthPage = () => {
  const [mode, setMode] = useState<"login" | "register">("login");
  return (
    <div className={styles.authPage}>
      <div className={styles.left}></div>
      <div className={styles.right}>
        {mode === "login" ? (
          <LoginPage onSwitch={() => setMode("register")} />
        ) : (
          <RegisterPage onSwitch={() => setMode("login")} />
        )}
      </div>
    </div>
  );
};

export default AuthPage;
