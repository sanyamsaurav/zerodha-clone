import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

import App from './App.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';

import HomePage from "./landing_page/home/HomePage.jsx"
import Signup from './landing_page/signup/Signup.jsx';
import About from './landing_page/about/AboutPage.jsx';
import Pricing from './landing_page/pricing/PricingPage.jsx';
import Support from './landing_page/support/SupportPage.jsx';
import NotFound from './landing_page/NotFound.jsx';
import Navbar from './landing_page/Navbar.jsx';
import Footer from './landing_page/Footer.jsx';
import Productpage from './landing_page/product/Productpage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <Navbar />

        <Routes>
          {/* ✅ Layout route */}
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
            <Route path="/Product" element={<Productpage />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/support" element={<Support />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
);
