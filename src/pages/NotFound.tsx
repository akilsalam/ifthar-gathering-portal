
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-iftar-light-gold p-6">
      <div className="text-center glass-card p-12 rounded-xl max-w-lg">
        <div className="mb-6 inline-block">
          <span className="px-4 py-2 rounded-full bg-iftar-cream border border-iftar-gold/30 text-iftar-navy inline-flex items-center text-sm font-medium">
            <Calendar className="w-4 h-4 mr-2 text-iftar-gold" />
            <span>Ifthar Gathering 2025</span>
          </span>
        </div>
        
        <h1 className="text-4xl font-serif font-semibold mb-4 text-iftar-navy">404</h1>
        <p className="text-xl text-iftar-navy/80 mb-8">Oops! Page not found</p>
        
        <Button 
          onClick={() => window.location.href = '/'}
          className="bg-iftar-gold hover:bg-iftar-deep-gold text-white transition-all duration-300"
        >
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
