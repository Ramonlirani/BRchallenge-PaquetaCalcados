import React from 'react';
import './Showcase.css';
import logoOutlet from '../../../assets/logoPaquetaOutlet.png';

const Showcase = () => {
  return (
    <div className="mainDivShowCase">
      <img className="logoOutlet" src={logoOutlet} alt="logoOutletPaqueta" />
      <p>
        Você também pode escolher o seu novo sapato <br /> favorito de acordo
        com a sua numeração.
      </p>
    </div>
  );
};

export default Showcase;
