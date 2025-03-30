
import React, { useRef, useEffect } from 'react';
import { Camera, Heart, Users, CalendarClock, Image, Smile, Utensils, Youtube } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

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
      image: "/lovable-uploads/26ac864a-6c40-4056-81b6-6bdec9910905.png",
      title: "Team Gathering",
      description: "The technology team gathering for the Ifthar event",
      icon: <Users className="h-5 w-5 text-iftar-gold" />
    },
    {
      id: 3,
      image: "/lovable-uploads/26ac864a-6c40-4056-81b6-6bdec9910905.png",
      title: "Official Team Photo",
      description: "The technology team posing for the official photo",
      icon: <Heart className="h-5 w-5 text-iftar-gold" />
    },
  ];

  const moments = [
    {
      title: "Arrival & Welcome",
      description: "Everyone arrived with smiles and excitement as we gathered for the special evening",
      icon: <Users className="h-6 w-6 text-iftar-gold" />
    },
    {
      title: "Pre-Iftar Talk",
      description: "A heartwarming discussion on the significance of Ramadan and breaking fast together",
      icon: <Heart className="h-6 w-6 text-iftar-gold" />
    },
    {
      title: "Breaking Fast Together",
      description: "The magical moment when we all shared the first dates and water to break our fast",
      icon: <Utensils className="h-6 w-6 text-iftar-gold" />
    },
    {
      title: "Delicious Feast",
      description: "A spectacular spread of traditional and modern dishes that delighted everyone",
      icon: <Image className="h-6 w-6 text-iftar-gold" />
    },
    {
      title: "Team Bonding",
      description: "Strengthened our connections beyond work through laughter and stories",
      icon: <Smile className="h-6 w-6 text-iftar-gold" />
    },
    {
      title: "Lasting Memories",
      description: "Created memorable moments that will stay with the team for years to come",
      icon: <CalendarClock className="h-6 w-6 text-iftar-gold" />
    }
  ];

  return (
    <section id="memories" ref={sectionRef} className="py-16 md:py-24 px-4 md:px-6 bg-white">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16 fade-in-section">
          <h2 className="text-sm font-medium text-iftar-gold mb-3 md:mb-4 uppercase tracking-wider">Our Memories</h2>
          <h3 className="text-2xl md:text-4xl font-serif font-semibold mb-4 md:mb-6 text-iftar-navy">
            Cherished Moments from Our Ifthar
          </h3>
          <p className="text-iftar-navy/80 max-w-2xl mx-auto">
            Relive the special moments from our technology team's Ifthar celebration. 
            An evening of connection, reflection, and celebration that brought us all closer together.
          </p>
        </div>

        {/* YouTube Video Section */}
        <div className="mb-12 fade-in-section">
          <div className="relative rounded-xl overflow-hidden border-2 border-iftar-gold/30 shadow-xl">
            <div className="w-full aspect-video">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/8STgD6UZrgo" 
                title="Ifthar Event Memories" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
          <h4 className="text-center text-lg font-medium text-iftar-navy mt-4">Video Memories of Our Special Day</h4>
        </div>

        {/* Featured Image - Full Width */}
        <div className="mb-12 fade-in-section">
          <div className="relative rounded-xl overflow-hidden border-2 border-iftar-gold/30 shadow-xl">
            <img 
              src="/lovable-uploads/26ac864a-6c40-4056-81b6-6bdec9910905.png" 
              alt="Technology Team Group Photo" 
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-iftar-navy/70 via-transparent to-transparent flex items-end">
              <div className="p-4 md:p-6 text-white">
                <h4 className="text-xl md:text-2xl font-medium mb-2">The Technology Team</h4>
                <p className="text-white/80">Our wonderful team gathered for an evening of celebration and connection</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16 fade-in-section">
          <Carousel className="w-full max-w-5xl mx-auto">
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

        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-serif text-center font-semibold mb-8 text-iftar-navy fade-in-section">
            Memorable Moments
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in-section">
            {moments.map((moment, index) => (
              <Card key={index} className="glass-card border border-iftar-gold/10 transition-all duration-300 hover:shadow-lg hover:border-iftar-gold/30">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-iftar-light-gold rounded-full mb-4">
                      {moment.icon}
                    </div>
                    <h4 className="text-lg font-medium text-iftar-navy mb-2">{moment.title}</h4>
                    <p className="text-sm text-iftar-navy/70">{moment.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Group Selfie Highlight */}
        <div className="mb-16 fade-in-section">
          <div className="glass-card p-6 md:p-8 rounded-xl border border-iftar-gold/20 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h4 className="text-xl md:text-2xl font-serif font-medium text-iftar-navy mb-4">Team Selfie Moment</h4>
                <p className="text-iftar-navy/80 mb-6">
                  Capturing joy and camaraderie after our wonderful Ifthar meal. These spontaneous moments
                  of togetherness truly reflect the spirit of our technology team.
                </p>
                <div className="flex items-center gap-3">
                  <Camera className="h-5 w-5 text-iftar-gold" />
                  <p className="text-sm text-iftar-navy/70 italic">Outside Cheyavoor Office</p>
                </div>
              </div>
              <div className="order-1 md:order-2 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/2946c6d3-241a-4109-8f47-f960db770f45.png" 
                  alt="Team Selfie" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-12 fade-in-section">
          <div className="glass-card p-6 md:p-8 rounded-xl border border-iftar-gold/20 max-w-3xl mx-auto">
            <h4 className="text-xl md:text-2xl font-serif font-medium text-iftar-navy mb-4">Thank You For The Memories!</h4>
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
