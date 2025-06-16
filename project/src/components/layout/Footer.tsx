import React from 'react';
import Logo from '../ui/Logo';
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Logo className="h-10 w-auto text-white mb-4" />
            <p className="text-gray-400 mb-4">
              Empowering data-driven decisions across the globe with innovative analytics solutions.
            </p>
            <div className="flex space-x-4">
              <div className="flex space-x-4">
  <a 
    href="https://www.linkedin.com/company/trinity-technology-solutions"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition-colors"
  >
    <Linkedin size={20} />
  </a>  
</div>

              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#tech-stack" className="text-gray-400 hover:text-white transition-colors">Tech Stack</a>
              </li>
              <li>
                <a href="#industries" className="text-gray-400 hover:text-white transition-colors">Industries</a>
              </li>
              <li>
                <a href="#insights" className="text-gray-400 hover:text-white transition-colors">Insights</a>
              </li>
              <li>
                <a href="#careers" className="text-gray-400 hover:text-white transition-colors">Careers</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Global offices in Oman, Netherlands, USA, and Chennai (India)</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-blue-500 mr-2 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-blue-500 mr-2 flex-shrink-0" />
                <a href="mailto:info@trinitytechsolutions.com" className="text-gray-400 hover:text-white transition-colors">info@trinitytechsolutions.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest insights and trends in data analytics.</p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Trinity Technology Solution LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
