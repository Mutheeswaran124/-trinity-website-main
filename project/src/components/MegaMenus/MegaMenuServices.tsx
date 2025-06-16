import React from 'react';
import { Code, Smartphone, Cloud, Database, Shield, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const MegaMenuServices = () => {
  const serviceCategories = [
    {
      title: 'Services',
      services: [
        { icon: Code, title: 'Web Development', description: 'Custom web applications built with modern technologies', href: '#web-development' },
        { icon: Smartphone, title: 'Mobile Development', description: 'Native and cross-platform mobile applications', href: '#mobile-development' },
        { icon: Database, title: 'Data Engineering', description: 'Big data processing and analytics solutions', href: '#data-engineering' },
        { icon: Cloud, title: 'Cloud Solutions', description: 'Scalable cloud infrastructure and deployment', href: '#cloud-solutions' },
        { icon: Shield, title: 'Cybersecurity', description: 'Comprehensive security solutions and audits', href: '#cybersecurity' },
        { icon: Zap, title: 'Digital Transformation', description: 'End-to-end digital transformation consulting', href: '#digital-transformation' }
      ]
    }
  ];

  return (
    <div className="grid grid-cols-12 gap-4 p-6 bg-gray-50 rounded-xl shadow-md mt-[-20px]">
      {/* Left Navigation */}
      <div className="col-span-3 space-y-4">
        {serviceCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-md font-bold text-gray-900 mb-2 border-b pb-1">{category.title}</h3>
            <div className="space-y-2">
              {category.services.map((service) => (
                <a key={service.title} href={service.href} className="block p-3 bg-white rounded-md border border-gray-200 hover:border-blue-400 shadow-sm transition-all">
                  <div className="flex items-center space-x-2">
                    <div className="p-1 bg-blue-100 rounded-md">
                      <service.icon className="h-4 w-4 text-blue-600" />
                    </div>
                    <h4 className="text-sm font-semibold text-gray-900">{service.title}</h4>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">{service.description}</p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Center Content */}
      <div className="col-span-6 bg-white rounded-xl p-5 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Enterprise Solutions</h2>
        <p className="text-gray-600 text-sm mb-4">Comprehensive technology solutions designed for large-scale enterprise operations.</p>
        <img src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Enterprise solutions" className="w-full h-40 object-cover rounded-lg shadow-sm mb-4" />
        <div className="grid grid-cols-2 gap-3">
          {['Scalable Architecture', '24/7 Support', 'Custom Integration', 'Security Compliance'].map((benefit) => (
            <div key={benefit} className="flex items-center space-x-1">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-sm text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <a href="#enterprise" className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition-all">
            <span>Get Started</span>
            <ArrowRight className="h-3 w-3 ml-2" />
          </a>
          <a href="#consultation" className="text-blue-600 text-sm font-semibold hover:text-blue-700">Free Consultation →</a>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="col-span-3 space-y-4">
        <div className="bg-white p-4 rounded-md shadow-sm">
          <h3 className="text-md font-bold text-gray-900 mb-2">Our Process</h3>
          <div className="space-y-3">
            {['Discovery', 'Planning', 'Development', 'Deployment'].map((title, index) => (
              <div key={title} className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center">{index + 1}</div>
                <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-md">
          <h4 className="text-md font-bold text-gray-900 mb-2">Service Highlights</h4>
          <div className="space-y-2">
            {['Project Success Rate: 98%', 'Average Delivery Time: 6 weeks', 'Client Satisfaction: 4.9/5'].map((highlight) => (
              <div key={highlight} className="flex justify-between text-sm">
                <span className="text-gray-700">{highlight.split(': ')[0]}</span>
                <span className="font-bold text-blue-600">{highlight.split(': ')[1]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenuServices;
