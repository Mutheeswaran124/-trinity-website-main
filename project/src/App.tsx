import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer'; 
import Hero from './components/sections/Hero'; 
import About from './components/sections/About';
import Services from './components/sections/Services'; 
import TechStack from './components/sections/TechStack'; 
import Industries from './components/sections/Industries';
import Insights from './components/sections/Insights'; 
import Careers from './components/sections/Careers'; 
import Contact from './components/sections/Contact';
import GlobalPresence from './components/sections/GlobalPresence';

import MegaMenuAbout from './components/MegaMenus/MegaMenuAbout';
import MegaMenuCareers from './components/MegaMenus/MegaMenuCareers';
import MegaMenuIndustries from './components/MegaMenus/MegaMenuIndustries';
import MegaMenuInsights from './components/MegaMenus/MegaMenuInsights';
import MegaMenuServices from './components/MegaMenus/MegaMenuServices';
import MegaMenuTechStack from './components/MegaMenus/MegaMenuTechStack';

import OurStory from './components/CompanyStory/OurStory'; // <-- Import your story page

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function HomePage() {
  return (
    <>
      <Header /> 
      <main> 
        <Hero />
        <About />
        <Services />
        <TechStack />
        <Industries /> 
        <GlobalPresence />
        <Insights /> 
        <Careers />
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
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  ); 
} 

export default App;