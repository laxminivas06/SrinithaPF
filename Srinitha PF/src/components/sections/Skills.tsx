import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import SkillVisualization from '../ai/SkillVisualization';

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'technical' | 'soft'>('technical');
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const technicalSkills = [
    { name: 'Machine Learning', level: 95 },
    { name: 'Deep Learning', level: 90 },
    { name: 'Natural Language Processing', level: 85 },
    { name: 'Computer Vision', level: 80 },
    { name: 'Python', level: 95 },
    { name: 'TensorFlow', level: 90 },
    { name: 'PyTorch', level: 85 },
    { name: 'Data Visualization', level: 80 },
    { name: 'Big Data Processing', level: 75 },
    { name: 'Cloud Services (AWS, GCP)', level: 85 }
  ];

  const softSkills = [
    { name: 'Problem Solving', level: 95 },
    { name: 'Critical Thinking', level: 90 },
    { name: 'Communication', level: 85 },
    { name: 'Project Management', level: 80 },
    { name: 'Teamwork', level: 90 },
    { name: 'Adaptability', level: 85 }
  ];

  const displaySkills = activeTab === 'technical' ? technicalSkills : softSkills;

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-950" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          <p className="text-gray-700 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            My expertise spans across various domains of artificial intelligence and data science,
            with a focus on building practical solutions for complex problems.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-800 rounded-full">
            <button
              onClick={() => setActiveTab('technical')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'technical'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Technical Skills
            </button>
            <button
              onClick={() => setActiveTab('soft')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'soft'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Soft Skills
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {displaySkills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                  <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">AI-Powered Skill Analysis</h3>
              <a
                href="#"
                className="text-blue-500 inline-flex items-center text-sm hover:underline"
              >
                <span className="mr-1">View detailed report</span>
                <ExternalLink size={14} />
              </a>
            </div>
            <SkillVisualization />
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              This visualization is generated using AI to analyze GitHub contributions, 
              project complexity, and technical proficiency based on real-time data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;