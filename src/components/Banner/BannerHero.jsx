import React from 'react';
import './BannerHero.css';
import Banner from '../../assets/bannerHero.png';

const BannerHero = () => {
  return (
    <div>
      <img src={Banner} alt="BannerHero" />
    </div>
  );
};

export default BannerHero;
