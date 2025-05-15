import React, { useState } from 'react';
import { Sparkles, RefreshCw } from 'lucide-react';

const Tarot: React.FC = () => {
  const [tirage, setTirage] = useState<number[]>([]);
  const [isFlipped, setIsFlipped] = useState<boolean[]>([]);
  
  const cartes = [
    "Le Bateleur", "La Papesse", "L'Impératrice", "L'Empereur", 
    "Le Pape", "L'Amoureux", "Le Chariot", "La Justice", 
    "L'Ermite", "La Roue de Fortune", "La Force", "Le Pendu", 
    "L'Arcane sans nom", "Tempérance", "Le Diable", "La Maison Dieu", 
    "L'Étoile", "La Lune", "Le Soleil", "Le Jugement", 
    "Le Monde", "Le Mat"
  ];
  
  const faireTirage = () => {
    const nouveauTirage: number[] = [];
    const nouveauIsFlipped: boolean[] = [];
    
    // Tirage de trois cartes
    while (nouveauTirage.length < 3) {
      const randomCard = Math.floor(Math.random() * cartes.length);
      if (!nouveauTirage.includes(randomCard)) {
        nouveauTirage.push(randomCard);
        nouveauIsFlipped.push(false);
      }
    }
    
    setTirage(nouveauTirage);
    setIsFlipped(nouveauIsFlipped);
  };
  
  const retournerCarte = (index: number) => {
    const nouveauIsFlipped = [...isFlipped];
    nouveauIsFlipped[index] = true;
    setIsFlipped(nouveauIsFlipped);
  };
  
  const getInterpretation = (index: number) => {
    const interpretations = [
      "Commencement, initiative, potentiel",
      "Sagesse intérieure, mystère, intuition",
      "Abondance, créativité, féminité",
      "Autorité, structure, contrôle",
      "Tradition, conformité, croyance",
      "Choix, amour, relation",
      "Détermination, contrôle, succès",
      "Équilibre, vérité, conséquence",
      "Introspection, solitude, recherche",
      "Chance, destin, cycle",
      "Courage, persuasion, influence",
      "Sacrifice, lâcher-prise, perspective",
      "Fin, transformation, transition",
      "Modération, équilibre, santé",
      "Attachement, ombres, dépendance",
      "Changement soudain, chaos, libération",
      "Espoir, inspiration, sérénité",
      "Illusion, peurs, incertitude",
      "Joie, vitalité, accomplissement",
      "Éveil, renouveau, absolution",
      "Accomplissement, réalisation, voyage",
      "Liberté, foi, originalité"
    ];
    
    return interpretations[tirage[index]];
  };

  return (
    <div className="animate-fade-in">
      <div className="flex items-center mb-8">
        <Sparkles className="h-8 w-8 text-yellow-400 mr-3" />
        <h1 className="section-title mb-0">Tirage de Tarot</h1>
      </div>
      
      <div className="mystical-card mb-8">
        <h2 className="font-cinzel text-xl text-white mb-4">Les Arcanes Révèlent Votre Chemin</h2>
        <p className="text-gray-300">
          Le Tarot est un puissant outil de divination qui permet de lever le voile sur les énergies qui influencent votre vie. Chaque carte est un miroir de votre âme et de votre parcours. Concentrez-vous sur une question ou une intention, puis laissez les arcanes vous guider vers la lumière de la compréhension.
        </p>
      </div>
      
      {tirage.length === 0 ? (
        <div className="flex justify-center mb-10">
          <button 
            onClick={faireTirage}
            className="mystical-button py-3 px-8 flex items-center"
          >
            <Sparkles className="h-5 w-5 mr-2" />
            Commencer le Tirage
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {tirage.map((carte, index) => (
              <div 
                key={index}
                className={`relative aspect-[3/5] cursor-pointer transform transition-all duration-700 ${
                  isFlipped[index] ? 'rotate-y-180' : ''
                }`}
                style={{
                  perspective: '1000px',
                  transformStyle: 'preserve-3d'
                }}
                onClick={() => !isFlipped[index] && retournerCarte(index)}
              >
                {/* Dos de la carte */}
                <div 
                  className={`absolute inset-0 mystical-card flex items-center justify-center backface-hidden ${
                    isFlipped[index] ? 'opacity-0' : 'opacity-100'
                  }`}
                  style={{
                    backfaceVisibility: 'hidden',
                    transition: 'opacity 0.7s'
                  }}
                >
                  <div className="absolute inset-0 border-2 border-yellow-500/30 m-3 rounded"></div>
                  <div className="absolute inset-0 m-4 border border-yellow-500/20 rounded flex items-center justify-center">
                    <div className="w-16 h-16 border-2 border-yellow-500/30 rounded-full flex items-center justify-center">
                      <Sparkles className="h-6 w-6 text-yellow-400" />
                    </div>
                  </div>
                </div>
                
                {/* Face de la carte */}
                <div 
                  className={`absolute inset-0 mystical-card backface-hidden flex flex-col justify-between ${
                    isFlipped[index] ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    backfaceVisibility: 'hidden',
                    transition: 'opacity 0.7s'
                  }}
                >
                  <div className="text-center border-b border-purple-700/30 pb-2">
                    <h3 className="font-cinzel text-yellow-300 text-lg">{cartes[carte]}</h3>
                  </div>
                  
                  <div className="flex-grow flex items-center justify-center py-4">
                    <p className="text-gray-200 text-center">{getInterpretation(index)}</p>
                  </div>
                  
                  <div className="text-center border-t border-purple-700/30 pt-2">
                    <p className="text-sm text-purple-300">Arcane {carte + 1}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mb-10">
            <button 
              onClick={faireTirage}
              className="mystical-button py-2 px-6 flex items-center"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Nouveau Tirage
            </button>
          </div>
        </>
      )}
      
      <div className="mystical-card p-6">
        <h2 className="font-cinzel text-xl text-white mb-4 text-center">Guide d'Interprétation</h2>
        
        <p className="text-gray-300 mb-4">
          Chaque position dans un tirage à trois cartes a une signification particulière :
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="p-4 border border-purple-700/30 rounded-md">
            <h3 className="font-cinzel text-white text-center mb-2">Passé</h3>
            <p className="text-gray-300 text-sm text-center">
              Les énergies et influences qui vous ont façonné
            </p>
          </div>
          
          <div className="p-4 border border-purple-700/30 rounded-md">
            <h3 className="font-cinzel text-white text-center mb-2">Présent</h3>
            <p className="text-gray-300 text-sm text-center">
              La situation actuelle et les forces en jeu
            </p>
          </div>
          
          <div className="p-4 border border-purple-700/30 rounded-md">
            <h3 className="font-cinzel text-white text-center mb-2">Futur</h3>
            <p className="text-gray-300 text-sm text-center">
              Les tendances émergentes et les possibilités
            </p>
          </div>
        </div>
        
        <p className="text-gray-300 text-sm italic text-center">
          Rappelez-vous que le Tarot n'est pas une prédiction figée, mais un aperçu des énergies en mouvement dans votre vie.
        </p>
      </div>
    </div>
  );
};

export default Tarot;