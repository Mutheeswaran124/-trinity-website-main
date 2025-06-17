import React from 'react';
import { Building2, Heart, ShoppingCart, Banknote, Plane, Factory, ArrowRight, TrendingUp, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const MegaMenuIndustries = () => {
  const industries = [
    { icon: Heart, title: 'Healthcare', href: '/industries#healthcare' },
    { icon: Banknote, title: 'Finance', href: '/industries#finance' },
    { icon: ShoppingCart, title: 'Retail', href: '/industries#retail' },
    { icon: Factory, title: 'Manufacturing', href: '/industries#manufacturing' },
    { icon: Plane, title: 'Telecommunications', href: '/industries#telecommunications' },
    { icon: Building2, title: 'Information Technology', href: '/industries#it' },
    { icon: Banknote, title: 'BFSI', href: '/industries#bfsi' },
    { icon: TrendingUp, title: 'Engineering', href: '/industries#engineering' },
    { icon: Factory, title: 'Renewable Energy', href: '/industries#renewable-energy' },
    { icon: Factory, title: 'Oil & Gas', href: '/industries#oil-gas' }
  ];

  return (
    <div className="grid grid-cols-12 gap-6 p-8 bg-gray-50 rounded-xl shadow-md mt-[-30px] w-full">
      {/* Left Navigation */}
      <div className="col-span-4 space-y-4">
        <h3 className="text-md font-bold text-gray-900 mb-2 border-b pb-1">Industries</h3>
        <div className="grid grid-cols-2 gap-4">
          {industries.map((industry) => (
            <Link
              key={industry.title}
              to={industry.href}
              className="flex items-center p-4 bg-white rounded-md border border-gray-200 hover:border-blue-400 shadow-sm transition-all"
            >
              <div className="p-2 bg-blue-100 rounded-md">
                {React.createElement(industry.icon, { className: 'h-6 w-6 text-blue-600' })}
              </div>
              <h4 className="text-sm font-semibold text-gray-900 ml-3">{industry.title}</h4>
            </Link>
          ))}
        </div>
      </div>

      {/* Center Content */}
      <div className="col-span-5 bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Industry Insights</h2>
        <p className="text-gray-600 text-sm mb-4">Transforming businesses across diverse sectors with data-driven solutions.</p>
        <img 
          src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600" 
          alt="Industry insights" 
          className="w-full h-44 object-cover rounded-lg shadow-sm mb-4" 
        />
        <div className="grid grid-cols-2 gap-3">
          {['Scalable Solutions', 'Security Compliance', 'Smart Infrastructure', 'Operational Excellence'].map((benefit) => (
            <div key={benefit} className="flex items-center space-x-1">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-sm text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <Link
            to="/industries"
            className="inline-flex items-center bg-blue-600 text-white px-5 py-3 rounded-md font-semibold hover:bg-blue-700 transition-all"
          >
            <span>Explore Industries</span>
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
          <a href="#case-studies" className="text-blue-600 text-sm font-semibold hover:text-blue-700">View Case Studies →</a>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="col-span-3 space-y-6">
        <div className="bg-white p-5 rounded-md shadow-sm">
          <h3 className="text-md font-bold text-gray-900 mb-2">Industry Impact</h3>
          <div className="space-y-3">
            {[
              { number: '25+', label: 'Industries Served', icon: Building2 },
              { number: '200+', label: 'Successful Projects', icon: TrendingUp },
              { number: '95%', label: 'Client Retention', icon: Heart }
            ].map((stat) => (
              <div key={stat.label} className="flex items-center space-x-2">
                {React.createElement(stat.icon, { className: 'h-5 w-5 text-blue-600' })}
                <h4 className="text-sm font-semibold text-gray-900">{stat.label}: {stat.number}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-100 p-5 rounded-md">
          <h4 className="text-md font-bold text-gray-900 mb-2">Popular Industries</h4>
          <div className="space-y-2">
            {['E-commerce', 'FinTech', 'Healthcare'].map((industry) => (
              <div key={industry} className="flex justify-between text-sm">
                <span className="text-gray-700">{industry}</span>
                <span className="font-bold text-blue-600">{Math.floor(Math.random() * 10)} projects</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenuIndustries;