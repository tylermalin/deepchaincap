import React, { useEffect, useRef } from 'react';
import AnimatedText from '../components/AnimatedText';
import ParallaxSection from '../components/ParallaxSection';
import Button from '../components/Button';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { ArrowRight, Brain, Atom, Zap, Network } from 'lucide-react';

const FocusAreasPage: React.FC = () => {
  const { ref: aiRef, isVisible: isAiVisible } = useScrollAnimation();
  const { ref: scienceRef, isVisible: isScienceVisible } = useScrollAnimation();
  const { ref: energyRef, isVisible: isEnergyVisible } = useScrollAnimation();
  const { ref: blockchainRef, isVisible: isBlockchainVisible } = useScrollAnimation();
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!backgroundRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Calculate mouse position as percentage
      const x = (clientX / innerWidth) * 100;
      const y = (clientY / innerHeight) * 100;

      // Update gradient position
      backgroundRef.current.style.setProperty('--mouse-x', `${x}%`);
      backgroundRef.current.style.setProperty('--mouse-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const focusAreas = [
    {
      ref: aiRef,
      isVisible: isAiVisible,
      icon: <Brain className="w-12 h-12 text-indigo-400" />,
      title: "Artificial Intelligence",
      subtitle: "Focus Area 01",
      color: "indigo",
      description: "We're building the next generation of intelligent systems that can perceive, learn, and act in the physical and digital world with unprecedented capabilities.",
      areas: [
        {
          title: "Advanced Machine Learning",
          description: "Developing novel architectures that push the boundaries of what AI can achieve, from foundation models to specialized systems."
        },
        {
          title: "Neuromorphic Computing",
          description: "Creating brain-inspired computing systems that fundamentally reimagine how processing and memory work together."
        },
        {
          title: "Human-AI Collaboration",
          description: "Building interfaces and systems that augment human capabilities through intuitive, adaptive AI partnerships."
        }
      ],
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb",
      quote: "AI will redefine what's possible across every industry and domain."
    },
    {
      ref: scienceRef,
      isVisible: isScienceVisible,
      icon: <Atom className="w-12 h-12 text-purple-400" />,
      title: "Deep Science",
      subtitle: "Focus Area 02",
      color: "purple",
      description: "We're advancing materials science, biotechnology, and quantum computing applications that reshape what's physically possible in the world.",
      areas: [
        {
          title: "Advanced Materials",
          description: "Developing novel materials with extraordinary properties for energy storage, electronics, and infrastructure."
        },
        {
          title: "Quantum Applications",
          description: "Building practical applications of quantum computing for simulation, optimization, and security."
        },
        {
          title: "Biotechnology",
          description: "Creating platforms that accelerate discovery and development in medicine, agriculture, and industrial biology."
        }
      ],
      image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb",
      quote: "The materials we create today will define the technologies of tomorrow."
    },
    {
      ref: energyRef,
      isVisible: isEnergyVisible,
      icon: <Zap className="w-12 h-12 text-cyan-400" />,
      title: "Energy Transition",
      subtitle: "Focus Area 03",
      color: "cyan",
      description: "We're revolutionizing how energy is generated, stored, distributed, and used to enable a sustainable, resilient, and abundant energy future.",
      areas: [
        {
          title: "Energy Storage",
          description: "Developing next-generation battery technologies and alternative storage approaches for grid and mobility."
        },
        {
          title: "Fusion Energy",
          description: "Accelerating the path to commercial fusion energy through novel approaches and enabling technologies."
        },
        {
          title: "Smart Grid",
          description: "Building distributed intelligence for energy systems that maximize efficiency, resilience, and renewable integration."
        }
      ],
      image: "https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb",
      quote: "The energy transition is the greatest infrastructure challenge and opportunity of our time."
    },
    {
      ref: blockchainRef,
      isVisible: isBlockchainVisible,
      icon: <Network className="w-12 h-12 text-blue-400" />,
      title: "Blockchain",
      subtitle: "Focus Area 04",
      color: "blue",
      description: "We're building the foundations for a more open, resilient, and efficient digital economy through decentralized systems and cryptographic innovations.",
      areas: [
        {
          title: "Web3 Infrastructure",
          description: "Developing the core infrastructure layers that enable scalable, secure, and interoperable decentralized applications."
        },
        {
          title: "Cryptographic Innovations",
          description: "Advancing privacy-preserving technologies, zero-knowledge proofs, and post-quantum cryptography."
        },
        {
          title: "DeFi & Real-World Assets",
          description: "Building systems that connect decentralized finance with physical assets and traditional markets."
        }
      ],
      image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb",
      quote: "Web3 is rebuilding the internet's foundations with new trust and coordination mechanisms."
    }
  ];

  return (
    <div className="pt-24 bg-black">
      {/* Interactive Background */}
      <div 
        ref={backgroundRef}
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
            rgba(99, 102, 241, 0.15) 0%,
            rgba(99, 102, 241, 0.1) 10%,
            rgba(99, 102, 241, 0.05) 25%,
            transparent 50%
          ),
          linear-gradient(to bottom right, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))
          `,
          opacity: 0.5,
          zIndex: 0
        }}
      >
        <div className="absolute inset-0" style={{ backdropFilter: 'blur(100px)' }}></div>
      </div>

      {/* Hero Section */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <AnimatedText 
              text="Our Focus Areas" 
              className="text-4xl md:text-5xl font-bold mb-6"
              tag="h1"
            />
            <p className="text-xl text-gray-300 mb-8">
              We focus on four interconnected frontiers where breakthrough innovation can transform industries and create lasting impact.
            </p>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      {focusAreas.map((area, index) => (
        <section 
          key={area.title}
          ref={area.ref as React.RefObject<HTMLDivElement>}
          className={`py-24 relative ${
            index % 2 === 0 ? 'bg-gradient-to-b from-black to-gray-900' : 'bg-gray-900'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className={`transition-all duration-1000 ease-out ${
                area.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}>
                <div className="flex items-center space-x-4 mb-6">
                  {area.icon}
                  <span className={`text-sm text-${area.color}-400 uppercase tracking-wider`}>{area.subtitle}</span>
                </div>
                
                <h2 className="text-3xl font-bold mb-6">{area.title}</h2>
                <p className="text-gray-300 mb-8">{area.description}</p>
                
                <div className="space-y-6 mb-8">
                  {area.areas.map((subArea, i) => (
                    <div 
                      key={subArea.title}
                      className={`group bg-gray-800/50 p-6 rounded-lg transition-all duration-500 hover:bg-gray-800 hover:transform hover:translate-x-2 cursor-pointer`}
                    >
                      <h3 className={`font-medium mb-2 text-${area.color}-400 group-hover:text-${area.color}-300`}>
                        {subArea.title}
                      </h3>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300">
                        {subArea.description}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <Button 
                    to="/ventures" 
                    variant="outline" 
                    size="md"
                    icon={<ArrowRight size={16} />}
                  >
                    Related Ventures
                  </Button>
                  
                  <Button 
                    to="/contact" 
                    variant="text" 
                    size="md"
                  >
                    Get Involved
                  </Button>
                </div>
              </div>
              
              <ParallaxSection 
                speed={0.05} 
                className={`h-[400px] md:h-[500px] rounded-lg overflow-hidden transition-all duration-1000 ease-out delay-300 ${
                  area.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                <div 
                  className="h-full w-full bg-cover bg-center rounded-lg"
                  style={{ backgroundImage: `url('${area.image}')` }}
                >
                  <div className={`h-full w-full bg-gradient-to-tr from-${area.color}-900/40 via-black/60 to-black/80 flex items-end p-8`}>
                    <blockquote className="text-xl italic max-w-xs">
                      {area.quote}
                    </blockquote>
                  </div>
                </div>
              </ParallaxSection>
            </div>
          </div>
        </section>
      ))}

      {/* Call to Action */}
      <section className="py-24 bg-black relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedText 
            text="Ready to Build the Future With Us?" 
            className="text-3xl md:text-4xl font-bold mb-6"
            tag="h2"
          />
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            We partner with visionary founders, scientists, and operators to build breakthrough companies at the forefront of these focus areas.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              to="/join-us" 
              variant="primary" 
              size="lg"
            >
              Join Our Team
            </Button>
            
            <Button 
              to="/contact" 
              variant="outline" 
              size="lg"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FocusAreasPage;