// src/Components/Layout/Layout.js
import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';

const Layout = ({ children }) => {
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

export default Layout;
