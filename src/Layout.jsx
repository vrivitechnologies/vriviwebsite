// src/Components/Layout/Layout.js
import React from 'react';
import HeaderWithBgWhite from './Components/Header/HeaderWithBgWhite';
import Footer from './Components/Footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <HeaderWithBgWhite></HeaderWithBgWhite>
      <main>{children}</main>
      <section id="about">
        <Footer />
      </section>
    </>
  );
};

export default Layout;
