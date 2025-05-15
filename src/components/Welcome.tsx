import React, { useState, useEffect } from 'react';
import { MoonIcon } from 'lucide-react';

interface WelcomeProps {
  onEnter: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onEnter }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 px-4">
      <div className={`text-center max-w-md mx-auto transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="inline-block mb-6 relative">
          <div className="absolute inset-0 rounded-full bg-red-500/20 blur-xl animate-pulse"></div>
          <div className="relative">
            <MoonIcon className="h-20 w-20 text-red-600 mx-auto" />
          </div>
        </div>
        
        <h1 className="font-cinzel text-3xl md:text-4xl bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent mb-4 animate-float-up" style={{animationDelay: '0.3s'}}>
          Molli Spirit
        </h1>
        
        <p className="text-purple-200 mb-8 text-lg animate-float-up" style={{animationDelay: '0.6s'}}>
          Bienvenue dans le royaume mystique où l'esprit et l'âme s'unissent dans une harmonie cosmique
        </p>
        
        <button 
          onClick={onEnter} 
          className="mystical-button animate-float-up"
          style={{animationDelay: '0.9s'}}
        >
          Entrer dans le Cercle
        </button>
      </div>
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-700/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-black/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-red-700/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Welcome;