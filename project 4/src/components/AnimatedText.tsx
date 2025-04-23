import React, { useEffect, useRef, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  delay = 0,
  duration = 800,
  once = false,
  tag = 'div'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && (!isVisible || !once)) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        } else if (!entry.isIntersecting && !once) {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(textRef.current);

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [delay, isVisible, once]);

  const Component = tag;
  
  return React.createElement(
    Component,
    {
      ref: textRef,
      className: `relative overflow-hidden ${className}`,
      style: { visibility: isVisible ? 'visible' : 'hidden' }
    },
    <>
      <span 
        className="inline-block transition-transform"
        style={{
          transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
          transitionDuration: `${duration}ms`,
          transitionTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
        }}
      >
        {text}
      </span>
      <span 
        className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 transition-transform"
        style={{
          transform: isVisible ? 'translateY(-100%)' : 'translateY(0)',
          transitionDuration: `${duration}ms`,
          transitionDelay: `${isVisible ? 0 : duration}ms`,
          transitionTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
        }}
      />
    </>
  );
};

export default AnimatedText;