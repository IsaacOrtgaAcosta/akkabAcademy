import { Button } from "./app/shared/components/ui/button/Button";
import { Card } from "./app/shared/components/ui/card/Card";
import LoginIllustration from "./assets/illustrations/login.svg";

function App() {
  return (
    <>
      <div style={{display: 'flex', height: '100%', flexDirection: 'row', gap: '20px', marginTop: '50px', marginLeft: '50px', marginRight: '50px'}}>
        <Card>
          <img src={LoginIllustration} alt="" />
        </Card>
        <Card direction={"column"}>
          <h1>Esto es la segunda card de prueba</h1>
           <Button
            variant={"success"}
            size={"md"}
            type={"submit"}
            children="Entrar"
          />
        </Card>
      </div>
    </>
  );
}

export default App;
