import React, { useState } from 'react';
import { Bot } from 'lucide-react';

interface ProjectDescriptionProps {
  projectId: number;
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({ projectId }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [description, setDescription] = useState<string | null>(null);

  // Mock AI generation - this would normally call an API
  const generateDescription = () => {
    setIsGenerating(true);
    setDescription(null);
    
    // Simulated AI response based on project ID
    setTimeout(() => {
      const aiDescriptions: { [key: number]: string } = {
        1: "Implemented a CNN-based computer vision system achieving 97% accuracy on benchmark datasets using TensorFlow and transfer learning techniques.",
        2: "Developed a semantic parsing system that converts natural language to SQL with 85% accuracy using BERT embeddings and a custom attention mechanism.",
        3: "Created an interactive dashboard with predictive models that reduced forecast error by 35% using ensemble methods and real-time data processing.",
        4: "Built a conversational AI with context awareness and sentiment analysis that improved customer satisfaction scores by 42% in pilot deployments.",
        5: "Engineered a real-time anomaly detection system for IoT sensors that reduced false positives by 67% using a hybrid LSTM-autoencoder architecture.",
        6: "Designed a recommendation engine using collaborative filtering and content-based approaches, increasing e-commerce conversion rates by 23%."
      };
      
      setDescription(aiDescriptions[projectId] || "This project showcases innovative AI techniques and cutting-edge implementation methods to solve complex problems.");
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <div className="text-white">
      {!description && !isGenerating && (
        <button
          onClick={generateDescription}
          className="flex items-center text-sm bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-full transition-colors shadow-sm"
        >
          <Bot size={14} className="mr-1" />
          <span>Generate AI Description</span>
        </button>
      )}
      
      {isGenerating && (
        <div className="flex items-center text-sm">
          <Bot size={14} className="mr-2 animate-pulse" />
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      )}
      
      {description && (
        <div className="text-sm">
          <div className="flex items-center mb-1">
            <Bot size={14} className="mr-1" />
            <span className="text-xs font-medium">AI GENERATED</span>
          </div>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default ProjectDescription;