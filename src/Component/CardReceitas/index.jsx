import { useState, useEffect, useContext } from "react";
import "./CardReceitas.scss";
import { Contexto } from "../Contexto";

const CardReceitas = () => {
  const { useValor } = useContext(Contexto);

  const apiKey = "f0e74e1bcd7249608140468e4574d5db";

  const query = useValor ? useValor : "recipe"; 
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}&number=12`;

  const [receita, setReceita] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); 

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const receitasData = data.results;
        
        if (receitasData.length === 0) {
          setReceita([
            {
              id: 1,
              title: "Sem Resultados",
              image: "https://via.placeholder.com/150",
              descricao: "Não encontramos receitas para sua pesquisa."
            }
          ]);
        } else {
          const ReceitasFormatadas = receitasData.map((receita) => ({
            id: receita.id,
            title: receita.title,
            image: receita.image,
            descricao: receita.description || "Descrição não disponível"
          }));
          setReceita(ReceitasFormatadas);
        }
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Erro ao buscar receitas:", error);
        setLoading(false);
      });
  }, [useValor, url]); 

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-text">Carregando...</div>
        <div className="loading-spinner"></div>
      </div>
    ); 
  }

  return (
    <div className="card-receitas">
      {receita.map((receita) => (
        <div className="card-receitas__item" key={receita.id}>
          <img src={receita.image} alt={receita.title} />
          <h3>{receita.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default CardReceitas;
