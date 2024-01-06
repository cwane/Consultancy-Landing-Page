import React from 'react';

import Rectangle from "../assets/rectangle.svg"

import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import SkillsCertificate from '../components/SkillsCertificate';
import Subscribe from '../components/Subscribe';
import TopUniversity from '../components/TopUniversity';
import Statistics from '../components/Statistics';

const HomePage = () => {
  return (
    <>
    <div className='bg-[#eaf2fc] relative z-0'>
      <img src={Rectangle} alt='' className='z-0 absolute -top-64 w-full'/>
      <NavBar />
      <HeroSection />
      <Statistics />
      <AboutUs />
      <TopUniversity />
      <SkillsCertificate />
      <Subscribe />
      <Footer />
    </div>
    </>
  );
}

export default HomePage;
