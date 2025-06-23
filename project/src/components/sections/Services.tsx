import React from 'react';
import Section from '../ui /Section';
import DirectionAwareHover from '../ui /DirectionAwareHover';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
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

const Services = () => {
  const services = [
    {
      icon: <LineChart size={32} className="text-white mb-1" />,
      title: 'Data Strategy',
      description: 'Crafting tailored data roadmaps to align with your business objectives.',
      imageUrl: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=640',
    },
    {
      icon: <Database size={32} className="text-white mb-1" />,
      title: 'Data Engineering',
      description: 'Building robust data infrastructures for smooth flow and processing.',
      imageUrl: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=640',
    },
    {
      icon: <ShieldCheck size={32} className="text-white mb-1" />,
      title: 'Data Governance',
      description: 'Ensuring data quality, security, and compliance.',
      imageUrl: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=640',
    },
    {
      icon: <BarChart size={32} className="text-white mb-1" />,
      title: 'Business Intelligence',
      description: 'Transforming data into insights for decision-making.',
      imageUrl: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=640',
    },
    {
      icon: <Cloud size={32} className="text-white mb-1" />,
      title: 'Data Modernization',
      description: 'Upgrading systems for better performance and scalability.',
      imageUrl: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=640',
    },
    {
      icon: <BrainCircuit size={32} className="text-white mb-1" />,
      title: 'AI Solutions',
      description: 'Applying AI to automate and reveal insights.',
      imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=640',
    },
    {
      icon: <Users size={32} className="text-white mb-1" />,
      title: 'Staffing Solutions',
      description: 'Providing data experts to extend your team.',
      imageUrl: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=640',
    },
    {
      icon: <Briefcase size={32} className="text-white mb-1" />,
      title: 'ERP Planning',
      description: 'Integrating business processes for efficiency.',
      imageUrl: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=640',
    },
  ];

  return (
    <Section
      id="services"
      title="Our Services"
      subtitle="Compact, powerful solutions tailored to your data-driven growth"
      className="bg-gray-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl opacity-10 animate-pulse" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-52 h-52 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-2 py-6 relative z-10">
        {/* Desktop */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 grid-rows-3 gap-4 max-w-5xl mx-auto min-h-[500px]">
            {/* Center Lottie */}
            <div className="col-start-2 row-start-2 flex justify-center items-center z-10">
              <DotLottieReact
                src="https://lottie.host/abc637a9-8669-4167-9d37-f39faecbf35a/phzPSr5Ebn.lottie"
                loop
                autoplay
                style={{ width: 160, height: 160 }}
              />
            </div>

            {/* Manually placing each service */}
            <div className="col-start-1 row-start-1 h-48">
              <DirectionAwareHover imageUrl={services[0].imageUrl} className="h-full shadow-md">
                <ServiceCard service={services[0]} />
              </DirectionAwareHover>
            </div>

            <div className="col-start-2 row-start-1 h-48">
              <DirectionAwareHover imageUrl={services[1].imageUrl} className="h-full shadow-md">
                <ServiceCard service={services[1]} />
              </DirectionAwareHover>
            </div>

            <div className="col-start-3 row-start-1 h-48">
              <DirectionAwareHover imageUrl={services[2].imageUrl} className="h-full shadow-md">
                <ServiceCard service={services[2]} />
              </DirectionAwareHover>
            </div>

            <div className="col-start-1 row-start-2 h-48">
              <DirectionAwareHover imageUrl={services[3].imageUrl} className="h-full shadow-md">
                <ServiceCard service={services[3]} />
              </DirectionAwareHover>
            </div>

            <div className="col-start-3 row-start-2 h-48">
              <DirectionAwareHover imageUrl={services[4].imageUrl} className="h-full shadow-md">
                <ServiceCard service={services[4]} />
              </DirectionAwareHover>
            </div>

            <div className="col-start-1 row-start-3 h-48">
              <DirectionAwareHover imageUrl={services[5].imageUrl} className="h-full shadow-md">
                <ServiceCard service={services[5]} />
              </DirectionAwareHover>
            </div>

            <div className="col-start-2 row-start-3 h-48">
              <DirectionAwareHover imageUrl={services[6].imageUrl} className="h-full shadow-md">
                <ServiceCard service={services[6]} />
              </DirectionAwareHover>
            </div>

            <div className="col-start-3 row-start-3 h-48">
              <DirectionAwareHover imageUrl={services[7].imageUrl} className="h-full shadow-md">
                <ServiceCard service={services[7]} />
              </DirectionAwareHover>
            </div>
          </div>
        </div>

        {/* Tablet & Mobile fallback */}
        <div className="lg:hidden">
          <div className="flex justify-center mb-4">
            <DotLottieReact
              src="https://lottie.host/abc637a9-8669-4167-9d37-f39faecbf35a/phzPSr5Ebn.lottie"
              loop
              autoplay
              style={{ width: 140, height: 140 }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {services.map((service) => (
              <DirectionAwareHover
                key={service.title}
                imageUrl={service.imageUrl}
                className="h-44 shadow-md"
              >
                <ServiceCard service={service} />
              </DirectionAwareHover>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

const ServiceCard = ({ service }) => (
  <div className="p-3 flex flex-col items-center text-center h-full">
    {service.icon}
    <h3 className="text-sm font-semibold text-white mt-1">{service.title}</h3>
    <p className="text-white/80 text-xs mt-1">{service.description}</p>
  </div>
);

export default Services;
