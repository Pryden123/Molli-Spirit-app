import React from 'react';
import { Flame } from 'lucide-react';

const Rituels: React.FC = () => {
  const rituels = [
    {
      titre: "Purification par les Éléments",
      description: "Un rituel pour purifier votre espace et votre énergie en utilisant les quatre éléments.",
      niveau: "Débutant",
      elements: ["Eau", "Feu", "Air", "Terre"]
    },
    {
      titre: "Invocation de Protection",
      description: "Une cérémonie pour créer un bouclier énergétique autour de vous et de votre foyer.",
      niveau: "Intermédiaire",
      elements: ["Bougies", "Sel", "Encens", "Cristaux"]
    },
    {
      titre: "Rituel de Nouvelle Lune",
      description: "Une pratique pour planter les graines de vos intentions lors de la nouvelle lune.",
      niveau: "Tous niveaux",
      elements: ["Papier", "Stylo", "Bougie blanche", "Encens de sauge"]
    }
  ];

  return (
    <div className="animate-fade-in">
      <div className="flex items-center mb-8">
        <Flame className="h-8 w-8 text-orange-400 mr-3" />
        <h1 className="section-title mb-0">Rituels et Invocations</h1>
      </div>
      
      <div className="mystical-card mb-8">
        <h2 className="font-cinzel text-xl text-white mb-4">L'Art Sacré de la Transformation</h2>
        <p className="text-gray-300">
          Les rituels sont des actes intentionnels qui créent un pont entre le monde visible et invisible. Ils nous permettent de canaliser les énergies subtiles pour manifester des changements dans notre vie et notre environnement. Chaque geste, chaque mot, chaque symbole utilisé dans un rituel porte une intention spécifique qui vibre à travers le voile des dimensions.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {rituels.map((rituel, index) => (
          <div key={index} className="mystical-card h-full">
            <h3 className="font-cinzel text-lg text-white mb-2">{rituel.titre}</h3>
            <p className="text-gray-300 mb-4">{rituel.description}</p>
            <div className="mt-auto">
              <p className="text-sm text-purple-400 mb-2">Niveau: {rituel.niveau}</p>
              <div className="flex flex-wrap gap-2">
                {rituel.elements.map((element, i) => (
                  <span key={i} className="text-xs bg-purple-900/50 border border-purple-700/30 rounded-full px-3 py-1 text-purple-200">
                    {element}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mystical-card p-8 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-500/5 blur-3xl rounded-full"></div>
        
        <h2 className="font-cinzel text-2xl text-white mb-6 text-center">Préparer Votre Espace Rituel</h2>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-4">
            La préparation de votre espace est une étape cruciale avant tout rituel. Voici quelques conseils pour créer un environnement propice à vos pratiques mystiques :
          </p>
          
          <ol className="text-gray-300 space-y-4 ml-6 list-decimal">
            <li>
              <strong className="font-cinzel text-white">Purification</strong> - Commencez par nettoyer votre espace physiquement puis énergétiquement, à l'aide de fumigations (sauge, palo santo), de sons (clochettes, bols tibétains) ou de visualisations.
            </li>
            
            <li>
              <strong className="font-cinzel text-white">Cercle de Protection</strong> - Créez une frontière énergétique autour de votre espace pour le protéger des influences extérieures. Vous pouvez utiliser du sel, des cristaux ou simplement votre intention.
            </li>
            
            <li>
              <strong className="font-cinzel text-white">Autel</strong> - Disposez vos outils rituels sur une surface dédiée : bougies, encens, symboles sacrés, offrandes, etc. L'organisation de votre autel peut varier selon l'intention de votre rituel.
            </li>
            
            <li>
              <strong className="font-cinzel text-white">Ambiance</strong> - Créez une atmosphère qui soutient votre travail rituel : tamisez les lumières, allumez des bougies, diffusez des huiles essentielles ou jouez une musique appropriée.
            </li>
          </ol>
          
          <p className="text-gray-300 mt-6">
            Rappelez-vous que l'élément le plus important dans tout rituel est votre intention. La clarté et la force de votre intention déterminent en grande partie l'efficacité de votre pratique.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rituels;