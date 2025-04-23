import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  className = '',
  disabled = false,
  icon,
  iconPosition = 'right'
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none';
  
  const variantClasses = {
    primary: 'bg-indigo-600 hover:bg-indigo-700 text-white border border-transparent',
    secondary: 'bg-gray-800 hover:bg-gray-700 text-white border border-transparent',
    outline: 'bg-transparent hover:bg-indigo-950/30 text-indigo-400 hover:text-indigo-300 border border-indigo-700',
    text: 'bg-transparent hover:bg-gray-800/40 text-gray-300 border border-transparent'
  };
  
  const sizeClasses = {
    sm: 'text-xs px-3 py-2 rounded',
    md: 'text-sm px-5 py-2.5 rounded-md',
    lg: 'text-base px-6 py-3 rounded-md'
  };
  
  const disabledClasses = disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer';
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;
  
  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  );
  
  if (to) {
    return (
      <Link to={to} className={buttonClasses}>
        {content}
      </Link>
    );
  }
  
  if (href) {
    return (
      <a href={href} className={buttonClasses} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  
  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;