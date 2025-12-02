import { LoginForm } from "../../components/login-form/LoginForm";
import LoginIllustration from "@/assets/illustrations/login.svg";
import styles from "./LoginPage.module.css";

export const LoginPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <img
            src={LoginIllustration}
            alt="Ilustración Login Bienvenida"
            className={styles.loginImage}
          />
        </div>
        <div className={styles.subContainer}>
          <LoginForm />
        </div>
      </div>
    </>
  );
};
