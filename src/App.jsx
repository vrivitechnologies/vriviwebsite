import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignUp from './Products/VriStudy/SignUp';
import Layout from './Layout';
import PricingPlan from './Products/VriStudy/PricingPlan';
import VriStusyHomePage from './Products/VriStudy/VriStusyHomePage';
import HomePage from './Components/HomePage';
import ProductLayout from './ProductLayout';
import Description from './Components/Careers/Description';

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
          path="/vristudy"
          element={
            <ProductLayout>
              <VriStusyHomePage />
            </ProductLayout>
          }
        />
        <Route
          path="/careers"
          element={
            <Layout>
              <Description />
            </Layout>
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
