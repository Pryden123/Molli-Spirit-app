import React from 'react';
import { MoonIcon } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="mystical-gradient mt-12 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <MoonIcon className="h-6 w-6 text-yellow-300 mr-2" />
            <span className="font-cinzel text-white">Molli Spirit</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-300">&copy; {new Date().getFullYear()} Molli Spirit. Tous droits réservés.</p>
            <p className="text-xs text-gray-400 mt-1">La voie mystique de l'illumination spirituelle</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;