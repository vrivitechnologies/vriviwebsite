// src/Components/Layout/Layout.js
import React from 'react';
import HeaderWithBgWhite from './Components/Header/HeaderWithBgWhite';
import Footer from './Components/Footer/Footer';
import HeaderWithTextWhite from './Components/Header/HeaderWithTextWhite';

const Layout = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      <HeaderWithBgWhite></HeaderWithBgWhite>
      {/* <HeaderWithTextWhite></HeaderWithTextWhite> */}
      <main>{children}</main>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
};

export default Layout;
