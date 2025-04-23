import React, { useState } from 'react';
import AnimatedText from '../components/AnimatedText';
import Button from '../components/Button';
import { Mail, MapPin, Phone, MessageSquare, Users, Lightbulb, Send } from 'lucide-react';

type InquiryType = 'general' | 'partnerships' | 'founders' | 'investors' | 'careers' | 'media';

const ContactPage: React.FC = () => {
  const [inquiryType, setInquiryType] = useState<InquiryType>('general');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    agreeToTerms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, we would send this data to a server
    console.log({ inquiryType, ...formData });
    alert('Form submitted! In a real application, this would be sent to the server.');
  };

  // Map inquiry types to their respective icons and descriptions
  const inquiryTypeInfo = {
    general: {
      icon: <MessageSquare className="h-5 w-5" />,
      title: 'General Inquiry',
      description: 'Questions about DeepChain Capital or our approach'
    },
    partnerships: {
      icon: <Users className="h-5 w-5" />,
      title: 'Partnerships',
      description: 'Explore collaboration opportunities with us'
    },
    founders: {
      icon: <Lightbulb className="h-5 w-5" />,
      title: 'Founders',
      description: 'Pitch your idea or join as a founder-in-residence'
    },
    investors: {
      icon: <Send className="h-5 w-5" />,
      title: 'Investors',
      description: 'Investment opportunities and LP information'
    },
    careers: {
      icon: <Users className="h-5 w-5" />,
      title: 'Careers',
      description: 'Job opportunities and general applications'
    },
    media: {
      icon: <MessageSquare className="h-5 w-5" />,
      title: 'Media',
      description: 'Press inquiries and speaking requests'
    }
  };

  return (
    <div className="pt-24 bg-black">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <AnimatedText 
              text="Contact Us" 
              className="text-4xl md:text-5xl font-bold mb-6"
              tag="h1"
            />
            <p className="text-xl text-gray-300 mb-8">
              Have a question or want to explore how we can work together? Reach out to our team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-lg flex">
              <div className="mr-4 p-3 bg-indigo-900/50 rounded-lg text-indigo-400">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium mb-2">Email Us</h3>
                <p className="text-gray-400 text-sm mb-1">General Inquiries:</p>
                <a href="mailto:info@deepchaincapital.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                  info@deepchaincapital.com
                </a>
              </div>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg flex">
              <div className="mr-4 p-3 bg-indigo-900/50 rounded-lg text-indigo-400">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium mb-2">Visit Us</h3>
                <p className="text-gray-400 text-sm">
                  123 Innovation Way<br />
                  San Francisco, CA 94103<br />
                  United States
                </p>
              </div>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg flex">
              <div className="mr-4 p-3 bg-indigo-900/50 rounded-lg text-indigo-400">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium mb-2">Call Us</h3>
                <p className="text-gray-400 text-sm mb-1">Main Office:</p>
                <a href="tel:+14155550123" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                  +1 (415) 555-0123
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-400 mb-8">
                Whether you're a founder looking to build with us, an organization seeking partnership, or just curious about our work, we'd love to hear from you.
              </p>
              
              <div className="bg-gray-800 p-6 rounded-lg mb-6">
                <h3 className="font-medium mb-4">What happens next?</h3>
                <ol className="space-y-4">
                  <li className="flex">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 bg-indigo-900/60 text-indigo-300 rounded-full mr-3 text-sm">1</span>
                    <span className="text-gray-300">We'll review your message within 24-48 hours</span>
                  </li>
                  <li className="flex">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 bg-indigo-900/60 text-indigo-300 rounded-full mr-3 text-sm">2</span>
                    <span className="text-gray-300">Our team will reach out to schedule a call if appropriate</span>
                  </li>
                  <li className="flex">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 bg-indigo-900/60 text-indigo-300 rounded-full mr-3 text-sm">3</span>
                    <span className="text-gray-300">We'll explore how we can work together</span>
                  </li>
                </ol>
              </div>
              
              <p className="text-sm text-gray-500">
                For urgent matters, please contact us directly at <a href="tel:+14155550123" className="text-indigo-400">+1 (415) 555-0123</a>.
              </p>
            </div>
            
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg">
                {/* Inquiry Type Selector */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    What can we help you with?
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {Object.entries(inquiryTypeInfo).map(([key, { icon, title }]) => (
                      <button
                        key={key}
                        type="button"
                        className={`flex items-center justify-center p-3 rounded-lg text-sm transition-colors ${
                          inquiryType === key 
                            ? 'bg-indigo-900/60 text-indigo-300 border border-indigo-700'
                            : 'bg-gray-700 text-gray-300 border border-gray-700 hover:bg-gray-600'
                        }`}
                        onClick={() => setInquiryType(key as InquiryType)}
                      >
                        <span className="mr-2">{icon}</span>
                        <span>{title}</span>
                      </button>
                    ))}
                  </div>
                  <p className="text-gray-400 mt-2 text-sm">
                    {inquiryTypeInfo[inquiryType].description}
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="agreeToTerms"
                        name="agreeToTerms"
                        type="checkbox"
                        checked={formData.agreeToTerms}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-500 rounded"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="agreeToTerms" className="font-medium text-gray-300">
                        I agree to the <a href="/privacy" className="text-indigo-400 hover:text-indigo-300">Privacy Policy</a> and <a href="/terms" className="text-indigo-400 hover:text-indigo-300">Terms of Service</a>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <Button 
                      variant="primary" 
                      size="lg"
                      className="w-full"
                    >
                      Send Message
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Our Locations</h2>
          <div className="relative rounded-lg overflow-hidden h-[400px]">
            {/* In a real application, this would be an actual map component */}
            <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
              <p className="text-gray-400">
                In a real application, this would be an interactive map showing our office locations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;