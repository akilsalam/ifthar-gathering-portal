
import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 px-6 bg-iftar-navy text-white">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-xl font-serif mb-4">
            <span className="gold-shimmer">Ifthar Gathering 2025</span>
          </h3>
          
          <p className="text-white/60 text-sm text-center max-w-lg mb-6">
            Join us for an evening of community, reflection, and celebration as we break fast together at the Technology Department Ifthar.
          </p>
          
          <div className="flex items-center justify-center text-xs text-white/40 mb-2">
            <span>Technology Department</span>
            <span className="mx-2">•</span>
            <span>Cheyavoor Office</span>
            <span className="mx-2">•</span>
            <span>March 26, 2025</span>
          </div>
          
          <div className="flex items-center justify-center text-xs text-white/40">
            <span>Made with</span>
            <Heart className="h-3 w-3 mx-1 text-iftar-gold" />
            <span>© {currentYear} Tech Department</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
