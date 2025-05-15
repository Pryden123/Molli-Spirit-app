import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MoonIcon } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const mainLinks = [
    { name: 'Accueil Mystique', path: '/' },
    { name: 'Grimoire Numérique', path: '/grimoire' },
    { name: 'Oracles et Divinations', path: '/oracles' },
    { name: 'Rituels et Invocations', path: '/rituels' },
    { name: 'Symboles Sacrés', path: '/symboles' },
  ];
  
  const secondaryLinks = [
    { name: 'Tirage de Tarot', path: '/tarot' },
    { name: 'Lecture des Runes', path: '/runes' },
    { name: 'Voyance et Médiumnité', path: '/voyance' },
    { name: 'Mémoire de Rêve', path: '/reves' },
    { name: 'Sortilèges et Formules', path: '/sortileges' },
  ];

  return (
    <nav className="mystical-gradient sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <MoonIcon className="h-8 w-8 text-red-600" />
            <span className="font-cinzel text-xl bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent">Molli Spirit</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {mainLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`font-cinzel text-sm transition-colors hover:text-yellow-300 ${
                  location.pathname === link.path ? 'text-yellow-300' : 'text-gray-200'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/inscription" 
              className="mystical-button text-sm"
            >
              Devenir Membre
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-indigo-900/95 backdrop-blur-sm animate-fade-in">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {mainLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2 font-cinzel rounded-md ${
                  location.pathname === link.path 
                    ? 'bg-purple-800/50 text-white' 
                    : 'text-gray-200 hover:bg-purple-800/30'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 border-t border-purple-700/30">
              <p className="px-3 py-1 text-xs text-gray-400 uppercase font-cinzel">Sections Spéciales</p>
              {secondaryLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2 font-cinzel text-sm rounded-md ${
                    location.pathname === link.path 
                      ? 'bg-purple-800/50 text-white' 
                      : 'text-gray-200 hover:bg-purple-800/30'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="pt-2">
              <Link
                to="/inscription"
                className="block w-full text-center mystical-button"
                onClick={() => setIsMenuOpen(false)}
              >
                Devenir Membre
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;