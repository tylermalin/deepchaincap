import React from 'react';
import AnimatedText from '../components/AnimatedText';
import ParallaxSection from '../components/ParallaxSection';
import Button from '../components/Button';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { ArrowRight } from 'lucide-react';

const StudioModelPage: React.FC = () => {
  const { ref: inceptionRef, isVisible: isInceptionVisible } = useScrollAnimation();
  const { ref: validationRef, isVisible: isValidationVisible } = useScrollAnimation();
  const { ref: launchRef, isVisible: isLaunchVisible } = useScrollAnimation();
  
  return (
    <div className="pt-24 bg-black">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <AnimatedText 
              text="Our Studio Model" 
              className="text-4xl md:text-5xl font-bold mb-6"
              tag="h1"
            />
            <p className="text-xl text-gray-300 mb-8">
              We combine deep technical knowledge, company building expertise, and strategic capital to create breakthrough ventures at the frontier of innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Inception Stage */}
      <section 
        ref={inceptionRef as React.RefObject<HTMLDivElement>}
        className="py-24 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ease-out ${
              isInceptionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
            }`}>
              <span className="text-sm text-indigo-400 uppercase tracking-wider">Stage 01</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">Inception</h2>
              <p className="text-gray-300 mb-6">
                At the inception stage, we identify high-potential ideas through rigorous research, signal detection across scientific domains, and development of internal IP.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="bg-gray-800/50 p-4 rounded-lg flex">
                  <div className="bg-indigo-500/20 rounded-full h-10 w-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-indigo-400 font-medium">01</span>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Research & Discovery</h3>
                    <p className="text-sm text-gray-400">Monitoring scientific breakthroughs and technological inflections to identify opportunities.</p>
                  </div>
                </div>
                
                <div className="bg-gray-800/50 p-4 rounded-lg flex">
                  <div className="bg-indigo-500/20 rounded-full h-10 w-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-indigo-400 font-medium">02</span>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Signal Detection</h3>
                    <p className="text-sm text-gray-400">Tracking emerging trends and early indicators of technological adoption and market readiness.</p>
                  </div>
                </div>
                
                <div className="bg-gray-800/50 p-4 rounded-lg flex">
                  <div className="bg-indigo-500/20 rounded-full h-10 w-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-indigo-400 font-medium">03</span>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Internal IP Development</h3>
                    <p className="text-sm text-gray-400">Creating foundational intellectual property that can serve as the basis for new ventures.</p>
                  </div>
                </div>
              </div>
              
              <Button 
                to="/focus-areas" 
                variant="outline" 
                size="md"
                icon={<ArrowRight size={16} />}
              >
                Our Focus Areas
              </Button>
            </div>
            
            <ParallaxSection 
              speed={0.05} 
              className={`h-[400px] md:h-[500px] rounded-lg overflow-hidden transition-all duration-1000 ease-out delay-300 ${
                isInceptionVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <div 
                className="h-full w-full bg-cover bg-center rounded-lg"
                style={{ backgroundImage: `url('https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb')` }}
              >
                <div className="h-full w-full bg-gradient-to-bl from-indigo-900/40 via-black/60 to-black/80 flex items-end p-8">
                  <blockquote className="text-xl italic max-w-xs">
                    "We don't wait for the future to happen. We actively build it."
                  </blockquote>
                </div>
              </div>
            </ParallaxSection>
          </div>
        </div>
      </section>

      {/* Validation Stage */}
      <section 
        ref={validationRef as React.RefObject<HTMLDivElement>}
        className="py-24 bg-gray-900"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ParallaxSection 
              speed={0.05} 
              className={`order-2 md:order-1 h-[400px] md:h-[500px] rounded-lg overflow-hidden transition-all duration-1000 ease-out ${
                isValidationVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <div 
                className="h-full w-full bg-cover bg-center rounded-lg"
                style={{ backgroundImage: `url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb')` }}
              >
                <div className="h-full w-full bg-gradient-to-tr from-indigo-900/40 via-black/60 to-black/80 flex items-end p-8">
                  <blockquote className="text-xl italic max-w-xs">
                    "Finding the right team is as important as finding the right idea."
                  </blockquote>
                </div>
              </div>
            </ParallaxSection>
            
            <div className={`order-1 md:order-2 transition-all duration-1000 ease-out delay-300 ${
              isValidationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
            }`}>
              <span className="text-sm text-indigo-400 uppercase tracking-wider">Stage 02</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">Validation</h2>
              <p className="text-gray-300 mb-6">
                During validation, we test and refine initial concepts, bringing in founders-in-residence and forming strategic partnerships to develop viable business models.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="bg-gray-800/50 p-4 rounded-lg flex">
                  <div className="bg-indigo-500/20 rounded-full h-10 w-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-indigo-400 font-medium">01</span>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Founders-in-Residence</h3>
                    <p className="text-sm text-gray-400">Pairing exceptional technical founders with our venture concepts to shape and lead new companies.</p>
                  </div>
                </div>
                
                <div className="bg-gray-800/50 p-4 rounded-lg flex">
                  <div className="bg-indigo-500/20 rounded-full h-10 w-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-indigo-400 font-medium">02</span>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Partnered Build</h3>
                    <p className="text-sm text-gray-400">Collaborating with industry partners to validate use cases and develop proof-of-concepts.</p>
                  </div>
                </div>
                
                <div className="bg-gray-800/50 p-4 rounded-lg flex">
                  <div className="bg-indigo-500/20 rounded-full h-10 w-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-indigo-400 font-medium">03</span>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Concept Validation</h3>
                    <p className="text-sm text-gray-400">Rigorous testing of technical feasibility, market fit, and business model through iterative experimentation.</p>
                  </div>
                </div>
              </div>
              
              <Button 
                to="/join-us" 
                variant="outline" 
                size="md"
                icon={<ArrowRight size={16} />}
              >
                Join as a Founder
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Launch Stage */}
      <section 
        ref={launchRef as React.RefObject<HTMLDivElement>}
        className="py-24 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ease-out ${
              isLaunchVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
            }`}>
              <span className="text-sm text-indigo-400 uppercase tracking-wider">Stage 03</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">Launch</h2>
              <p className="text-gray-300 mb-6">
                At launch, validated ventures are spun out with full operational support, strategic capital, and access to our network of industry partners and investors.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="bg-gray-800/50 p-4 rounded-lg flex">
                  <div className="bg-indigo-500/20 rounded-full h-10 w-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-indigo-400 font-medium">01</span>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Spinouts</h3>
                    <p className="text-sm text-gray-400">Transitioning validated ventures into independent companies with founding teams and initial funding.</p>
                  </div>
                </div>
                
                <div className="bg-gray-800/50 p-4 rounded-lg flex">
                  <div className="bg-indigo-500/20 rounded-full h-10 w-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-indigo-400 font-medium">02</span>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Co-founded Startups</h3>
                    <p className="text-sm text-gray-400">Building companies alongside exceptional external founders with complementary visions.</p>
                  </div>
                </div>
                
                <div className="bg-gray-800/50 p-4 rounded-lg flex">
                  <div className="bg-indigo-500/20 rounded-full h-10 w-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-indigo-400 font-medium">03</span>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Capital Stack</h3>
                    <p className="text-sm text-gray-400">Structuring appropriate financing from seed to Series A, with our investment and strategic partners.</p>
                  </div>
                </div>
              </div>
              
              <Button 
                to="/ventures" 
                variant="outline" 
                size="md"
                icon={<ArrowRight size={16} />}
              >
                Our Ventures
              </Button>
            </div>
            
            <ParallaxSection 
              speed={0.05} 
              className={`h-[400px] md:h-[500px] rounded-lg overflow-hidden transition-all duration-1000 ease-out delay-300 ${
                isLaunchVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <div 
                className="h-full w-full bg-cover bg-center rounded-lg"
                style={{ backgroundImage: `url('https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb')` }}
              >
                <div className="h-full w-full bg-gradient-to-bl from-indigo-900/40 via-black/60 to-black/80 flex items-end p-8">
                  <blockquote className="text-xl italic max-w-xs">
                    "From concept to market, our ventures are built to transform industries."
                  </blockquote>
                </div>
              </div>
            </ParallaxSection>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedText 
            text="Ready to Build With Us?" 
            className="text-3xl md:text-4xl font-bold mb-6"
            tag="h2"
          />
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Whether you're a visionary founder, technical expert, or strategic partner, we offer multiple pathways to collaborate.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-indigo-800 transition-colors">
              <h3 className="text-xl font-medium mb-3">Join the Studio</h3>
              <p className="text-gray-400 text-sm mb-4">Apply to become a founder-in-residence or technical lead.</p>
              <Button to="/join-us" variant="text" size="sm" icon={<ArrowRight size={16} />}>
                Learn More
              </Button>
            </div>
            
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-indigo-800 transition-colors">
              <h3 className="text-xl font-medium mb-3">Propose a Venture</h3>
              <p className="text-gray-400 text-sm mb-4">Share your breakthrough idea aligned with our focus areas.</p>
              <Button to="/contact" variant="text" size="sm" icon={<ArrowRight size={16} />}>
                Submit Proposal
              </Button>
            </div>
            
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-indigo-800 transition-colors">
              <h3 className="text-xl font-medium mb-3">Partner With Us</h3>
              <p className="text-gray-400 text-sm mb-4">Explore strategic partnerships, co-development, or investment.</p>
              <Button to="/contact" variant="text" size="sm" icon={<ArrowRight size={16} />}>
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudioModelPage;