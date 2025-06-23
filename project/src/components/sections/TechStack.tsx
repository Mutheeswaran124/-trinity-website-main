import React from 'react';
import Section from '../ui /Section';

const TechStack = () => {
  const handleScrollToContact = () => {
    const el = document.querySelector('#contact'); // Change to '#contact-form' if needed
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const technologies = [
    {
      name: 'Azure',
      logo: 'https://cdn.worldvectorlogo.com/logos/azure-1.svg',
      description: 'Cloud computing services for scalable, enterprise-grade solutions',
    },
    {
      name: 'Databricks',
      logo: 'https://www.databricks.com/wp-content/uploads/2021/10/db-nav-logo.svg',
      description: 'Unified data analytics platform for big data and AI',
    },
    {
      name: 'DBT',
      logo: 'https://seeklogo.com/images/D/dbt-logo-500AB0BAA7-seeklogo.com.png',
      description: 'Data transformation tool enabling analytics engineering',
    },
    {
      name: 'FiveTran',
      logo: 'https://images.icon-icons.com/2699/PNG/512/fivetran_logo_icon_170149.png',
      description: 'Automated data integration for seamless data pipelines',
    },
    {
      name: 'Next.js',
      logo: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg',
      description: 'React framework for production-grade, fast, and scalable web applications.',
    },
    {
      name: 'AWS',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
      description: 'Comprehensive cloud platform offering computing power, storage, and content delivery.',
    },
    {
      name: 'Odoo',
      logo: 'https://cdn4.iconfinder.com/data/icons/logos-3/640/odoo_logo_rgb-512.png',
      description: 'Open-source business management software for ERP, CRM, accounting, e-commerce, inventory, and more.',
    },
  ];

  return (
    <Section
      id="tech-stack"
      title="Our Technology Stack"
      subtitle="Cutting-edge technologies powering our data solutions"
      className="bg-white text-black relative overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Technologies Grid */}
      <div className="flex flex-wrap justify-center gap-8 relative z-10">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-black transition-all duration-300 hover:-translate-y-2 flex flex-col items-center w-64"
          >
            <div className="h-16 flex items-center justify-center mb-4">
              <img src={tech.logo} alt={`${tech.name} logo`} className="h-full object-contain" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>
            <p className="text-gray-700">{tech.description}</p>
          </div>
        ))}
      </div>

      {/* Databricks CTA Section */}
      <div className="mt-16 flex justify-center relative z-10">
        <div className="bg-white p-10 rounded-2xl max-w-7xl w-full shadow-lg border border-gray-200 hover:border-black transition-all duration-300">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left Column */}
            <div className="flex-1 px-4 md:pr-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Elite Databricks Consulting Partner to turn data into AI-insights
              </h3>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Leverage the power of Databricks' data intelligence platform to start your AI-driven transformation today.
              </p>
              <button
                onClick={handleScrollToContact}
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition"
              >
                Talk to Databricks Experts
              </button>
            </div>

            {/* Right Column */}
            <div className="flex-1 px-4 mt-4 md:mt-0 flex flex-col items-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center">
                  <a
                    href="https://www.databricks.com/learn/certification/data-engineer-associate"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://www.databricks.com/sites/default/files/2024-05/associate-badge-de.png?v=1717145547"
                      alt="Data Engineer Associate Badge"
                      className="w-40 h-auto object-contain hover:scale-105 transition-transform"
                    />
                  </a>
                  <span className="mt-2 text-base font-semibold text-gray-900 text-center tracking-wide">
                    10+ Data Associative Engineers
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <a
                    href="https://www.databricks.com/learn/certification/data-engineer-professional"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://www.databricks.com/sites/default/files/2024-05/professional-badge-de.png?v=1717145841"
                      alt="Data Engineer Professional Badge"
                      className="w-40 h-auto object-contain hover:scale-105 transition-transform"
                    />
                  </a>
                  <span className="mt-2 text-base font-semibold text-gray-900 text-center tracking-wide">
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
