
import React, { useEffect, useRef } from 'react';
import { MapPin, Clock, CalendarDays, Phone } from 'lucide-react';

const LocationSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (leftColRef.current) observer.observe(leftColRef.current);
    if (rightColRef.current) observer.observe(rightColRef.current);

    return () => {
      if (leftColRef.current) observer.unobserve(leftColRef.current);
      if (rightColRef.current) observer.unobserve(rightColRef.current);
    };
  }, []);

  return (
    <section id="location" ref={sectionRef} className="py-20 px-6 bg-white">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div ref={leftColRef} className="fade-in-section">
            <h2 className="text-sm font-medium text-iftar-gold mb-4 uppercase tracking-wider">Event Details</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-semibold mb-8 text-iftar-navy">
              When & Where
            </h3>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-iftar-light-gold p-3 rounded-full mr-4">
                  <CalendarDays className="w-6 h-6 text-iftar-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-iftar-navy text-lg mb-1">Date</h4>
                  <p className="text-iftar-navy/70 mb-1">Wednesday, March 26, 2025</p>
                  <p className="text-sm text-iftar-navy/60">Ramadan 1446 AH</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-iftar-light-gold p-3 rounded-full mr-4">
                  <Clock className="w-6 h-6 text-iftar-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-iftar-navy text-lg mb-1">Time</h4>
                  <p className="text-iftar-navy/70 mb-1">5:30 PM - 9:00 PM</p>
                  <p className="text-sm text-iftar-navy/60">Iftar at approximately 7:00 PM</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-iftar-light-gold p-3 rounded-full mr-4">
                  <MapPin className="w-6 h-6 text-iftar-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-iftar-navy text-lg mb-1">Location</h4>
                  <p className="text-iftar-navy/70 mb-1">Technology Department</p>
                  <p className="text-iftar-navy/70 mb-1">Cheyavoor Office</p>
                  <p className="text-sm text-iftar-navy/60">Conference Hall, 3rd Floor</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-iftar-light-gold p-3 rounded-full mr-4">
                  <Phone className="w-6 h-6 text-iftar-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-iftar-navy text-lg mb-1">Contact</h4>
                  <p className="text-iftar-navy/70 mb-1">Event Coordinator</p>
                  <p className="text-sm text-iftar-navy/60">tech.events@company.com</p>
                </div>
              </div>
            </div>
          </div>

          <div ref={rightColRef} className="fade-in-section" style={{ transitionDelay: '0.2s' }}>
            <div className="relative h-full min-h-[400px] overflow-hidden rounded-xl shadow-lg">
              {/* This would be your map, using a placeholder for now */}
              <div className="absolute inset-0 bg-iftar-light-navy/5 flex items-center justify-center">
                <div className="text-center px-6">
                  <div className="w-16 h-16 bg-iftar-gold/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-iftar-gold" />
                  </div>
                  <h4 className="text-xl font-semibold text-iftar-navy mb-2">Technology Department</h4>
                  <p className="text-iftar-navy/70 mb-4">Cheyavoor Office</p>
                  <p className="text-sm text-iftar-navy/60 max-w-xs mx-auto">
                    The conference hall is located on the 3rd floor. Parking is available in the main lot.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
