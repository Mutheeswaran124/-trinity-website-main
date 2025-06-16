import React from 'react';
import Section from '../ui/Section';
import Card, { CardContent, CardTitle, CardDescription, CardImage } from '../ui/Card';
import Button from '../ui/Button';

const Insights = () => {
  const insights = [
    {
      title: 'Leveraging Big Data for Business Growth',
      category: 'Data Strategy',
      date: 'June 15, 2025',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      excerpt: 'Discover how businesses are using big data analytics to drive growth and innovation in today\'s competitive landscape.',
      url: 'https://www.ibm.com/topics/big-data-analytics'
    },
    {
      title: 'The Future of Data Engineering',
      category: 'Technology',
      date: 'May 28, 2025',
      image: 'https://images.pexels.com/photos/374899/pexels-photo-374899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      excerpt: 'Explore emerging trends in data engineering and how they are reshaping the way organizations handle data.',
      url: 'https://www.montecarlodata.com/blog-the-future-of-the-data-engineer/'
    },
    {
      title: 'AI and Machine Learning in Healthcare',
      category: 'Industry Insights',
      date: 'April 10, 2025',
      image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      excerpt: 'How artificial intelligence and machine learning are transforming patient care and medical research.',
      url: 'https://eithealth.eu/news-article/machine-learning-in-healthcare-uses-benefits-and-pioneers-in-the-field/'
    }
  ];

  const resources = [
    {
      title: 'Data Governance Framework',
      type: 'Whitepaper',
      icon: '📄'
    },
    {
      title: 'Modern Data Stack Implementation',
      type: 'Case Study',
      icon: '📊'
    },
    {
      title: 'Data Scientist\'s Guide to Databricks',
      type: 'eBook',
      icon: '📚'
    }
  ];

  return (
    <Section 
      id="insights" 
      title="Insights & Resources"
      subtitle="Stay updated with the latest trends, insights, and resources in data analytics"
    >
      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {insights.map((insight, index) => (
          <Card key={index} hover className="h-full">
            <CardImage 
              src={insight.image} 
              alt={insight.title}
              className="h-48"
            />
            <CardContent>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-blue-600">{insight.category}</span>
                <span className="text-sm text-gray-500">{insight.date}</span>
              </div>
              <CardTitle>{insight.title}</CardTitle>
              <CardDescription className="mb-4">{insight.excerpt}</CardDescription>
              <a
                href={insight.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center inline-block px-4 py-2 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
              >
                Read More
              </a>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Resources Section */}
    
    </Section>
  );
};

export default Insights;