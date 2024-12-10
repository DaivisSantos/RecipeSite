import { useState } from "react";
import "./cabecalho.scss";
import { Link } from "react-router-dom";
import BarraPesquisa from "../BarraPesquisa";
import Logo from "../../assets/Logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <img src={Logo} className="logo" alt="Logo"/>
      
      <button className={`menu-toggle ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <BarraPesquisa />
      <nav className={`nav-buttons ${isOpen ? "open" : ""}`}>
        <ul>
          <Link to="/">
            <li>
              Home
            </li>
          </Link>
          <Link to="/">
            <li>
              Receitas
            </li>
          </Link>
          <Link to="/">
            <li>
              Sobre
            </li>
          </Link>
          <Link to="/">
            <li>
             Contato
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
