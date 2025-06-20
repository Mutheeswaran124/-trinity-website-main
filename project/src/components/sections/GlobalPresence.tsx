import React, { useState, useMemo } from 'react';
import { MapPin, Users, Building, Calendar, Globe } from 'lucide-react';
import WorldMap from '../World-Map';

const locations = [
  {
    id: 'usa',
    name: 'United States',
    city: 'Plano, Texas',
    year: '2020',
    address: '300 Interpace Parkway, Plano, TX',
    coordinates: { lat: 33.019843, lng: -96.698885 }, // Plano, Texas, USA
    employees: '150+',
    services: ['Cloud Solutions', 'AI Development', 'Cybersecurity'],
    timezone: 'CST'
  },
  {
    id: 'chennai',
    name: 'India',
    city: 'Chennai, Tamil Nadu',
    year: '2021',
    address: 'Ambal Nagar, Ekkatuthangal, Chennai - 600044, Tamil Nadu',
    coordinates: { lat: 13.082680, lng: 80.270718 }, // Chennai, India
    employees: '200+',
    services: ['Software Development', 'Data Analytics', 'Mobile Apps'],
    timezone: 'IST'
  },
  {
    id: 'oman',
    name: 'Oman',
    city: 'Muscat',
    year: '2022',
    address: 'Muscat, Oman',
    coordinates: { lat: 23.58589, lng: 58.40592 }, // Muscat, Oman
    employees: '50+',
    services: ['Digital Transformation', 'IT Consulting', 'Support'],
    timezone: 'GST'
  },
  {
    id: 'netherlands',
    name: 'Netherlands',
    city: 'The Hague',
    year: '2023',
    address: 'The Hague, Netherlands',
    coordinates: { lat: 52.0704978, lng: 4.3006999 }, // The Hague, Netherlands
    employees: '75+',
    services: ['Fintech Solutions', 'Blockchain', 'IoT Development'],
    timezone: 'CET'
  }
];

const GlobalPresence = () => {
  const [activeLocation, setActiveLocation] = useState('usa');

  // For highlighting the active office on the map
  const mapDots = useMemo(() => {
    return locations.map(l => ({
      lat: l.coordinates.lat,
      lng: l.coordinates.lng,
      isActive: l.id === activeLocation,
      label: l.city.split(',')[0] // Show only city name on map
    }));
  }, [activeLocation]);

  const activeOffice = locations.find(l => l.id === activeLocation) || locations[0];

 return (
  <div className="min-h-screen bg-white relative overflow-hidden">
    {/* Animated Background Elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute top-40 left-40 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob animation-delay-4000"></div>
    </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <Globe className="text-blue-600 mr-3 animate-spin-slow" size={48} />
                <div className="absolute inset-0 bg-blue-600 rounded-full blur-lg opacity-20 animate-pulse"></div>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                Global <span className="text-gray-400 font-light">Presence</span>
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Delivering excellence across continents with local expertise and global insights
            </p>
          </div>

          {/* World Map */}
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/20 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-3xl"></div>
            <div className="relative z-10">
              <WorldMap points={mapDots} />
            </div>
          </div>

          {/* Office Details Panel */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 p-8 mb-12 shadow-xl">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Office Info */}
              <div className="lg:col-span-2">
                <div className="flex items-center mb-6">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mr-4 animate-pulse shadow-lg shadow-blue-500/50"></div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                    {activeOffice.name} Hub
                  </h3>
                  <span className="ml-4 px-4 py-2 text-xs font-medium bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full border border-blue-200 shadow-sm">
                    {activeOffice.timezone}
                  </span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-4 rounded-lg bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-100">
                      <MapPin className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-semibold text-gray-900">Location</p>
                        <p className="text-gray-600">{activeOffice.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 p-4 rounded-lg bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-100">
                      <Calendar className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-semibold text-gray-900">Established</p>
                        <p className="text-gray-600">{activeOffice.year}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-4 rounded-lg bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-100">
                      <Users className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-semibold text-gray-900">Team Size</p>
                        <p className="text-gray-600">{activeOffice.employees} professionals</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 p-4 rounded-lg bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-100">
                      <Building className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-semibold text-gray-900">Expertise</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {activeOffice.services.map((service, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full border border-blue-200 shadow-sm hover:shadow-md transition-shadow"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Selector */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <Globe className="mr-2 text-blue-500" size={20} />
                  Network Hubs
                </h4>
                {locations.map((location) => (
                  <button
                    key={location.id}
                    className={`w-full text-left p-4 rounded-lg border transition-all duration-300 transform hover:scale-105 ${
                      activeLocation === location.id
                        ? 'border-blue-300 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-lg shadow-blue-500/20'
                        : 'border-gray-200 hover:border-blue-200 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 hover:shadow-md'
                    }`}
                    onClick={() => setActiveLocation(location.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-900">{location.city}</p>
                        <p className="text-sm text-gray-500">{location.name}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-blue-600">{location.year}</p>
                        <p className="text-xs text-gray-400">{location.employees}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Global Network Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Global Hubs', value: '4', icon: Building, color: 'blue' },
              { label: 'Team Members', value: '475+', icon: Users, color: 'blue' },
              { label: 'Countries Served', value: '25+', icon: MapPin, color: 'blue' },
              { label: 'Network Uptime', value: '99.9%', icon: Globe, color: 'blue' }
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:border-blue-200 transition-all duration-300 group hover:shadow-xl transform hover:scale-105"
              >
                <div className="relative">
                  <stat.icon 
                    className="text-blue-500 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" 
                    size={32} 
                  />
                  <div className="absolute inset-0 bg-blue-500 rounded-full blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GlobalPresence;