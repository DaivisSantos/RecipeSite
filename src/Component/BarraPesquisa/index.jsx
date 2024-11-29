import { useContext} from "react";
import "./BarPesquisa.scss"
import { Contexto } from "../Contexto";

function BarraPesquisa() {

  const { useValor, setUseValor } = useContext(Contexto);

  const HandlerChanger = (e) => {
    setUseValor(e.target.value);
  };

  const click = () => {
    console.log(`o resultado da pesquisa é: ${useValor}`);
  }

  return (
    <div className="barra-pesquisa">
      <input type="text" placeholder="Digite o nome da receita" value={useValor} onChange={HandlerChanger}/>
      <button onClick={click}>Buscar</button>
    </div>
  );
}

export default BarraPesquisa