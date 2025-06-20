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
      icon: <LineChart size={48} className="text-white mb-4" />,
      title: 'Data Strategy',
      description: 'Crafting tailored data roadmaps to align with your business objectives and drive meaningful outcomes.',
      imageUrl: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      icon: <Database size={48} className="text-white mb-4" />,
      title: 'Data Engineering',
      description: 'Building robust data infrastructures for seamless data flow, processing, and management across your organization.',
      imageUrl: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      icon: <ShieldCheck size={48} className="text-white mb-4" />,
      title: 'Data Governance & Management',
      description: 'Ensuring data quality, security, and compliance with industry regulations and organizational policies.',
      imageUrl: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      icon: <BarChart size={48} className="text-white mb-4" />,
      title: 'Business Intelligence',
      description: 'Transforming data into actionable insights for informed decision-making through advanced analytics and reporting.',
      imageUrl: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      icon: <Cloud size={48} className="text-white mb-4" />,
      title: 'Data Migration and Modernization',
      description: 'Transitioning legacy systems to modern data platforms for improved performance, scalability, and cost-efficiency.',
      imageUrl: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      icon: <BrainCircuit size={48} className="text-white mb-4" />,
      title: 'Artificial Intelligence',
      description: 'Implementing AI solutions to drive innovation, automate processes, and uncover hidden patterns in your data.',
      imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      icon: <Users size={48} className="text-white mb-4" />,
      title: 'Staffing Solutions',
      description: 'Providing skilled data professionals to augment your team and accelerate project delivery with flexible staffing models.',
      imageUrl: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      icon: <Briefcase size={48} className="text-white mb-4" />,
      title: 'ERP Planning',
      description: 'Streamlining business processes and integrating core functions with tailored ERP solutions for operational efficiency.',
      imageUrl: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
  ];

  return (
    <Section
      id="services"
      title="Our Services"
      subtitle="Comprehensive data solutions tailored to your business needs"
      className="bg-gray-50 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-8 relative mx-auto max-w-6xl min-h-[800px]">
            {/* Center Animation - Your Original Lottie */}
            <div className="col-start-2 row-start-2 flex justify-center items-center z-20">
              <div className="relative">
                <DotLottieReact
                  src="https://lottie.host/abc637a9-8669-4167-9d37-f39faecbf35a/phzPSr5Ebn.lottie"
                  loop
                  autoplay
                  style={{ width: 320, height: 320 }}
                />
              </div>
            </div>
            
            {/* Service Cards */}
            {services.map((service, idx) => {
              let colStart, rowStart;
              
              if (idx === 0) { colStart = 1; rowStart = 1; }
              else if (idx === 1) { colStart = 2; rowStart = 1; }
              else if (idx === 2) { colStart = 3; rowStart = 1; }
              else if (idx === 3) { colStart = 1; rowStart = 2; }
              else if (idx === 4) { colStart = 3; rowStart = 2; }
              else if (idx === 5) { colStart = 1; rowStart = 3; }
              else if (idx === 6) { colStart = 2; rowStart = 3; }
              else { colStart = 3; rowStart = 3; }
              
              return (
                <div
                  key={service.title}
                  style={{ gridColumn: colStart, gridRow: rowStart }}
                  className="h-80"
                >
                  <DirectionAwareHover
                    imageUrl={service.imageUrl}
                    className="h-full shadow-xl hover:shadow-2xl transition-shadow duration-300"
                  >
                    <div className="p-6 flex flex-col justify-center items-center text-center h-full relative z-10">
                      <div className="flex justify-center items-center mb-4">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white">
                        {service.title}
                      </h3>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </DirectionAwareHover>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Tablet Layout */}
        <div className="hidden md:block lg:hidden">
          {/* Center Animation for Tablet */}
          <div className="flex justify-center items-center mb-8">
            <DotLottieReact
              src="https://lottie.host/abc637a9-8669-4167-9d37-f39faecbf35a/phzPSr5Ebn.lottie"
              loop
              autoplay
              style={{ width: 280, height: 280 }}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((service) => (
              <DirectionAwareHover
                key={service.title}
                imageUrl={service.imageUrl}
                className="h-72 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="p-6 flex flex-col justify-center items-center text-center h-full">
                  <div className="flex justify-center items-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </DirectionAwareHover>
            ))}
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
          
          <div className="grid grid-cols-1 gap-6 max-w-sm mx-auto">
            {services.map((service) => (
              <DirectionAwareHover
                key={service.title}
                imageUrl={service.imageUrl}
                className="h-64 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="p-4 flex flex-col justify-center items-center text-center h-full">
                  <div className="flex justify-center items-center mb-3">
                    <div className="scale-75">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">
                    {service.title}
                  </h3>
                  <p className="text-white/90 text-xs leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </DirectionAwareHover>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;