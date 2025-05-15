import React from 'react';
import { Compass } from 'lucide-react';

const Runes: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <div className="flex items-center mb-8">
        <Compass className="h-8 w-8 text-blue-400 mr-3" />
        <h1 className="section-title mb-0">Lecture des Runes</h1>
      </div>
      
      <div className="mystical-card mb-8">
        <h2 className="font-cinzel text-xl text-white mb-4">Les Sages Symboles Nordiques</h2>
        <p className="text-gray-300">
          Les runes sont un ancien alphabet utilisé par les peuples germaniques et nordiques, mais elles sont aussi de puissants symboles magiques. Chaque rune contient une sagesse particulière et peut être utilisée comme outil de divination, de protection ou de manifestation. Explorez le monde mystérieux des runes et découvrez les messages qu'elles ont pour vous.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <div className="mystical-card">
          <h3 className="font-cinzel text-xl text-white mb-4">Le Futhark Ancien</h3>
          
          <p className="text-gray-300 mb-6">
            Le Futhark ancien est le plus ancien alphabet runique connu, composé de 24 runes. Il était utilisé entre le 2e et le 8e siècle.
          </p>
          
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-4">
            {[
              { rune: "ᚠ", nom: "Fehu", signification: "Richesse" },
              { rune: "ᚢ", nom: "Uruz", signification: "Force" },
              { rune: "ᚦ", nom: "Thurisaz", signification: "Géant" },
              { rune: "ᚨ", nom: "Ansuz", signification: "Dieu" },
              { rune: "ᚱ", nom: "Raidho", signification: "Voyage" },
              { rune: "ᚲ", nom: "Kenaz", signification: "Torche" },
              { rune: "ᚷ", nom: "Gebo", signification: "Don" },
              { rune: "ᚹ", nom: "Wunjo", signification: "Joie" },
              { rune: "ᚺ", nom: "Hagalaz", signification: "Grêle" },
              { rune: "ᚾ", nom: "Nauthiz", signification: "Besoin" },
              { rune: "ᛁ", nom: "Isa", signification: "Glace" },
              { rune: "ᛃ", nom: "Jera", signification: "Année" }
            ].map((rune, index) => (
              <div key={index} className="text-center p-3 border border-purple-700/30 rounded-md">
                <div className="text-2xl font-bold text-yellow-300 mb-1">{rune.rune}</div>
                <div className="text-sm font-cinzel text-white">{rune.nom}</div>
                <div className="text-xs text-gray-400">{rune.signification}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mystical-card">
          <h3 className="font-cinzel text-xl text-white mb-4">Méthodes de Tirage</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-cinzel text-lg text-purple-300 mb-2">Tirage à Une Rune</h4>
              <p className="text-gray-300">
                Le plus simple des tirages. Tirez une seule rune pour obtenir des conseils sur une question précise ou pour connaître l'énergie du jour.
              </p>
            </div>
            
            <div>
              <h4 className="font-cinzel text-lg text-purple-300 mb-2">Tirage en Croix</h4>
              <p className="text-gray-300">
                Un tirage à cinq runes : une au centre représentant la situation, et quatre autour représentant les influences passées, présentes, futures, et les obstacles.
              </p>
            </div>
            
            <div>
              <h4 className="font-cinzel text-lg text-purple-300 mb-2">Tirage des Trois Nornes</h4>
              <p className="text-gray-300">
                Basé sur les trois Nornes de la mythologie nordique (Urd, Verdandi et Skuld), ce tirage à trois runes représente le passé, le présent et le futur.
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-purple-700/30">
              <p className="text-gray-300 text-sm italic">
                <span className="text-yellow-300">Note :</span> L'interprétation des runes dépend non seulement de leur signification traditionnelle, mais aussi de leur position (droite ou inversée) et de leur relation avec les autres runes du tirage.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mystical-card p-8">
        <h2 className="font-cinzel text-2xl text-white mb-6 text-center">Créer Votre Set de Runes</h2>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-4">
            Créer votre propre set de runes peut être une expérience profondément spirituelle. Voici un guide simple pour créer vos runes :
          </p>
          
          <ol className="text-gray-300 space-y-4 ml-6 list-decimal">
            <li>
              <strong className="font-cinzel text-white">Choisir le Matériau</strong> - Traditionnellement, les runes étaient gravées sur du bois, de la pierre ou de l'os. Choisissez un matériau qui vous parle.
            </li>
            
            <li>
              <strong className="font-cinzel text-white">Préparer les Pièces</strong> - Découpez ou collectez 24 pièces de taille égale pour le Futhark ancien.
            </li>
            
            <li>
              <strong className="font-cinzel text-white">Graver les Symboles</strong> - Pendant une phase de lune croissante, gravez chaque symbole runique avec intention et conscience.
            </li>
            
            <li>
              <strong className="font-cinzel text-white">Activation</strong> - Consacrez vos runes à travers un rituel personnel, en les exposant aux quatre éléments.
            </li>
            
            <li>
              <strong className="font-cinzel text-white">Conservation</strong> - Gardez vos runes dans un sac en tissu naturel, idéalement fabriqué à la main.
            </li>
          </ol>
          
          <p className="text-gray-300 mt-6">
            Rappelez-vous que vos runes sont des objets sacrés. Traitez-les avec respect et ne laissez pas d'autres personnes les manipuler sans votre permission.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Runes;