/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const Contexto = createContext();

const Provider = ({ children }) => {
  const [useValor, setUseValor] = useState("");

  return (
    <Contexto.Provider value={{ useValor, setUseValor }}>
      {children}
    </Contexto.Provider>
  );
};

export { Contexto, Provider };