import React, { useState } from 'react';
import { 
  MapPin, DollarSign, Users, Heart, ArrowRight, Star, Briefcase,
  ChevronDown, ChevronUp, UserPlus, Search, Building, Award, X,
  User, Mail, MessageSquare 
} from 'lucide-react';

// Job Listings Data
const jobListings = [
  {
    title: 'Senior React Developer',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120k - $160k',
    level: 'Senior',
    href: '#job-1',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'DevOps Engineer',
    location: 'Remote',
    type: 'Full-time',
    salary: '$110k - $140k',
    level: 'Mid-level',
    href: '#job-2',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'Frontend Intern',
    location: 'San Francisco, CA',
    type: 'Internship',
    salary: '$25/hour',
    level: 'Entry',
    href: '#job-3',
    image: 'https://images.pexels.com/photos/3803517/pexels-photo-3803517.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
];

// Company Stats and Perks Data
const companyStats = [
  { number: '50+', label: 'Team Members', icon: Users },
  { number: '4.8/5', label: 'Employee Rating', icon: Star },
  { number: '95%', label: 'Retention Rate', icon: Heart },
];

const companyPerks = {
  title: 'Why Join Us?',
  description: 'Work in a dynamic environment where innovation thrives!',
  image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
  benefits: ['Health Insurance', '$3,000 Learning Budget', 'Flexible Work Arrangements', 'Unlimited PTO']
};

const jobCategories = [
  { name: 'Engineering', count: 12, icon: Building },
  { name: 'Design', count: 5, icon: Award },
  { name: 'Marketing', count: 8, icon: Users },
  { name: 'Sales', count: 6, icon: Star },
];

const MegaMenuCareers = () => {
  const [isJobSearchOpen, setIsJobSearchOpen] = useState(false);
  const [showChoosePathModal, setShowChoosePathModal] = useState(false);
  const [showJoinTeamModal, setShowJoinTeamModal] = useState(false);
  const [showApplyJobModal, setShowApplyJobModal] = useState(false);

  const toggleJobSearch = () => {
    setIsJobSearchOpen(!isJobSearchOpen);
  };

  const openChoosePathModal = () => {
    setShowChoosePathModal(true);
  };

  const closeAllModals = () => {
    setShowChoosePathModal(false);
    setShowJoinTeamModal(false);
    setShowApplyJobModal(false);
  };

  const openJoinTeamModal = () => {
    setShowJoinTeamModal(true);
    setShowChoosePathModal(false);
  };

  const openApplyJobModal = () => {
    setShowApplyJobModal(true);
    setShowChoosePathModal(false);
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-12 gap-6 p-6 bg-gray-50 rounded-xl shadow-md">
        {/* Job Listings */}
        <div className="col-span-5 bg-white p-5 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <Briefcase className="h-5 w-5 mr-2 text-blue-600" />
            Open Positions
          </h3>
          <div className="space-y-3">
            {jobListings.map((job) => (
              <a key={job.title} href={job.href} className="flex items-center space-x-4 p-3 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 group">
                <img src={job.image} alt={job.title} className="w-16 h-16 object-cover rounded-lg shadow-sm group-hover:shadow-md transition-shadow" />
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">{job.title}</h4>
                  <p className="text-xs text-gray-600 flex items-center mb-1">
                    <MapPin className="h-3 w-3 mr-1" /> {job.location}
                  </p>
                  <p className="text-xs text-gray-600 flex items-center">
                    <DollarSign className="h-3 w-3 mr-1" /> {job.salary}
                  </p>
                </div>
                <div className="text-blue-600 text-xs font-medium flex items-center group-hover:text-blue-700">
                  <span>Apply</span>
                  <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Company Perks & Stats */}
        <div className="col-span-4 bg-white p-5 rounded-lg shadow-sm border border-gray-100">
          <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
            <Heart className="h-5 w-5 mr-2 text-red-500" />
            {companyPerks.title}
          </h4>
          <p className="text-sm text-gray-600 mb-4">{companyPerks.description}</p>
          <div className="grid grid-cols-3 gap-2 mb-4">
            {companyStats.map((stat) => (
              <div key={stat.label} className="text-center p-2 bg-gray-50 rounded-lg">
                <div className="flex justify-center mb-1">
                  <stat.icon className="h-4 w-4 text-blue-600" />
                </div>
                <p className="text-xs font-bold text-gray-900">{stat.number}</p>
                <p className="text-xs text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>

          <img src={companyPerks.image} alt="Company Culture" className="w-full h-24 object-cover rounded-lg shadow-sm mb-4" />
          <div className="grid grid-cols-2 gap-2">
            {companyPerks.benefits.map((benefit) => (
              <div key={benefit} className="flex items-center space-x-2 bg-gray-50 p-2 rounded-md">
                <Award className="h-3 w-3 text-green-600 flex-shrink-0" />
                <span className="text-xs font-medium text-gray-900">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Find Job Section */}
        <div className="col-span-3 bg-white p-5 rounded-lg shadow-sm border border-gray-100">
          <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
            <Search className="h-5 w-5 mr-2 text-blue-600" />
            Find Job
          </h4>
          <p className="text-sm text-gray-600 mb-4">Ready to make an impact? Explore opportunities.</p>
          <button 
            onClick={openChoosePathModal}
            className="w-full text-white bg-gradient-to-r from-blue-600 to-blue-700 py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 flex items-center justify-center shadow-md hover:shadow-lg mb-3"
          >
            <span>Apply Now</span>
            <ArrowRight className="h-4 w-4 ml-2" />
          </button>

          <button 
            onClick={toggleJobSearch}
            className="w-full text-blue-600 bg-blue-50 border border-blue-200 py-3 px-4 rounded-lg font-semibold hover:bg-blue-100 transition-all duration-200 flex items-center justify-center"
          >
            <span>Explore Opportunities</span>
            {isJobSearchOpen ? (
              <ChevronUp className="h-4 w-4 ml-2" />
            ) : (
              <ChevronDown className="h-4 w-4 ml-2" />
            )}
          </button>
        </div>
      </div>

      {/* Choose Your Path Modal */}
      {showChoosePathModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Choose Your Path</h2>
                <button 
                  onClick={closeAllModals}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <p className="text-gray-600 text-center mb-8">Choose how you'd like to connect with us</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Join Our Team */}
                <div 
                  onClick={openJoinTeamModal}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-8 text-center cursor-pointer hover:shadow-lg transition-all duration-200 group"
                >
                  <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-700 transition-colors">
                    <UserPlus className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Join Our Team</h3>
                  <p className="text-gray-600 mb-6">
                    Interested in working with us? Send us your information and we'll keep you in mind for future opportunities.
                  </p>
                  <div className="text-blue-600 font-semibold flex items-center justify-center group-hover:text-blue-700">
                    Get Started <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </div>

                {/* Apply for Job */}
                <div 
                  onClick={openApplyJobModal}
                  className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-2xl p-8 text-center cursor-pointer hover:shadow-lg transition-all duration-200 group"
                >
                  <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-700 transition-colors">
                    <Briefcase className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Apply for Job</h3>
                  <p className="text-gray-600 mb-6">
                    Ready to apply for a specific position? Submit your application and let us know why you're the perfect fit.
                  </p>
                  <div className="text-green-600 font-semibold flex items-center justify-center group-hover:text-green-700">
                    Apply Now <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Join Our Team Modal */}
      {showJoinTeamModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Join Our Team</h2>
                <button 
                  onClick={closeAllModals}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <User className="h-4 w-4 mr-2" />
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <Mail className="h-4 w-4 mr-2" />
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      placeholder="john.doe@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <Building className="h-4 w-4 mr-2" />
                    Company
                  </label>
                  <input 
                    type="text" 
                    placeholder="Your Company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Subject
                  </label>
                  <input 
                    type="text" 
                    value="Interest in Joining Your Team"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea 
                    rows={6}
                    placeholder="Please describe how we can assist you..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>
                
                <div className="flex gap-4 pt-4">
                  <button 
                    type="button"
                    onClick={closeAllModals}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Apply for Position Modal */}
      {showApplyJobModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Apply for Position</h2>
                <button 
                  onClick={closeAllModals}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <User className="h-4 w-4 mr-2" />
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    />
                    <p className="text-xs text-red-500 mt-1 opacity-0">Please fill in this field.</p>
                  </div>
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <Mail className="h-4 w-4 mr-2" />
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      placeholder="john.doe@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <Building className="h-4 w-4 mr-2" />
                    Company
                  </label>
                  <input 
                    type="text" 
                    placeholder="Your Company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>
                
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Subject
                  </label>
                  <input 
                    type="text" 
                    value="Job Application Inquiry"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea 
                    rows={6}
                    placeholder="Please describe how we can assist you..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>
                
                <div className="flex gap-4 pt-4">
                  <button 
                    type="button"
                    onClick={closeAllModals}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MegaMenuCareers;
