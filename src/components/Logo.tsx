import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

  return (
    <div className={`relative ${sizes[size]} ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full">
          {/* Chain links */}
          <div className="absolute inset-0 transform -rotate-45">
            <div className="w-full h-[30%] bg-white rounded-full" />
            <div className="w-full h-[30%] bg-white rounded-full absolute bottom-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;