import { Row } from "react-bootstrap";
import Boton from "./Botones";

/* eslint-disable react/prop-types */
const FilaBoton = ({ arrayNumber, manejarClic }) => {
  return (
    <Row className="gap-2 my-2">
      {Object.entries(arrayNumber).map(([nombre, valor], index) => {
        return (
          <Boton
            key={nombre + index}
            id={nombre}
            manejarClic={() => {
              if (nombre.includes("clear")) {
                manejarClic.handleClear(nombre);
              } else if (nombre.includes("equal")) {
                manejarClic.handleEqualsClick();
              } else {
                manejarClic.handleButtonClick(valor);
              }
            }}
          >
            {valor}
          </Boton>
        );
      })}
    </Row>
  );
};

export default FilaBoton;
