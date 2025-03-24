
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        behavior: 'smooth',
        top: element.offsetTop - 80,
      });
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'glass-nav' : 'bg-transparent'
      )}
    >
      <div className="container max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl font-serif font-semibold text-iftar-navy">
            Ifthar <span className="gold-shimmer">2025</span>
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-iftar-navy hover:text-iftar-gold transition-colors text-sm font-medium"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('schedule')}
            className="text-iftar-navy hover:text-iftar-gold transition-colors text-sm font-medium"
          >
            Schedule
          </button>
          <button
            onClick={() => scrollToSection('location')}
            className="text-iftar-navy hover:text-iftar-gold transition-colors text-sm font-medium"
          >
            Location
          </button>
          <Button
            onClick={() => scrollToSection('rsvp')}
            variant="outline"
            className="bg-iftar-gold text-white hover:bg-iftar-deep-gold border-none"
          >
            RSVP Now
          </Button>
        </nav>

        <Button
          onClick={() => scrollToSection('rsvp')}
          className="md:hidden bg-iftar-gold text-white hover:bg-iftar-deep-gold"
          size="sm"
        >
          RSVP
        </Button>
      </div>
    </header>
  );
};

export default Header;
