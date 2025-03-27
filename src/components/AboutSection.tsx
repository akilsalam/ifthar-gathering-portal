
import React, { useEffect, useRef } from 'react';
import { Utensils, Coffee, Pizza, Laugh, Scissors, Lightbulb, Apple, Users } from 'lucide-react';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-12 md:py-20 px-4 md:px-6 bg-white">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <div className="fade-in-section">
              <h2 className="text-sm font-medium text-iftar-gold mb-4 uppercase tracking-wider">About the Event</h2>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold mb-4 md:mb-6 text-iftar-navy">
                Food Preparation & <br />Teamwork
              </h3>
              <p className="text-iftar-navy/80 mb-4 md:mb-6 text-sm md:text-base">
                Our Ifthar gathering was made special not just by the celebration itself, but by the collaborative preparation that went into it. As a team, we brought fruits, snacks, and tea from the office, working together to transform our everyday workspace into a festive environment.
              </p>
              <p className="text-iftar-navy/80 mb-4 md:mb-6 text-sm md:text-base">
                Together, we made fresh juice, cut and arranged fruits on serving platters, and decorated our technology department room with colorful lights. The preparation process was as meaningful as the celebration itself, allowing us to bond and work together in a new way.
              </p>
              <div className="bg-iftar-cream rounded-lg p-3 md:p-4 border-l-4 border-iftar-gold mb-4 md:mb-6">
                <p className="text-iftar-navy/80 italic text-xs md:text-sm">
                  <span className="font-semibold">Note:</span> It turns out our backend developers are just as precise with fruit cutting as they are with code optimization! #PerfectionistCoders
                </p>
              </div>
              <div className="bg-iftar-light-gold rounded-lg p-3 md:p-4 border-l-4 border-iftar-gold">
                <p className="text-iftar-navy/80 italic text-xs md:text-sm flex items-center">
                  <Laugh className="w-4 h-4 mr-2 text-iftar-gold flex-shrink-0" />
                  <span className="font-semibold">Fun fact:</span> Our tech team now jokingly refers to our snack arrangements as "well-designed user interfaces" and our fruit platters as "visually appealing front-end development."
                </p>
              </div>
            </div>
          </div>
          
          <div className="fade-in-section" style={{ transitionDelay: '0.2s' }}>
            <div className="relative mb-6 md:mb-8 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Team celebration" 
                className="w-full h-40 md:h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-iftar-navy/80 to-transparent p-3 md:p-4">
                <p className="text-white text-xs md:text-sm font-medium">Our tech team enjoying the fruits of their labor (literally!)</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card p-4 md:p-5 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="mb-3 text-iftar-gold">
                  <Apple className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h4 className="text-base md:text-lg font-semibold text-iftar-navy mb-2">Fruit Preparation</h4>
                <p className="text-xs md:text-sm text-iftar-navy/70">Our team worked together to cut and arrange fruits on platters, turning simple ingredients into beautiful displays.</p>
              </div>
              
              <div className="glass-card p-4 md:p-5 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="mb-3 text-iftar-gold">
                  <Coffee className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h4 className="text-base md:text-lg font-semibold text-iftar-navy mb-2">Fresh Beverages</h4>
                <p className="text-xs md:text-sm text-iftar-navy/70">We made fresh juice together in the office, with team members taking turns to prepare the perfect drinks.</p>
              </div>
              
              <div className="glass-card p-4 md:p-5 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="mb-3 text-iftar-gold">
                  <Lightbulb className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h4 className="text-base md:text-lg font-semibold text-iftar-navy mb-2">Colorful Decorations</h4>
                <p className="text-xs md:text-sm text-iftar-navy/70">Our tech department was transformed with colorful lights and decorations, creating a warm and festive atmosphere.</p>
              </div>
              
              <div className="glass-card p-4 md:p-5 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="mb-3 text-iftar-gold">
                  <Users className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h4 className="text-base md:text-lg font-semibold text-iftar-navy mb-2">Team Service</h4>
                <p className="text-xs md:text-sm text-iftar-navy/70">Everyone pitched in to serve the food, demonstrating that our collaboration extends beyond coding projects.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
