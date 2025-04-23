import React from 'react';
import AnimatedText from '../components/AnimatedText';
import Button from '../components/Button';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { ArrowRight, Calendar, User } from 'lucide-react';

interface NewsArticle {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
  link: string;
}

const NewsPage: React.FC = () => {
  const { ref: newsRef, isVisible: isNewsVisible } = useScrollAnimation();
  
  // Sample news data
  const newsArticles: NewsArticle[] = [
    {
      title: "The Future of Neuromorphic Computing",
      excerpt: "How brain-inspired architectures are transforming AI hardware and enabling new computational paradigms.",
      image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb",
      date: "June 15, 2025",
      author: "Dr. Sarah Johnson",
      category: "Artificial Intelligence",
      link: "#"
    },
    {
      title: "Breakthrough in Quantum Material Design",
      excerpt: "Our researchers have developed a new approach to quantum material design that could revolutionize energy storage.",
      image: "https://images.pexels.com/photos/2876659/pexels-photo-2876659.jpeg?auto=compress&cs=tinysrgb",
      date: "May 28, 2025",
      author: "Dr. Emily Chen",
      category: "Deep Science",
      link: "#"
    },
    {
      title: "Fusion Energy: Closing the Gap",
      excerpt: "Recent advancements in plasma containment are bringing commercial fusion energy closer to reality.",
      image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb",
      date: "April 12, 2025",
      author: "Michael Rodriguez",
      category: "Energy Transition",
      link: "#"
    },
    {
      title: "Scaling Blockchain for Enterprise Applications",
      excerpt: "How our portfolio companies are solving the trilemma of security, decentralization, and scalability.",
      image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb",
      date: "March 3, 2025",
      author: "David Park",
      category: "Blockchain",
      link: "#"
    },
    {
      title: "The Studio Approach to DeepTech Innovation",
      excerpt: "Why traditional venture models struggle with frontier technology and how studios can bridge the gap.",
      image: "https://images.pexels.com/photos/7735699/pexels-photo-7735699.jpeg?auto=compress&cs=tinysrgb",
      date: "February 20, 2025",
      author: "Dr. Emily Chen",
      category: "Venture Building",
      link: "#"
    },
    {
      title: "Autonomous Systems and Human-AI Collaboration",
      excerpt: "The evolving relationship between human operators and increasingly autonomous systems.",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb",
      date: "January 15, 2025",
      author: "Dr. Sarah Johnson",
      category: "Artificial Intelligence",
      link: "#"
    }
  ];

  return (
    <div className="pt-24 bg-black">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <AnimatedText 
              text="News & Ideas" 
              className="text-4xl md:text-5xl font-bold mb-6"
              tag="h1"
            />
            <p className="text-xl text-gray-300 mb-8">
              Explore our latest thinking, research highlights, and venture spotlights from the frontiers of innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="lg:pr-8">
              <span className="inline-block text-indigo-400 text-sm uppercase tracking-wider mb-4">Featured</span>
              <h2 className="text-3xl font-bold mb-4">{newsArticles[0].title}</h2>
              <p className="text-gray-300 mb-6">{newsArticles[0].excerpt}</p>
              
              <div className="flex items-center text-sm text-gray-400 mb-6">
                <Calendar size={16} className="mr-1" />
                <span className="mr-4">{newsArticles[0].date}</span>
                <User size={16} className="mr-1" />
                <span>{newsArticles[0].author}</span>
              </div>
              
              <Button 
                href={newsArticles[0].link} 
                variant="primary" 
                size="md"
                icon={<ArrowRight size={16} />}
              >
                Read Article
              </Button>
            </div>
            
            <div className="rounded-lg overflow-hidden h-[300px] lg:h-[400px]">
              <img 
                src={newsArticles[0].image} 
                alt={newsArticles[0].title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section 
        ref={newsRef as React.RefObject<HTMLDivElement>}
        className="py-24 bg-gray-900"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-12">Latest Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.slice(1).map((article, index) => (
              <div 
                key={article.title}
                className={`bg-gray-800 rounded-lg overflow-hidden transition-all duration-700 ease-out ${
                  isNewsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs py-1 px-2 bg-indigo-900/50 text-indigo-300 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-400">{article.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{article.excerpt}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">{article.author}</span>
                    <Button 
                      href={article.link} 
                      variant="text" 
                      size="sm"
                      icon={<ArrowRight size={14} />}
                    >
                      Read
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              href="#" 
              variant="outline" 
              size="md"
            >
              View All Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedText 
            text="Stay Informed" 
            className="text-3xl md:text-4xl font-bold mb-6"
            tag="h2"
          />
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest insights, research, and venture updates.
          </p>
          
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow bg-gray-800 text-white border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required
              />
              <Button 
                variant="primary" 
                size="md"
              >
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-gray-500 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;