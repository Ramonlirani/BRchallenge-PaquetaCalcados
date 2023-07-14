import React from 'react';
import './Homepage.css';
import Header from '../components/Header/Header';
import Menu from '../components/Header/Menu';
import NavBar from '../components/Header/NavBar/NavBar';
import BannerHero from '../components/Header/Banner/BannerHero';
import MenuPromo from '../components/Header/MenuPromo/MenuPromo';
import FirstDivBody from '../components/Body/FirstDivBody';
import SecondDivBody from '../components/Body/SecondDivBody';
import Showcase from '../components/Body/showcase/Showcase';
import ButtonShowcase from '../components/Body/showcase/ButtonShowcase';

const Homepage = () => {
  return (
    <>
      <Header />
      <Menu />
      <NavBar />
      <BannerHero />
      <MenuPromo />
      <FirstDivBody />
      <SecondDivBody />
      <div className="line"></div>
      <Showcase />
      <ButtonShowcase />
    </>
  );
};

export default Homepage;
