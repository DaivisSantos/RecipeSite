import { useState, useEffect, useContext } from "react";
import "./CardReceitas.scss";
import { Contexto } from "../Contexto";

const CardReceitas = () => {
  // Consome o valor do contexto
  const { useValor } = useContext(Contexto);

  const apiKey = "f0e74e1bcd7249608140468e4574d5db";

  // A URL agora depende do valor de 'useValor'
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${useValor}&number=12`;

  const [receita, setReceita] = useState([]);

  useEffect(() => {
    if (useValor) { 
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const receitasData = data.results;
          const ReceitasFormatadas = receitasData.map((receita) => ({
            id: receita.id,
            title: receita.title,
            image: receita.image,
            descricao: receita.description, 
          }));
          setReceita(ReceitasFormatadas);
        })
        .catch((error) => {
          console.error("Erro ao buscar receitas:", error);
        });
    } else {
      setReceita([]);
    }
  }, [useValor]);

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
