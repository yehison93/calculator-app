/* eslint-disable react/prop-types */
import { Button } from "react-bootstrap";
import "../Estilos/Boton.css";

function Boton({ children, manejarClic, id }) {
  const esOperador = (valor) => {
    return ["+", "-", "*", "/"].includes(valor);
  };
  const esEspecial = (valor) => {
    return ["=", "."].includes(valor);
  };
  const esBorrar = (valor) => {
    return ["AC", "C"].includes(valor);
  };

  const variantes = {
    operador: "warning",
    clear: "danger",
    especial: "info",
    default: "secondary",
  };

  return (
    <Button
      id={id}
      as="input"
      type="button"
      value={children}
      variant={
        variantes[
          esOperador(children)
            ? "operador"
            : esEspecial(children)
            ? "especial"
            : esBorrar(children)
            ? "clear"
            : "default"
        ]
      }
      className={`boton-contenedor text-ligth fs-1 m-0 p-0`}
      onClick={() => manejarClic(children)}
    />
  );
}

export default Boton;
