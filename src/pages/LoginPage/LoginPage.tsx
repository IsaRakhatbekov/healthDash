import styles from "./LoginPage.module.scss";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

type Props = {
  onSwitch: () => void;
};

const LoginPage = ({ onSwitch }: Props) => {
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleLogIn(e: React.FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const res = await login(data.myGmail as string, data.myPass as string);

    if (res.success) {
      navigate("/dashboard");
    } else {
      alert("❌ Error: " + res.message);
    }
  }

  return (
    <div className={styles.login}>
      <form className={styles.form} onSubmit={handleLogIn}>
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
      <p className={styles.regisBtn} onClick={onSwitch}>
        New to HealthDash? Sign up now.
      </p>
    </div>
  );
};

export default LoginPage;
