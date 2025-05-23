import React from 'react';
import { Code, Database, Brain, PenTool } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              AI Engineer & Data Scientist
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I specialize in building intelligent systems that leverage the power of artificial intelligence 
              and data science to solve complex problems. With a passion for innovation and a strong 
              foundation in machine learning, I create solutions that transform raw data into actionable insights.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              My expertise spans across various domains including natural language processing, 
              computer vision, and predictive analytics. I'm dedicated to developing AI systems 
              that are not only powerful but also ethical, transparent, and accessible.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Experience', value: '5+ Years' },
                { label: 'Projects', value: '25+' },
                { label: 'Clients', value: '15+' },
                { label: 'Publications', value: '8' }
              ].map((item, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{item.label}</p>
                  <p className="text-xl font-bold text-blue-500">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Code size={24} className="text-blue-500 mb-4" />,
                  title: 'AI Development',
                  description: 'Building intelligent systems with TensorFlow, PyTorch, and custom algorithms'
                },
                {
                  icon: <Database size={24} className="text-purple-500 mb-4" />,
                  title: 'Data Science',
                  description: 'Transforming raw data into valuable insights through advanced analytics'
                },
                {
                  icon: <Brain size={24} className="text-teal-500 mb-4" />,
                  title: 'Machine Learning',
                  description: 'Designing and implementing ML models for various business applications'
                },
                {
                  icon: <PenTool size={24} className="text-orange-500 mb-4" />,
                  title: 'Research',
                  description: 'Contributing to the field through publications and innovative techniques'
                }
              ].map((item, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  {item.icon}
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;