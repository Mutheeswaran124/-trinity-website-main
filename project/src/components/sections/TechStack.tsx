import React from 'react';
import Section from '../ui/Section';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const TechStack = () => {
  const technologies = [
    {
      name: 'Azure',
      logo: 'https://cdn.worldvectorlogo.com/logos/azure-1.svg',
      description: 'Cloud computing services for scalable, enterprise-grade solutions'
    },
    {
      name: 'Databricks',
      logo: 'https://www.databricks.com/wp-content/uploads/2021/10/db-nav-logo.svg',
      description: 'Unified data analytics platform for big data and AI'
    },
    {
      name: 'DBT',
      logo: 'https://seeklogo.com/images/D/dbt-logo-500AB0BAA7-seeklogo.com.png',
      description: 'Data transformation tool enabling analytics engineering'
    },
    {
      name: 'FiveTran',
      logo: 'https://images.icon-icons.com/2699/PNG/512/fivetran_logo_icon_170149.png',
      description: 'Automated data integration for seamless data pipelines'
    },
    {
      name: 'Next.js',
      logo: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg',
      description: 'React framework for production-grade, fast, and scalable web applications.'
    },
    {
      name: 'AWS',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
      description: 'Comprehensive cloud platform offering computing power, storage, and content delivery.'
    },
    {
      name: 'Odoo',
      logo: 'https://cdn4.iconfinder.com/data/icons/logos-3/640/odoo_logo_rgb-512.png',
      description: 'Open-source business management software that integrates various applications like ERP, CRM, accounting, e-commerce, inventory, and project management into a single platform'
    }
  ];

  return (
    <Section 
      id="tech-stack" 
      title="Our Technology Stack"
      subtitle="Cutting-edge technologies powering our data solutions"
    >
      {/* Technology Logos Grid */}
      <div className="flex flex-wrap justify-center gap-8">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-black transition-all duration-300 hover:-translate-y-2 flex flex-col items-center w-64"
          >
            <div className="h-16 flex items-center justify-center mb-4">
              <img
                src={tech.logo}
                alt={`${tech.name} logo`}
                className="h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>
            <p className="text-gray-700">{tech.description}</p>
          </div>
        ))}
      </div>

      {/* Databricks Advertisement Section */}
      <div className="mt-16 flex justify-center">
        <div className="bg-white p-10 rounded-2xl max-w-7xl w-full shadow-lg border border-gray-200 hover:border-black transition-all duration-300">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left Column: Headline, Description, and Buttons */}
            <div className="flex-1 px-4 md:pr-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Elite Databricks Consulting Partner to turn data into AI-insights
              </h3>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Leverage the power of Databricks' data intelligence platform to start your AI-driven transformation today.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition">
                  Talk to Databricks Experts
                </button>
                <button className="bg-gray-300 text-gray-800 px-6 py-3 rounded-full font-bold hover:bg-gray-400 transition">
                  See Success Stories
                </button>
              </div>
            </div>

            {/* Right Column: Certificates Section */}
            <div className="flex-1 px-4 mt-4 md:mt-0 flex flex-col items-center">
              <div className="grid grid-cols-2 gap-4">
                {/* Certificate: Data Associative Engineers */}
                <div className="flex flex-col items-center">
                  <a href="https://www.databricks.com/learn/certification/data-engineer-associate" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://www.databricks.com/sites/default/files/2024-05/associate-badge-de.png?v=1717145547"
                      alt="10+ Certificates in Data Associative Engineers"
                      className="w-40 h-auto object-contain hover:scale-105 transition-transform"
                    />
                  </a>
                  <span className="mt-2 text-base font-semibold text-gray-900 text-center tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    10+ Data Associative Engineers
                  </span>
                </div>
                {/* Certificate: Professional Engineers */}
                <div className="flex flex-col items-center">
                  <a href="https://www.databricks.com/learn/certification/data-engineer-professional" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://www.databricks.com/sites/default/files/2024-05/professional-badge-de.png?v=1717145841"
                      alt="2 Professional Engineers"
                      className="w-40 h-auto object-contain hover:scale-105 transition-transform"
                    />
                  </a>
                  <span className="mt-2 text-base font-semibold text-gray-900 text-center tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>
                     Professional Data Engineers
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Section>
  );
};

export default TechStack;
