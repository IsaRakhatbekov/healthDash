import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  email: Yup.string().email("Некорректный email").required("Введите email"),
  password: Yup.string()
    .min(8, "Пароль должен быть длиннее 8 символов")
    .matches(/[A-Za-z]/, "Пароль должен содержать хотя бы одну букву")
    .matches(/\d/, "Пароль должен содержать хотя бы одну цифру")
    .required("Введите пароль"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Пароли не совпадают")
    .required("Повторите пароль"),
});
