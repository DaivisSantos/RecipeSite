import {} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cabecalho from "./Component/cabecalho";
import "normalize.css";
import { Provider } from "./Component/Contexto";
function App() {
  return (
    <BrowserRouter>
    <Provider>
      <Cabecalho />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
