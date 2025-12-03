import { LoginForm } from "../../components/login-form/LoginForm";
import { Card } from "@/app/shared/components/ui/card/Card";
import LoginIllustration from "@/assets/illustrations/login-illustration.svg";
import styles from "./LoginPage.module.css";

export const LoginPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.subContainerImg}>
          <img
            src={LoginIllustration}
            alt="Ilustración Login Bienvenida"
            className={styles.loginImage}
          />
        </div>
        <div className={styles.subContainerForm}>
          <Card className={styles.card}>
            <LoginForm />
          </Card>
        </div>
      </div>
    </>
  );
};
