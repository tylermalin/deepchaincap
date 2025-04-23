import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface VentureCardProps {
  title: string;
  description: string;
  logo: React.ReactNode;
  image: string;
  category: string;
  stage: string;
  link?: string;
}

const VentureCard: React.FC<VentureCardProps> = ({
  title,
  description,
  logo,
  image,
  category,
  stage,
  link
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-gray-900 rounded-lg overflow-hidden transition-all duration-500 border border-gray-800 hover:border-indigo-800 h-[400px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black"></div>
      </div>
      
      <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
        <span className="text-xs uppercase tracking-wider text-indigo-400 mb-2">{category}</span>
        <h3 className="text-2xl font-semibold mb-2 transition-transform duration-300 ease-out transform group-hover:-translate-y-2">
          {title}
        </h3>
        
        <div 
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isHovered ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <p className="text-gray-300 text-sm mb-4">{description}</p>
          
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-400 py-1 px-3 rounded-full border border-gray-700">
              {stage}
            </span>
            
            {link && (
              <a 
                href={link} 
                className="text-indigo-400 hover:text-indigo-300 transition-colors flex items-center text-sm"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="mr-1">Visit</span>
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div 
        className={`absolute top-6 left-6 bg-black/80 backdrop-blur-sm rounded-md p-2 transition-all duration-300 ease-out ${
          isHovered ? 'opacity-0 transform -translate-y-4' : 'opacity-100'
        }`}
      >
        {logo}
      </div>
    </div>
  );
};

export default VentureCard;