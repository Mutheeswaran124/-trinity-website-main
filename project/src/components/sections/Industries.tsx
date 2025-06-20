import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const Industries = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const industries = [
    {
      id: 'healthcare',
      name: 'Healthcare',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg',
      description: 'Helping healthcare providers improve patient outcomes through data-driven insights and predictive analytics.',
      caseStudy: 'Reduced hospital readmission rates by 25% through predictive analytics and patient risk profiling.',
      category: 'Medical Technology'
    },
    {
      id: 'finance',
      name: 'Finance',
      image: 'https://images.pexels.com/photos/210574/pexels-photo-210574.jpeg',
      description: 'Enabling financial institutions to make informed decisions, detect fraud, and enhance customer experiences.',
      caseStudy: 'Implemented real-time fraud detection system that reduced fraudulent transactions by 60% for a leading banking institution.',
      category: 'Financial Services'
    },
    {
      id: 'retail',
      name: 'Retail',
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg',
      description: 'Optimizing inventory management, personalizing customer experiences, and forecasting trends for retailers.',
      caseStudy: 'Developed demand forecasting model that improved inventory efficiency by 30% and reduced stockouts by 45%.',
      category: 'E-commerce'
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing',
      image: 'https://images.pexels.com/photos/3846508/pexels-photo-3846508.jpeg',
      description: 'Enhancing operational efficiency, quality control, and predictive maintenance in manufacturing processes.',
      caseStudy: 'Implemented IoT analytics platform resulting in 40% reduction in equipment downtime and 15% increase in production efficiency.',
      category: 'Industrial IoT'
    },
    {
      id: 'telecom',
      name: 'Telecommunications',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg',
      description: 'Optimizing network performance, customer segmentation, and service quality for telecom providers.',
      caseStudy: 'Reduced customer churn by 18% through predictive analytics and personalized retention strategies.',
      category: 'Network Solutions'
    },
    {
      id: 'it',
      name: 'Information Technology',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg',
      description: 'Providing innovative solutions for software development, cybersecurity, and IT infrastructure management.',
      caseStudy: 'Implemented AI-driven automation reducing IT support ticket volume by 50%.',
      category: 'Digital Innovation'
    },
    {
      id: 'bfsi',
      name: 'BFSI',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg',
      description: 'Supporting banking, financial services, and insurance firms with advanced risk management and analytics.',
      caseStudy: 'Enhanced customer experience through personalized AI-driven financial recommendations.',
      category: 'Banking & Insurance'
    },
    {
      id: 'engineering',
      name: 'Engineering',
      image: 'https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg',
      description: 'Driving innovation and efficiency in engineering sectors through smart design and data-driven processes.',
      caseStudy: 'Developed AI-powered design tools reducing prototyping time by 30%.',
      category: 'Smart Engineering'
    },
    {
      id: 'renewable',
      name: 'Renewable Energy',
      image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg',
      description: 'Leveraging data-driven insights to optimize sustainable energy solutions and reduce carbon footprints.',
      caseStudy: 'Developed predictive maintenance models reducing wind turbine downtime by 35%.',
      category: 'Clean Energy'
    },
    {
      id: 'oilgas',
      name: 'Oil & Gas',
      image: 'https://images.pexels.com/photos/3855961/pexels-photo-3855961.jpeg',
      description: 'Enhancing operational efficiency, risk management, and safety in oil and gas industries.',
      caseStudy: 'Implemented IoT-driven safety monitoring reducing hazardous incidents by 40%.',
      category: 'Energy Solutions'
    }
  ];

  const scrollToCard = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = 400;
      const scrollPosition = index * cardWidth;
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const handleNext = () => {
    const nextIndex = currentIndex < industries.length - 1 ? currentIndex + 1 : 0;
    scrollToCard(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : industries.length - 1;
    scrollToCard(prevIndex);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current.offsetLeft || 0);
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const scrollLeft = carouselRef.current.scrollLeft;
        const cardWidth = 400;
        const newIndex = Math.round(scrollLeft / cardWidth);
        setCurrentIndex(newIndex);
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll);
      return () => carousel.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Industries We
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Transform</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Delivering cutting-edge solutions across diverse sectors with data-driven insights and innovative technology
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-100"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-100"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Cards Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide pb-8 cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {industries.map((industry, index) => (
            <div
              key={industry.id}
              className={`min-w-[380px] h-[600px] rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer group relative overflow-hidden ${
                index === currentIndex ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
              }`}
              style={{
                backgroundImage: `url(${industry.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/90 group-hover:via-black/50 group-hover:to-black/30 transition-all duration-500"></div>
              
              {/* Card Content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-8 text-white">
                {/* Top Section - Category */}
                <div className="flex justify-between items-start">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                    <span className="text-sm font-medium text-white/90">{industry.category}</span>
                  </div>
                  <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                </div>

                {/* Bottom Section - Main Content */}
                <div className="space-y-6">
                  {/* Title */}
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-3 leading-tight">
                      {industry.name}
                    </h3>
                    <p className="text-white/90 text-lg leading-relaxed">
                      {industry.description}
                    </p>
                  </div>

                  {/* Case Study */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <h4 className="font-semibold text-white mb-3 flex items-center text-lg">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      Success Story
                    </h4>
                    <p className="text-white/90 text-sm leading-relaxed">{industry.caseStudy}</p>
                  </div>

                  {/* Action Button */}
                  <button className="flex items-center justify-center gap-3 bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-2xl hover:bg-white/30 transition-all duration-300 transform hover:scale-105 group/btn border border-white/30 w-full">
                    <span className="font-semibold text-lg">Learn More</span>
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {industries.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-blue-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;