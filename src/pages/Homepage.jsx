import React from 'react';
import Header from '../components/Header/Header';
import Menu from '../components/Header/Menu';
import NavBar from '../components/Header/NavBar/NavBar';
import BannerHero from '../components/Header/Banner/BannerHero';
import MenuPromo from '../components/Header/MenuPromo/MenuPromo';
import FirstDivBody from '../components/Body/FirstDivBody';

const Homepage = () => {
  return (
    <>
      <Header />
      <Menu />
      <NavBar />
      <BannerHero />
      <MenuPromo />
      <FirstDivBody />
    </>
  );
};

export default Homepage;
