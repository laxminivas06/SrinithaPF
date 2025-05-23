import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, ChevronDown, User, Bot } from 'lucide-react';

const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' }[]>([
    { text: "Hi there! I'm Srinita's AI assistant. Ask me anything about her skills, projects, or experience!", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to bottom of messages when new ones are added
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSend = (e?: React.FormEvent) => {
    e?.preventDefault();
    
    if (input.trim() === '') return;
    
    // Add user message
    setMessages(prev => [...prev, { text: input, sender: 'user' }]);
    setInput('');
    
    // Simulate AI typing
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      // This would be replaced with actual API call to AI service
      const botResponses: { [key: string]: string } = {
        'skills': "Srinita is skilled in Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, and Data Science. She's proficient in Python, TensorFlow, PyTorch, and various cloud platforms.",
        'experience': "Srinita has over 5 years of experience in AI and Data Science, working with various companies and on numerous projects ranging from NLP systems to computer vision applications.",
        'projects': "Srinita has worked on several projects including AI-powered image recognition systems, natural language query engines, predictive analytics dashboards, and intelligent chatbots.",
        'contact': "You can contact Srinita via email at contact@example.com or through the contact form on this website.",
        'education': "Srinita holds a Master's degree in Computer Science with specialization in Artificial Intelligence from a leading university.",
        'certifications': "Srinita has several certifications including Machine Learning Specialization, Deep Learning Professional Certificate, NLP Nanodegree, and AWS Machine Learning Specialty.",
      };
      
      // Try to match input with predefined responses
      let botReply = "I don't have specific information about that. Could you ask something about Srinita's skills, projects, experience, or contact information?";
      
      for (const [keyword, response] of Object.entries(botResponses)) {
        if (input.toLowerCase().includes(keyword)) {
          botReply = response;
          break;
        }
      }
      
      setMessages(prev => [...prev, { text: botReply, sender: 'bot' }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Chat toggle button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg z-50 transition-transform hover:scale-110"
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </button>
      
      {/* Chat widget */}
      <div
        className={`fixed bottom-24 right-6 w-80 md:w-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl z-50 transition-all duration-300 transform ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
      >
        {/* Chat header */}
        <div className="bg-blue-500 text-white p-4 rounded-t-lg flex justify-between items-center">
          <div className="flex items-center">
            <Bot size={20} className="mr-2" />
            <h3 className="font-medium">AI Assistant</h3>
          </div>
          <div className="flex items-center space-x-2">
            <button 
              onClick={toggleChat}
              className="p-1 hover:bg-blue-600 rounded-full transition-colors"
              aria-label="Minimize chat"
            >
              <ChevronDown size={18} />
            </button>
            <button 
              onClick={toggleChat}
              className="p-1 hover:bg-blue-600 rounded-full transition-colors"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>
        </div>
        
        {/* Chat messages */}
        <div className="p-4 h-80 overflow-y-auto bg-gray-50 dark:bg-gray-900">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.sender === 'bot' && (
                <div className="bg-blue-500 text-white p-1 rounded-full mr-2 flex-shrink-0">
                  <Bot size={16} />
                </div>
              )}
              <div
                className={`max-w-[75%] p-3 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-blue-500 text-white rounded-tr-none'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-tl-none'
                }`}
              >
                {message.text}
              </div>
              {message.sender === 'user' && (
                <div className="bg-gray-300 dark:bg-gray-600 p-1 rounded-full ml-2 flex-shrink-0">
                  <User size={16} />
                </div>
              )}
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start mb-4">
              <div className="bg-blue-500 text-white p-1 rounded-full mr-2 flex-shrink-0">
                <Bot size={16} />
              </div>
              <div className="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg rounded-tl-none">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef}></div>
        </div>
        
        {/* Chat input */}
        <form onSubmit={handleSend} className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Ask about Srinita's work..."
              className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg transition-colors"
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
            Ask about skills, projects, experience, or contact info
          </p>
        </form>
      </div>
    </>
  );
};

export default ChatbotWidget;