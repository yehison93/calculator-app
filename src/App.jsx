import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Pantalla from "./componentes/Pantalla.jsx";
import { Button, Card, Container } from "react-bootstrap";
import PanelBotones from "./componentes/PanelBotones.jsx";
import useStateInput from "./customHooks/useStateInput.jsx";
import Logo from "./componentes/Logo.jsx";
import logo from "./assets/logo_Yehison.png";

const urlLogo = "https://yehison-perdomo.netlify.app/";

function App() {
  const [input, manejarClic] = useStateInput();

  return (
    <Container fluid className="App">
      <Card className="container-app">
        <Card.Body className="contenedor-calculadora bg-dark">
          <Pantalla id="display" input={input} />
          <PanelBotones manejarClic={manejarClic} />
          <Button
            variant="light"
            className="text-center my-1 mx-auto p-0 w-100"
          >
            <Logo logo={logo} url={urlLogo} />
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;
