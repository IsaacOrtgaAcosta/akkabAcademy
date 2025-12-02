import { Button } from "@/app/shared/components/ui/button/Button";
import { Card } from "@/app/shared/components/ui/card/Card";
import styles from "./LoginForm.module.css";
import { TextFieldComponent as TextField } from "@/app/shared/components/ui/text-field/TextField";

export const LoginForm = () => {
  return (
    <Card>
      <div className={styles.form}>
        <h1>Acceder</h1>
        <TextField></TextField>
        <Button variant={"success"} size={"md"} type={"submit"}>
          Entrar
        </Button>
      </div>
    </Card>
  );
};
