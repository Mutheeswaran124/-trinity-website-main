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

// Use visually distinct images for each highlight
const highlights = [
  {
    number: '50+',
    label: 'Projects Delivered',
    icon: TrendingUp,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80', // cityscape
    textColor: 'text-white',
  },
  {
    number: '5+ Years',
    label: 'Experience',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80', // team
    textColor: 'text-white',
  },
  {
    number: '4+',
    label: 'Countries Served',
    icon: Globe,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', // world map
    textColor: 'text-white',
  },
  {
    number: '50+',
    label: 'Data Experts',
    icon: Award,
    image: 'https://www.shutterstock.com/image-photo/analyst-working-business-analytics-data-600nw-1857484450.jpg', // award
    textColor: 'text-white',
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

      {/* Right Section - Impact Metrics with Individual Background Images */}
      <div className="col-span-3 relative rounded-md overflow-hidden">
        <div className="relative z-10 p-1">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Our Impact</h3>
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((highlight) => (
              <div
                key={highlight.label}
                className={`relative rounded-md p-4 border hover:shadow-md flex flex-col items-start justify-end min-h-[120px] bg-white overflow-hidden`}
                style={{
                  backgroundImage: `url('${highlight.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Overlay for readability, very little blur */}
                <div className="absolute inset-0 bg-black/20 z-0 rounded-md" />
                <div className={`relative z-10 flex items-center space-x-3 mb-2 ${highlight.textColor}`}>
                  <highlight.icon className="h-5 w-5" />
                  <div className="text-xl font-bold">{highlight.number}</div>
                </div>
                <p className={`relative z-10 text-sm font-semibold ${highlight.textColor}`}>{highlight.label}</p>
              </div>
            ))}
          </div>
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