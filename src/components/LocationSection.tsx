
import React, { useEffect, useRef } from 'react';
import { MapPin, Clock, CalendarDays, Map, Navigation, CheckCircle } from 'lucide-react';

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
              When & Where <span className="text-iftar-gold">(Completed)</span>
            </h3>

            <div className="mb-6 inline-flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-lg">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">This event has already taken place</span>
            </div>

            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="bg-iftar-light-gold p-3 rounded-full mr-4 transition-all duration-300 group-hover:bg-iftar-gold group-hover:text-white">
                  <CalendarDays className="w-6 h-6 text-iftar-gold group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-iftar-navy text-lg mb-1">Date</h4>
                  <p className="text-iftar-navy/70 mb-1">Wednesday, March 26, 2025</p>
                  <p className="text-sm text-iftar-navy/60">Ramadan 1446 AH</p>
                  <p className="text-xs text-iftar-gold mt-1 italic">It was a wonderful gathering!</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-iftar-light-gold p-3 rounded-full mr-4 transition-all duration-300 group-hover:bg-iftar-gold group-hover:text-white">
                  <Clock className="w-6 h-6 text-iftar-gold group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-iftar-navy text-lg mb-1">Time</h4>
                  <p className="text-iftar-navy/70 mb-1">5:30 PM - 9:00 PM</p>
                  <p className="text-sm text-iftar-navy/60">Iftar was at approximately 7:00 PM</p>
                  <p className="text-xs text-iftar-gold mt-1 italic">We cherished every moment together</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-iftar-light-gold p-3 rounded-full mr-4 transition-all duration-300 group-hover:bg-iftar-gold group-hover:text-white">
                  <MapPin className="w-6 h-6 text-iftar-gold group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-iftar-navy text-lg mb-1">Location</h4>
                  <p className="text-iftar-navy/70 mb-1">Technology Department</p>
                  <p className="text-iftar-navy/70 mb-1">Cheyavoor Office</p>
                  <p className="text-sm text-iftar-navy/60">Conference Hall, 3rd Floor</p>
                  <p className="text-xs text-iftar-gold mt-1 italic">The venue was beautifully decorated</p>
                </div>
              </div>
            </div>
          </div>

          <div ref={rightColRef} className="fade-in-section" style={{ transitionDelay: '0.2s' }}>
            <div className="relative h-full min-h-[400px] overflow-hidden rounded-xl shadow-lg">
              {/* Map image */}
              <img 
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Office building" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-iftar-navy/60"></div>
              
              {/* Overlaid content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-6 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg max-w-xs">
                  <div className="w-16 h-16 bg-iftar-gold/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-iftar-gold" />
                  </div>
                  <h4 className="text-xl font-semibold text-iftar-navy mb-2">Technology Department</h4>
                  <p className="text-iftar-navy/70 mb-4">Cheyavoor Office</p>
                  <p className="text-sm text-iftar-navy/60 mb-4">
                    The conference hall is located on the 3rd floor. Parking is available in the main lot.
                  </p>
                  <div className="flex justify-center space-x-4">
                    <div className="flex items-center text-iftar-gold text-sm">
                      <Map className="w-4 h-4 mr-1" />
                      <span>See Location</span>
                    </div>
                    <div className="flex items-center text-iftar-gold text-sm">
                      <Navigation className="w-4 h-4 mr-1" />
                      <span>View Photos</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Funny note */}
              <div className="absolute bottom-4 right-4 bg-white rounded-lg px-3 py-2 shadow-lg transform rotate-2">
                <p className="text-xs text-iftar-navy font-medium">This is where the magic happened!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
