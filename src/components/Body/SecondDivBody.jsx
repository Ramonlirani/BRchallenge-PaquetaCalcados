import React from 'react';
import './SecondDivBody.css';
import modelMasc from '../../assets/photoModelMasc.png';

const SecondDivBody = () => {
  return (
    <div className="secondDivBodyMain">
      <div>
        <p>
          Tenha em seu guarda roupa sapatos de <br /> qualidade e confortáveis,
          para o dia a dia, <br /> trabalho e até mesmo para praticar esportes!
        </p>
        <button type="button" className="btnSecondDiv">
          CONFERIR
        </button>
      </div>
      <img className="bannerMasc" src={modelMasc} alt="modelMasc" />
    </div>
  );
};

export default SecondDivBody;
