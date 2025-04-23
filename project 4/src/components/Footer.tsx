import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, Linkedin, Twitter } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black border-t border-gray-800 pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center mb-6">
              <Logo />
              <span className="ml-2 text-xl font-medium">DeepChain Capital</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              We build what's next, from the edge of what's possible.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" className="text-gray-400 hover:text-indigo-400 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-indigo-400 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:info@deepchaincapital.com" className="text-gray-400 hover:text-indigo-400 transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Explore</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-indigo-400 transition-colors">About</Link></li>
              <li><Link to="/studio-model" className="text-gray-400 hover:text-indigo-400 transition-colors">Studio Model</Link></li>
              <li><Link to="/focus-areas" className="text-gray-400 hover:text-indigo-400 transition-colors">Focus Areas</Link></li>
              <li><Link to="/ventures" className="text-gray-400 hover:text-indigo-400 transition-colors">Ventures</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Resources</h3>
            <ul className="space-y-4">
              <li><Link to="/news" className="text-gray-400 hover:text-indigo-400 transition-colors">News & Ideas</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Research</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Press Kit</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-indigo-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Connect</h3>
            <ul className="space-y-4">
              <li><Link to="/join-us" className="text-gray-400 hover:text-indigo-400 transition-colors">Join Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-indigo-400 transition-colors">Contact</Link></li>
              <li><a href="mailto:partnerships@deepchaincapital.com" className="text-gray-400 hover:text-indigo-400 transition-colors">Partnerships</a></li>
              <li><a href="mailto:media@deepchaincapital.com" className="text-gray-400 hover:text-indigo-400 transition-colors">Media</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} DeepChain Capital. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-500 hover:text-indigo-400 transition-colors text-sm">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-500 hover:text-indigo-400 transition-colors text-sm">Terms of Service</Link>
            <button 
              onClick={scrollToTop}
              className="text-gray-500 hover:text-indigo-400 transition-colors flex items-center text-sm"
              aria-label="Scroll to top"
            >
              <span className="mr-2">Top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;