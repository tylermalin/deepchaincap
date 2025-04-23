import React, { useEffect, useRef, useState } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  speed = 0.1,
  className = '',
  direction = 'up'
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const { top, height } = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const percentScrolled = (windowHeight - top) / (windowHeight + height);
      
      // Ensure value is between 0 and 1
      const clampedPercent = Math.max(0, Math.min(1, percentScrolled));
      
      setOffset(clampedPercent * 100 * speed);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  const getTransform = () => {
    switch (direction) {
      case 'up': return `translateY(${-offset}px)`;
      case 'down': return `translateY(${offset}px)`;
      case 'left': return `translateX(${-offset}px)`;
      case 'right': return `translateX(${offset}px)`;
    }
  };

  return (
    <div
      ref={sectionRef}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        style={{
          transform: getTransform(),
          transition: 'transform 0.1s ease-out'
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;