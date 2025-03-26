
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sparkles, Star, Code, Database, Cpu, Coffee, Users } from 'lucide-react';

const CoordinatorsSection: React.FC = () => {
  return (
    <section id="coordinators" className="py-20 px-6 bg-iftar-cream">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 fade-in-section">
          <h2 className="text-sm font-medium text-iftar-gold mb-4 uppercase tracking-wider">Meet Your Hosts</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-iftar-navy">
            The Masterminds Behind The Magic
          </h3>
          <p className="text-iftar-navy/80 max-w-2xl mx-auto">
            Our MERN stack interns have taken a break from debugging to bring you this spectacular Ifthar gathering!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Coordinator 1 */}
          <div className="fade-in-section coordinator-card group glass-card p-6 rounded-xl text-center flex flex-col items-center transition-all duration-300">
            <div className="relative mb-4">
              <Avatar className="h-32 w-32 border-4 border-iftar-gold">
                <AvatarImage src="/lovable-uploads/a02496b2-0319-478a-ac8c-7292108f0407.png" alt="Muhammed Anshid" />
                <AvatarFallback className="bg-iftar-gold text-white text-2xl">MA</AvatarFallback>
              </Avatar>
              <Sparkles className="absolute -top-2 -right-2 text-iftar-gold h-6 w-6" />
              <div className="absolute -bottom-2 -left-2 bg-white rounded-full p-1 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Code className="h-5 w-5 text-iftar-gold" />
              </div>
            </div>
            <h4 className="text-xl font-serif font-semibold text-iftar-navy mb-1">Muhammed Anshid</h4>
            <p className="text-iftar-navy/70 mb-3 text-sm italic">"React whisperer & kebab connoisseur"</p>
            <p className="text-iftar-navy/80 text-sm">
              When not creating pixel-perfect UIs, Anshid can be found explaining why everything should be a React component—even the food menu!
            </p>
            <div className="mt-4 pt-4 border-t border-iftar-gold/20 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-xs text-iftar-navy/60 italic">
                "My code is like my fasting: clean, disciplined, and occasionally interrupted by unexpected bugs."
              </p>
            </div>
          </div>

          {/* Coordinator 2 */}
          <div className="fade-in-section coordinator-card group glass-card p-6 rounded-xl text-center flex flex-col items-center transition-all duration-300" style={{ transitionDelay: '0.2s' }}>
            <div className="relative mb-4">
              <Avatar className="h-32 w-32 border-4 border-iftar-gold">
                <AvatarImage src="/lovable-uploads/da56bf1f-2f84-4673-af01-f299db445932.png" alt="Muhammed Munawwir" />
                <AvatarFallback className="bg-iftar-gold text-white text-2xl">MM</AvatarFallback>
              </Avatar>
              <Star className="absolute -top-2 -right-2 text-iftar-gold h-6 w-6" />
              <div className="absolute -bottom-2 -left-2 bg-white rounded-full p-1 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Database className="h-5 w-5 text-iftar-gold" />
              </div>
            </div>
            <h4 className="text-xl font-serif font-semibold text-iftar-navy mb-1">Muhammed Munawwir</h4>
            <p className="text-iftar-navy/70 mb-3 text-sm italic">"MongoDB master & samosa specialist"</p>
            <p className="text-iftar-navy/80 text-sm">
              Munawwir ensures our backend runs as smoothly as the Ifthar buffet line. He optimizes databases by day and dessert selections by night.
            </p>
            <div className="mt-4 pt-4 border-t border-iftar-gold/20 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-xs text-iftar-navy/60 italic">
                "My queries are fast, but not as fast as I'll be running to the food table when it's time to break fast."
              </p>
            </div>
          </div>
        </div>

        {/* Team Group Photo */}
        <div className="mt-16 mb-8 fade-in-section" style={{ transitionDelay: '0.3s' }}>
          <div className="text-center mb-6">
            <h4 className="text-xl font-serif font-semibold text-iftar-navy mb-2">The Technology Team</h4>
            <p className="text-iftar-navy/70 text-sm italic">The brilliant minds behind our digital transformation</p>
          </div>
          <div className="relative mx-auto max-w-3xl rounded-xl overflow-hidden shadow-xl border-4 border-iftar-gold">
            <img 
              src="/lovable-uploads/0f67d32b-aa18-493c-9408-5f0d35779f5f.png" 
              alt="Technology Team" 
              className="w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-iftar-navy/80 to-transparent p-4">
              <div className="flex items-center justify-center gap-2">
                <Users className="h-5 w-5 text-white" />
                <p className="text-white font-medium">Technology Department • Ifthar 2025</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-16 fade-in-section p-6 glass-card rounded-xl max-w-3xl mx-auto" style={{ transitionDelay: '0.4s' }}>
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-iftar-cream p-2 rounded-full shadow-lg">
            <div className="bg-iftar-gold rounded-full p-3">
              <Coffee className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="coordinator-quote text-center">
            <p className="text-iftar-navy/80 text-lg italic font-serif max-w-2xl mx-auto">
              "We promise the food will have fewer bugs than our code. Come hungry, leave with full stomachs and fewer merge conflicts!"
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Cpu className="w-5 h-5 text-iftar-gold animate-pulse" />
              <p className="text-sm text-iftar-navy/70 italic">Tech Department Interns, who spend more time deciding on dinner than debugging.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoordinatorsSection;
