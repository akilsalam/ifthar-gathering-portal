
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface ScheduleItem {
  time: string;
  title: string;
  description: string;
}

const scheduleItems: ScheduleItem[] = [
  {
    time: "5:30 PM",
    title: "Arrival & Welcome",
    description: "Check-in and mingle with colleagues"
  },
  {
    time: "6:00 PM",
    title: "Opening Remarks",
    description: "Brief welcome from the Technology Department Head"
  },
  {
    time: "6:15 PM",
    title: "Pre-Iftar Talk",
    description: "Short discussion on the significance of Ramadan"
  },
  {
    time: "6:45 PM",
    title: "Maghrib Prayer",
    description: "Optional prayer time (prayer room available)"
  },
  {
    time: "7:00 PM",
    title: "Iftar (Breaking Fast)",
    description: "Enjoy a delicious meal with colleagues"
  },
  {
    time: "8:00 PM",
    title: "Networking & Social Time",
    description: "Connect with team members in a relaxed atmosphere"
  },
  {
    time: "9:00 PM",
    title: "Closing Remarks",
    description: "Thank you and farewell"
  }
];

const ScheduleSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);

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

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      
      itemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
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
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-sm font-medium text-iftar-gold mb-4 uppercase tracking-wider">Event Timeline</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-iftar-navy">
            Schedule of the Evening
          </h3>
          <p className="text-iftar-navy/80 max-w-2xl mx-auto">
            Here's what you can expect during our Ifthar gathering. The event is designed to provide a meaningful experience for all participants.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-px bg-iftar-gold/30"></div>
          
          <ul className="space-y-10 relative">
            {scheduleItems.map((item, index) => (
              <li 
                key={index}
                ref={el => itemsRef.current[index] = el}
                className={cn(
                  "relative grid grid-cols-1 md:grid-cols-2 gap-8 fade-in-section",
                  index % 2 === 0 ? "md:text-right" : "md:flex-row-reverse"
                )}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-iftar-gold rounded-full border-4 border-iftar-cream z-10"></div>
                
                {/* Content depends on even/odd positioning */}
                <div className={cn(
                  "md:pr-12",
                  index % 2 !== 0 && "md:col-start-2"
                )}>
                  <div className={cn(
                    "glass-card p-6 rounded-xl transition-all duration-300 hover:shadow-lg",
                    index % 2 === 0 ? "md:mr-10" : "md:ml-10"
                  )}>
                    <span className="text-iftar-gold font-medium block mb-2">{item.time}</span>
                    <h4 className="text-xl font-semibold text-iftar-navy mb-2">{item.title}</h4>
                    <p className="text-sm text-iftar-navy/70">{item.description}</p>
                  </div>
                </div>
                
                {/* Empty div for layout on mobile / alternating on desktop */}
                <div className={index % 2 === 0 ? "md:col-start-2" : "md:col-start-1"}></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
