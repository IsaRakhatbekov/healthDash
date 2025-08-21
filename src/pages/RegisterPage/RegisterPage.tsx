import { useState } from "react";
import styles from "./RegisterPage.module.scss";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmitReg = () => {
    let newErrors: { [key: string]: string } = {};

    if (!formData.email) {
      newErrors.email = "Введите email";
    }

    if (!formData.password) {
      newErrors.password = "Введите пароль";
    }

    if (!formData.repeatPassword) {
      newErrors.repeatPassword = "Повторите пароль";
    }

    if (
      formData.password &&
      formData.repeatPassword &&
      formData.password !== formData.repeatPassword
    ) {
      newErrors.repeatPassword = "Пароли не совпадают";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Регистрация с данными:", formData);
    }
  };

  return (
    <div className={styles.register}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Create your account</h1>
        <p className={styles.subTitle}>
          Role selected: <span>Patient</span> / <span>Parent</span>
        </p>
        <form className={styles.regisForm}>
          <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor="email">
              Email <span>We’ll send a verification code to this email*</span>
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={`${styles.input} ${
                errors.email ? styles.errorInput : ""
              }`}
            />
            {errors.email && <p className={styles.errorText}>{errors.email}</p>}
          </div>

          <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor="password">
              Password
              <span>8+ characters, at least 1 letter and 1 number*</span>
            </label>
            <input
              id="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className={`${styles.input} ${
                errors.password ? styles.errorInput : ""
              }`}
            />
            {errors.password && (
              <p className={styles.errorText}>{errors.password}</p>
            )}
          </div>

          <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor="repeatPassword">
              Repeat Password
            </label>
            <input
              id="repeatPassword"
              type="password"
              value={formData.repeatPassword}
              onChange={handleChange}
              className={`${styles.input} ${
                errors.repeatPassword ? styles.errorInput : ""
              }`}
            />
            {errors.repeatPassword && (
              <p className={styles.errorText}>{errors.repeatPassword}</p>
            )}
          </div>
        </form>

        <button
          className={styles.guestBtn}
          type="button"
          onClick={handleSubmitReg}
        >
          Continue
        </button>

        <p className={styles.bottomText}>
          Already have an account? <span>Log in</span>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
