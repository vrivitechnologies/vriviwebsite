
import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Expertise from './Expertise';
import OurProducts from './OurProducts';
import CareersSection from './Careers';

const HomePage = () => {
  return (
    <>
      <Hero/>
       <section id="services">
        <Services />
      </section>
      <Expertise></Expertise>
      <OurProducts></OurProducts>
      <section id="Careers">
        <CareersSection />
      </section>
    </>
  );
};

export default HomePage;
