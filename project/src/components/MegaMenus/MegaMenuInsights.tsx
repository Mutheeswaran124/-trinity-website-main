import React from 'react';
import { BookOpen, Video, Mic, ArrowRight, FileText, BarChart } from 'lucide-react';

const insights = [
  {
    icon: BookOpen,
    title: 'Leveraging Big Data for Business Growth',
    category: 'Data Strategy',
    href: 'https://www.ibm.com/topics/big-data-analytics'
  },
  {
    icon: Video,
    title: 'The Future of Data Engineering',
    category: 'Technology',
    href: 'https://www.montecarlodata.com/blog-the-future-of-the-data-engineer/'
  },
  {
    icon: Mic,
    title: 'AI & Machine Learning in Healthcare',
    category: 'Industry Insights',
    href: 'https://eithealth.eu/news-article/machine-learning-in-healthcare-uses-benefits-and-pioneers-in-the-field/'
  }
];

const resources = [
  { icon: FileText, title: 'Data Governance Framework', type: 'Whitepaper' },
  { icon: BarChart, title: 'Modern Data Stack Implementation', type: 'Case Study' },
  { icon: BookOpen, title: 'Data Scientist’s Guide to Databricks', type: 'eBook' }
];

const MegaMenuInsights = ({ onClose }: { onClose?: () => void }) => {
  const handleExploreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById('insights');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      if (onClose) onClose();
    } else {
      // fallback: if not on the insights page, use window.location.hash
      window.location.hash = '#insights';
      if (onClose) onClose();
    }
  };

  return (
    <div className="grid grid-cols-12 gap-6 p-6 bg-gray-50 rounded-xl shadow-md w-full">
      
      {/* Insights Section */}
      <div className="col-span-4 bg-white p-5 rounded-lg shadow-sm">
        <h3 className="text-lg font-bold text-gray-900 mb-3">Latest Insights</h3>
        <div className="space-y-3">
          {insights.map((insight) => (
            <a key={insight.title} href={insight.href} target="_blank" rel="noopener noreferrer"
               className="flex items-center space-x-3 p-3 rounded-md border border-gray-200 hover:bg-blue-50 transition-all">
              <div className="p-2 bg-blue-100 rounded-md">
                {React.createElement(insight.icon, { className: 'h-5 w-5 text-blue-600' })}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900">{insight.title}</h4>
                <p className="text-xs text-gray-600">{insight.category}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Featured Report Section */}
      <div className="col-span-5 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Featured Report</h2>
        <p className="text-sm text-gray-600 mb-4">Explore how emerging technologies impact business strategies.</p>
        <img src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Report Cover"
             className="w-full h-40 object-cover rounded-lg shadow-sm mb-4" />
        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={handleExploreClick}
            className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition-all"
            type="button"
          >
            <span>Explore Casestudies</span>
            <ArrowRight className="h-4 w-4 ml-2" />
          </button>
          <a href="#all-reports" className="text-blue-600 text-sm font-semibold hover:text-blue-700">View All Reports →</a>
        </div>
      </div>

      {/* Resources Section */}
      <div className="col-span-3 bg-white p-5 rounded-lg shadow-sm">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Resources</h4>
        <div className="space-y-3">
          {resources.map((resource) => (
            <div key={resource.title} className="flex items-center space-x-3 p-3 rounded-md border border-gray-200 hover:bg-gray-50 transition-all">
              <div className="p-2 bg-gray-100 rounded-md">
                {React.createElement(resource.icon, { className: 'h-5 w-5 text-gray-600' })}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900">{resource.title}</h4>
                <p className="text-xs text-gray-600">{resource.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MegaMenuInsights;