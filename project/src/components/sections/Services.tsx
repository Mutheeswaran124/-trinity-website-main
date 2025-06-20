import React from 'react';
import Section from '../ui /Section';
import {
  LineChart,
  Database,
  ShieldCheck,
  BarChart,
  Cloud,
  BrainCircuit,
  Users,
  Briefcase,
} from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import service from '../../animations/service.lottie?url'

const Services = () => {
  const services = [
    {
      icon: <LineChart size={48} className="text-blue-600" />,
      title: 'Data Strategy',
      description:
        'Crafting tailored data roadmaps to align with your business objectives and drive meaningful outcomes.',
    },
    {
      icon: <Database size={48} className="text-blue-600" />,
      title: 'Data Engineering',
      description:
        'Building robust data infrastructures for seamless data flow, processing, and management across your organization.',
    },
    {
      icon: <ShieldCheck size={48} className="text-blue-600" />,
      title: 'Data Governance & Management',
      description:
        'Ensuring data quality, security, and compliance with industry regulations and organizational policies.',
    },
    {
      icon: <BarChart size={48} className="text-blue-600" />,
      title: 'Business Intelligence',
      description:
        'Transforming data into actionable insights for informed decision-making through advanced analytics and reporting.',
    },
    {
      icon: <Cloud size={48} className="text-blue-600" />,
      title: 'Data Migration and Modernization',
      description:
        'Transitioning legacy systems to modern data platforms for improved performance, scalability, and cost-efficiency.',
    },
    {
      icon: <BrainCircuit size={48} className="text-blue-600" />,
      title: 'Artificial Intelligence',
      description:
        'Implementing AI solutions to drive innovation, automate processes, and uncover hidden patterns in your data.',
    },
    {
      icon: <Users size={48} className="text-blue-600" />,
      title: 'Staffing Solutions',
      description:
        'Providing skilled data professionals to augment your team and accelerate project delivery with flexible staffing models.',
    },
    {
      icon: <Briefcase size={48} className="text-blue-600" />,
      title: 'ERP Planning',
      description:
        'Streamlining business processes and integrating core functions with tailored ERP solutions for operational efficiency.',
    },
  ];

  return (
    <Section
      id="services"
      title="Our Services"
      subtitle="Comprehensive data solutions tailored to your business needs"
      className="bg-gray-50 relative overflow-hidden"
    >
      {/* Blurred animated background blobs */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
    <div className="absolute top-40 left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
</div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Desktop Layout - Grid with centered animation */}
        <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-6 md:gap-8 relative mx-auto max-w-6xl">
            {/* Animation in center */}
            <div className="col-start-2 row-start-2 flex justify-center items-center z-20">
              <DotLottieReact
                src={service}
                loop
                autoplay
                style={{ width: 320, height: 320 }}
              />
            </div>
            
            {/* Service Cards in a grid around the animation */}
            {services.map((service, idx) => {
              // Calculate grid position for each card
              let colStart, rowStart;
              
              // Top row
              if (idx === 0) { colStart = 1; rowStart = 1; }
              else if (idx === 1) { colStart = 2; rowStart = 1; }
              else if (idx === 2) { colStart = 3; rowStart = 1; }
              // Middle row (excluding center)
              else if (idx === 3) { colStart = 1; rowStart = 2; }
              else if (idx === 4) { colStart = 3; rowStart = 2; }
              // Bottom row
              else if (idx === 5) { colStart = 1; rowStart = 3; }
              else if (idx === 6) { colStart = 2; rowStart = 3; }
              else { colStart = 3; rowStart = 3; }
              
              return (
                <div
                  key={service.title}
                  style={{ gridColumn: colStart, gridRow: rowStart }}
                >
                  <div className="h-64 md:h-72 overflow-hidden bg-white rounded-lg shadow-lg group hover:cursor-pointer border border-transparent hover:border-2 hover:border-blue-600 transition-all duration-300 relative hover:shadow-2xl">
                    {/* Frosted Overlay */}
                    <div className="absolute inset-0 bg-white/40 backdrop-blur-[30px] z-10 rounded-lg pointer-events-none"></div>
                    {/* Card Content */}
                    <div className="relative z-20 p-4 md:p-6 flex flex-col justify-center items-center text-gray-900 h-full">
                      <div className="mb-4 flex justify-center items-center w-full">{service.icon}</div>
                      <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
                      <p className="text-sm text-gray-700 text-center">{service.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Center Animation for Mobile */}
          <div className="flex justify-center items-center mb-8">
            <DotLottieReact
              src="https://lottie.host/abc637a9-8669-4167-9d37-f39faecbf35a/phzPSr5Ebn.lottie"
              loop
              autoplay
              style={{ width: 200, height: 200 }}
            />
          </div>
          
          {/* Service Cards Grid for Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {services.map((service) => (
              <div
                key={service.title}
                className="relative h-60 overflow-hidden bg-white rounded-lg shadow-lg group hover:cursor-pointer border border-transparent hover:border-2 hover:border-blue-600 transition-all duration-300"
              >
                {/* Frosted Overlay */}
                <div className="absolute inset-0 bg-white/40 backdrop-blur-[30px] z-10 rounded-lg pointer-events-none"></div>
                {/* Card Content */}
                <div className="relative z-20 p-4 flex flex-col justify-center items-center text-gray-900 h-full">
                  <div className="mb-2 flex justify-center items-center w-full">{service.icon}</div>
                  <h3 className="text-lg font-semibold mb-1 text-center">{service.title}</h3>
                  <p className="text-xs text-gray-700 text-center">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;