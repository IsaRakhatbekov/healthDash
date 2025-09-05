import styles from "./RegisterPage.module.scss";

const RegisterPage = () => {
  return (
    <div className={styles.register}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Create your account</h1>
        <p className={styles.subTitle}>
          Role selected: <span></span>
        </p>

        <form className={styles.regisForm}>
          <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor="email">
              Email <span>We’ll send a verification code to this email*</span>
            </label>
            <input id="" type="" />
          </div>

          <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor="password">
              Password
              <span>8+ characters, at least 1 letter and 1 number*</span>
            </label>
            <input id="password" type="password" />
          </div>

          <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor="repeatPassword">
              Repeat Password
            </label>
            <input id="repeatPassword" type="password" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
