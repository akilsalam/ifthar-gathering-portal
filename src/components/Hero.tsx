
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.classList.add('animate-fadeIn');
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const moveX = (clientX - innerWidth / 2) / innerWidth * 20;
      const moveY = (clientY - innerHeight / 2) / innerHeight * 20;
      
      heroRef.current.style.setProperty('--move-x', `${moveX}px`);
      heroRef.current.style.setProperty('--move-y', `${moveY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToRSVP = () => {
    const element = document.getElementById('rsvp');
    if (element) {
      window.scrollTo({
        behavior: 'smooth',
        top: element.offsetTop - 80,
      });
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center pt-20 pb-10 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-iftar-light-gold opacity-50 pointer-events-none"></div>
      
      <div 
        ref={heroRef}
        className="z-10 max-w-4xl mx-auto text-center relative"
        style={{
          transform: 'translate(calc(var(--move-x, 0) * 0.5), calc(var(--move-y, 0) * 0.5))',
        }}
      >
        <div className="mb-8 inline-block opacity-0 animate-slideUp" style={{ animationDelay: '0.3s' }}>
          <span className="px-4 py-2 rounded-full bg-iftar-cream border border-iftar-gold/30 text-iftar-navy inline-flex items-center text-sm font-medium">
            <Calendar className="w-4 h-4 mr-2 text-iftar-gold" />
            <time dateTime="2025-03-26">March 26, 2025</time>
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-semibold mb-6 tracking-tight text-iftar-navy opacity-0 animate-slideUp" style={{ animationDelay: '0.6s' }}>
          Technology Department <br />
          <span className="gold-shimmer">Ifthar Gathering</span>
        </h1>
        
        <p className="text-lg md:text-xl text-iftar-navy/80 max-w-2xl mx-auto mb-10 opacity-0 animate-slideUp" style={{ animationDelay: '0.9s' }}>
          Join us for an evening of connection, reflection, and celebration as we break fast together at the Cheyavoor Office.
        </p>
        
        <div className="space-x-4 opacity-0 animate-slideUp" style={{ animationDelay: '1.2s' }}>
          <Button 
            onClick={scrollToRSVP}
            className="bg-iftar-gold hover:bg-iftar-deep-gold text-white px-8 py-6 rounded-md transition-all duration-300 transform hover:scale-105"
          >
            RSVP Now
          </Button>
          
          <Button 
            variant="outline" 
            className="border-iftar-gold text-iftar-navy hover:bg-iftar-light-gold hover:text-iftar-navy"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 scroll-indicator opacity-0 animate-fadeIn" style={{ animationDelay: '1.5s' }}>
        <div className="w-8 h-12 rounded-full border-2 border-iftar-gold flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-iftar-gold rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
