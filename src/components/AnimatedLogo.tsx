import React, { useEffect, useRef } from 'react';
import { Activity } from 'lucide-react';

const AnimatedLogo: React.FC = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!logoRef.current) return;
    
    const animateLogo = () => {
      if (!logoRef.current) return;
      logoRef.current.classList.add('pulse');
      
      setTimeout(() => {
        if (!logoRef.current) return;
        logoRef.current.classList.remove('pulse');
      }, 1500);
    };
    
    animateLogo();
    const interval = setInterval(animateLogo, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div 
      ref={logoRef} 
      className="relative w-8 h-8 transition-all duration-700 ease-in-out"
    >
      <Activity 
        className="text-indigo-500 w-8 h-8" 
        strokeWidth={1.5} 
      />
      <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full transform scale-0 transition-transform animate-pulse-slow"></div>
    </div>
  );
};

export default AnimatedLogo;