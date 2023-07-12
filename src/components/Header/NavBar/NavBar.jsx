import React from 'react';
import './NavBar.css';
//82 = 18 size letter, 32 top e 32 bot

const NavBar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <a href="#">Novidades</a>
          </li>
          <li>
            <a href="#">Feminino</a>
          </li>
          <li>
            <a href="#">Masculino</a>
          </li>
          <li>
            <a href="#">Paqueta Esports</a>
          </li>
          <li>
            <a href="#">Outlet</a>
          </li>
          <li>
            <a href="#">Cashback</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
