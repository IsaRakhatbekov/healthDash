import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./validation";
import styles from "./RegisterPage.module.scss";

type RoleProps = {
  role: string;
};

const RegisterPage: React.FC<RoleProps> = ({ role }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema), // схема yup
  });

  const onSubmit = (data: any) => {
    console.log("Регистрация с данными:", data);
  };

  return (
    <div className={styles.register}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Create your account</h1>
        <p className={styles.subTitle}>
          Role selected: <span>{role}</span>
        </p>

        <form className={styles.regisForm} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor="email">
              Email <span>We’ll send a verification code to this email*</span>
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className={`${styles.input} ${
                errors.email ? styles.errorInput : ""
              }`}
            />
            {errors.email && (
              <p className={styles.errorText}>{errors.email.message}</p>
            )}
          </div>

          <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor="password">
              Password
              <span>8+ characters, at least 1 letter and 1 number*</span>
            </label>
            <input
              id="password"
              type="password"
              {...register("password")}
              className={`${styles.input} ${
                errors.password ? styles.errorInput : ""
              }`}
            />
            {errors.password && (
              <p className={styles.errorText}>{errors.password.message}</p>
            )}
          </div>

          <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor="repeatPassword">
              Repeat Password
            </label>
            <input
              id="repeatPassword"
              type="password"
              {...register("repeatPassword")}
              className={`${styles.input} ${
                errors.repeatPassword ? styles.errorInput : ""
              }`}
            />
            {errors.repeatPassword && (
              <p className={styles.errorText}>
                {errors.repeatPassword.message}
              </p>
            )}
          </div>

          <button className={styles.guestBtn} type="submit">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
