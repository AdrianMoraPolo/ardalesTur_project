import React from "react";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <a className="a">INICIO</a>
        </li>
        <li>
          <a className="b">OTRAS RUTAS</a>
        </li>
        <li className="c">
          <a >GUIAS</a>
        </li>
        <li className="d">
          <a >CONTACTO</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
