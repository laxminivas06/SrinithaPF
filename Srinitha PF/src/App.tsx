import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';
import ChatbotWidget from './components/ai/ChatbotWidget';
import VoiceCommands from './components/ai/VoiceCommands';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <VoiceCommands />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
        <ChatbotWidget />
      </Layout>
    </ThemeProvider>
  );
}

export default App;