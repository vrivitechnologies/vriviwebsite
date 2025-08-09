import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignUp from './Products/VriStudy/SignUp';
import Layout from './Layout';
import PricingPlan from './Products/VriStudy/PricingPlan';
import VriStusyHomePage from './Products/VriStudy/VriStusyHomePage';
import HomePage from './Components/HomePage';
import ProductLayout from './ProductLayout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/pricing"
          element={
            <Layout>
              <PricingPlan />
            </Layout>
          }
        />
        <Route
          path="/vristudyhomepage"
          element={
            <ProductLayout>
              <VriStusyHomePage />
            </ProductLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <Layout>
              <SignUp />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
