import React from 'react';
import Hero from './Hero';
import Youtube from './Youtube';
import TrustedBy from './TrustedBy';

import HowItWorks from './HowItWorks';
import Steps from './Steps';
import Pricing from './Pricing';
import Features from './Features';


const VriStusyHomePage = () => {
  return (
    <>
      <Hero />
      <Youtube />
      <TrustedBy />
      <section id="Features">
        <Features />
      </section>
      <section id="How It Works">
        <HowItWorks />
      </section>
      {/* <Steps /> */}
      <section id='Pricing'>
        <Pricing />
      </section>
    </>
  );
};

export default VriStusyHomePage;
