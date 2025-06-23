import React from 'react';
import Section from '../ui /Section';
import Card, { CardContent, CardTitle, CardDescription, CardImage } from '../ui /Card';

const insights = [
  {
    title: 'Leveraging Big Data for Business Growth',
    category: 'Data Strategy',
    date: 'June 15, 2025',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    excerpt: 'Discover how businesses are using big data analytics to drive growth and innovation.',
    url: 'https://www.ibm.com/topics/big-data-analytics'
  },
  {
    title: 'The Future of Data Engineering',
    category: 'Technology',
    date: 'May 28, 2025',
    image: 'https://images.pexels.com/photos/374899/pexels-photo-374899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    excerpt: 'Explore emerging trends reshaping how organizations handle data.',
    url: 'https://www.montecarlodata.com/blog-the-future-of-the-data-engineer/'
  },
  {
    title: 'AI and Machine Learning in Healthcare',
    category: 'Industry Insights',
    date: 'April 10, 2025',
    image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    excerpt: 'How AI and machine learning are transforming patient care and research.',
    url: 'https://eithealth.eu/news-article/machine-learning-in-healthcare-uses-benefits-and-pioneers-in-the-field/'
  },
  {
    title: 'Predictive Analytics in Financial Services',
    category: 'Business Intelligence',
    date: 'March 18, 2025',
    image: 'https://images.pexels.com/photos/4386326/pexels-photo-4386326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    excerpt: 'Financial institutions are leveraging predictive analytics for smarter decisions.',
    url: 'https://www.sas.com/en_us/insights/analytics/predictive-analytics.html'
  },
  {
    title: 'Ethics and Transparency in AI Systems',
    category: 'Tech Policy',
    date: 'February 22, 2025',
    image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    excerpt: 'A look at ethical frameworks and the demand for accountable AI.',
    url: 'https://ai.google/responsibility/responsible-ai-practices/'
  },
  {
    title: 'Cloud-native Architecture for Scalable AI',
    category: 'Architecture',
    date: 'January 30, 2025',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    excerpt: 'Unlock AI potential using cloud-native design for scalability and speed.',
    url: 'https://www.redhat.com/en/topics/cloud-native-apps'
  }
];

const Insights = () => {
  return (
    <Section 
      id="insights" 
      title="Insights & Resources"
      subtitle="Stay updated with the latest trends and resources"
      className="relative overflow-hidden"
    >
      {/* Blurred animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-32 left-32 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Insights Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 relative z-10">
        {insights.map((insight, index) => (
          <Card key={index} hover className="h-full p-4">
            <CardImage 
              src={insight.image} 
              alt={insight.title}
              className="h-36"
            />
            <CardContent>
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-medium text-blue-600">{insight.category}</span>
                <span className="text-xs text-gray-500">{insight.date}</span>
              </div>
              <CardTitle className="text-lg">{insight.title}</CardTitle>
              <CardDescription className="text-sm mb-3">{insight.excerpt}</CardDescription>
              <a
                href={insight.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-3 py-1.5 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-sm transition-colors"
              >
                Read More
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Insights;
