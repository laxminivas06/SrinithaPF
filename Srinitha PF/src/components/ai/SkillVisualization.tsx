import React, { useEffect, useRef } from 'react';

const SkillVisualization: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      
      canvas.width = parent.clientWidth;
      canvas.height = 250;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Mock data - would come from an API in real application
    const skillData = [
      { name: 'ML', value: 0.92, color: '#3B82F6' }, // Blue
      { name: 'NLP', value: 0.85, color: '#8B5CF6' }, // Purple
      { name: 'CV', value: 0.78, color: '#10B981' }, // Green
      { name: 'Data', value: 0.88, color: '#F59E0B' }, // Amber
      { name: 'Cloud', value: 0.72, color: '#EC4899' }  // Pink
    ];
    
    // Animation variables
    let animationProgress = 0;
    const animationDuration = 1500; // ms
    let lastTimestamp = 0;
    let animationStartTime = 0;
    
    // Draw function
    const draw = (timestamp: number) => {
      if (!animationStartTime) animationStartTime = timestamp;
      const elapsed = timestamp - animationStartTime;
      animationProgress = Math.min(1, elapsed / animationDuration);
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background grid
      ctx.strokeStyle = '#e5e7eb';
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < 5; i++) {
        const y = 10 + i * 50;
        ctx.beginPath();
        ctx.moveTo(50, y);
        ctx.lineTo(canvas.width - 10, y);
        ctx.stroke();
        
        // Add percentage labels
        ctx.fillStyle = '#9ca3af';
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText(`${100 - i * 20}%`, 45, y + 4);
      }
      
      // Calculate bar width
      const availableWidth = canvas.width - 60; // account for left and right margins
      const barWidth = availableWidth / skillData.length;
      const barSpacing = barWidth * 0.2;
      const actualBarWidth = barWidth - barSpacing;
      
      // Draw bars
      skillData.forEach((skill, index) => {
        const x = 60 + index * barWidth;
        const barHeight = 200 * skill.value * animationProgress;
        const y = 210 - barHeight;
        
        // Draw bar
        ctx.fillStyle = skill.color;
        ctx.beginPath();
        ctx.roundRect(x, y, actualBarWidth, barHeight, [4, 4, 0, 0]);
        ctx.fill();
        
        // Draw skill name
        ctx.fillStyle = '#4b5563';
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(skill.name, x + actualBarWidth / 2, 225);
        
        // Draw percentage above bar
        if (animationProgress > 0.7) {
          const opacity = (animationProgress - 0.7) / 0.3;
          ctx.fillStyle = `rgba(75, 85, 99, ${opacity})`;
          ctx.fillText(`${Math.round(skill.value * 100)}%`, x + actualBarWidth / 2, y - 10);
        }
      });
      
      // Continue animation
      if (animationProgress < 1) {
        requestAnimationFrame(draw);
      }
    };
    
    // Start animation
    requestAnimationFrame(draw);
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);
  
  return (
    <div className="w-full h-64 bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
    </div>
  );
};

export default SkillVisualization;