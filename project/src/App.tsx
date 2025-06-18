import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Sections
import TestimonialCard from './components/sections/TestimonialsCard';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import GlobalPresence from './components/sections/GlobalPresence';
import Hero from './components/sections/Hero';
import Industries from './components/sections/Industries';
import Insights from './components/sections/Insights';
import Services from './components/sections/Services';
import TechStack from './components/sections/TechStack';

// MegaMenus
import MegaMenuServices from './components/MegaMenus/MegaMenuServices';

// Pages
import OurStory from './components/CompanyStory/OurStory';
import ServicesPage from './components/Services/ServicesPage';
import IndustriesPage from './components/IndustriesPage';

// Styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TestimonialCard />
        <About />
        <Services />
        <TechStack />
        <Industries />
        <GlobalPresence />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route
          path="/services-portal"
          element={
            <div className="min-h-screen bg-gray-100 p-8">
              <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Our Services
                </h1>
                <MegaMenuServices />
              </div>
            </div>
          }
        />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </Router>
  );
}

export default App;