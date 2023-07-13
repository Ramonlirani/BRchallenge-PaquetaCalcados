import React from 'react';
import './FirstDivBody.css';
import modelFem from '../../assets/photoModelFem.png';

const FirstDivBody = () => {
  return (
    <div className="firstDivBodyMain">
      <img className="bannerFem" src={modelFem} alt="modelFem" />
      <div>
        <p>
          Escolher o seu sapato favorito entre nossa <br />
          <span className="variedadeTextoBold">
            variedade de modelos e cores
          </span>{' '}
          não será uma tarefa <br />
          fácil, mas o que uma mulher não consegue fazer?{' '}
        </p>
        <button type="button" className="btnFirstDiv">
          CONFERIR
        </button>
      </div>
    </div>
  );
};

export default FirstDivBody;
