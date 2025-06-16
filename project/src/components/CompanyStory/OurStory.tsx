import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, Award, Target, Building2, Lightbulb, Heart, Globe, Users as TeamIcon, Database, Cloud, BarChart3, Brain, Monitor, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
  year: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "The Beginning",
    description: "Trinity Technology Solutions was founded in 2020 with a vision to revolutionize data engineering and analytics. Starting as a small team of passionate data experts in North America.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    year: "2020"
  },
  {
    id: 2,
    title: "First Major Partnership",
    description: "Became an official Databricks partner, establishing our credibility in the data lakehouse architecture space and securing our first 100 enterprise clients.",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    year: "2021"
  },
  {
    id: 3,
    title: "European Expansion",
    description: "Opened our European headquarters in London, establishing Trinity Europe Ltd. This marked our first international expansion and entry into the European market.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    year: "2022"
  },
  {
    id: 4,
    title: "Asian Market Entry",
    description: "Launched Trinity Asia-Pacific in Singapore, bringing our data solutions to the rapidly growing Asian market and establishing partnerships with local enterprises.",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
    year: "2023"
  },
  {
    id: 5,
    title: "African Operations",
    description: "Established Trinity Africa in Cape Town, completing our global presence across four continents and bringing advanced data solutions to emerging markets.",
    image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800",
    year: "2024"
  },
  {
    id: 6,
    title: "Global Leader",
    description: "By 2025, Trinity Technology Solutions has become a global leader with four companies across four continents, serving 500+ clients and employing 100+ data experts worldwide.",
    image: "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=800",
    year: "2025"
  }
];

const founders = [
  {
    name: "Dr. Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Former Director of Data Engineering at Microsoft Azure. PhD in Computer Science from Stanford. 15+ years experience building large-scale data systems.",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
    expertise: ["Data Architecture", "Cloud Computing", "Team Leadership"],
    services: [
      {
        icon: Database,
        title: "Data Architecture",
        description: "Designing scalable data systems and infrastructure for enterprise-level applications."
      },
      {
        icon: Cloud,
        title: "Strategic Leadership",
        description: "Leading global teams and driving innovation in data engineering solutions."
      }
    ]
  },
  {
    name: "Michael Rodriguez",
    role: "CTO & Co-Founder", 
    bio: "Ex-Principal Engineer at Google Cloud Platform. Expert in distributed systems and machine learning infrastructure. Author of 3 technical books.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
    expertise: ["Machine Learning", "Distributed Systems", "Innovation"],
    services: [
      {
        icon: Brain,
        title: "ML Infrastructure",
        description: "Building robust machine learning platforms and distributed computing systems."
      },
      {
        icon: Monitor,
        title: "Technical Innovation",
        description: "Pioneering new approaches to data processing and analytics technologies."
      }
    ]
  },
  {
    name: "Dr. Amara Okafor",
    role: "Chief Data Officer & Co-Founder",
    bio: "Former Lead Data Scientist at Netflix. PhD in Statistics from MIT. Pioneer in real-time analytics and predictive modeling for enterprise applications.",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
    expertise: ["Data Science", "Analytics", "Business Intelligence"],
    services: [
      {
        icon: BarChart3,
        title: "Data Science",
        description: "Advanced analytics and predictive modeling for business intelligence solutions."
      },
      {
        icon: Target,
        title: "Business Analytics",
        description: "Transforming raw data into actionable insights for strategic decision making."
      }
    ]
  }
];

const coreValues = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Pushing the boundaries of what's possible with data and technology"
  },
  {
    icon: Heart,
    title: "Excellence", 
    description: "Delivering exceptional quality in every project and client interaction"
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Creating solutions that make a difference across continents and cultures"
  },
  {
    icon: TeamIcon,
    title: "Collaboration",
    description: "Building strong partnerships with clients, partners, and our global team"
  }
];

const OurStory: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleBackClick = () => {
    navigate('/');
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

 // ...existing code...
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={handleBackClick}
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Home</span>
            </button>
            {/* Removed "Our Story" heading */}
            <div className="w-24"></div> {/* Spacer for alignment */}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-blue-400">
              Our Journey
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              From a small team of passionate data experts in 2020 to a global leader 
              with four companies across four continents by 2025.
            </p>
            <div className="flex flex-wrap justify-center gap-12 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-gray-400 font-medium">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">100+</div>
                <div className="text-gray-400 font-medium">Data Experts</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">4</div>
                <div className="text-gray-400 font-medium">Continents</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">10+</div>
                <div className="text-gray-400 font-medium">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ...rest of the code... */}

      {/* Company Timeline Slideshow */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Timeline
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience our journey through the years - from startup to global enterprise
            </p>
          </div>
          
          {/* Integrated Slideshow */}
          <div className="relative w-full h-96 md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
            {/* Slide Content */}
            <div className="relative w-full h-full">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className="max-w-4xl">
                      <div className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full mb-3">
                        {slide.year}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        {slide.title}
                      </h3>
                      <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-2xl">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-200 group"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-200 group"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-200"
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
            >
              {isPlaying ? (
                <Pause className="h-5 w-5" />
              ) : (
                <Play className="h-5 w-5" />
              )}
            </button>

            {/* Progress Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-white scale-110'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
              <div
                className="h-full bg-gradient-to-r from-blue-400 to-indigo-400 transition-all duration-5000 ease-linear"
                style={{
                  width: isPlaying ? `${((currentSlide + 1) / slides.length) * 100}%` : `${((currentSlide + 1) / slides.length) * 100}%`
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Trinity Technology Solutions was founded in 2020 with a clear vision: to democratize 
                access to advanced data engineering, analytics, and AI solutions for businesses worldwide. 
                What started as a small team of passionate data experts in North America has grown into 
                a global enterprise with four specialized companies across four continents.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                By 2025, we've successfully delivered over 500 projects, built a team of 100+ data experts, 
                and established ourselves as trusted partners with leading technology companies including 
                Databricks, AWS, Microsoft Azure, and many others.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <Target className="h-8 w-8 text-gray-700 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">2020</div>
                  <div className="text-sm text-gray-600 font-medium">Founded</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <Building2 className="h-8 w-8 text-gray-700 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">4</div>
                  <div className="text-sm text-gray-600 font-medium">Global Offices</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg border border-gray-200">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: 'url(https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=800)' }}
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Global Innovation Hub</h3>
                  <p className="text-gray-200">Connecting data solutions across continents</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Founders Section - Qlik-inspired Design */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Visionary leaders who transformed an idea into a global success story, bringing decades of experience from industry giants like Microsoft, Google, and Netflix.
            </p>
          </div>
          
          <div className="space-y-24">
            {founders.map((founder, index) => (
              <div key={founder.name} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Image Section */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="h-80 lg:h-full">
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${founder.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">
                          {founder.name}
                        </h3>
                        <p className="text-xl text-blue-600 font-semibold mb-4">
                          {founder.role}
                        </p>
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {founder.bio}
                        </p>
                      </div>

                      {/* Services */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {founder.services.map((service) => (
                          <div 
                            key={service.title}
                            className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all duration-300"
                          >
                            <div className="flex items-center space-x-3 mb-3">
                              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <service.icon className="h-5 w-5 text-blue-600" />
                              </div>
                              <h4 className="font-bold text-gray-900">
                                {service.title}
                              </h4>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Expertise Tags */}
                      <div className="space-y-3">
                        <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                          Core Expertise
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {founder.expertise.map((skill) => (
                            <span 
                              key={skill}
                              className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200 hover:bg-blue-100 transition-colors duration-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div 
                key={value.title}
                className="group text-center p-8 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-gray-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gray-900 rounded-lg flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;