import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import ProjectDescription from '../ai/ProjectDescription';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const projects = [
    {
      id: 1,
      title: 'AI-Powered Image Recognition',
      category: 'machine-learning',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A computer vision system that can identify and classify objects in images with high accuracy.',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Flask'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 2,
      title: 'Natural Language Query System',
      category: 'nlp',
      image: 'https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A system that allows users to query databases using natural language instead of SQL.',
      technologies: ['Python', 'BERT', 'PostgreSQL', 'React'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 3,
      title: 'Predictive Analytics Dashboard',
      category: 'data-science',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Interactive dashboard that forecasts business metrics using historical data and ML models.',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Plotly Dash'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 4,
      title: 'Intelligent Chatbot',
      category: 'nlp',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A conversational AI that can understand and respond to complex customer inquiries.',
      technologies: ['Python', 'Rasa', 'TensorFlow', 'Docker'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 5,
      title: 'Anomaly Detection System',
      category: 'machine-learning',
      image: 'https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Real-time system that identifies unusual patterns in IoT sensor data.',
      technologies: ['Python', 'Keras', 'Apache Kafka', 'Elasticsearch'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 6,
      title: 'Recommender System',
      category: 'data-science',
      image: 'https://images.pexels.com/photos/3761508/pexels-photo-3761508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Personalized recommendation engine for an e-commerce platform using collaborative filtering.',
      technologies: ['Python', 'PySpark', 'AWS', 'FastAPI'],
      demoLink: '#',
      codeLink: '#'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'machine-learning', label: 'Machine Learning' },
    { value: 'nlp', label: 'NLP' },
    { value: 'data-science', label: 'Data Science' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          <p className="text-gray-700 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Explore a selection of my most significant projects that demonstrate my expertise
            in artificial intelligence and data science.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setFilter(category.value)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category.value
                    ? 'bg-blue-500 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-4 w-full">
                    <ProjectDescription projectId={project.id} />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.demoLink}
                    className="text-blue-500 inline-flex items-center text-sm hover:underline"
                  >
                    <span className="mr-1">Live Demo</span>
                    <ExternalLink size={14} />
                  </a>
                  <a
                    href={project.codeLink}
                    className="text-gray-700 dark:text-gray-300 inline-flex items-center text-sm hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    <span className="mr-1">Source Code</span>
                    <Github size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;