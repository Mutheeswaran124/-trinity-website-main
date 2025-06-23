import React, { useState, useMemo } from 'react';
import { MapPin, Users, Building, Calendar, Globe, Zap, Shield, Cpu } from 'lucide-react';

interface TimelinePoint {
  id: string;
  year: string;
  city: string;
  country: string;
  isActive: boolean;
  flag: string;
  backgroundImage?: string;
}

interface TimelineProps {
  points: TimelinePoint[];
  onPointClick?: (point: TimelinePoint) => void;
}

const Timeline: React.FC<TimelineProps> = ({ points, onPointClick }) => {
  return (
    <div className="relative w-full bg-white/90 backdrop-blur-xl rounded-xl border border-gray-200 p-6 shadow-lg mb-8">
      {/* Timeline Line */}
      <div className="relative">
        <div className="absolute top-6 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-300 via-blue-500 to-gray-300"></div>
       
        {/* Timeline Points and Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {points.map((point, index) => (
            <div key={point.id} className="relative">
              {/* Year Label */}
              <div className="text-center mb-3">
                <span className="text-xl font-bold text-blue-600">{point.year}</span>
              </div>
             
              {/* Timeline Dot */}
              <div className="flex justify-center mb-4">
                <div
                  className={`relative w-3 h-3 rounded-full border-3 border-white cursor-pointer transition-all duration-300 transform hover:scale-125 shadow-lg ${
                    point.isActive
                      ? 'bg-blue-500 shadow-blue-500/50'
                      : 'bg-gray-400 hover:bg-blue-500'
                  }`}
                  onClick={() => onPointClick && onPointClick(point)}
                >
                  {point.isActive && (
                    <div className="absolute inset-0 w-3 h-3 bg-blue-500 rounded-full animate-ping opacity-75"></div>
                  )}
                </div>
              </div>
             
              {/* Location Card with Country Background */}
              <div
                className={`relative overflow-hidden rounded-lg border transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                  point.isActive
                    ? 'border-blue-300 shadow-lg shadow-blue-500/20'
                    : 'border-gray-200 hover:border-blue-300 hover:shadow-md hover:shadow-blue-500/10'
                }`}
                onClick={() => onPointClick && onPointClick(point)}
              >
                {/* Country Background Image */}
                <div className="relative h-24 overflow-hidden">
                  {point.backgroundImage && (
                    <img
                      src={point.backgroundImage}
                      alt={`${point.country} background`}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  )}
                 
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                 
                  {/* City skyline overlay for enhanced visual */}
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/40 to-transparent">
                    <div className="flex items-end justify-center h-full space-x-1 px-3">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="bg-white/30 rounded-t backdrop-blur-sm"
                          style={{
                            width: '4px',
                            height: `${Math.random() * 12 + 8}px`
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Active indicator overlay */}
                  {point.isActive && (
                    <div className="absolute top-2 right-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50"></div>
                    </div>
                  )}
                </div>
               
                {/* Card Content */}
                <div className={`p-3 transition-all duration-500 ${
                  point.isActive
                    ? 'bg-gradient-to-br from-blue-50 to-indigo-50'
                    : 'bg-white hover:bg-blue-50/50'
                }`}>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-gray-900 text-sm">{point.city}</h3>
                    <span className="text-lg filter drop-shadow-sm">{point.flag}</span>
                  </div>
                  <p className="text-gray-600 text-xs mb-2">{point.country}</p>
                 
                  {/* Active Indicator */}
                  {point.isActive && (
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-blue-600 font-medium">Active</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const locations = [
  {
    id: 'usa',
    name: 'United States',
    city: 'Plano, Texas',
    year: '2020',
    address: '300 Interpace Parkway, Plano, TX',
    coordinates: { lat: 33.019843, lng: -96.698885 },
    employees: '150+',
    services: ['Cloud Solutions', 'AI Development', 'Cybersecurity'],
    timezone: 'CST',
    description: 'Our flagship headquarters driving innovation in cloud technologies and AI solutions.',
    specialization: 'Enterprise Solutions',
    flag: '🇺🇸',
    backgroundImage: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
  },
  {
    id: 'chennai',
    name: 'India',
    city: 'Chennai, Tamil Nadu',
    year: '2021',
    address: 'Ambal Nagar, Ekkatuthangal, Chennai - 600044, Tamil Nadu',
    coordinates: { lat: 13.082680, lng: 80.270718 },
    employees: '200+',
    services: ['Software Development', 'Data Analytics', 'Mobile Apps'],
    timezone: 'IST',
    description: 'Our largest development center focusing on cutting-edge software solutions.',
    specialization: 'Development Hub',
    flag: '🇮🇳',
    backgroundImage: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
  },
  {
    id: 'oman',
    name: 'Oman',
    city: 'Muscat',
    year: '2022',
    address: 'Muscat, Oman',
    coordinates: { lat: 23.58589, lng: 58.40592 },
    employees: '50+',
    services: ['Digital Transformation', 'IT Consulting', 'Support'],
    timezone: 'GST',
    description: 'Strategic Middle East operations center providing regional expertise.',
    specialization: 'Consulting Services',
    flag: '🇴🇲',
    backgroundImage: 'https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
  },
  {
    id: 'netherlands',
    name: 'Netherlands',
    city: 'The Hague',
    year: '2023',
    address: 'The Hague, Netherlands',
    coordinates: { lat: 52.0704978, lng: 4.3006999 },
    employees: '75+',
    services: ['Fintech Solutions', 'Blockchain', 'IoT Development'],
    timezone: 'CET',
    description: 'European innovation center specializing in financial technology.',
    specialization: 'Fintech Innovation',
    flag: '🇳🇱',
    backgroundImage: 'https://images.pexels.com/photos/2031706/pexels-photo-2031706.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
  }
];

const GlobalPresence = () => {
  const [activeLocation, setActiveLocation] = useState('chennai');

  const timelinePoints = useMemo(() => {
    return locations.map(l => ({
      id: l.id,
      year: l.year,
      city: l.city,
      country: l.name,
      isActive: l.id === activeLocation,
      flag: l.flag,
      backgroundImage: l.backgroundImage
    }));
  }, [activeLocation]);

  const activeOffice = locations.find(l => l.id === activeLocation) || locations[1];

  const handleTimelineClick = (point: TimelinePoint) => {
    if (point.id) {
      setActiveLocation(point.id);
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-100/40 to-purple-100/40 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-100/40 to-indigo-100/40 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Compact Header */}
      <div className="relative z-10 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <Globe className="text-blue-600 mr-4 animate-spin-slow" size={40} />
              <div className="absolute inset-0 bg-blue-600 rounded-full blur-xl opacity-20 animate-pulse"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
              Global <span className="text-blue-600">Network</span>
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Powering digital transformation across four continents with cutting-edge technology
          </p>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Enhanced Timeline */}
        <Timeline points={timelinePoints} onPointClick={handleTimelineClick} />

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Office Selector Cards */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Zap className="mr-2 text-blue-600" size={20} />
              Locations
            </h3>
            {locations.map((location) => (
              <div
                key={location.id}
                className={`relative overflow-hidden rounded-lg border transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                  activeLocation === location.id
                    ? 'border-blue-300 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-lg shadow-blue-500/20'
                    : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md hover:shadow-blue-500/10'
                }`}
                onClick={() => setActiveLocation(location.id)}
              >
                {/* Background Image Preview */}
                <div className="absolute inset-0 opacity-5">
                  <img
                    src={location.backgroundImage}
                    alt={`${location.name} background`}
                    className="w-full h-full object-cover"
                  />
                </div>
               
                <div className="relative p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">{location.city}</h4>
                      <p className="text-gray-600 text-xs">{location.name}</p>
                      <p className="text-blue-600 text-xs font-medium mt-1">{location.specialization}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-blue-600 font-semibold text-sm">{location.year}</p>
                      <p className="text-gray-500 text-xs">{location.employees}</p>
                    </div>
                  </div>
                 
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${
                      activeLocation === location.id ? 'bg-blue-500 animate-pulse' : 'bg-gray-400'
                    }`}></div>
                    <span className="text-xs text-gray-500">{location.timezone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Office Details with Country Background */}
          <div className="lg:col-span-9">
            <div className="relative overflow-hidden bg-white/95 backdrop-blur-xl rounded-xl border border-gray-200 shadow-lg">
              {/* Country Background Image */}
              <div className="absolute inset-0">
                <img
                  src={activeOffice.backgroundImage}
                  alt={`${activeOffice.name} background`}
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/95"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white/90"></div>
              </div>

              <div className="relative z-10 p-6">
                {/* Office Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="text-3xl mr-3">{activeOffice.flag}</span>
                      <h2 className="text-2xl font-bold text-gray-900">{activeOffice.name} Hub</h2>
                    </div>
                    <p className="text-gray-700 font-medium">{activeOffice.description}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                    <span className="text-green-600 font-medium">Online</span>
                  </div>
                </div>

                {/* Office Stats Grid */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 p-4 rounded-lg bg-white/60 backdrop-blur-sm border border-white/30 shadow-sm">
                      <MapPin className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">Address</p>
                        <p className="text-gray-700 text-xs leading-relaxed">{activeOffice.address}</p>
                      </div>
                    </div>
                   
                    <div className="flex items-start space-x-3 p-4 rounded-lg bg-white/60 backdrop-blur-sm border border-white/30 shadow-sm">
                      <Calendar className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">Established</p>
                        <p className="text-gray-700 text-xs">{activeOffice.year}</p>
                      </div>
                    </div>
                  </div>
                 
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 p-4 rounded-lg bg-white/60 backdrop-blur-sm border border-white/30 shadow-sm">
                      <Users className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">Team Size</p>
                        <p className="text-gray-700 text-xs">{activeOffice.employees} professionals</p>
                      </div>
                    </div>
                   
                    <div className="flex items-start space-x-3 p-4 rounded-lg bg-white/60 backdrop-blur-sm border border-white/30 shadow-sm">
                      <Building className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">Timezone</p>
                        <p className="text-gray-700 text-xs">{activeOffice.timezone}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <Cpu className="mr-2 text-blue-600" size={18} />
                    Core Services
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeOffice.services.map((service, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 text-sm font-medium bg-white/70 backdrop-blur-sm text-blue-700 rounded-full border border-blue-200/50 hover:bg-white/80 hover:border-blue-300 transition-all duration-300 cursor-default shadow-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Global Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  {[
                    { label: 'Offices', value: '4', icon: Building },
                    { label: 'Team', value: '475+', icon: Users },
                    { label: 'Countries', value: '25+', icon: MapPin },
                    { label: 'Uptime', value: '99.9%', icon: Shield }
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="relative group bg-white/70 backdrop-blur-sm rounded-lg p-4 text-center border border-white/30 hover:border-blue-200 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10"
                    >
                      <div className="relative mb-2">
                        <stat.icon
                          className="text-blue-600 mx-auto group-hover:scale-110 transition-transform duration-300"
                          size={20}
                        />
                        <div className="absolute inset-0 bg-blue-600 rounded-full blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      </div>
                      <div className="text-xl font-bold text-gray-900 mb-1">{stat.value}</div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx >
        {`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default GlobalPresence;
