import React from 'react';
import './BannerHero.css';
import Banner from '../../assets/bannerHero.png';

const BannerHero = () => {
  return (
    <div className="bannerHeroContainer">
      <img className="bannerHero" src={Banner} alt="BannerHero" />
      <div className="inforBanner">
        <p
          style={{
            fontSize: '80px',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
          }}
        >
          Tênis Casual
        </p>
        <p
          style={{
            fontSize: '60px',
            color: '#CF5D00',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 400,
            opacity: 0.8,
          }}
        >
          Masculino
        </p>
        <p
          style={{
            fontSize: '24px',
            color: '#383838',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500,
            opacity: 0.6,
          }}
        >
          A partir de
        </p>
        <p
          style={{
            fontSize: '50px',
            color: '#383838',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 700,
          }}
        >
          R$ 79,99
        </p>
        <button className="btnBanner">Aproveite</button>
      </div>
    </div>
  );
};

export default BannerHero;
