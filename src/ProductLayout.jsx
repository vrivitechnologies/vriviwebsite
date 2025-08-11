import React from 'react';

import Footer from './Components/Footer';
import Header from './Products/VriStudy/Header';

const ProductLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
};

export default ProductLayout;
