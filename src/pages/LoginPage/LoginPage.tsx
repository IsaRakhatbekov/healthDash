import styles from "./LoginPage.module.scss";

const LoginPage = () => {
  return (
    <div className={styles.login}>
      <form className={styles.form}>
        <div className={styles.wrapper}>
          <label className={`${styles.label} label`} htmlFor="gmail">
            Gmail
          </label>
          <input
            className={`${styles.input} input`}
            name="myGmail"
            type="text"
            id="gmail"
          />
        </div>
        <div className={styles.wrapper}>
          <label className={`${styles.label} label`} htmlFor="password">
            Password
          </label>
          <input
            className={`${styles.input} input`}
            name="myPass"
            type="password"
            id="password"
          />
        </div>
        <button className={styles.submitBtn}>submit</button>
      </form>
      <p className={styles.regisBtn}>New to HealthDash? Sign up now.</p>
    </div>
  );
};

export default LoginPage;
