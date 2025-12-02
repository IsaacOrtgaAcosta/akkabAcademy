import { Button } from "@/app/shared/components/ui/button/Button";
import { Card } from "@/app/shared/components/ui/card/Card";


export const LoginForm = () => {
  return (
    <>
       <Card direction={"column"}>
          <h1>Acceder</h1>
           <Button
            variant={"success"}
            size={"md"}
            type={"submit"}
          >Entrar</Button>
        </Card>
    </>
  );
};