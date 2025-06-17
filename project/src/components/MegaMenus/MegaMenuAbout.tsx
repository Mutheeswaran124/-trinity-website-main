import React from 'react';
import { Users, Target, Award, Globe, Building, TrendingUp, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const partners = [
  { name: 'AWS', href: '#aws', logo: 'https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png' },
  { name: 'Odoo', href: '#odoo', logo: 'https://cdn4.iconfinder.com/data/icons/logos-3/640/odoo_logo_rgb-512.png' },
  { name: 'Databricks', href: '#databricks', logo: 'https://images.seeklogo.com/logo-png/61/1/databricks-icon-logo-png_seeklogo-611588.png' },
  { name: 'Azure', href: '#azure', logo: 'https://www.svgrepo.com/show/303372/azure-1-logo.svg' },
  { name: 'Fivetran', href: '#fivetran', logo: 'https://images.icon-icons.com/2699/PNG/512/fivetran_logo_icon_170149.png' },
  { name: 'dbt Labs', href: '#dbt', logo: 'https://seeklogo.com/images/D/dbt-logo-500AB0BAA7-seeklogo.com.png' },
];

const highlights = [
  {
    number: '500+',
    label: 'Projects Delivered',
    icon: TrendingUp,
    bg: 'from-green-400/80 to-teal-400/80',
    image: '/images/impact1.jpg',
    border: 'border-green-300',
    shadow: 'shadow-green-200',
  },
  {
    number: '9+ Years',
    label: 'Experience',
    icon: Users,
    bg: 'from-blue-400/80 to-indigo-400/80',
    image: '/images/impact2.jpg',
    border: 'border-blue-300',
    shadow: 'shadow-blue-200',
  },
  {
    number: '10+',
    label: 'Countries Served',
    icon: Globe,
    bg: 'from-purple-400/80 to-pink-400/80',
    image: '/images/impact3.jpg',
    border: 'border-purple-300',
    shadow: 'shadow-purple-200',
  },
  {
    number: '100+',
    label: 'Data Experts',
    icon: Award,
    bg: 'from-orange-400/80 to-red-400/80',
    image: '/images/impact4.jpg',
    border: 'border-orange-300',
    shadow: 'shadow-orange-200',
  },
];

const MegaMenuAbout = () => {
  const navigate = useNavigate(); 
  return (
    <div className="grid grid-cols-9 gap-6 p-6 bg-white rounded-lg shadow-lg">
      {/* Left Section - Company Overview */}
      <div className="col-span-3 space-y-6">
        <h3 className="text-2xl font-bold text-gray-900">Why Trinity Technology Solutions?</h3>
        <p className="text-gray-600 text-sm">
          Empowering businesses with cutting-edge <b>data engineering, analytics, and AI solutions</b>.
        </p>
        <ul className="space-y-3">
          <li className="flex items-center space-x-3">
            <Target className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium">Founded in 2020</span>
          </li>
          <li className="flex items-center space-x-3">
            <Award className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium">Databricks Official Partner</span>
          </li>
          <li className="flex items-center space-x-3">
            <Building className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium">Global Presence in 4+ Continent</span>
          </li>
        </ul>
      </div>

      {/* Center Section - Technology Partners */}
      <div className="col-span-3">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Technology Partners</h3>
        <div className="grid grid-cols-2 gap-4">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center space-x-3 p-3 bg-gray-100 rounded-md">
              <img src={partner.logo} alt={partner.name} className="h-8 w-8 object-contain" />
              <span className="text-sm font-medium">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section - Impact Metrics */}
      <div className="col-span-3">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Our Impact</h3>
        <div className="grid grid-cols-2 gap-4">
          {highlights.map((highlight) => (
            <div key={highlight.label} className="bg-white rounded-md p-4 border hover:shadow-md">
              <div className="flex items-center space-x-3 mb-2">
                <highlight.icon className="h-5 w-5 text-blue-600" />
                <div className="text-xl font-bold">{highlight.number}</div>
              </div>
              <p className="text-sm text-gray-600">{highlight.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="col-span-9 text-center mt-6">
        <button
          onClick={() => navigate('/our-story')}
          className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors group"
        >
          <span>Learn More</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default MegaMenuAbout;