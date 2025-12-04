import { useNavigate } from "react-router-dom";
import { LoginForm } from "../../components/login-form/LoginForm";
import { Card } from "@/app/shared/components/ui/card/Card";
import LoginIllustration from "@/assets/illustrations/login-illustration.svg";
import styles from "./LoginPage.module.css";
import { Box, Link } from "@mui/material";

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleRegisterRedirection = () => {
    navigate("register");
  }

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
            <Box sx={{mt: 2}} onClick={handleRegisterRedirection}>
            <Link color="primary" sx={{cursor: 'pointer'}}>Registrarse</Link>
            </Box>
          </Card>
        </div>
      </div>
    </>
  );
};
