import React from 'react';
import HeaderWithBgWhite from './Components/Header/HeaderWithBgWhite';
import Footer from './Components/Footer/Footer';

const ProductLayout = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      <HeaderWithBgWhite></HeaderWithBgWhite>
      <main>{children}</main>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
};

export default ProductLayout;
