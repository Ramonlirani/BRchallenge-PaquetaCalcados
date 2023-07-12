import React from 'react';
import './Menu.css';
import logoPaqueta from '../../assets/logoPaqueta.png';
import { Heart, ShoppingBag, User } from 'lucide-react';

const Menu = () => {
  return (
    <div className="Menu">
      <img className="logoImg" src={logoPaqueta} alt="logoPaqueta" />
      <div className="menuIcons">
        <div className="menuIcon-wrapper">
          <Heart className="icon" />
          <p>Lista de desejos</p>
        </div>
        <div className="menuIcon-wrapper">
          <ShoppingBag className="icon" />
          <p>Sacola</p>
        </div>
        <div className="menuIcon-wrapper">
          <User className="icon" />
          <p>Entrar</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
