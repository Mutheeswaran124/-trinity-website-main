import React, { useState } from 'react';
import Section from '../ui/Section';
import { MapPin } from 'lucide-react';

const GlobalPresence = () => {
  const [activeLocation, setActiveLocation] = useState('usa');

  const locations = [
    {
      id: 'usa',
      name: 'United States',
      city: 'Plano, Texas',
      year: '2020',
      address: '300 Interpace Parkway, Plano, TX',
      coordinates: { x: '25%', y: '40%' },
      image: 'https://content.civicplus.com/api/assets/5d325e2d-432a-4e7b-aaed-f9d662512dc5?cache=1800'
    },
    {
      id: 'india',
      name: 'India',
      city: 'Chennai',
      year: '2021',
      address: 'ambal nagar, ekkatuthangal, Chennai - 600044',
      coordinates: { x: '67%', y: '51%' },
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Tidel_Park.jpg/500px-Tidel_Park.jpg'
    },
    {
      id: 'oman',
      name: 'Oman',
      city: 'Muscat',
      year: '2022',
      address: ' Muscat, Oman',
      coordinates: { x: '58%', y: '48%' },
      image: 'https://cdn.britannica.com/70/188370-050-EE6758B6/Muscat-Oman.jpg'
    },
    {
      id: 'netherlands',
      name: 'Netherlands',
      city: 'Hague',
      year: '2023',
      address: 'The Hague, Netherlands',
      coordinates: { x: '70%', y: '55%' },
      image: 'https://cdn.britannica.com/89/102289-050-EF27EAA0/Hague-Neth.jpg'
    }
  ];

  const activeOffice = locations.find(l => l.id === activeLocation) || locations[0];

  return (
    <Section 
      id="global-presence" 
      title={<span className="text-black">Our Global Presence</span>}
      subtitle={<span className="text-black">Delivering excellence across continents with local expertise and global insights</span>}
      className="bg-white text-black"
    >
      {/* Timeline */}
      <div className="relative mb-16">
        <div className="flex justify-between items-center mb-8">
          {locations.map((location, index) => (
            <div 
              key={location.id}
              className="flex-1 text-center relative"
              onClick={() => setActiveLocation(location.id)}
            >
              <div 
                className={`
                  w-8 h-8 rounded-full mx-auto mb-2 cursor-pointer
                  flex items-center justify-center
                  ${activeLocation === location.id 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-blue-200 hover:bg-blue-300'
                  }
                  transition-all duration-300
                `}
              >
                <div className="w-3 h-3 rounded-full bg-white" />
              </div>
              <div className="text-xl font-bold text-black">{location.year}</div>
              <div className="mt-2 font-medium text-black">{location.city}</div>
              <div className="text-sm text-gray-700">{location.name}</div>
              {index < locations.length - 1 && (
                <div className="absolute top-3 left-[50%] w-full h-[2px] bg-blue-200" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Map and Office Details */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
          <img 
            src={activeOffice.image}
            alt={`${activeOffice.city} office`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl font-bold mb-2 text-white">{activeOffice.city}</h3>
            <p className="text-white">{activeOffice.address}</p>
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <div className="flex items-center mb-6">
            <MapPin size={24} className="text-blue-600 mr-2" />
            <h3 className="text-2xl font-bold text-black">
              {activeOffice.name} Office
            </h3>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-black mb-2">Address</h4>
              <p className="text-gray-700">{activeOffice.address}</p>
            </div>

            <div>
              <h4 className="font-semibold text-black mb-2">Contact</h4>
              <p className="text-gray-700">Phone: +1 (234) 567-890</p>
              <p className="text-gray-700">Email: info@trinitytechsolutions.com</p>
            </div>

            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Get Directions
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Location Selector */}
      <div className="flex flex-wrap justify-center gap-2 mt-8 md:hidden">
        {locations.map((location) => (
          <button
            key={location.id}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeLocation === location.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-black hover:bg-gray-300'
            }`}
            onClick={() => setActiveLocation(location.id)}
          >
            {location.city}
          </button>
        ))}
      </div>
    </Section>
  );
};

export default GlobalPresence;