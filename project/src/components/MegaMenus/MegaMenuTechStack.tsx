import React from 'react';
import { Cloud, Database, Globe, Server, ArrowRight, CheckCircle, Zap, Box, Code, Layers } from 'lucide-react';

const MegaMenuTechStack = ({ onClose }: { onClose?: () => void }) => {
  const handleExploreClick = () => {
    const section = document.getElementById('tech-stack');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      if (onClose) onClose(); // Close dropdown if parent passes onClose
    }
  };

  const techCategories = [
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      technologies: [
        { name: 'Azure', icon: Cloud, color: 'bg-blue-500' },
        { name: 'AWS', icon: Server, color: 'bg-orange-500' },
        { name: 'Databricks', icon: Database, color: 'bg-red-500' },
        { name: 'Odoo', icon: Box, color: 'bg-purple-500' }
      ],
    },
    {
      title: 'Data & Integration',
      icon: Database,
      technologies: [
        { name: 'DBT', icon: Layers, color: 'bg-green-500' },
        { name: 'FiveTran', icon: Zap, color: 'bg-blue-600' }
      ],
    },
    {
      title: 'Web & Frameworks',
      icon: Globe,
      technologies: [
        { name: 'Next.js', icon: Code, color: 'bg-black' },
        { name: 'React', icon: Globe, color: 'bg-cyan-500' }
      ],
    }
  ];

  return (
    <div className="grid grid-cols-12 gap-6 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
      {/* Left Navigation */}
      <div className="col-span-4">
        <h3 className="text-sm font-semibold text-blue-600 mb-4 uppercase tracking-wide">Tech Stack</h3>
        <div className="grid grid-cols-1 gap-4">
          {techCategories.map((category) => (
            <div key={category.title} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <category.icon className="h-5 w-5 text-blue-600" />
                </div>
                <h4 className="text-sm font-semibold text-gray-900">{category.title}</h4>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {category.technologies.map((tech) => (
                  <div key={tech.name} className="flex items-center space-x-2 bg-white rounded-md px-3 py-2 border border-gray-200 hover:border-gray-300 transition-colors duration-200">
                    <div className={`p-1 ${tech.color} rounded`}>
                      <tech.icon className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-xs font-medium text-gray-700">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Center Content */}
      <div className="col-span-5 px-4">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Technology Expertise</h2>
          <p className="text-gray-600 leading-relaxed">Building modern applications with cutting-edge frameworks & cloud solutions.</p>
        </div>
        
        <div className="relative mb-4 overflow-hidden rounded-lg">
          <img src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600" 
               alt="Tech Stack" 
               className="w-full h-48 object-cover" />
        </div>
        
        <div className="grid grid-cols-2 gap-3 mb-6">
          {['Scalable Architecture', 'Performance Optimization', 'Security Compliance', 'Cross-platform Compatibility'].map((feature) => (
            <div key={feature} className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <button
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors duration-200"
            onClick={handleExploreClick}
            type="button"
          >
            <span>Explore Tech Stack</span>
            <ArrowRight className="h-4 w-4 ml-2" />
          </button>
          <div className="flex items-center space-x-2 text-gray-600">
            <CheckCircle className="h-4 w-4 text-yellow-500" />
            <span className="text-sm font-medium">Latest Technologies</span>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="col-span-3 space-y-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-5 bg-blue-600 rounded-full mr-3"></div>
            Certifications
          </h3>
          <div className="space-y-3">
            {[
              { name: 'AWS Certified', icon: Server, color: 'bg-orange-500' },
              { name: 'Google Cloud Professional', icon: Cloud, color: 'bg-blue-500' },
              { name: 'Microsoft Azure Expert', icon: Cloud, color: 'bg-blue-600' },
              { name: 'Kubernetes Certified', icon: Box, color: 'bg-purple-500' }
            ].map((cert) => (
              <div key={cert.name} className="flex items-center space-x-3 bg-white rounded-lg p-3 border border-gray-200">
                <div className={`p-2 ${cert.color} rounded-lg`}>
                  <cert.icon className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-900">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="text-sm font-semibold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-5 bg-green-500 rounded-full mr-3"></div>
            Tech Stats
          </h4>
          <div className="space-y-3">
            {[
              { label: 'Languages', value: '15+' },
              { label: 'Frameworks', value: '25+' },
              { label: 'Cloud Platforms', value: '5+' },
              { label: 'Years of Experience', value: '10+' }
            ].map((stat) => (
              <div key={stat.label} className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{stat.label}</span>
                <span className="font-semibold text-blue-600 text-sm">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenuTechStack;