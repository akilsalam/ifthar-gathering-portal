
import React, { useEffect, useRef } from 'react';
import { Smile, Clock, Utensils, PartyPopper, CakeSlice } from 'lucide-react';

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
    <section id="about" ref={sectionRef} className="py-20 px-6 bg-white">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="fade-in-section">
              <h2 className="text-sm font-medium text-iftar-gold mb-4 uppercase tracking-wider">About the Event</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-iftar-navy">
                Celebrate Ramadan <br />with Your Colleagues
              </h3>
              <p className="text-iftar-navy/80 mb-6">
                Our annual Technology Department Ifthar gathering is a special time to come together as a team, share a meal, and strengthen our bonds. This year's event will feature traditional foods, meaningful conversation, and an opportunity to connect outside of our daily work environment.
              </p>
              <p className="text-iftar-navy/80 mb-6">
                Whether you observe Ramadan or not, all team members are warmly invited to participate in this cultural celebration. It's a wonderful opportunity to learn from one another and celebrate the diversity within our department.
              </p>
              <div className="bg-iftar-cream rounded-lg p-4 border-l-4 border-iftar-gold">
                <p className="text-iftar-navy/80 italic text-sm">
                  <span className="font-semibold">Note:</span> We've tested the Wi-Fi near the food tables, and it's strong enough to post food pictures before it gets cold! #PrioritiesInOrder
                </p>
              </div>
            </div>
          </div>
          
          <div className="fade-in-section" style={{ transitionDelay: '0.2s' }}>
            <div className="relative mb-8 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Team celebration" 
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-iftar-navy/80 to-transparent p-4">
                <p className="text-white text-sm font-medium">Last year's event (with 30% more laughter expected this year)</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-5 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="mb-3 text-iftar-gold">
                  <Smile className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-semibold text-iftar-navy mb-2">Connection</h4>
                <p className="text-sm text-iftar-navy/70">Build stronger relationships with colleagues in a relaxed setting where talking about JavaScript is temporarily banned.</p>
              </div>
              
              <div className="glass-card p-5 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 mt-6">
                <div className="mb-3 text-iftar-gold">
                  <Clock className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-semibold text-iftar-navy mb-2">Reflection</h4>
                <p className="text-sm text-iftar-navy/70">Take time to pause and appreciate our community - and how much better we cook than we code.</p>
              </div>
              
              <div className="glass-card p-5 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="mb-3 text-iftar-gold">
                  <Utensils className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-semibold text-iftar-navy mb-2">Tradition</h4>
                <p className="text-sm text-iftar-navy/70">Experience the cultural significance of breaking fast together - we promise no one will judge your serving size.</p>
              </div>
              
              <div className="glass-card p-5 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 mt-6">
                <div className="mb-3 text-iftar-gold">
                  <PartyPopper className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-semibold text-iftar-navy mb-2">Celebration</h4>
                <p className="text-sm text-iftar-navy/70">Enjoy delicious food and meaningful conversation - basically Slack but with real food instead of emojis.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
