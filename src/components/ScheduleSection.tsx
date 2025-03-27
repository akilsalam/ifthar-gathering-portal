
import React, { useRef, useEffect } from 'react';
import { Coffee, Heart, Clock, Smile, MessageCircle, Users } from 'lucide-react';

interface MemoryHighlight {
  title: string;
  description: string;
  time: string;
  icon: React.ReactNode;
}

const memoryHighlights: MemoryHighlight[] = [
  {
    time: "5:30 PM",
    title: "Arrival & Welcome",
    description: "Colleagues arrived and were greeted with warm smiles and excitement",
    icon: <Users className="h-5 w-5 text-iftar-gold" />
  },
  {
    time: "6:15 PM",
    title: "Meaningful Conversations",
    description: "Sharing stories and strengthening our bonds as a team",
    icon: <MessageCircle className="h-5 w-5 text-iftar-gold" />
  },
  {
    time: "7:00 PM",
    title: "Breaking Fast Together",
    description: "The beautiful moment when we all shared in breaking the fast",
    icon: <Clock className="h-5 w-5 text-iftar-gold" />
  },
  {
    time: "7:30 PM",
    title: "Laughter & Joy",
    description: "The dining area filled with smiles and friendly conversations",
    icon: <Smile className="h-5 w-5 text-iftar-gold" />
  },
  {
    time: "8:15 PM",
    title: "Coffee & Sweets",
    description: "Enjoying a selection of desserts and Arabic coffee together",
    icon: <Coffee className="h-5 w-5 text-iftar-gold" />
  },
  {
    time: "9:00 PM",
    title: "Heartfelt Goodbyes",
    description: "Parting with warm hearts and new memories to cherish",
    icon: <Heart className="h-5 w-5 text-iftar-gold" />
  }
];

const ScheduleSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section 
      id="schedule" 
      ref={sectionRef}
      className="py-20 px-6 bg-iftar-cream"
    >
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16 fade-in-section">
          <h2 className="text-sm font-medium text-iftar-gold mb-4 uppercase tracking-wider">How Our Evening Unfolded</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-iftar-navy">
            Highlights of Our Evening
          </h3>
          <p className="text-iftar-navy/80 max-w-2xl mx-auto">
            Relive the flow of our memorable Ifthar gathering through these special moments that made the evening magical.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {memoryHighlights.map((highlight, index) => (
            <div 
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="fade-in-section glass-card p-6 rounded-xl border border-iftar-gold/20 transition-all duration-300 hover:shadow-lg hover:border-iftar-gold/30"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-iftar-light-gold rounded-full">
                  {highlight.icon}
                </div>
                <div>
                  <span className="text-iftar-gold font-medium text-sm block mb-1">{highlight.time}</span>
                  <h4 className="text-lg font-semibold text-iftar-navy mb-2">{highlight.title}</h4>
                  <p className="text-sm text-iftar-navy/70">{highlight.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center fade-in-section">
          <div className="inline-block p-8 glass-card rounded-xl border border-iftar-gold/20 max-w-2xl">
            <h4 className="text-xl font-medium text-iftar-navy mb-4">An Evening to Remember</h4>
            <p className="text-iftar-navy/80">
              "The most beautiful moments in life are the ones we share with others. Our Ifthar gathering was filled with such moments - from breaking bread together to sharing stories and laughter. These memories will stay with us long after the event."
            </p>
            <div className="mt-4 flex items-center justify-center">
              <div className="p-2 bg-iftar-light-gold rounded-full">
                <Heart className="h-5 w-5 text-iftar-deep-gold" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
