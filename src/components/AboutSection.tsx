
import React, { useEffect, useRef } from 'react';

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
            </div>
          </div>
          
          <div className="fade-in-section" style={{ transitionDelay: '0.2s' }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-5 rounded-xl">
                <h4 className="text-lg font-semibold text-iftar-navy mb-2">Connection</h4>
                <p className="text-sm text-iftar-navy/70">Build stronger relationships with colleagues in a relaxed setting.</p>
              </div>
              
              <div className="glass-card p-5 rounded-xl mt-6">
                <h4 className="text-lg font-semibold text-iftar-navy mb-2">Reflection</h4>
                <p className="text-sm text-iftar-navy/70">Take time to pause and appreciate our community and achievements.</p>
              </div>
              
              <div className="glass-card p-5 rounded-xl">
                <h4 className="text-lg font-semibold text-iftar-navy mb-2">Tradition</h4>
                <p className="text-sm text-iftar-navy/70">Experience the cultural significance of breaking fast together.</p>
              </div>
              
              <div className="glass-card p-5 rounded-xl mt-6">
                <h4 className="text-lg font-semibold text-iftar-navy mb-2">Celebration</h4>
                <p className="text-sm text-iftar-navy/70">Enjoy delicious food and meaningful conversation with colleagues.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
