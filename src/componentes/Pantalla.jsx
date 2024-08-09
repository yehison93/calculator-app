/* eslint-disable react/prop-types */
import { Container } from "react-bootstrap";
import "../Estilos/Pantalla.css";

const Pantalla = ({ input, id }) => {
  return (
    <Container id={id} className="input">
      {input}
    </Container>
  );
};

export default Pantalla;
