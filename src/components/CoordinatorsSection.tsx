
import React from 'react';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Sparkles, Star } from 'lucide-react';

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
          <div className="fade-in-section glass-card p-6 rounded-xl text-center flex flex-col items-center">
            <div className="relative mb-4">
              <Avatar className="h-24 w-24 border-4 border-iftar-gold">
                <AvatarFallback className="bg-iftar-gold text-white text-2xl">MA</AvatarFallback>
              </Avatar>
              <Sparkles className="absolute -top-2 -right-2 text-iftar-gold h-6 w-6" />
            </div>
            <h4 className="text-xl font-serif font-semibold text-iftar-navy mb-1">Muhammed Anshid</h4>
            <p className="text-iftar-navy/70 mb-3 text-sm italic">"React whisperer & kebab connoisseur"</p>
            <p className="text-iftar-navy/80 text-sm">
              When not creating pixel-perfect UIs, Anshid can be found explaining why everything should be a React component—even the food menu!
            </p>
          </div>

          {/* Coordinator 2 */}
          <div className="fade-in-section glass-card p-6 rounded-xl text-center flex flex-col items-center" style={{ transitionDelay: '0.2s' }}>
            <div className="relative mb-4">
              <Avatar className="h-24 w-24 border-4 border-iftar-gold">
                <AvatarFallback className="bg-iftar-gold text-white text-2xl">MM</AvatarFallback>
              </Avatar>
              <Star className="absolute -top-2 -right-2 text-iftar-gold h-6 w-6" />
            </div>
            <h4 className="text-xl font-serif font-semibold text-iftar-navy mb-1">Muhammed Munawwir</h4>
            <p className="text-iftar-navy/70 mb-3 text-sm italic">"MongoDB master & samosa specialist"</p>
            <p className="text-iftar-navy/80 text-sm">
              Munawwir ensures our backend runs as smoothly as the Ifthar buffet line. He optimizes databases by day and dessert selections by night.
            </p>
          </div>
        </div>

        <div className="text-center mt-12 fade-in-section" style={{ transitionDelay: '0.4s' }}>
          <p className="text-iftar-navy/60 text-sm italic max-w-2xl mx-auto">
            "We promise the food will have fewer bugs than our code. Come hungry, leave with full stomachs and fewer merge conflicts!"
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoordinatorsSection;
