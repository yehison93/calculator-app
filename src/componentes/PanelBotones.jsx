/* eslint-disable react/prop-types */
import { Container } from "react-bootstrap";
import FilaBoton from "./FilaBoton";

const PanelBotones = ({ manejarClic }) => {
  return (
    <Container>
      <FilaBoton
        arrayNumber={{ seven: "7", eight: "8", nine: "9", add: "+" }}
        manejarClic={manejarClic}
      />
      <FilaBoton
        arrayNumber={{ four: "4", five: "5", six: "6", subtract: "-" }}
        manejarClic={manejarClic}
      />
      <FilaBoton
        arrayNumber={{ one: "1", two: "2", three: "3", multiply: "*" }}
        manejarClic={manejarClic}
      />
      <FilaBoton
        arrayNumber={{
          "clear-one": "C",
          zero: "0",
          decimal: ".",
          divide: "/",
        }}
        manejarClic={manejarClic}
      />
      <FilaBoton
        arrayNumber={{
          clear: "AC",
          equals: "=",
        }}
        manejarClic={manejarClic}
      />
    </Container>
  );
};

export default PanelBotones;
