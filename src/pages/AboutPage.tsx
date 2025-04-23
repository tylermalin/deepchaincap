import React from 'react';
import AnimatedText from '../components/AnimatedText';
import ParallaxSection from '../components/ParallaxSection';
import Button from '../components/Button';
import useScrollAnimation from '../hooks/useScrollAnimation';

const AboutPage: React.FC = () => {
  const { ref: timelineRef, isVisible: isTimelineVisible } = useScrollAnimation();
  const { ref: teamRef, isVisible: isTeamVisible } = useScrollAnimation();
  const { ref: valuesRef, isVisible: isValuesVisible } = useScrollAnimation();

  // Sample team data
  const teamMembers = [
    {
      name: "Tyler Malin",
      role: "Co-Founder",
      bio: "Visionary leader with deep expertise in frontier technology and venture building. Previously led strategic initiatives in AI and blockchain.",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb"
    },
    {
      name: "Matthew Bowen",
      role: "Co-Founder",
      bio: "Technology innovator focused on scaling breakthrough solutions. Expert in Web3 and distributed systems.",
      image: "https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg?auto=compress&cs=tinysrgb"
    }
  ];

  // Timeline data
  const timelineEvents = [
    {
      year: "2020",
      title: "Origin",
      description: "DeepChain Capital founded by Tyler Malin and Matthew Bowen to bridge the gap between emerging technologies and real-world impact.",
    },
    {
      year: "2021",
      title: "Vision",
      description: "Established our first innovation lab and launched initial ventures in AI and energy storage.",
    },
    {
      year: "2023",
      title: "Today",
      description: "Operating across four focus areas with twelve active ventures and strategic partnerships.",
    },
    {
      year: "2025",
      title: "Next",
      description: "Expanding global presence with new labs and accelerating breakthrough technologies to market.",
    }
  ];

  // Values data
  const values = [
    {
      title: "Intellectual Curiosity",
      description: "We pursue knowledge relentlessly, exploring the boundaries of what's possible.",
    },
    {
      title: "Technical Rigor",
      description: "We ground our work in scientific principles and engineering excellence.",
    },
    {
      title: "Constructive Optimism",
      description: "We believe in a better future that we can actively build through innovation.",
    },
    {
      title: "Ethical Impact",
      description: "We develop technologies that enhance human flourishing and planetary health.",
    }
  ];

  return (
    <div className="pt-24 bg-black">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <AnimatedText 
                text="About DeepChain Capital" 
                className="text-4xl md:text-5xl font-bold mb-6"
                tag="h1"
              />
              <p className="text-xl text-gray-300 mb-8">
                We are a next-generation innovation studio, venture fund, and R&D lab focused on advancing technologies that will define our future.
              </p>
              <p className="text-gray-400 mb-8">
                Founded in 2020 by Tyler Malin and Matthew Bowen, DeepChain Capital bridges the gap between scientific discovery and commercial application by combining deep technical expertise, founder development, and strategic capital to build breakthrough companies.
              </p>
              <Button 
                to="/studio-model" 
                variant="primary" 
                size="lg"
              >
                Our Studio Model
              </Button>
            </div>
            <div className="relative rounded-lg overflow-hidden h-[400px] md:h-[500px]">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url('https://images.pexels.com/photos/8297160/pexels-photo-8297160.jpeg?auto=compress&cs=tinysrgb')`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
              </div>
              <div className="absolute bottom-8 left-8 max-w-xs">
                <blockquote className="text-xl italic">
                  "Building at the intersection of what's possible and what's needed."
                </blockquote>
                <p className="mt-4 text-indigo-400">Tyler Malin, Co-Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story Timeline */}
      <section 
        ref={timelineRef as React.RefObject<HTMLDivElement>}
        className="py-24 bg-gray-900"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <AnimatedText 
              text="Our Journey" 
              className="text-3xl md:text-4xl font-bold mb-4"
              tag="h2"
            />
            <p className="text-gray-400 max-w-2xl mx-auto">
              The evolution of DeepChain Capital from inception to our vision for the future.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-700 transform md:translate-x-px"></div>
            
            {/* Timeline events */}
            <div className="space-y-24">
              {timelineEvents.map((event, index) => (
                <div 
                  key={event.year}
                  className={`relative ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} transition-all duration-1000 ease-out ${
                    isTimelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className={`flex items-center ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    <div className={`md:w-1/2 relative ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                      {/* Year marker */}
                      <div className="absolute top-0 left-0 md:left-auto md:right-0 md:translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white text-sm font-bold py-1 px-3 rounded-full">
                        {event.year}
                      </div>
                      
                      {/* Timeline dot */}
                      <div className="absolute top-0 left-0 md:left-auto md:right-0 h-4 w-4 rounded-full bg-indigo-600 border-4 border-gray-900 transform -translate-y-1/2 md:translate-x-1/2 z-10"></div>
                      
                      {/* Content */}
                      <div className="bg-gray-800 rounded-lg p-6 mt-4">
                        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                        <p className="text-gray-300">{event.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section 
        ref={teamRef as React.RefObject<HTMLDivElement>}
        className="py-24 bg-black"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <AnimatedText 
              text="Our Team" 
              className="text-3xl md:text-4xl font-bold mb-4"
              tag="h2"
            />
            <p className="text-gray-400 max-w-2xl mx-auto">
              A constellation of scientists, entrepreneurs, investors, and operators building at the frontier.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name}
                className={`group relative bg-gray-900 rounded-lg overflow-hidden h-[350px] transition-all duration-700 ease-out ${
                  isTeamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  style={{ backgroundImage: `url(${member.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-indigo-400 text-sm mb-4">{member.role}</p>
                  
                  <div className="overflow-hidden h-0 group-hover:h-16 transition-all duration-300 ease-out">
                    <p className="text-gray-300 text-sm">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
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

      {/* Values Section */}
      <section 
        ref={valuesRef as React.RefObject<HTMLDivElement>}
        className="py-24 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <AnimatedText 
              text="What We Value" 
              className="text-3xl md:text-4xl font-bold mb-4"
              tag="h2"
            />
            <p className="text-gray-400 max-w-2xl mx-auto">
              The core principles that guide our decisions, investments, and collaboration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className={`bg-gray-900 border border-gray-800 rounded-lg p-8 transition-all duration-700 ease-out ${
                  isValuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <h3 className="text-xl font-semibold mb-4 text-indigo-400">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedText 
            text="Join Us in Building the Future" 
            className="text-3xl md:text-4xl font-bold mb-6"
            tag="h2"
          />
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Whether you're a founder, scientist, investor, or potential collaborator, we'd love to connect and explore how we can build together.
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
              to="/studio-model" 
              variant="outline" 
              size="lg"
            >
              Learn About Our Model
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;