
import React, { useRef, useEffect } from 'react';
import { Camera, Heart, Users, CalendarClock } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const MemoriesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const memories = [
    {
      id: 1,
      image: "/lovable-uploads/2946c6d3-241a-4109-8f47-f960db770f45.png",
      title: "Group Selfie",
      description: "Making memories together outside the venue",
      icon: <Camera className="h-5 w-5 text-iftar-gold" />
    },
    {
      id: 2,
      image: "/lovable-uploads/0f67d32b-aa18-493c-9408-5f0d35779f5f.png",
      title: "Team Gathering",
      description: "The technology team gathering for the Ifthar event",
      icon: <Users className="h-5 w-5 text-iftar-gold" />
    },
    {
      id: 3,
      image: "/lovable-uploads/b4d5b7c8-7b7d-4c34-ba4d-cd1b84e91e6d.png",
      title: "Official Team Photo",
      description: "The technology team posing for the official photo",
      icon: <Heart className="h-5 w-5 text-iftar-gold" />
    },
  ];

  const highlights = [
    {
      icon: <Users className="h-6 w-6 text-iftar-gold" />,
      title: "Team Bonding",
      description: "Strengthened our connections beyond work"
    },
    {
      icon: <Heart className="h-6 w-6 text-iftar-gold" />,
      title: "Cultural Exchange",
      description: "Shared traditions and experiences with colleagues"
    },
    {
      icon: <CalendarClock className="h-6 w-6 text-iftar-gold" />,
      title: "Meaningful Gathering",
      description: "Created lasting memories with the team"
    }
  ];

  return (
    <section id="memories" ref={sectionRef} className="py-16 md:py-24 px-4 md:px-6 bg-white">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16 fade-in-section">
          <h2 className="text-sm font-medium text-iftar-gold mb-3 md:mb-4 uppercase tracking-wider">Event Memories</h2>
          <h3 className="text-2xl md:text-4xl font-serif font-semibold mb-4 md:mb-6 text-iftar-navy">
            Our Ifthar Gathering Highlights
          </h3>
          <p className="text-iftar-navy/80 max-w-2xl mx-auto">
            Relive the special moments from our technology team's Ifthar celebration. 
            An evening of connection, reflection, and celebration.
          </p>
        </div>

        <div className="mb-16 fade-in-section">
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {memories.map((memory) => (
                <CarouselItem key={memory.id} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-2">
                    <div className="rounded-xl overflow-hidden border border-iftar-gold/20 shadow-md transition-all duration-300 hover:shadow-xl bg-white group">
                      <div className="relative h-60 md:h-72 overflow-hidden">
                        <img 
                          src={memory.image} 
                          alt={memory.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-iftar-navy/70 via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-4 text-white">
                          <div className="flex items-center gap-2 mb-1">
                            {memory.icon}
                            <h4 className="font-medium">{memory.title}</h4>
                          </div>
                          <p className="text-sm text-white/80">{memory.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="left-1 bg-white/80 border-iftar-gold hover:bg-iftar-light-gold" />
              <CarouselNext className="right-1 bg-white/80 border-iftar-gold hover:bg-iftar-light-gold" />
            </div>
          </Carousel>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 fade-in-section">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="glass-card p-6 md:p-8 rounded-xl border border-iftar-gold/10 text-center transition-all duration-300 hover:shadow-lg hover:border-iftar-gold/30"
            >
              <div className="inline-flex items-center justify-center p-3 bg-iftar-light-gold rounded-full mb-4">
                {highlight.icon}
              </div>
              <h4 className="text-lg md:text-xl font-medium text-iftar-navy mb-2">{highlight.title}</h4>
              <p className="text-sm text-iftar-navy/70">{highlight.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-12 fade-in-section">
          <div className="glass-card p-6 md:p-8 rounded-xl border border-iftar-gold/20 max-w-3xl mx-auto">
            <h4 className="text-xl md:text-2xl font-serif font-medium text-iftar-navy mb-4">Thank You!</h4>
            <p className="text-iftar-navy/80">
              A special thank you to everyone who participated in our Ifthar gathering. 
              Your presence made this event truly special. We look forward to creating 
              more such memorable moments together as a team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemoriesSection;
