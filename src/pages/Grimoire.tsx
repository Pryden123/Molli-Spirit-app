import React from 'react';
import { BookOpen, BookText, Star } from 'lucide-react';

const Grimoire: React.FC = () => {
  const grimoireEntries = [
    {
      id: 1,
      title: "Les Arcanes Majeurs",
      description: "Les 22 arcanes majeurs et leur signification ésotérique profonde.",
      icon: <Star className="h-6 w-6 text-yellow-400" />,
    },
    {
      id: 2,
      title: "Herbologie Mystique",
      description: "Les propriétés magiques des plantes et leur utilisation dans les rituels.",
      icon: <Star className="h-6 w-6 text-green-400" />,
    },
    {
      id: 3,
      title: "Numérologie Sacrée",
      description: "Les secrets des nombres et leur influence sur notre destin.",
      icon: <Star className="h-6 w-6 text-blue-400" />,
    },
    {
      id: 4,
      title: "Astrologie Ésotérique",
      description: "Au-delà des signes du zodiaque, les influences planétaires profondes.",
      icon: <Star className="h-6 w-6 text-purple-400" />,
    }
  ];

  return (
    <div className="animate-fade-in">
      <div className="flex items-center mb-8">
        <BookOpen className="h-8 w-8 text-purple-400 mr-3" />
        <h1 className="section-title mb-0">Grimoire Numérique</h1>
      </div>
      
      <div className="mystical-card mb-8">
        <h2 className="font-cinzel text-xl text-white mb-4">Le Savoir Ancien à Portée de Main</h2>
        <p className="text-gray-300">
          Notre grimoire numérique rassemble des siècles de sagesse ésotérique, de connaissances occultes et de pratiques magiques. Chaque page révèle des secrets jadis réservés aux initiés. Explorez notre collection et enrichissez votre pratique spirituelle.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {grimoireEntries.map(entry => (
          <div key={entry.id} className="mystical-card transform transition-all hover:translate-y-[-5px]">
            <div className="flex items-start">
              <div className="mr-4">
                {entry.icon}
              </div>
              <div>
                <h3 className="font-cinzel text-lg text-white mb-2">{entry.title}</h3>
                <p className="text-gray-300">{entry.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mystical-card p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full"></div>
        
        <h2 className="font-cinzel text-2xl text-white mb-6 text-center">Extrait du Grimoire: Le Pouvoir des Phases Lunaires</h2>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-200 mb-4">
            La lune, astre de la nuit, exerce une influence subtile mais puissante sur notre monde. Ses phases rythmiques gouvernent les marées, affectent les cycles de croissance et influencent nos énergies intérieures.
          </p>
          
          <h3 className="font-cinzel text-lg text-purple-300 mt-6 mb-3">Nouvelle Lune</h3>
          <p className="text-gray-300 mb-4">
            Phase d'obscurité, propice aux nouveaux départs et à la plantation des graines d'intention. C'est le moment idéal pour commencer de nouveaux projets, définir de nouveaux objectifs ou initier des changements dans votre vie.
          </p>
          
          <h3 className="font-cinzel text-lg text-purple-300 mt-6 mb-3">Premier Quartier</h3>
          <p className="text-gray-300 mb-4">
            Phase de croissance et d'action. Les énergies sont en expansion, soutenant vos efforts pour surmonter les obstacles et prendre des décisions importantes.
          </p>
          
          <h3 className="font-cinzel text-lg text-purple-300 mt-6 mb-3">Pleine Lune</h3>
          <p className="text-gray-300 mb-4">
            Phase de culmination et d'illumination. La pleine lune amplifie les énergies et révèle ce qui était caché. C'est un moment propice pour les rituels de manifestation, de guérison et de divination.
          </p>
          
          <h3 className="font-cinzel text-lg text-purple-300 mt-6 mb-3">Dernier Quartier</h3>
          <p className="text-gray-300">
            Phase de libération et de lâcher-prise. L'énergie décroissante de la lune soutient le détachement, la purification et la libération des schémas négatifs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Grimoire;