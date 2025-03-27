
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, UtensilsCrossed, Pizza, Coffee, Drumstick, Laugh, Users } from 'lucide-react';

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

  const scrollToMemories = () => {
    const element = document.getElementById('memories');
    if (element) {
      window.scrollTo({
        behavior: 'smooth',
        top: element.offsetTop - 80,
      });
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center pt-20 pb-10 px-4 md:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-iftar-light-gold opacity-50 pointer-events-none"></div>
      
      {/* Floating food icons with more items and animations */}
      <div className="absolute w-full h-full overflow-hidden pointer-events-none">
        <UtensilsCrossed className="absolute text-iftar-gold/30 w-16 md:w-24 h-16 md:h-24 top-[15%] left-[10%] animate-float" style={{ animationDelay: '0.5s' }} />
        <Pizza className="absolute text-iftar-gold/30 w-14 md:w-20 h-14 md:h-20 bottom-[20%] right-[15%] animate-float" style={{ animationDelay: '1.2s' }} />
        <Coffee className="absolute text-iftar-gold/30 w-12 md:w-16 h-12 md:h-16 top-[25%] right-[20%] animate-float" style={{ animationDelay: '0.8s' }} />
        <Drumstick className="absolute text-iftar-gold/30 w-12 md:w-18 h-12 md:h-18 bottom-[30%] left-[25%] animate-float-reverse" style={{ animationDelay: '1.5s' }} />
        <Laugh className="absolute text-iftar-gold/30 w-10 md:w-14 h-10 md:h-14 top-[40%] left-[30%] animate-float" style={{ animationDelay: '1.7s' }} />
      </div>
      
      <div 
        ref={heroRef}
        className="z-10 max-w-4xl mx-auto text-center relative"
        style={{
          transform: 'translate(calc(var(--move-x, 0) * 0.5), calc(var(--move-y, 0) * 0.5))',
        }}
      >
        <div className="mb-6 md:mb-8 inline-block opacity-0 animate-slideUp" style={{ animationDelay: '0.3s' }}>
          <span className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-iftar-cream border border-iftar-gold/30 text-iftar-navy inline-flex items-center text-xs md:text-sm font-medium">
            <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 text-iftar-gold" />
            <time dateTime="2023-03-26">March 26, 2023</time>
          </span>
        </div>
        
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-semibold mb-4 md:mb-6 tracking-tight text-iftar-navy opacity-0 animate-slideUp" style={{ animationDelay: '0.6s' }}>
          Technology Department <br />
          <span className="gold-shimmer">Ifthar Gathering</span>
        </h1>
        
        <p className="text-base md:text-lg text-iftar-navy/80 max-w-2xl mx-auto mb-4 md:mb-6 opacity-0 animate-slideUp" style={{ animationDelay: '0.9s' }}>
          A beautiful evening of connection, reflection, and celebration as we broke fast together at the Cheyavoor Office.
        </p>
        
        <p className="text-base md:text-lg italic text-iftar-gold font-medium mb-6 md:mb-8 opacity-0 animate-slideUp" style={{ animationDelay: '0.9s' }}>
          We not only debugged our hunger, but also strengthened our team bonds! <br/>
          <span className="text-sm md:text-base">An unforgettable evening with amazing colleagues.</span>
        </p>
        
        {/* Team Group Photo - Updated with new photo */}
        <div className="relative mx-auto mb-10 max-w-3xl rounded-xl overflow-hidden border-4 border-iftar-gold shadow-xl opacity-0 animate-slideUp" style={{ animationDelay: '1.1s' }}>
          <img 
            src="/lovable-uploads/0f67d32b-aa18-493c-9408-5f0d35779f5f.png" 
            alt="Technology Team Group Photo" 
            className="w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-iftar-navy/80 to-transparent py-3 px-4">
            <div className="flex items-center justify-center gap-2">
              <Users className="h-4 w-4 text-white" />
              <p className="text-white text-sm font-medium">The Technology Team</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-3 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center items-center opacity-0 animate-slideUp" style={{ animationDelay: '1.3s' }}>
          <Button 
            onClick={scrollToMemories}
            className="bg-iftar-gold hover:bg-iftar-deep-gold text-white px-6 md:px-8 py-2.5 md:py-6 rounded-md transition-all duration-300 transform hover:scale-105 w-full md:w-auto"
          >
            View Memories
          </Button>
          
          <Button 
            variant="outline" 
            className="border-iftar-gold text-iftar-navy hover:bg-iftar-light-gold hover:text-iftar-navy w-full md:w-auto mt-2 md:mt-0"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 scroll-indicator opacity-0 animate-fadeIn" style={{ animationDelay: '1.5s' }}>
        <div className="w-6 h-9 md:w-8 md:h-12 rounded-full border-2 border-iftar-gold flex items-start justify-center p-1.5 md:p-2">
          <div className="w-1 h-2 md:h-3 bg-iftar-gold rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
