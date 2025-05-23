
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/components/ui/use-toast';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { XCircle } from 'lucide-react';

const RSVPSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [attending, setAttending] = useState('yes');
  const [dietaryRestrictions, setDietaryRestrictions] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showEligibilityMessage, setShowEligibilityMessage] = useState(false);
  const { toast } = useToast();
  
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

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
    if (formRef.current) observer.observe(formRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (formRef.current) observer.unobserve(formRef.current);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email) {
      toast({
        title: "Error",
        description: "Please fill out all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setShowEligibilityMessage(true);
      toast({
        title: "Form Submitted",
        description: "Please check your eligibility status below.",
      });
      
      // Reset form
      setName('');
      setEmail('');
      setDepartment('');
      setAttending('yes');
      setDietaryRestrictions('');
      setIsSubmitting(false);
      
      // Scroll to MERN quiz section after submission
      setTimeout(() => {
        document.getElementById('mern-quiz')?.scrollIntoView({ behavior: 'smooth' });
      }, 1000);
    }, 1500);
  };

  return (
    <section id="rsvp" ref={sectionRef} className="py-16 md:py-20 px-4 md:px-6 bg-iftar-dark-cream">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12 fade-in-section">
          <h2 className="text-sm font-medium text-iftar-gold mb-3 md:mb-4 uppercase tracking-wider">Join Us</h2>
          <h3 className="text-2xl md:text-4xl font-serif font-semibold mb-4 md:mb-6 text-iftar-navy">
            Reserve Your Place
          </h3>
          <p className="text-iftar-navy/80 max-w-2xl mx-auto text-sm md:text-base">
            Please let us know if you'll be joining us for the Ifthar gathering. Your RSVP helps us prepare accordingly.
          </p>
        </div>

        <div className="max-w-xl mx-auto px-2 md:px-0">
          {showEligibilityMessage && (
            <Alert variant="destructive" className="mb-6 fade-in-section">
              <XCircle className="h-4 w-4" />
              <AlertTitle>Not Eligible</AlertTitle>
              <AlertDescription>
                Sorry, it seems you're not eligible for this Ifthar! Please complete our MERN stack quiz below to prove your tech knowledge and gain entry!
              </AlertDescription>
            </Alert>
          )}
          
          <form 
            ref={formRef}
            onSubmit={handleSubmit} 
            className="glass-card p-5 md:p-8 rounded-xl fade-in-section"
          >
            <div className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 gap-3 md:gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-iftar-navy text-sm md:text-base">Full Name *</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="border-iftar-gold/30 focus:border-iftar-gold focus:ring-iftar-gold/20"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-iftar-navy text-sm md:text-base">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="border-iftar-gold/30 focus:border-iftar-gold focus:ring-iftar-gold/20"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="department" className="text-iftar-navy text-sm md:text-base">Team/Department</Label>
                  <Input
                    id="department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    placeholder="Which team do you work in?"
                    className="border-iftar-gold/30 focus:border-iftar-gold focus:ring-iftar-gold/20"
                  />
                </div>

                <div className="space-y-2 md:space-y-3">
                  <Label className="text-iftar-navy text-sm md:text-base">Will you be attending?</Label>
                  <RadioGroup value={attending} onValueChange={setAttending} className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="attending-yes" className="text-iftar-gold" />
                      <Label htmlFor="attending-yes" className="text-iftar-navy/80 font-normal cursor-pointer text-sm md:text-base">Yes, I'll be there</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="attending-no" className="text-iftar-gold" />
                      <Label htmlFor="attending-no" className="text-iftar-navy/80 font-normal cursor-pointer text-sm md:text-base">Unable to attend</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dietary" className="text-iftar-navy text-sm md:text-base">Dietary Restrictions/Preferences</Label>
                  <Input
                    id="dietary"
                    value={dietaryRestrictions}
                    onChange={(e) => setDietaryRestrictions(e.target.value)}
                    placeholder="Any dietary restrictions we should know about?"
                    className="border-iftar-gold/30 focus:border-iftar-gold focus:ring-iftar-gold/20"
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-iftar-gold hover:bg-iftar-deep-gold text-white transition-all duration-300 py-5 md:py-6 text-sm md:text-base"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit RSVP"}
              </Button>
              
              <p className="text-xs text-center text-iftar-navy/60 mt-3 md:mt-4">
                * Required fields. Your information will only be used for event planning purposes.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;
