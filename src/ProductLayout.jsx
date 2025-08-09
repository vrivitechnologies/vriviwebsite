import React from 'react';

import Footer from './Components/Footer';
import Header from './Products/VriStudy/Header';

const ProductLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default ProductLayout;
