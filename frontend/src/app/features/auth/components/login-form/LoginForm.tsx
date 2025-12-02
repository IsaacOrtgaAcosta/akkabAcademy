import { Button } from "@/app/shared/components/ui/button/Button";
import styles from "./LoginForm.module.css";
import { TextFieldComponent as TextField } from "@/app/shared/components/ui/text-field/TextField";
import Logo from "@/assets/logo/logo-vertical.svg";


export const LoginForm = () => {
  return (
      <div className={styles.form}>
        <img src={Logo} alt="logo"  className={styles.logo}/>
        <h1>Acceder</h1>
        <TextField label={'email'}></TextField>
        <TextField label={'contraseña'}></TextField>
        <Button variant={"success"} size={"md"} type={"submit"} className={styles.button}>
          Entrar
        </Button>
      </div>
  );
};
