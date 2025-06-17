import React from 'react';
import {
  BarChart2,
  Database,
  ShieldCheck,
  Monitor,
  Cloud,
  Activity,
  Users,
  Briefcase,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  TrendingUp,
  Clock,
} from 'lucide-react';

const ServicesPage = () => {
  const servicesSections = [
    {
      id: 'data-strategy',
      icon: BarChart2,
      title: 'Data Strategy & Analytics',
      subtitle: 'Transform Raw Data Into Strategic Advantage',
      description: 'Unlock the full potential of your data with our comprehensive analytics and AI solutions. From predictive modeling to understanding customer behavior, we help you harness data power like never before. Our expert team develops tailored data roadmaps that align with your business objectives and drive measurable outcomes.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Advanced Predictive Analytics',
        'Real-time Data Processing',
        'Machine Learning Integration',
        'Custom Dashboard Development',
        'ROI-focused Insights'
      ],
      stats: [
        { label: 'Data Accuracy', value: '99.8%' },
        { label: 'Processing Speed', value: '10x Faster' },
        { label: 'Cost Reduction', value: '40%' }
      ]
    },
    {
      id: 'data-engineering',
      icon: Database,
      title: 'Data Engineering & Infrastructure',
      subtitle: 'Build Robust Data Foundations',
      description: 'Create scalable, reliable data infrastructures that grow with your organization. Our engineering solutions ensure your data flows seamlessly across all systems, providing the foundation for advanced analytics and business intelligence.',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Cloud-native Architecture',
        'Real-time Data Pipelines',
        'Automated Data Quality',
        'Scalable Storage Solutions',
        'API Integration'
      ],
      stats: [
        { label: 'Uptime Guarantee', value: '99.9%' },
        { label: 'Data Processing', value: '1TB/hour' },
        { label: 'Integration APIs', value: '500+' }
      ]
    },
    {
      id: 'data-governance',
      icon: ShieldCheck,
      title: 'Data Governance & Security',
      subtitle: 'Ensure Quality, Security & Compliance',
      description: 'Protect your most valuable asset with comprehensive data governance frameworks. We implement robust security measures, ensure regulatory compliance, and establish data quality standards that maintain integrity across your entire data ecosystem.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'GDPR & CCPA Compliance',
        'Data Quality Monitoring',
        'Role-based Access Control',
        'Audit Trail Management',
        'Risk Assessment Tools'
      ],
      stats: [
        { label: 'Security Score', value: '98%' },
        { label: 'Compliance Rate', value: '100%' },
        { label: 'Risk Reduction', value: '85%' }
      ]
    },
    {
      id: 'business-intelligence',
      icon: Monitor,
      title: 'Business Intelligence & Reporting',
      subtitle: 'Transform Data Into Actionable Insights',
      description: 'Empower decision-makers with intuitive dashboards and comprehensive reporting solutions. Our BI platforms provide real-time insights that drive strategic decisions and operational efficiency across your organization.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Interactive Dashboards',
        'Automated Reporting',
        'Mobile-first Design',
        'Self-service Analytics',
        'Advanced Visualizations'
      ],
      stats: [
        { label: 'Report Generation', value: '10x Faster' },
        { label: 'User Adoption', value: '95%' },
        { label: 'Decision Speed', value: '60% Faster' }
      ]
    },
    {
      id: 'cloud-migration',
      icon: Cloud,
      title: 'Cloud Migration & Modernization',
      subtitle: 'Modernize Your Data Infrastructure',
      description: 'Migrate to modern cloud platforms for enhanced performance, scalability, and cost-effectiveness. Our migration strategies ensure minimal downtime while maximizing the benefits of cloud-native technologies.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Zero-downtime Migration',
        'Multi-cloud Strategy',
        'Cost Optimization',
        'Security Enhancement',
        'Performance Monitoring'
      ],
      stats: [
        { label: 'Migration Success', value: '100%' },
        { label: 'Cost Savings', value: '50%' },
        { label: 'Performance Boost', value: '3x' }
      ]
    },
    {
      id: 'artificial-intelligence',
      icon: Activity,
      title: 'Artificial Intelligence & Machine Learning',
      subtitle: 'Innovate with AI-Powered Solutions',
      description: 'Harness the power of artificial intelligence to automate processes, predict outcomes, and create intelligent applications. Our AI solutions drive innovation and competitive advantage across industries.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Custom AI Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'Automated Decision Making'
      ],
      stats: [
        { label: 'Model Accuracy', value: '96%' },
        { label: 'Process Automation', value: '80%' },
        { label: 'Time Savings', value: '70%' }
      ]
    },
    {
      id: 'erp-planning',
      icon: Briefcase,
      title: 'ERP Evolution & Planning',
      subtitle: 'Streamline Business Operations',
      description: 'Say goodbye to clunky systems and hello to streamlined processes. Our ERP solutions are the future of business efficiency, offering seamless integration and unparalleled insights across the board.',
      image: 'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Integrated Business Processes',
        'Real-time Operations View',
        'Scalable Architecture',
        'Custom Workflows',
        'Mobile Accessibility'
      ],
      stats: [
        { label: 'Process Efficiency', value: '90%' },
        { label: 'Implementation Time', value: '60% Faster' },
        { label: 'User Satisfaction', value: '4.9/5' }
      ]
    },
    {
      id: 'staffing-solutions',
      icon: Users,
      title: 'Expert Staffing Solutions',
      subtitle: 'Build Your Dream Data Team',
      description: 'Access top-tier data professionals to strengthen your team. Our staffing solutions provide skilled experts who seamlessly integrate with your organization and drive your data initiatives forward.',
      image: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Vetted Data Specialists',
        'Flexible Engagement Models',
        'Rapid Team Scaling',
        'Skills Assessment',
        'Cultural Fit Evaluation'
      ],
      stats: [
        { label: 'Placement Success', value: '98%' },
        { label: 'Time to Hire', value: '14 Days' },
        { label: 'Retention Rate', value: '95%' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center bg-blue-700/30 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Star className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Enterprise-Grade Solutions</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Transform Your Business with Our Services
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Comprehensive technology solutions designed to accelerate your growth, optimize operations, and drive innovation across every aspect of your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Award className="h-5 w-5 mr-2 text-yellow-400" />
              <span className="text-sm">98% Success Rate</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <TrendingUp className="h-5 w-5 mr-2 text-green-400" />
              <span className="text-sm">500+ Projects Delivered</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Clock className="h-5 w-5 mr-2 text-blue-400" />
              <span className="text-sm">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Services Sections */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {servicesSections.map((service, index) => (
          <div key={service.id} className={`mb-20 ${index !== servicesSections.length - 1 ? 'border-b border-gray-100 pb-20' : ''}`}>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                    <p className="text-lg text-blue-600 font-medium">{service.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900">Key Features</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  {service.stats.map((stat, idx) => (
                    <div key={idx} className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our enterprise solutions can accelerate your growth and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg">
              <span>Schedule Consultation</span>
              <ArrowRight className="h-5 w-5 ml-2" />
            </button>
            <button className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-900 transition-all duration-200">
              <span>View Case Studies</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
