import { Card } from "@/app/shared/components/ui/card/Card";
import { LoginForm } from "../../components/LoginForm";
import LoginIllustration from "@/assets/illustrations/login.svg";
import styles from './LoginPage.module.css';


export const App = () => {
  return (
    <>
      <div className={styles.container}>
        <Card>
          <img src={LoginIllustration} alt="" />
        </Card>
        <LoginForm />
      </div>
    </>
  );
}

