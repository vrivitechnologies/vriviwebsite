// src/Components/Layout/Layout.js
import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import TestingHeader from './Components/TestingHeader';

const Layout = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      <TestingHeader></TestingHeader>
      <main>{children}</main>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
};

export default Layout;
