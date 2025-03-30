
import React from 'react';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

interface MobileMenuProps {
  onNavigate: (sectionId: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onNavigate }) => {
  const [open, setOpen] = React.useState(false);

  const handleNavigation = (sectionId: string) => {
    setOpen(false);
    onNavigate(sectionId);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open main menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[80%] max-w-sm">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-left font-serif">
            Ifthar <span className="gold-shimmer">2025</span>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col space-y-4">
          <NavButton onClick={() => handleNavigation('about')}>About</NavButton>
          <NavButton onClick={() => handleNavigation('schedule')}>Experience</NavButton>
          <NavButton onClick={() => handleNavigation('coordinators')}>Team</NavButton>
          <NavButton onClick={() => handleNavigation('mern-quiz')}>MERN Quiz</NavButton>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const NavButton: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ 
  onClick, 
  children 
}) => {
  return (
    <button
      type="button"
      className="flex w-full items-center py-2 text-left text-lg font-medium text-iftar-navy hover:text-iftar-gold transition-colors"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default MobileMenu;
