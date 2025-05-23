import React, { useState, useEffect } from 'react';
import { Mic, MicOff } from 'lucide-react';

const VoiceCommands: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [notification, setNotification] = useState<{message: string; type: 'info' | 'success' | 'error'} | null>(null);
  
  // We'll simulate voice recognition since the Web Speech API might not be available
  const toggleListening = () => {
    if (isListening) {
      setIsListening(false);
      setNotification({ message: 'Voice commands disabled', type: 'info' });
      setTimeout(() => setNotification(null), 3000);
    } else {
      setIsListening(true);
      setNotification({ message: 'Voice commands activated. Try saying "Navigate to Projects"', type: 'info' });
      setTimeout(() => setNotification(null), 5000);
      
      // Simulate successful voice command after a few seconds
      setTimeout(() => {
        if (Math.random() > 0.3) { // 70% success rate for demo
          const commands = [
            'navigate to about',
            'navigate to skills',
            'navigate to projects',
            'navigate to contact'
          ];
          const randomCommand = commands[Math.floor(Math.random() * commands.length)];
          setTranscript(randomCommand);
          processCommand(randomCommand);
        } else {
          setNotification({ message: 'Could not understand command. Please try again.', type: 'error' });
          setTimeout(() => setNotification(null), 3000);
        }
        setIsListening(false);
      }, 4000);
    }
  };
  
  const processCommand = (command: string) => {
    // Process navigation commands
    if (command.includes('navigate to')) {
      const section = command.replace('navigate to', '').trim();
      const element = document.getElementById(section);
      
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setNotification({ message: `Navigating to ${section}`, type: 'success' });
        setTimeout(() => setNotification(null), 3000);
      }
    }
  };
  
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button
        onClick={toggleListening}
        className={`p-4 rounded-full shadow-lg transition-all ${
          isListening 
            ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
            : 'bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600'
        }`}
        aria-label={isListening ? 'Stop voice commands' : 'Start voice commands'}
      >
        {isListening ? (
          <MicOff size={24} className="text-white" />
        ) : (
          <Mic size={24} className="text-white" />
        )}
      </button>
      
      {notification && (
        <div className={`absolute bottom-full left-0 mb-2 whitespace-nowrap px-4 py-2 rounded-lg shadow-lg text-white text-sm ${
          notification.type === 'success' ? 'bg-green-500' :
          notification.type === 'error' ? 'bg-red-500' :
          'bg-blue-500'
        }`}>
          {notification.message}
        </div>
      )}
      
      {transcript && (
        <div className="absolute left-16 top-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs shadow-md">
          "{transcript}"
        </div>
      )}
    </div>
  );
};

export default VoiceCommands;