import React from 'react';
import AnimatedText from '../components/AnimatedText';
import Button from '../components/Button';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface JobListing {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  link: string;
}

const JoinUsPage: React.FC = () => {
  const { ref: valueRef, isVisible: isValueVisible } = useScrollAnimation();
  const { ref: jobsRef, isVisible: isJobsVisible } = useScrollAnimation();
  
  // Sample job listings
  const jobListings: JobListing[] = [
    {
      title: "Founder-in-Residence (AI)",
      department: "Venture Studio",
      location: "San Francisco or Remote",
      type: "Full-time",
      description: "Join us to co-create and lead a venture in artificial intelligence, specifically in the areas of neuromorphic computing or advanced machine learning systems.",
      link: "#"
    },
    {
      title: "Senior Material Scientist",
      department: "Deep Science",
      location: "Boston",
      type: "Full-time",
      description: "Lead research and development in advanced materials for energy storage and quantum applications, collaborating with our venture teams.",
      link: "#"
    },
    {
      title: "Lead Blockchain Engineer",
      department: "Blockchain",
      location: "Remote",
      type: "Full-time",
      description: "Architect and develop next-generation blockchain infrastructure and decentralized applications across our portfolio ventures.",
      link: "#"
    },
    {
      title: "Energy Systems Modeler",
      department: "Energy Transition",
      location: "London or Remote",
      type: "Full-time",
      description: "Create advanced models for energy systems, storage solutions, and grid integration to support our energy transition ventures.",
      link: "#"
    },
    {
      title: "Venture Partner",
      department: "Investments",
      location: "San Francisco or Remote",
      type: "Full-time",
      description: "Identify, evaluate, and support deep technology ventures aligned with our focus areas from initial concept through growth stages.",
      link: "#"
    }
  ];

  // Team benefits
  const benefits = [
    "Work on breakthrough technologies with global impact",
    "Collaborate with world-class scientists, engineers, and entrepreneurs",
    "Competitive compensation with equity upside",
    "Flexible work arrangements and locations",
    "Comprehensive health, dental, and vision benefits",
    "Continuous learning and development opportunities",
    "Regular exposure to cutting-edge research and innovation"
  ];

  return (
    <div className="pt-24 bg-black">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <AnimatedText 
                text="Join Our Team" 
                className="text-4xl md:text-5xl font-bold mb-6"
                tag="h1"
              />
              <p className="text-xl text-gray-300 mb-8">
                We're building a team of extraordinary scientists, engineers, operators, and entrepreneurs to create breakthrough companies at the frontier of what's possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  to="#current-openings" 
                  variant="primary" 
                  size="lg"
                >
                  View Openings
                </Button>
                <Button 
                  to="#founder-program" 
                  variant="outline" 
                  size="lg"
                >
                  Founder Program
                </Button>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden h-[300px] md:h-[400px]">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url('https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb')`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
              </div>
              <div className="absolute bottom-8 left-8 max-w-xs">
                <blockquote className="text-xl italic">
                  "Our team is our greatest asset. We bring together diverse perspectives united by a common mission."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section 
        ref={valueRef as React.RefObject<HTMLDivElement>}
        className="py-24 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <AnimatedText 
              text="Working at DeepChain" 
              className="text-3xl md:text-4xl font-bold mb-4"
              tag="h2"
            />
            <p className="text-gray-400 max-w-2xl mx-auto">
              We're creating an environment where extraordinary people can do their life's most meaningful work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`bg-gray-800 p-8 rounded-lg transition-all duration-700 ease-out ${
              isValueVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <h3 className="text-xl font-semibold mb-4 text-indigo-400">Build What Matters</h3>
              <p className="text-gray-300">
                We focus on technologies that can fundamentally transform industries and create positive impact at global scale. Every project has the potential to change the world.
              </p>
            </div>
            
            <div className={`bg-gray-800 p-8 rounded-lg transition-all duration-700 ease-out delay-200 ${
              isValueVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <h3 className="text-xl font-semibold mb-4 text-indigo-400">Intellectual Freedom</h3>
              <p className="text-gray-300">
                We create space for bold thinking, intellectual exploration, and deep technical work. We value rigor and first-principles thinking in everything we do.
              </p>
            </div>
            
            <div className={`bg-gray-800 p-8 rounded-lg transition-all duration-700 ease-out delay-400 ${
              isValueVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <h3 className="text-xl font-semibold mb-4 text-indigo-400">Extraordinary Teams</h3>
              <p className="text-gray-300">
                We bring together world-class talent across disciplines to collaborate on challenging problems. We believe that diverse perspectives lead to better outcomes.
              </p>
            </div>
          </div>
          
          <div className="mt-16 p-8 bg-gradient-to-r from-indigo-900/20 to-purple-900/20 rounded-xl border border-indigo-900/30">
            <h3 className="text-xl font-semibold mb-6">Team Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start"
                >
                  <CheckCircle className="text-indigo-400 mt-0.5 mr-2 flex-shrink-0" size={18} />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Program */}
      <section id="founder-program" className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-lg overflow-hidden h-[300px] md:h-[400px]">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb')`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/70 to-black"></div>
              </div>
            </div>
            
            <div>
              <span className="text-sm text-indigo-400 uppercase tracking-wider">For Entrepreneurs</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">Founder-in-Residence Program</h2>
              <p className="text-gray-300 mb-6">
                Our founder program offers a unique opportunity to co-create breakthrough companies with the support of our platform, expertise, and capital.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <h3 className="font-medium mb-2">Deep Technical Support</h3>
                  <p className="text-sm text-gray-400">Access to our scientific and engineering teams to develop and validate your technology.</p>
                </div>
                
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <h3 className="font-medium mb-2">Venture Building Resources</h3>
                  <p className="text-sm text-gray-400">Full operational and business development support to accelerate your go-to-market.</p>
                </div>
                
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <h3 className="font-medium mb-2">Founder-Friendly Structure</h3>
                  <p className="text-sm text-gray-400">Competitive compensation, meaningful equity, and long-term alignment through our studio model.</p>
                </div>
              </div>
              
              <Button 
                to="/contact" 
                variant="primary" 
                size="lg"
                icon={<ArrowRight size={16} />}
              >
                Apply to the Program
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section 
        id="current-openings"
        ref={jobsRef as React.RefObject<HTMLDivElement>}
        className="py-24 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Current Openings</h2>

          <div className="space-y-6">
            {jobListings.map((job, index) => (
              <div 
                key={job.title}
                className={`bg-gray-800 rounded-lg overflow-hidden transition-all duration-700 ease-out ${
                  isJobsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <span className="text-xs py-1 px-2 bg-indigo-900/50 text-indigo-300 rounded-full">
                        {job.department}
                      </span>
                      <span className="text-xs py-1 px-2 bg-gray-700 text-gray-300 rounded-full">
                        {job.location}
                      </span>
                      <span className="text-xs py-1 px-2 bg-gray-700 text-gray-300 rounded-full">
                        {job.type}
                      </span>
                    </div>
                    <p className="text-gray-400 mt-4">
                      {job.description}
                    </p>
                  </div>
                  <div className="md:flex-shrink-0">
                    <Button 
                      href={job.link} 
                      variant="outline" 
                      size="md"
                      icon={<ArrowRight size={16} />}
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-12 border-t border-gray-800 text-center">
            <h3 className="text-2xl font-semibold mb-6">Don't see the right role?</h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              We're always looking for exceptional talent. Submit your information and we'll reach out if there's a match.
            </p>
            <Button 
              to="/contact" 
              variant="primary" 
              size="lg"
            >
              General Application
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUsPage;