import React from "react";

import { FaUserAlt, FaSearch, FaBone } from "react-icons/fa";

import LogoImg from "../../img/logo.png";

function Navbar() {
  return (
    <div className="container-nav space-between p-3 flex">
      <div className="flex">
        <img src={LogoImg} alt="logo-img" />
        <h1>CodeDog</h1>
      </div>

      <input type="text" className="pl-2" placeholder="Buscar mais..." />

      <ul className="flex test">
        <li className="nav-list-link p-1 m-1 flex">
          <FaUserAlt />
          <a href="#" className="nav-link">
            Sobre nós
          </a>
        </li>
        <li className="nav-list-link p-1 m-1 flex">
          <FaSearch />
          <a href="#" className="nav-link">
            Descubra mais
          </a>
        </li>
        <li className="nav-list-link p-1 m-1 flex">
          <FaBone />
          <a href="#" className="nav-link">
            Ver todos
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
