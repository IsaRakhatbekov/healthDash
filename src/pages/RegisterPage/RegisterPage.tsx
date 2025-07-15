import styles from "./RegisterPage.module.scss";

type Props = {
  onSwitch: () => void;
};

const RegisterPage = ({ onSwitch }: Props) => {
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("http://localhost:3001/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.myGmail,
          password: data.myPass,
        }),
      });

      const result = await res.json();

      if (res.ok) {
        alert("✅ Registration successful!");
        console.log("Server response:", result);
      } else {
        alert("❌ Error: " + result.message);
      }
    } catch (error) {
      console.error("❌ Network error:", error);
      alert("❌ Failed to send request");
    }
  }

  return (
    <>
      <div className={styles.login}>
        <form className={styles.form} onSubmit={handleSubmit}>
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
          <button className={styles.submitBtn} type="submit">
            submit
          </button>
          <button className={styles.submitBtn} type="reset">
            reset
          </button>
        </form>
        <button className={styles.submitBtn} onClick={onSwitch}>
          SignIn.
        </button>
      </div>
    </>
  );
};

export default RegisterPage;
