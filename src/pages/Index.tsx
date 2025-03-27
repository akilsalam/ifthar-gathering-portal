
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ScheduleSection from '@/components/ScheduleSection';
import LocationSection from '@/components/LocationSection';
import CoordinatorsSection from '@/components/CoordinatorsSection';
import MemoriesSection from '@/components/MemoriesSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = 'Ifthar Gathering 2025 | Technology Department';
    
    // Initialize intersection observer for fade-in sections
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

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Add meta viewport tag to ensure proper scaling on mobile
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no';
    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <MemoriesSection />
        <ScheduleSection />
        <CoordinatorsSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
