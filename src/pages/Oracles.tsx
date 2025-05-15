import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

const Oracles: React.FC = () => {
  const divinations = [
    {
      id: 1,
      title: "Tirage de Tarot",
      description: "Découvrez les messages des arcanes à travers différents tirages.",
      path: "/tarot",
      image: "https://images.pexels.com/photos/6896193/pexels-photo-6896193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    },
    {
      id: 2,
      title: "Lecture des Runes",
      description: "Explorez la sagesse ancienne des symboles nordiques.",
      path: "/runes",
      image: "https://images.pexels.com/photos/6510878/pexels-photo-6510878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    },
    {
      id: 3,
      title: "Voyance et Médiumnité",
      description: "Connectez-vous avec les énergies subtiles et le monde invisible.",
      path: "/voyance",
      image: "https://images.pexels.com/photos/4226898/pexels-photo-4226898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    }
  ];

  return (
    <div className="animate-fade-in">
      <div className="flex items-center mb-8">
        <Sparkles className="h-8 w-8 text-yellow-400 mr-3" />
        <h1 className="section-title mb-0">Oracles et Divinations</h1>
      </div>
      
      <div className="mystical-card mb-8">
        <h2 className="font-cinzel text-xl text-white mb-4">Pénétrez les Mystères du Temps</h2>
        <p className="text-gray-300">
          Les arts divinatoires nous permettent de puiser dans les courants invisibles qui traversent notre existence. Chaque méthode ouvre une fenêtre unique sur les possibilités qui se dessinent à l'horizon de votre vie. Explorez ces pratiques ancestrales pour éclairer votre chemin.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {divinations.map(divination => (
          <Link key={divination.id} to={divination.path} className="group">
            <div className="mystical-card h-full overflow-hidden">
              <div className="h-48 overflow-hidden rounded-md mb-4">
                <img 
                  src={divination.image} 
                  alt={divination.title} 
                  className="w-full h-full object-cover transform transition-transform group-hover:scale-110"
                />
              </div>
              <h3 className="font-cinzel text-lg text-white mb-2">{divination.title}</h3>
              <p className="text-gray-300 mb-4">{divination.description}</p>
              <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                <span className="font-cinzel text-sm">Explorer</span>
                <ArrowRight className="h-4 w-4 ml-2 transform transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mystical-card p-8">
        <h2 className="font-cinzel text-2xl text-white mb-6 text-center">L'Art de l'Interprétation</h2>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-4">
            La divination est davantage un art qu'une science exacte. Elle repose sur votre intuition, votre connexion avec les énergies subtiles et votre capacité à interpréter les symboles qui se présentent à vous.
          </p>
          
          <p className="text-gray-300 mb-4">
            Que vous utilisiez les cartes du tarot, les runes anciennes ou votre propre sensibilité psychique, rappelez-vous que ces outils sont des amplificateurs de votre propre sagesse intérieure.
          </p>
          
          <p className="text-gray-300">
            Pour approfondir votre pratique divinatoire, nous vous encourageons à explorer les différentes méthodes proposées dans notre section Oracles et à participer à nos ateliers virtuels réservés aux membres de Molli Spirit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Oracles;