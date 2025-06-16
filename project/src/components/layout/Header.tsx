import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../ui/Logo';

const MegaMenuAbout = lazy(() => import('../MegaMenus/MegaMenuAbout'));
const MegaMenuServices = lazy(() => import('../MegaMenus/MegaMenuServices'));
const MegaMenuTechStack = lazy(() => import('../MegaMenus/MegaMenuTechStack'));
const MegaMenuIndustries = lazy(() => import('../MegaMenus/MegaMenuIndustries'));
const MegaMenuInsights = lazy(() => import('../MegaMenus/MegaMenuInsights'));
const MegaMenuCareers = lazy(() => import('../MegaMenus/MegaMenuCareers'));

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      setActiveMenu(null);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', key: 'about' },
    { name: 'Services', key: 'services' },
    { name: 'Tech Stack', key: 'tech-stack' },
    { name: 'Industries', key: 'industries' },
    { name: 'Insights', key: 'insights' },
    { name: 'Careers', key: 'careers' },
  ];

  const renderMegaMenu = (key: string) => {
    switch (key) {
      case 'about':
        return <MegaMenuAbout />;
      case 'services':
        return <MegaMenuServices />;
      case 'tech-stack':
        return <MegaMenuTechStack />;
      case 'industries':
        return <MegaMenuIndustries />;
      case 'insights':
        return <MegaMenuInsights />;
      case 'careers':
        return <MegaMenuCareers />;
      default:
        return null;
    }
  };

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-4' : 'bg-white py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center relative">
          <a href="/" className="flex items-center">
            <Logo className="h-10 w-auto" />
          </a>

          {/* Navigation Center */}
          <nav className="hidden md:flex items-center space-x-8 ml-auto">
            {navLinks.map((link) => (
              <div
                key={link.key}
                className="relative"
                onMouseEnter={() => setActiveMenu(link.key)}
              >
                <button className={`font-semibold transition-colors text-base py-2 px-1 ${
                  activeMenu === link.key 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-black hover:text-blue-600'
                }`}>
                  {link.name}
                </button>
              </div>
            ))}
          </nav>

          {/* Contact Us Button */}
          <a
            href="#contact-us"
            className="hidden md:inline-block font-semibold bg-blue-600 text-white px-6 py-2 rounded-md transition-colors hover:bg-blue-700 text-base ml-6"
          >
            Contact Us
          </a>

          {/* Mobile Menu Button */}
          <button className="md:hidden ml-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} className="text-blue-600" /> : <Menu size={28} className="text-blue-600" />}
          </button>
        </div>
      </header>

      {/* Full Screen Mega Menu Overlay */}
      {activeMenu && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-20 backdrop-blur-sm"
          onClick={() => setActiveMenu(null)}
        >
          {/* Mega Menu Content */}
          <div 
            className="absolute top-20 left-0 right-0 bg-white shadow-2xl border-t border-gray-200"
            onMouseEnter={() => setActiveMenu(activeMenu)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="container mx-auto px-6 py-12">
              <Suspense fallback={<div>Loading...</div>}>
                {renderMegaMenu(activeMenu)}
              </Suspense>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
