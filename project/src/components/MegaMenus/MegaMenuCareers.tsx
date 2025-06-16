import React from 'react';
import { MapPin, DollarSign, Users, Heart, ArrowRight, Star, Briefcase } from 'lucide-react';

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

const MegaMenuCareers = () => {
  return (
    <div className="grid grid-cols-12 gap-6 p-6 bg-gray-50 rounded-xl shadow-md w-full">
      
      {/* Job Listings */}
      <div className="col-span-5 bg-white p-5 rounded-lg shadow-sm">
        <h3 className="text-lg font-bold text-gray-900 mb-3">Open Positions</h3>
        <div className="space-y-3">
          {jobListings.map((job) => (
            <a key={job.title} href={job.href} className="flex items-center space-x-3 p-3 rounded-md border border-gray-200 hover:bg-blue-50 transition-all">
              <img src={job.image} alt={job.title} className="w-16 h-16 object-cover rounded-md shadow-sm" />
              <div>
                <h4 className="text-sm font-semibold text-gray-900">{job.title}</h4>
                <p className="text-xs text-gray-600 flex items-center"><MapPin className="h-3 w-3 mr-1" /> {job.location}</p>
                <p className="text-xs text-gray-600 flex items-center"><DollarSign className="h-3 w-3 mr-1" /> {job.salary}</p>
              </div>
              <div className="text-blue-600 text-xs font-medium flex items-center">
                <span>Apply</span>
                <ArrowRight className="h-3 w-3 ml-1" />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Company Perks & Stats */}
      <div className="col-span-4 bg-white p-5 rounded-lg shadow-sm">
        <h4 className="text-lg font-bold text-gray-900 mb-3">{companyPerks.title}</h4>
        <p className="text-sm text-gray-600 mb-3">{companyPerks.description}</p>
        <img src={companyPerks.image} alt="Company Culture" className="w-full h-32 object-cover rounded-lg shadow-sm mb-4" />
        <div className="grid grid-cols-2 gap-3">
          {companyPerks.benefits.map((benefit) => (
            <div key={benefit} className="flex items-center space-x-2 bg-gray-50 p-2 rounded-md">
              <Briefcase className="h-4 w-4 text-blue-600" />
              <span className="text-xs font-medium text-gray-900">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Apply Section */}
      <div className="col-span-3 bg-white p-5 rounded-lg shadow-sm text-center">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Join Our Team</h4>
        <p className="text-sm text-gray-600 mb-4">Ready to make an impact? Apply now.</p>
        <a href="#apply" className="block text-white bg-blue-600 py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default MegaMenuCareers;
