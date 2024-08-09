import { useState } from "react";
import { evaluate } from "mathjs";

const esOperador = (valor) => {
  return ["+", "-", "*", "/"].includes(valor);
};

const useStateInput = () => {
  const [input, setInput] = useState("0");

  const handleButtonClick = (valor) => {
    if (input === "0") {
      setInput(valor);
    } else if (
      (valor === "." && input.includes(".")) ||
      input.includes("Err")
    ) {
      return;
    } else {
      setInput(input + valor);
    }

    if (valor === ".") {
      if (input[input.length - 1] === "0" && input.length < 1) {
        setInput("0.");
      } else {
        if (!isNaN(input[input.length - 1])) {
          setInput(input + valor);
        } else {
          setInput(input + "0.");
        }
      }
    }

    if (esOperador(valor) && esOperador(input[input.length - 1])) {
      setInput(input.slice(0, input.length - 1) + valor);
    }

    if (input.length > 13) {
      setInput(input);
    }
  };

  const handleClear = (valor) => {
    valor.includes("clear-one")
      ? setInput(
          input.length > 1 && !input.includes("Err") ? input.slice(0, -1) : "0"
        )
      : setInput("0");
  };

  const handleEqualsClick = () => {
    try {
      const resultado = evaluate(input);
      if (resultado.toString().length > 10) {
        if (resultado % 1 !== 0) {
          setInput(+resultado.toString().slice(0, 13));
        } else {
          setInput("MAX PERMITIDO");
        }
      } else {
        setInput(resultado);
      }
    } catch {
      setInput(`Error`);
    }
  };

  const manejarClic = { handleButtonClick, handleClear, handleEqualsClick };

  return [input, manejarClic];
};

export default useStateInput;
