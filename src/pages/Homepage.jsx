import React from 'react';
import Header from '../components/Header/Header';
import Menu from '../components/Header/Menu';
import NavBar from '../components/Header/NavBar/NavBar';
import BannerHero from '../components/Banner/BannerHero';

const Homepage = () => {
  return (
    <>
      <Header />
      <Menu />
      <NavBar />
      <BannerHero />
    </>
  );
};

export default Homepage;
