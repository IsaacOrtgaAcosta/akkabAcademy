import { Button } from "@/app/shared/components/ui/button/Button";
import styles from "./LoginForm.module.css";
import { TextFieldComponent as TextField } from "@/app/shared/components/ui/text-field/TextField";
import Logo from "@/assets/logo/logo-vertical.svg";
import { ButtonVisibleIcon } from "@/app/shared/components/ui/buttonVisibleIcon/ButtonVisibleIcon";
import usePasswordToggle from "@/app/shared/hooks/usePasswordToggle";

export const LoginForm = () => {

  const {type, visible, toggle} = usePasswordToggle();

  return (
    <div className={styles.form}>
      <img src={Logo} alt="logo" className={styles.logo} />
      <h1>Acceder</h1>
      <TextField label={"email"}></TextField>
      <div className={styles.inputWrapper}>
        <TextField
          label={"contraseña"}
          type={type}
        ></TextField>
        <ButtonVisibleIcon isVisible={visible} passwordToggle={toggle} className={styles.buttonVisibleIcon}/>
      </div>
      <Button
        variant={"success"}
        size={"md"}
        type={"submit"}
        className={styles.button}
      >
        Entrar
      </Button>
    </div>
  );
};
