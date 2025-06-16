import React from 'react';
import Section from '../ui/Section';

const stats = [
  { image: 'https://www.shutterstock.com/image-photo/young-businesswoman-employee-deliver-successfully-260nw-1359447503.jpg', value: '500+', label: 'Projects Delivered' },
  { image: 'https://t4.ftcdn.net/jpg/04/80/32/91/360_F_480329143_udbywRAkIk8LObNgwFnLhWqbOyjenXca.jpg', value: '9+', label: 'Years of Experience' },
  { image: 'https://d3oj2y7irryo5z.cloudfront.net/wp-content/uploads/2022/09/RFW_2022_announcement_graphic_GT.jpg', value: '10+', label: 'Countries Served' },
  { image: 'https://www.shutterstock.com/image-photo/analyst-uses-computer-dashboard-data-600nw-2285412735.jpg', value: '100+', label: 'Data Experts' },
];

const About = () => {
  return (
    <Section
      id="about"
      title={
        <span className="flex flex-col items-center text-black">
          <img
            src="https://trinitetech.com/wp-content/uploads/2024/02/Trinity-Logo-1.svg"
            alt="Trinity Logo"
            className="h-14 mb-2"
            style={{ maxWidth: 120, filter: 'invert(30%) sepia(100%) saturate(2500%) hue-rotate(190deg)' }} 
          />
          <span className="text-[#22396b]">About Trinity Technology Solution</span>
        </span>
      }
      subtitle={<span className="text-gray-700">Your Trusted Partner in Digital Transformation</span>}
      className="bg-white text-black"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center py-10">
        {/* Vision Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
          <p className="mb-6">
            Founded in 2020, Trinity Technology Solution LLC has been at the forefront of digital transformation, helping enterprises harness the power of data analytics and cloud solutions. Our commitment to excellence and innovation has made us a trusted partner for businesses worldwide.
          </p>
          <p className="mb-6">
            As a certified Databricks partner, we specialize in data engineering, analytics, and AI solutions that drive business growth and operational efficiency. Our expertise spans across cloud migration, data governance, and enterprise-scale digital transformation initiatives.
          </p>
          <div className="bg-blue-100 border-l-4 border-blue-300 text-blue-900 p-4 mb-6">
            <h4 className="font-semibold mb-2">Official Databricks Partner</h4>
            <p>
              Our strategic partnership with Databricks enables us to deliver cutting-edge lakehouse architecture and advanced analytics solutions that transform how organizations leverage their data assets.
            </p>
          </div>
        </div>

        {/* Stats Section with Background Images */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative bg-cover bg-center rounded-lg shadow-md border border-gray-200 text-center text-white p-6 min-h-[200px]"
              style={{ backgroundImage: `url(${stat.image})` }}
            >
              {/* Overlay for readability */}
             <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] rounded-lg"></div>


              {/* Text Content */}
              <div className="relative z-10">
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
