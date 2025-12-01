import { Button } from "./app/shared/components/ui/button/Button";
import { Card } from "./app/shared/components/ui/card/Card";
function App() {
  return (
    <>
      <div style={{display: 'flex', flexDirection: 'row', height: '500px', gap: '20px', marginTop: '50px', marginLeft: '50px', marginRight: '50px'}}>
        <Card>
          <Button
            variant={"success"}
            size={"md"}
            type={"submit"}
            children="Entrar"
          />
        </Card>
        <Card>
          <h1>Esto es la segunda card de prueba</h1>
        </Card>
      </div>
    </>
  );
}

export default App;
