
import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 py-4 px-6 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold gradient-text">QOVIA</span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('que-hacemos')} className="text-gray-700 hover:text-primary transition-colors">
            ¿Qué hacemos?
          </button>
          <button onClick={() => scrollToSection('ia-negocio')} className="text-gray-700 hover:text-primary transition-colors">
            IA para tu negocio
          </button>
          <button onClick={() => scrollToSection('proceso')} className="text-gray-700 hover:text-primary transition-colors">
            Proceso
          </button>
          <button onClick={() => scrollToSection('portafolio')} className="text-gray-700 hover:text-primary transition-colors">
            Portafolio
          </button>
          <button onClick={() => scrollToSection('planes')} className="text-gray-700 hover:text-primary transition-colors">
            Planes
          </button>
        </nav>
        
        <div className="hidden md:block">
          <Button 
            className="gradient-bg hover:opacity-90 transition-opacity" 
            onClick={() => window.open("https://wa.me/573165875372", "_blank")}
          >
            Solicitar Demo
          </Button>
        </div>

        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md py-4 px-6">
          <div className="flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('que-hacemos')}
              className="text-gray-700 hover:text-primary py-2"
            >
              ¿Qué hacemos?
            </button>
            <button 
              onClick={() => scrollToSection('ia-negocio')} 
              className="text-gray-700 hover:text-primary py-2"
            >
              IA para tu negocio
            </button>
            <button 
              onClick={() => scrollToSection('proceso')} 
              className="text-gray-700 hover:text-primary py-2"
            >
              Proceso
            </button>
            <button 
              onClick={() => scrollToSection('portafolio')} 
              className="text-gray-700 hover:text-primary py-2"
            >
              Portafolio
            </button>
            <button 
              onClick={() => scrollToSection('planes')} 
              className="text-gray-700 hover:text-primary py-2"
            >
              Planes
            </button>
            <Button 
              className="gradient-bg hover:opacity-90 transition-opacity w-full" 
              onClick={() => window.open("https://wa.me/573165875372", "_blank")}
            >
              Solicitar Demo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
