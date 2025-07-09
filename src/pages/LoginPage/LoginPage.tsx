import styles from "./LoginPage.module.scss";

const LoginPage = () => {
  return (
    <div className={styles.login}>
      <form className={styles.form}>
        <div className={styles.wrapper}>
          <label className={styles.label} htmlFor="">
            123
          </label>
          <input className={styles.input} type="text" />
        </div>
        <div className={styles.wrapper}>
          <label className={styles.label} htmlFor="">
            123
          </label>
          <input className={styles.input} type="text" />
        </div>
        <button className={styles.submitBtn}>submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
