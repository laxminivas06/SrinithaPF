import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      const parallaxElements = containerRef.current.querySelectorAll('.parallax');
      parallaxElements.forEach((el) => {
        const speed = Number((el as HTMLElement).dataset.speed) || 1;
        const xShift = x * speed * 20;
        const yShift = y * speed * 20;
        (el as HTMLElement).style.transform = `translate(${xShift}px, ${yShift}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30 dark:opacity-10">
        <div className="parallax absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl" data-speed="0.5"></div>
        <div className="parallax absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" data-speed="0.7"></div>
        <div className="parallax absolute top-1/2 right-1/3 w-48 h-48 bg-teal-500 rounded-full blur-3xl" data-speed="0.3"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block">Hi, I'm </span>
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 bg-clip-text text-transparent">
            Srinita
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          AI Engineer & Data Scientist crafting intelligent solutions for complex problems
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors shadow-lg hover:shadow-xl">
            View My Work
          </button>
          <button className="px-8 py-3 border-2 border-blue-500 text-blue-500 dark:text-blue-400 hover:bg-blue-500/10 rounded-full transition-colors">
            Download Resume
          </button>
        </div>
        
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce p-2"
          aria-label="Scroll down"
        >
          <ArrowDown className="text-gray-600 dark:text-gray-400" />
        </button>
      </div>
    </section>
  );
};

export default Home;