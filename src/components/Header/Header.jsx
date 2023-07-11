import React from 'react';

import './Header.css';
import { Headphones, MapPin } from 'lucide-react';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <p>Loja de Calçados e Moda Online</p>
      </div>
      <div className="icons">
        <div className="icon-wrapper">
          <Headphones />

          <p>Fale conosco</p>
        </div>
        <div className="icon-wrapper">
          <MapPin />
          <p>Encontrar uma loja física</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
