
import React, { useEffect } from 'react';
import HeroWithBluePurpleGradient from './Hero/HeroWithBluePurpleGradient';
import Services from './Services/Services';
import Expertise from './Expertise/Expertise';
import OurProducts from './Product/OurProducts';
import CareersSection from './Careers/Careers';
import { useLocation } from 'react-router-dom';
import HeroWithImage from './Hero/HeroWithImage';
import ProductWithImage from './Product/ProductWithImage';
import HeroWithImageBluePurpleGradient from './Hero/HeroWithImageBluePurpleGradient';
import HeroWithNewContent from './Hero/HeroWithNewContent';

const HomePage = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;
      const element = document.getElementById(id);
      if (element) {
        const offset = 80; // match header height
        const top = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  }, [location.state]);

  return (
    <>
      <HeroWithNewContent></HeroWithNewContent>
      <ProductWithImage></ProductWithImage>
      <Services />

      <Expertise></Expertise>

      <CareersSection />

    </>
  );
};

export default HomePage;
