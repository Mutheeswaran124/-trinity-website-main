import React from 'react';
import {
  Users,
  TrendingUp,
  Globe,
  Database,
  Target,
  BarChart3,
  Shield,
  Sparkles,
  CheckCircle,
  Award,
  Clock,
  Headphones
} from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Projects Delivered', color: 'from-blue-500 to-purple-600' },
    { icon: TrendingUp, value: '9+', label: 'Years of Experience', color: 'from-purple-500 to-pink-600' },
    { icon: Globe, value: '10+', label: 'Countries Served', color: 'from-pink-500 to-red-600' },
    { icon: Database, value: '100+', label: 'Data Experts', color: 'from-red-500 to-orange-600' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Every solution is designed to deliver measurable business outcomes and drive growth.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: BarChart3,
      title: 'Data-Obsessed',
      description: 'We leverage advanced analytics and AI to transform your data into actionable insights.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Shield,
      title: 'Client-First',
      description: 'Your success is our priority. We build long-term partnerships, not just projects.',
      color: 'from-pink-500 to-red-600'
    },
    {
      icon: Sparkles,
      title: 'Innovation-Led',
      description: 'Cutting-edge technology and creative solutions that keep you ahead of the curve.',
      color: 'from-red-500 to-orange-600'
    }
  ];

  const clientBenefits = [
    { icon: CheckCircle, text: 'Certified Databricks Partnership & expertise', color: 'text-green-500' },
    { icon: Award, text: 'Dedicated data engineering specialists for every project', color: 'text-blue-500' },
    { icon: Clock, text: 'Agile delivery with transparent project management', color: 'text-purple-500' },
    { icon: Headphones, text: '24/7 support and strategic consultation calls', color: 'text-pink-500' },
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="flex flex-col items-center mb-8">
            <img
              src="https://trinitetech.com/wp-content/uploads/2024/02/Trinity-Logo-1.svg"
              alt="Trinity Logo"
              className="h-16 mb-6 filter brightness-0 invert hue-rotate-180 saturate-200"
            />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              We're Not Your
              <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Average Agency
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're data engineers, cloud architects, analytics specialists, and digital transformation experts all
              rolled into one unstoppable team.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Mission: Digital Transformation That
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Actually Works
              </span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Founded in 2020, Trinity Technology Solution LLC has been at the forefront of digital transformation,
              helping enterprises harness the power of data analytics and cloud solutions. We don't just build systems;
              we build futures.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              As a certified Databricks partner, we specialize in data engineering, analytics, and AI solutions that
              drive business growth and operational efficiency. Our expertise spans across cloud migration, data governance,
              and enterprise-scale digital transformation initiatives.
            </p>

            {/* Our Promise Card */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Promise</h3>
              <p className="text-gray-700 italic mb-4">
                "We don't get paid unless you grow. Every strategy, every solution, every optimization is designed
                to move your most important business metrics."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  TT
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Trinity Technology Team</div>
                  <div className="text-sm text-gray-600">Founders & Technology Partners</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-3">Why Clients Choose Us</h4>
              <div className="space-y-3">
                {clientBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <benefit.icon className={`w-5 h-5 ${benefit.color}`} />
                    <span className="text-sm text-gray-700">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Partnership Highlight */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 mb-24 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Official Databricks Partner</h3>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Our strategic partnership with Databricks enables us to deliver cutting-edge lakehouse architecture
            and advanced analytics solutions that transform how organizations leverage their data assets.
          </p>
        </div>

        {/* Values Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Makes Us Different</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our core values drive everything we do, ensuring exceptional results for every client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="group">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
