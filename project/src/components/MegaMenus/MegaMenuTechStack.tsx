import React from 'react';
import { Cloud, Database, Globe, Server, ArrowRight, CheckCircle } from 'lucide-react';

const MegaMenuTechStack = () => {
  const techCategories = [
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      technologies: ['Azure', 'AWS', 'Databricks', 'Odoo'],
    },
    {
      title: 'Data & Integration',
      icon: Database,
      technologies: ['DBT', 'FiveTran'],
    },
    {
      title: 'Web & Frameworks',
      icon: Globe,
      technologies: ['Next.js', 'React'],
    }
  ];

  return (
    <div className="grid grid-cols-12 gap-6 p-8 bg-gray-50 rounded-xl shadow-md mt-[-30px] w-full">
      
      {/* Left Navigation */}
      <div className="col-span-4 space-y-4">
        <h3 className="text-md font-bold text-gray-900 mb-2 border-b pb-1">Tech Stack</h3>
        <div className="grid grid-cols-2 gap-4">
          {techCategories.map((category) => (
            <div key={category.title} className="p-4 bg-white rounded-md border border-gray-200 shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                {React.createElement(category.icon, { className: 'h-5 w-5 text-blue-600' })}
                <h4 className="text-sm font-semibold text-gray-900">{category.title}</h4>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {category.technologies.map((tech) => (
                  <span key={tech} className="text-sm font-medium text-gray-700 bg-gray-100 rounded-md px-3 py-1">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Center Content */}
      <div className="col-span-5 bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Technology Expertise</h2>
        <p className="text-gray-600 text-sm mb-4">Building modern applications with cutting-edge frameworks & cloud solutions.</p>
        <img src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Tech Stack" className="w-full h-44 object-cover rounded-lg shadow-sm mb-4" />
        <div className="grid grid-cols-2 gap-3">
          {['Scalable Architecture', 'Performance Optimization', 'Security Compliance', 'Cross-platform Compatibility'].map((feature) => (
            <div key={feature} className="flex items-center space-x-1">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <a href="#tech-expertise" className="inline-flex items-center bg-blue-600 text-white px-5 py-3 rounded-md font-semibold hover:bg-blue-700 transition-all">
            <span>Explore Tech Stack</span>
            <ArrowRight className="h-4 w-4 ml-2" />
          </a>
          <div className="flex items-center space-x-2 text-gray-600">
            <CheckCircle className="h-4 w-4 text-yellow-500" />
            <span className="text-sm">Latest Technologies</span>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="col-span-3 space-y-6">
        <div className="bg-white p-5 rounded-md shadow-sm">
          <h3 className="text-md font-bold text-gray-900 mb-2">Certifications</h3>
          <div className="space-y-3">
            {['AWS Certified', 'Google Cloud Professional', 'Microsoft Azure Expert', 'Kubernetes Certified'].map((cert) => (
              <div key={cert} className="flex items-center space-x-2 bg-gray-100 rounded-md p-3">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-900">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-100 p-5 rounded-md">
          <h4 className="text-md font-bold text-gray-900 mb-2">Tech Stats</h4>
          <div className="space-y-2">
            {['Languages: 15+', 'Frameworks: 25+', 'Cloud Platforms: 5+', 'Years of Experience: 10+'].map((stat) => (
              <div key={stat} className="flex justify-between text-sm">
                <span className="text-gray-700">{stat.split(': ')[0]}</span>
                <span className="font-bold text-blue-600">{stat.split(': ')[1]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenuTechStack;
