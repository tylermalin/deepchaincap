import React, { useState } from 'react';
import AnimatedText from '../components/AnimatedText';
import Button from '../components/Button';
import VentureCard from '../components/VentureCard';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { Brain, Atom, Zap, Network, FlaskRound as Flask, Battery, Bot, Lock } from 'lucide-react';

interface Venture {
  title: string;
  description: string;
  logo: React.ReactNode;
  image: string;
  category: string;
  stage: string;
  link?: string;
}

const VenturesPage: React.FC = () => {
  const { ref: venturesRef, isVisible: isVenturesVisible } = useScrollAnimation();
  const [filter, setFilter] = useState<string>('all');
  
  // Sample ventures data
  const ventures: Venture[] = [
    {
      title: "NeuralFlow",
      description: "Advanced neural interface technology for precision healthcare and brain-computer interactions.",
      logo: <Brain className="w-8 h-8 text-indigo-400" />,
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb",
      category: "Artificial Intelligence",
      stage: "Launch",
      link: "#"
    },
    {
      title: "QuantumMatter",
      description: "Quantum material science for next-generation energy storage and transmission.",
      logo: <Atom className="w-8 h-8 text-purple-400" />,
      image: "https://images.pexels.com/photos/355948/pexels-photo-355948.jpeg?auto=compress&cs=tinysrgb",
      category: "Deep Science",
      stage: "In Development",
      link: "#"
    },
    {
      title: "FusionGrid",
      description: "Distributed energy solutions leveraging advances in fusion and smart grid technology.",
      logo: <Zap className="w-8 h-8 text-cyan-400" />,
      image: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb",
      category: "Energy Transition",
      stage: "Launch",
      link: "#"
    },
    {
      title: "ChainProtocol",
      description: "Next-generation blockchain infrastructure for secure, scalable decentralized applications.",
      logo: <Network className="w-8 h-8 text-blue-400" />,
      image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb",
      category: "Blockchain",
      stage: "In Development",
      link: "#"
    },
    {
      title: "BioMatrix",
      description: "Computational biology platform accelerating drug discovery through AI-powered simulations.",
      logo: <Flask className="w-8 h-8 text-green-400" />,
      image: "https://images.pexels.com/photos/3861452/pexels-photo-3861452.jpeg?auto=compress&cs=tinysrgb",
      category: "Deep Science",
      stage: "Launch",
      link: "#"
    },
    {
      title: "StorageTech",
      description: "Advanced battery technology with unprecedented energy density and cycle life.",
      logo: <Battery className="w-8 h-8 text-yellow-400" />,
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb",
      category: "Energy Transition",
      stage: "In Development",
      link: "#"
    },
    {
      title: "AgentX",
      description: "Autonomous agent platform for complex task automation across industries.",
      logo: <Bot className="w-8 h-8 text-red-400" />,
      image: "https://images.pexels.com/photos/325111/pexels-photo-325111.jpeg?auto=compress&cs=tinysrgb",
      category: "Artificial Intelligence",
      stage: "Launch",
      link: "#"
    },
    {
      title: "TokenGovernance",
      description: "Governance protocol enabling new models of decentralized coordination.",
      logo: <Lock className="w-8 h-8 text-violet-400" />,
      image: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb",
      category: "Blockchain",
      stage: "In Development",
      link: "#"
    }
  ];

  const categories = ['all', ...new Set(ventures.map(v => v.category))];
  const stages = ['all', ...new Set(ventures.map(v => v.stage))];
  
  const filteredVentures = ventures.filter(venture => {
    if (filter === 'all') return true;
    if (categories.includes(filter)) return venture.category === filter;
    if (stages.includes(filter)) return venture.stage === filter;
    return true;
  });

  return (
    <div className="pt-24 bg-black">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <AnimatedText 
              text="Our Ventures" 
              className="text-4xl md:text-5xl font-bold mb-6"
              tag="h1"
            />
            <p className="text-xl text-gray-300 mb-8">
              Groundbreaking companies built alongside visionary founders, pushing the boundaries of what's possible.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-black border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm text-gray-400">Filter by:</span>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button 
                  key={category}
                  className={`text-sm py-1 px-3 rounded-full transition-colors ${
                    filter === category 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                  onClick={() => setFilter(category)}
                >
                  {category === 'all' ? 'All' : category}
                </button>
              ))}
            </div>

            <span className="text-sm text-gray-400 ml-4">Stage:</span>
            
            <div className="flex flex-wrap gap-2">
              {stages.map(stage => (
                <button 
                  key={stage}
                  className={`text-sm py-1 px-3 rounded-full transition-colors ${
                    filter === stage 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                  onClick={() => setFilter(stage)}
                >
                  {stage === 'all' ? 'All Stages' : stage}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ventures Grid */}
      <section 
        ref={venturesRef as React.RefObject<HTMLDivElement>}
        className="py-16 bg-black"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVentures.map((venture, index) => (
              <div 
                key={venture.title}
                className={`transition-all duration-700 ease-out ${
                  isVenturesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <VentureCard {...venture} />
              </div>
            ))}
          </div>

          {filteredVentures.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400">No ventures match your current filter.</p>
              <Button 
                variant="outline" 
                size="sm"
                className="mt-4"
                onClick={() => setFilter('all')}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Partner With Us */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedText 
            text="Partner With Us" 
            className="text-3xl md:text-4xl font-bold mb-6"
            tag="h2"
          />
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Whether you're a founder seeking to build with us, or an organization looking to collaborate, we'd love to connect.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-indigo-800 transition-colors text-left">
              <h3 className="text-xl font-semibold mb-4">For Founders</h3>
              <p className="text-gray-400 mb-6">Join us as a founder-in-residence or bring your breakthrough idea to our studio model.</p>
              <Button 
                to="/join-us" 
                variant="outline" 
                size="md"
              >
                Founder Opportunities
              </Button>
            </div>
            
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-indigo-800 transition-colors text-left">
              <h3 className="text-xl font-semibold mb-4">For Organizations</h3>
              <p className="text-gray-400 mb-6">Explore strategic partnerships, co-development possibilities, or investment opportunities.</p>
              <Button 
                to="/contact" 
                variant="outline" 
                size="md"
              >
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VenturesPage;