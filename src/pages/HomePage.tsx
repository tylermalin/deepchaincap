import React, { useEffect, useRef } from 'react';
import { ArrowDown, ArrowRight, Brain, Atom, Zap, Network } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import ParallaxSection from '../components/ParallaxSection';
import Button from '../components/Button';
import VentureCard from '../components/VentureCard';
import useScrollAnimation from '../hooks/useScrollAnimation';

const ScrollIndicator = () => (
  <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
    <span className="text-xs uppercase tracking-wide text-gray-400 mb-2">Scroll</span>
    <ArrowDown size={20} className="text-indigo-500" />
  </div>
);

const HomePage: React.FC = () => {
  const { ref: sectionRef1, isVisible: isSection1Visible } = useScrollAnimation();
  const { ref: sectionRef2, isVisible: isSection2Visible } = useScrollAnimation();
  const { ref: sectionRef3, isVisible: isSection3Visible } = useScrollAnimation();
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
  
  // Sample ventures data
  const ventures = [
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
    }
  ];

  // Focus areas data
  const focusAreas = [
    {
      title: "Artificial Intelligence",
      icon: <Brain className="w-12 h-12 text-indigo-400" />,
      description: "Advanced AI systems, neuromorphic computing, and cognitive architectures.",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb",
      color: "indigo",
      features: [
        "Machine Learning & Neural Networks",
        "Natural Language Processing",
        "Computer Vision & Robotics"
      ]
    },
    {
      title: "Deep Science",
      icon: <Atom className="w-12 h-12 text-purple-400" />,
      description: "Materials science, biotechnology, and quantum computing applications.",
      image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb",
      color: "purple",
      features: [
        "Quantum Computing",
        "Advanced Materials",
        "Synthetic Biology"
      ]
    },
    {
      title: "Energy Transition",
      icon: <Zap className="w-12 h-12 text-cyan-400" />,
      description: "Next-generation energy storage, fusion, and smart grid technologies.",
      image: "https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb",
      color: "cyan",
      features: [
        "Energy Storage",
        "Fusion Technology",
        "Smart Grid Systems"
      ]
    },
    {
      title: "Blockchain",
      icon: <Network className="w-12 h-12 text-blue-400" />,
      description: "Decentralized systems, cryptographic innovations, and web3 infrastructure.",
      image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb",
      color: "blue",
      features: [
        "Web3 Infrastructure",
        "DeFi Systems",
        "Zero-Knowledge Applications"
      ]
    }
  ];

  return (
    <div className="w-full">
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
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-black z-0"></div>
        
        <div 
          className="absolute inset-0 bg-black opacity-70 z-0"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        ></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <AnimatedText 
            text="Venture Beyond." 
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500"
            tag="h1"
          />
          
          <AnimatedText 
            text="We build what's next, from the edge of what's possible."
            className="text-xl md:text-2xl text-gray-300 mb-12"
            delay={500}
            tag="p"
          />
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <Button 
              to="/studio-model" 
              variant="primary" 
              size="lg"
              icon={<ArrowRight size={16} />}
            >
              Our Studio Model
            </Button>
            
            <Button 
              to="/focus-areas" 
              variant="outline" 
              size="lg"
            >
              Explore Focus Areas
            </Button>
          </div>
        </div>
        
        <ScrollIndicator />
      </section>

      {/* Studio Highlights */}
      <section 
        ref={sectionRef1 as React.RefObject<HTMLDivElement>}
        className="py-24 md:py-32 px-6 bg-black relative"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <div className={`transition-all duration-1000 ease-out delay-100 ${
              isSection1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}>
              <h3 className="text-xl font-semibold mb-4 text-indigo-400">Venture Studio</h3>
              <p className="text-gray-300 mb-6">Building breakthrough companies with exceptional founders across DeepTech, AI, Energy, and Blockchain.</p>
              <Button to="/ventures" variant="text" size="sm" icon={<ArrowRight size={16} />}>
                Our Ventures
              </Button>
            </div>
            
            <div className={`transition-all duration-1000 ease-out delay-300 ${
              isSection1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}>
              <h3 className="text-xl font-semibold mb-4 text-indigo-400">Innovation Lab</h3>
              <p className="text-gray-300 mb-6">Incubating world-changing ideas from conception to market through research, talent, and strategic development.</p>
              <Button to="/about" variant="text" size="sm" icon={<ArrowRight size={16} />}>
                Our Process
              </Button>
            </div>
            
            <div className={`transition-all duration-1000 ease-out delay-500 ${
              isSection1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}>
              <h3 className="text-xl font-semibold mb-4 text-indigo-400">Strategic Capital</h3>
              <p className="text-gray-300 mb-6">Deploying focused capital and resources to accelerate ventures at the frontier of transformative technology.</p>
              <Button to="/studio-model" variant="text" size="sm" icon={<ArrowRight size={16} />}>
                Our Approach
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <AnimatedText 
              text="Our Focus Areas" 
              className="text-3xl md:text-4xl font-bold mb-4"
              tag="h2"
            />
            <p className="text-gray-400 max-w-2xl mx-auto">
              We focus on four interconnected frontiers where breakthrough innovation can transform industries and create lasting impact.
            </p>
          </div>
          
          <div 
            ref={sectionRef2 as React.RefObject<HTMLDivElement>}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {focusAreas.map((area, index) => (
              <div 
                key={area.title}
                className={`group relative overflow-hidden rounded-lg transition-all duration-700 ease-out ${
                  isSection2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${area.image})` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-tr from-${area.color}-900/90 to-black/70`}></div>
                </div>
                
                <div className="relative p-8">
                  <div className="flex items-center mb-4">
                    {area.icon}
                    <h3 className="text-2xl font-semibold ml-4">{area.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{area.description}</p>
                  
                  <div className="space-y-2 mb-8">
                    {area.features.map((feature, i) => (
                      <div 
                        key={i}
                        className={`flex items-center text-${area.color}-400`}
                      >
                        <ArrowRight size={16} className="mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    to="/focus-areas" 
                    variant="outline" 
                    size="sm"
                    className={`border-${area.color}-600 text-${area.color}-400 hover:bg-${area.color}-900/30`}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section 
        ref={sectionRef3 as React.RefObject<HTMLDivElement>}
        className="py-24 bg-gray-900 relative"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <div>
              <AnimatedText 
                text="Featured Ventures" 
                className="text-3xl md:text-4xl font-bold mb-4"
                tag="h2"
              />
              <p className="text-gray-400 max-w-xl">
                Groundbreaking companies built alongside visionary founders, pushing the boundaries of what's possible.
              </p>
            </div>
            
            <Button 
              to="/ventures" 
              variant="outline" 
              size="md"
              className="mt-6 md:mt-0"
              icon={<ArrowRight size={16} />}
            >
              View All Ventures
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ventures.map((venture, index) => (
              <div 
                key={venture.title}
                className={`transition-all duration-700 ease-out ${
                  isSection3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <VentureCard {...venture} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Connect */}
      <section className="py-32 bg-black relative">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-600/10 via-purple-600/10 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-to-tl from-blue-600/10 via-cyan-600/10 to-transparent"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <AnimatedText 
            text="Ready to Venture Beyond?" 
            className="text-3xl md:text-5xl font-bold mb-6"
            tag="h2"
          />
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join us at the frontier of what's possible. Whether you're a founder, researcher, investor, or potential collaborator, we'd love to connect.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              to="/contact" 
              variant="primary" 
              size="lg"
            >
              Get in Touch
            </Button>
            
            <Button 
              to="/join-us" 
              variant="outline" 
              size="lg"
            >
              Join Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;