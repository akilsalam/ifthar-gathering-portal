
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
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

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10 text-iftar-navy">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-white">
              <div className="flex flex-col h-full py-6">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xl font-serif font-semibold text-iftar-navy">
                    Ifthar <span className="gold-shimmer">2025</span>
                  </span>
                </div>
                <nav className="flex flex-col space-y-5">
                  <button
                    onClick={() => scrollToSection('about')}
                    className="text-iftar-navy hover:text-iftar-gold transition-colors text-left font-medium py-2"
                  >
                    About
                  </button>
                  <button
                    onClick={() => scrollToSection('schedule')}
                    className="text-iftar-navy hover:text-iftar-gold transition-colors text-left font-medium py-2"
                  >
                    Schedule
                  </button>
                  <button
                    onClick={() => scrollToSection('coordinators')}
                    className="text-iftar-navy hover:text-iftar-gold transition-colors text-left font-medium py-2"
                  >
                    Team
                  </button>
                  <button
                    onClick={() => scrollToSection('location')}
                    className="text-iftar-navy hover:text-iftar-gold transition-colors text-left font-medium py-2"
                  >
                    Location
                  </button>
                  <button
                    onClick={() => scrollToSection('mern-quiz')}
                    className="text-iftar-navy hover:text-iftar-gold transition-colors text-left font-medium py-2"
                  >
                    MERN Quiz
                  </button>
                  <Button
                    onClick={() => scrollToSection('rsvp')}
                    className="mt-4 w-full bg-iftar-gold text-white hover:bg-iftar-deep-gold"
                  >
                    RSVP Now
                  </Button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
